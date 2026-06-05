import { useEffect, useRef, useState } from "react"

export default function DesignerCursor({ modalOpen = false }: { modalOpen?: boolean }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [box, setBox] = useState<{ top: number; left: number; width: number; height: number; label: string } | null>(null)
  const rafRef = useRef<number | null>(null)
  const R = 10, ARM = 7, DOT = 2
  const C = "#C6B3E3"

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (modalOpen) { setVisible(false); return }
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY })
        rafRef.current = null
      })
      setVisible(true)

      const el = (e.target as HTMLElement).closest('h1,a,button') as HTMLElement | null
      if (el && el.offsetWidth < window.innerWidth * 0.95) {
        const r = el.getBoundingClientRect()
        setBox({ top: r.top, left: r.left, width: r.width, height: r.height, label: el.tagName.toLowerCase() })
      } else {
        setBox(null)
      }
    }
    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", () => setVisible(false))
    document.addEventListener("mouseenter", () => { if (!modalOpen) setVisible(true) })
    return () => document.removeEventListener("mousemove", onMove)
  }, [modalOpen])

  return (
    <>
      <style>{`* { cursor: ${modalOpen ? 'auto' : 'none'} !important; }`}</style>
      {visible && !modalOpen && (
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 99999 }}>
          {box && (
            <div style={{ position: 'fixed', top: box.top, left: box.left, width: box.width, height: box.height, border: `1px dashed ${C}`, boxSizing: 'border-box', pointerEvents: 'none' }}>
              {[{ top: -3, left: -3 }, { top: -3, right: -3 }, { bottom: -3, left: -3 }, { bottom: -3, right: -3 }].map((s, i) => (
                <div key={i} style={{ position: 'absolute', width: 5, height: 5, border: `1.5px solid ${C}`, background: '#f5f5f5', boxSizing: 'border-box', ...s as any }} />
              ))}
              <div style={{ position: 'absolute', top: -18, left: 0, background: C, color: '#fff', fontSize: 9, fontFamily: 'monospace', padding: '1px 5px' }}>{box.label}</div>
            </div>
          )}
          <svg style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh" }}>
            <line x1={pos.x} y1={pos.y - R - ARM} x2={pos.x} y2={pos.y} stroke={C} strokeWidth={1.1} strokeLinecap="square" />
            <line x1={pos.x} y1={pos.y} x2={pos.x} y2={pos.y + R + ARM} stroke={C} strokeWidth={1.1} strokeLinecap="square" />
            <line x1={pos.x - R - ARM} y1={pos.y} x2={pos.x} y2={pos.y} stroke={C} strokeWidth={1.1} strokeLinecap="square" />
            <line x1={pos.x} y1={pos.y} x2={pos.x + R + ARM} y2={pos.y} stroke={C} strokeWidth={1.1} strokeLinecap="square" />
            <circle cx={pos.x} cy={pos.y} r={R} fill="none" stroke={C} strokeWidth={1.1} />
            <circle cx={pos.x} cy={pos.y} r={DOT} fill={C} />
          </svg>
          <div style={{ position: "fixed", left: pos.x + R + ARM + 6, top: pos.y - 11, fontFamily: "monospace", fontSize: 11, lineHeight: 1.8, color: C, userSelect: "none", whiteSpace: "nowrap" }}>
            <div>X: {Math.round(pos.x)}</div>
            <div>Y: {Math.round(pos.y)}</div>
          </div>
        </div>
      )}
    </>
  )
}