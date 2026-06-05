import { useEffect, useRef } from "react"

export default function DesignCanvas() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const draw = () => {
      const svg = svgRef.current
      if (!svg) return
      svg.innerHTML = ""
      const W = window.innerWidth
      const H = window.innerHeight
      const scrollY = window.scrollY
      const RS = 16
      const tickColor = "#bbb"
      const labelColor = "#aaa"

      const ln = (x1: number, y1: number, x2: number, y2: number) => {
        const l = document.createElementNS("http://www.w3.org/2000/svg", "line")
        l.setAttribute("x1", String(x1)); l.setAttribute("y1", String(y1))
        l.setAttribute("x2", String(x2)); l.setAttribute("y2", String(y2))
        l.setAttribute("stroke", tickColor); l.setAttribute("stroke-width", "0.5")
        svg.appendChild(l)
      }
      const tx = (x: number, y: number, str: string, anchor = "start") => {
        const t = document.createElementNS("http://www.w3.org/2000/svg", "text")
        t.setAttribute("x", String(x)); t.setAttribute("y", String(y))
        t.setAttribute("font-size", "7"); t.setAttribute("fill", labelColor)
        t.setAttribute("font-family", "monospace")
        t.setAttribute("text-anchor", anchor)
        t.textContent = str
        svg.appendChild(t)
      }

      for (let px = 0; px <= W; px += 10) {
        const major = px % 100 === 0, mid = px % 50 === 0
        const h = major ? 8 : mid ? 5 : 3
        ln(px, RS - h, px, RS)
        if (major && px >= 100) tx(px + 2, RS - 9, String(px))
      }

      const startPy = Math.floor(scrollY / 10) * 10
      for (let py = startPy; py <= startPy + H + 10; py += 10) {
        const screenY = py - scrollY
        const major = py % 100 === 0, mid = py % 50 === 0
        const w = major ? 8 : mid ? 5 : 3
        ln(RS - w, screenY, RS, screenY)
        if (major && py >= 100) tx(RS - 2, screenY + 3, String(py), "end")
      }
    }

    draw()
    window.addEventListener("resize", draw)
    window.addEventListener("scroll", draw, { passive: true })
    return () => {
      window.removeEventListener("resize", draw)
      window.removeEventListener("scroll", draw)
    }
  }, [])

  const RS = 16
  const border = "0.5px solid #ccc"
  const bg = "#f5f5f5"

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1 }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: RS, background: bg, borderBottom: border, zIndex: 2 }} />
      <div style={{ position: "fixed", top: 0, left: 0, width: RS, bottom: 0, background: bg, borderRight: border, zIndex: 2 }} />
      <svg ref={svgRef} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 3, pointerEvents: "none" }} />
    </div>
  )
}