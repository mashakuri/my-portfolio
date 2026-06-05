import { useState, useEffect, useRef } from 'react'
import DesignerCursor from './DesignerCursor'
import DesignCanvas from './DesignCanvas'

const skills = [
  'Figma', 'Framer', 'Adobe Creative Suite', 'UX Research', 'Usability Testing',
  'Prototyping', 'Design Systems', 'HTML/CSS', 'JavaScript', 'React', 'R', 'Java',
  'Supabase', 'Vercel', 'Claude', 'Cursor', 'Figma Make'
]

const projects = [
  {
    id: 1,
    title: 'SolSpace',
    logo: '/SUNGOD.png',
    tag: 'UI/UX Design · Developer · Apr 2026',
    org: 'UCSD ACM Spring Projects',
    caseStudy: {
      tagline: 'No More FOMO',
      question: 'How do we help students feel genuine connection and satisfaction as a part of their college experience?',
      inspiration: 'Keeping track of clubs currently happens mainly on Instagram — but by the time you see a post, the event might have already passed. Or you discover a club that really interests you weeks, even months, too late.',
      solution: 'SolSpace is a student\'s go-to app for finding events, exploring their community, and building lasting connections on campus.',
      features: [
        { name: 'Bulletin Board', desc: 'Browse and search events with filters — applying for board? Looking for a party? Narrow it down.' },
        { name: 'Live Map', desc: 'See events happening around campus in real time, and view friends\' anonymous avatar locations.' },
        { name: 'Connections', desc: 'Text friends about events, add them to your calendar, and see who else is going.' },
        { name: 'Personalization', desc: 'Log your interests, follow hashtags. We\'ll notify you when the right events come up.' },
      ],
      stats: [
        'Students who participated in clubs were significantly more likely to report a higher sense of belonging (UCOP)',
        'First Generation, Low Income and Transfer Students had the highest percentages of non-participation (UCOP)',
        'Students who participate in organizations are significantly more likely to graduate on time (UCOP)',
      ],
      tools: 'Figma · Claude · React · Deployed on Vercel',
      future: 'With a tight showcase deadline, we scoped down intentionally. Next steps include fleshing out the prototype, improving functionality, and building separate organizer and student login flows.',
      caseStudyLink: 'https://www.figma.com/deck/7Hc5jRvuYaZmKZHnbmLko8',
      prototypeLink: 'https://lofis-app.vercel.app',
      devpostLink: '',
      role: 'UI/UX Designer & Developer',
      carouselBg: '#111',
      wideImages: false,
      images: ['/BULLETIN.png', '/ACM.png', '/CALENDAR.png', '/MAP.png', '/PROFILE.png'],
    }
  },
  {
    id: 2,
    title: 'Mylo',
    logo: '/MYLO3.png',
    tag: 'UX/UI Design · Product Manager · Mar 2026',
    org: 'Figbuild 2026',
    caseStudy: {
      tagline: 'Your Neuroplasticity Visualized',
      question: 'How might we give people a window into their brain\'s changing structure — so they can finally see, feel, and act on the neural progress that\'s been invisible to them their entire lives?',
      inspiration: 'Proprioception tells you where your body is in space. But no sense has ever existed for perceiving your own brain changing. 72% of people building new habits find it hard to stay motivated. 46% report a lack of accountability. 48% don\'t even know if what they\'re doing is working. Mylo was built to close that gap.',
      solution: 'Every person has a unique "neural fingerprint" — a pattern based on their brain structure that\'s constantly evolving. Mylo links to that fingerprint on login, asks about daily habits like sleep, stress, and physical activity, and lets users set a goal: learning a skill, improving performance, building a routine. As users show up, Mylo visualizes their neural pathways as seeds growing into full-bloomed flowers — neuroplasticity you can finally see.',
      features: [
        { name: 'Neural Fingerprint', desc: 'A unique, evolving visualization of your brain\'s structure linked to your daily habits and behaviors.' },
        { name: 'Goal Setting', desc: 'Choose a focus — learning a skill, physical performance, mental health — and Mylo tracks your progress toward it.' },
        { name: 'Daily Check-ins', desc: 'Log sleep, activity, and stress. Each entry strengthens your neural connections inside the app.' },
        { name: 'Growth Visualization', desc: 'Watch your neuro-pathways bloom from seeds into flowers as your habits take root over time.' },
      ],
      stats: [
        '72% of people building new habits find it hard to stay motivated',
        '46% report a lack of accountability when working toward behavioral change',
        '48% don\'t know if their efforts are actually working',
      ],
      tools: 'Figma · Figma Make',
      future: 'As brain-scanning technology becomes more accessible, Mylo is positioned to connect to real neural data — making the speculative tool of today a practical one tomorrow.',
      caseStudyLink: 'https://www.figma.com/deck/CvEgCiajlWmSiguDme8MfC/Mylo--Figbuild-2026?node-id=2-42&t=4xLAZpMcqDndPp73-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      prototypeLink: 'https://role-egg-62973314.figma.site',
      devpostLink: 'https://devpost.com/software/mylo?ref_content=my-projects-tab&ref_feature=my_projects',
      role: 'UX/UI Designer & Product Manager · Bridged design team (Bonnie Davis, Isabelle Wu) and development (Alex Bonev)',
      carouselBg: '#243224',
      wideImages: false,
      images: ['/MYLO.png', '/GROWTH.png', '/MYLOMETER.png', '/PROGRESS.png', '/BRAIN.png', '/LOG.png'],
    }
  },
  {
    id: 3,
    title: 'Dear, There.',
    logo: '/OTA.png',
    tag: 'Design, Dev & Research · Jan – May 2026',
    org: 'Out the Archive',
    caseStudy: {
      tagline: 'Pin the moment. Explore what others left behind.',
      question: 'What if a single spot held hundreds of stories from strangers — all connected by the same physical space?',
      inspiration: 'When I first heard the theme "Memories of Us," two things came to mind: how I keep memories, and how I share them. For me it\'s always been physical — photobooths, business cards from cafes, every handwritten card from friends and family. That love of tangible memory-keeping got me thinking about letters and postcards, connecting over a shared moment. Then I shifted from people to places. So many of my memories aren\'t just about who I was with — they\'re tied to a specific space. The feeling of walking back into somewhere and having it all rush back.',
      solution: 'Dear, There. is a shared, anonymous space for leaving and discovering memories tied to real locations. No usernames, no likes — just honest little snapshots of moments that happened here. Make a postcard or a letter, add photos, stickers, and doodles, then pin it to the map for anyone passing through to find.',
      features: [
        { name: 'Postcard & Letter Maker', desc: 'Write a letter or design a postcard — add photos, stickers, and doodles to capture the moment exactly how you remember it.' },
        { name: 'Pin to the Map', desc: 'Attach your memory to a real location. Anyone who visits that spot can find what you left behind.' },
        { name: 'Anonymous by Design', desc: 'No accounts, no usernames, no likes. Just honest memories from strangers connected by place.' },
        { name: 'Discover Memories', desc: 'Explore what others have pinned nearby — a shared archive of moments from the same spaces.' },
      ],
      stats: [],
      tools: 'Figma · Claude · Supabase · Vercel',
      future: 'Constrained by the showcase timeline, the next steps are making sure everything currently built works reliably, adding a send/export feature so you can share your letter, fixing letter animations, and adding custom stamps.',
      caseStudyLink: 'https://www.figma.com/deck/AH2lBFM7qIeo3pIKBVyKFw',
      prototypeLink: 'https://dear-there.vercel.app/',
      devpostLink: '',
      role: 'Solo — Design, Research & Development',
      carouselBg: '#f0eeea',
      wideImages: true,
      images: ['/ONE.png', '/TWO.png', '/THREE.png', '/FOUR.png', '/FIVE.png'],
    }
  },
  {
    id: 4,
    title: 'Habitat for Humanity Redesign',
    logo: '/DFA.png',
    tag: 'UX Researcher · Sep 2025 – Jan 2026',
    org: 'UCSD Design for America',
    caseStudy: {
      tagline: 'Making affordable housing accessible',
      question: 'How might we streamline the experience of finding and accessing volunteer opportunities on Habitat for Humanity\'s website?',
      inspiration: 'Habitat for Humanity\'s website had no clear visual hierarchy — it was hard to navigate, the mission was unclear, and getting involved required too many steps. As UX researcher on the team, I led the research process to understand where users were getting lost and what they actually needed.',
      solution: 'A full redesign of the website with simplified navigation, condensed information architecture, and an integrated local map to help users find volunteer opportunities near them. We also added user testimonials and improved language accessibility throughout.',
      features: [
        { name: 'Simplified Navigation', desc: 'Dropdown menus and condensed information reduce clutter and cognitive load, making key actions easier to find.' },
        { name: 'Local Volunteer Map', desc: 'An integrated map lets users find volunteer opportunities in their area without digging through menus.' },
        { name: 'Visual Hierarchy', desc: 'Dark blue and black accents create contrast; blue and green tones evoke growth and community — aligned with HFH\'s mission.' },
        { name: 'Clearer Mission', desc: 'Restructured content and stronger copywriting make it immediately clear who HFH is and how to get involved.' },
      ],
      stats: [
        'Navigation too complex — users couldn\'t find volunteer or donation paths quickly',
        'Mission unclear — first-time visitors didn\'t understand what HFH does or who it\'s for',
        'No user testimonials or transparency about the organization\'s reach and impact',
      ],
      tools: 'Figma · UX Research · Surveys & Interviews',
      future: 'Opportunity to grow the local map feature, improve language accessibility further, and build out a more robust volunteer onboarding flow.',
      caseStudyLink: 'https://docs.google.com/presentation/d/1mgyq6FMy71UXnzh09HD3A4ds616NNhzQT-qGu3y3ZsU/present',
      prototypeLink: 'https://www.figma.com/proto/SpNvakTWUibfkUTSG9iFIX/HFH-Design?node-id=179-126&t=Hu8wPXur4eKPhQ4F-1&starting-point-node-id=179%3A126',
      devpostLink: '',
      role: 'UX Researcher · Led and designed research methods (surveys & semi-structured interviews), synthesized data into insights that informed user personas and design decisions. Team: Sally, Audrey, Jasmine, Yuki, Hiba.',
      carouselBg: '#f5f5f5',
      wideImages: true,
      images: ['/HOME.png', '/HOME2.png', '/SIGN.png', '/RESULTS.png'],
    }
  },
]

const FULL_NAME = 'Masha Kuritsyn'
const ACCENT = '#C6B3E3'

function TypingName() {
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [showBox, setShowBox] = useState(true)

  useEffect(() => {
    if (!typing) return
    if (displayed.length === FULL_NAME.length) {
      setTimeout(() => { setTyping(false); setShowBox(false) }, 600)
      return
    }
    const t = setTimeout(() => setDisplayed(FULL_NAME.slice(0, displayed.length + 1)), 80)
    return () => clearTimeout(t)
  }, [displayed, typing])

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {(showBox || hovered) && (
        <div style={{ position: 'absolute', inset: '-8px -12px', border: `1px dashed ${ACCENT}`, pointerEvents: 'none' }}>
          {[{ top: -3, left: -3 }, { top: -3, right: -3 }, { bottom: -3, left: -3 }, { bottom: -3, right: -3 }].map((s, i) => (
            <div key={i} style={{ position: 'absolute', width: 5, height: 5, border: `1.5px solid ${ACCENT}`, background: '#f5f5f5', boxSizing: 'border-box', ...s as any }} />
          ))}
        </div>
      )}
      <h1 style={{ fontSize: 62, fontWeight: 400, margin: 0, fontFamily: 'Inria Serif, serif', lineHeight: 1.05, whiteSpace: 'nowrap' }}>
        {displayed}
        {typing && <span style={{ display: 'inline-block', width: 3, height: '0.85em', background: ACCENT, marginLeft: 3, verticalAlign: 'middle', animation: 'blink 0.7s infinite' }} />}
      </h1>
    </div>
  )
}

function ImageCarousel({ images, bg = '#111', wide = false }: { images: string[], bg?: string, wide?: boolean }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const t = setInterval(() => setCurrent(i => (i + 1) % images.length), 3700)
    return () => clearInterval(t)
  }, [images.length])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: wide ? 500 : 'unset', background: bg, borderRadius: wide ? 8 : '16px 0 0 16px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {images.map((src, i) => (
        <img key={src} src={src} alt=""
          style={{ position: 'absolute', maxWidth: wide ? '100%' : 'none', maxHeight: wide ? '100%' : 'none', width: wide ? '100%' : 'auto', height: wide ? 'auto' : '90%', objectFit: 'contain', borderRadius: wide ? 4 : 24, opacity: i === current ? 1 : 0, transition: 'opacity 0.6s ease' }}
        />
      ))}
      {images.length > 1 && (
        <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 2 }}>
          {images.map((_, i) => (
            <div key={i} onClick={() => setCurrent(i)}
              style={{ width: 6, height: 6, borderRadius: '50%', background: i === current ? ACCENT : wide ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.3)', cursor: 'pointer', transition: 'background 0.3s' }} />
          ))}
        </div>
      )}
    </div>
  )
}

function App() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null)
  const [showArrow, setShowArrow] = useState(true)
  const [activeSection, setActiveSection] = useState('projects')
  const rightCol = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rightCol.current
    if (!el) return
    const onScroll = () => { if (el.scrollTop > 40) setShowArrow(false) }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }) },
      { root: rightCol.current, threshold: 0.5 }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const sectionStyle: React.CSSProperties = {
    height: '100vh', scrollSnapAlign: 'start', display: 'flex',
    flexDirection: 'column', justifyContent: 'flex-start',
    padding: '18vh 80px 0 80px',
  }

  const navItems = [
    { label: 'Projects', id: 'projects' },
    { label: 'Me!', id: 'me' },
  ]

  const linkStyle = (accent = false): React.CSSProperties => ({
    fontSize: 11, fontFamily: 'monospace', textDecoration: 'none',
    border: `1px solid ${accent ? ACCENT : '#ddd'}`,
    color: accent ? ACCENT : '#999',
    padding: '6px 14px', borderRadius: 4, transition: 'all 0.2s',
  })

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f5f5f5', overflow: 'hidden' }}>
      <DesignCanvas />
      <DesignerCursor modalOpen={!!activeProject} />

      <style>{`
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
      `}</style>

      {/* LEFT */}
      <div style={{ width: '50vw', flexShrink: 0, height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '30vh 72px 0 122px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TypingName />
          <p style={{ fontSize: 19, color: '#444', margin: '18px 0 6px', fontFamily: 'Inria Serif, serif' }}>Cognitive Science · ML · Design</p>
          <p style={{ fontSize: 19, color: '#666', margin: 0, fontFamily: 'Inria Serif, serif' }}>UC San Diego</p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 48 }}>
            {navItems.map(({ label, id }) => {
              const isActive = activeSection === id
              return (
                <a key={id} href={`#${id}`}
                  style={{ fontSize: 14, color: ACCENT, textDecoration: 'none', fontFamily: 'monospace', transition: 'all 0.2s', letterSpacing: '0.05em', borderBottom: isActive ? `1px solid ${ACCENT}` : '1px solid transparent', paddingBottom: 2, width: 'fit-content', opacity: isActive ? 1 : 0.55 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = isActive ? '1' : '0.55')}
                >{label}</a>
              )
            })}
          </nav>
        </div>
        <div style={{ position: 'absolute', bottom: 64, left: 122, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { href: 'https://www.linkedin.com/in/masha-kuritsyn/', label: 'linkedin.com/in/masha-kuritsyn', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
            { href: 'mailto:mkuritsyn@ucsd.edu', label: 'mkuritsyn@ucsd.edu', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> },
            { href: '/resume.pdf', label: 'resume', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg> },
          ].map(({ href, label, icon }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#999', textDecoration: 'none', transition: 'color 0.2s', fontSize: 13, fontFamily: 'monospace' }}
              onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
              onMouseLeave={e => (e.currentTarget.style.color = '#999')}
            >{icon}{label}</a>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div ref={rightCol} style={{ width: '50vw', height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory', position: 'relative' }}>
        <div style={{ position: 'fixed', bottom: 28, right: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: showArrow ? 1 : 0, transition: 'opacity 0.5s', pointerEvents: 'none', zIndex: 100 }}>
          <span style={{ fontSize: 12, fontFamily: 'monospace', color: ACCENT, letterSpacing: '0.1em' }}>scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'bounce 1.4s infinite' }}>
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>

        <section id="projects" style={sectionStyle}>
          <p style={{ fontSize: 10, letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: 28, marginTop: 0 }}>Projects</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 680 }}>
            {projects.map(p => (
              <div key={p.id} onClick={() => setActiveProject(p)}
                style={{ border: '1px dashed #ddd', padding: '20px 24px', transition: 'border-color 0.2s', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = ACCENT)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#ddd')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {p.logo && <img src={p.logo} alt="" style={{ width: 28, height: 28, objectFit: 'contain', borderRadius: 4 }} />}
                    <p style={{ fontSize: 19, fontWeight: 400, margin: 0, fontFamily: 'Inria Serif, serif' }}>{p.title}</p>
                  </div>
                  <span style={{ fontSize: 11, color: ACCENT, fontFamily: 'monospace' }}>{p.tag}</span>
                </div>
                <p style={{ fontSize: 12, color: '#aaa', margin: '4px 0 0', fontFamily: 'monospace' }}>{p.org}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxWidth: 680, marginTop: 32 }}>
            {skills.map(s => (
              <span key={s} style={{ fontSize: 11, fontFamily: 'monospace', color: '#999', border: '1px dashed #ddd', padding: '5px 12px', letterSpacing: '0.03em' }}>{s}</span>
            ))}
          </div>
        </section>

        <section id="me" style={sectionStyle}>
          <p style={{ fontSize: 10, letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: 28, marginTop: 0 }}>Me!</p>
          <p style={{ fontSize: 22, color: '#444', fontFamily: 'Inria Serif, serif', margin: '0 0 32px', lineHeight: 1.9, maxWidth: 680 }}>
            First year at UC San Diego studying Cognitive Science with a concentration in Machine Learning — interested in product design and product management.
          </p>
          <p style={{ fontSize: 10, letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: 20, marginTop: 0 }}>Other Interests</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 680 }}>
            {[
              {
                title: 'Art & Tattoo Design',
                link: 'https://www.instagram.com/aiyuuje/',
                posts: [
                  { img: '/MAKE.png', url: 'https://www.instagram.com/p/DTwlW0mkTT7/?img_index=1' },
                  { img: '/BOOK.png', url: 'https://www.instagram.com/p/CVjlEnTFjXo/?img_index=1' },
                  { img: '/NAPKIN.png', url: 'https://www.instagram.com/p/DOfqUrHDm-_/?img_index=1' },
                ]
              },
              {
                title: 'Cafe Hopping',
                link: 'https://www.instagram.com/monchiibites/',
                posts: [
                  { img: '/KISSA.png', url: 'https://www.instagram.com/p/DZIvNH0kta6/?img_index=1' },
                  { img: '/TORI.png', url: 'https://www.instagram.com/p/DZDk79aEqAp/?img_index=1' },
                  { img: '/WHILE.png', url: 'https://www.instagram.com/p/DY73_thEhjP/?img_index=1' },
                ]
              },
            ].map(({ title, link, posts }) => (
              <div key={title} style={{ borderLeft: `2px solid ${ACCENT}`, paddingLeft: 16 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10 }}>
                  <p style={{ fontSize: 15, fontWeight: 400, margin: 0, fontFamily: 'Inria Serif, serif' }}>{title}</p>
                  <a href={link} target="_blank" style={{ fontSize: 10, fontFamily: 'monospace', color: ACCENT, textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
                  >↗ instagram</a>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {posts.map(({ img, url }) => (
                    <a key={img} href={url} target="_blank" style={{ display: 'block', width: 90, height: 90, flexShrink: 0, borderRadius: 6, overflow: 'hidden', textDecoration: 'none' }}>
                      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collage section */}
        <section id="collage" style={{ ...sectionStyle, justifyContent: 'flex-start', padding: '6vh 80px 0 80px' }}>
          <img src="/ME.png" alt="collage"
            style={{ maxWidth: '100%', maxHeight: '88vh', objectFit: 'contain', borderRadius: 8 }}
          />
        </section>
      </div>

      {/* Modal */}
      {activeProject && (
        <div onClick={() => setActiveProject(null)} data-modal=""
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 9998, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div onClick={e => e.stopPropagation()} data-modal=""
            style={{ background: '#fff', borderRadius: 16, width: '80vw', height: '88vh', display: 'flex', flexDirection: 'row', overflow: 'hidden', boxShadow: '0 8px 48px rgba(0,0,0,0.15)', position: 'relative' }}>

            <button onClick={() => setActiveProject(null)}
              style={{ position: 'absolute', top: 20, right: 24, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#bbb', lineHeight: 1, zIndex: 10 }}>×</button>

            {/* LEFT — image carousel */}
            {activeProject.caseStudy.images.length > 0 && !activeProject.caseStudy.wideImages ? (
              <div style={{ width: '40%', flexShrink: 0 }}>
                <ImageCarousel images={activeProject.caseStudy.images} bg={activeProject.caseStudy.carouselBg} wide={false} />
              </div>
            ) : (!activeProject.caseStudy.wideImages && (
              <div style={{ width: '40%', flexShrink: 0, background: '#111', borderRadius: '16px 0 0 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', fontSize: 11 }}>images coming soon</p>
              </div>
            ))}

            {/* RIGHT — info */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '44px 48px' }}>
              <p style={{ fontSize: 9, letterSpacing: '0.15em', color: ACCENT, textTransform: 'uppercase', fontFamily: 'monospace', margin: '0 0 10px' }}>{activeProject.org}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 16 }}>
                <h2 style={{ fontSize: 38, fontWeight: 400, fontFamily: 'Inria Serif, serif', margin: 0, lineHeight: 1.1 }}>{activeProject.title}</h2>
                {activeProject.caseStudy.tagline && (
                  <>
                    <span style={{ color: '#ddd', fontSize: 24 }}>·</span>
                    <span style={{ fontSize: 19, fontFamily: 'Inria Serif, serif', color: ACCENT, fontStyle: 'italic' }}>{activeProject.caseStudy.tagline}</span>
                  </>
                )}
              </div>

              {activeProject.caseStudy.tagline && (
                <div style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
                  {activeProject.caseStudy.caseStudyLink && (
                    <a href={activeProject.caseStudy.caseStudyLink} target="_blank" style={linkStyle(true)}
                      onMouseEnter={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.color = '#fff' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = ACCENT }}
                    >Full Case Study →</a>
                  )}
                  {activeProject.caseStudy.prototypeLink && (
                    <a href={activeProject.caseStudy.prototypeLink} target="_blank" style={linkStyle()}
                      onMouseEnter={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = ACCENT }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#999'; e.currentTarget.style.borderColor = '#ddd' }}
                    >Try Prototype →</a>
                  )}
                  {activeProject.caseStudy.devpostLink && (
                    <a href={activeProject.caseStudy.devpostLink} target="_blank" style={linkStyle()}
                      onMouseEnter={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = ACCENT }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#999'; e.currentTarget.style.borderColor = '#ddd' }}
                    >Devpost →</a>
                  )}
                </div>
              )}

              {activeProject.caseStudy.tagline ? (
                <>
                  <p style={{ fontSize: 9, letterSpacing: '0.12em', color: '#bbb', textTransform: 'uppercase', fontFamily: 'monospace', margin: '0 0 8px' }}>The Question</p>
                  <p style={{ fontSize: 18, lineHeight: 1.8, color: '#444', fontFamily: 'Inria Serif, serif', margin: '0 0 28px' }}>{activeProject.caseStudy.question}</p>

                  <p style={{ fontSize: 9, letterSpacing: '0.12em', color: '#bbb', textTransform: 'uppercase', fontFamily: 'monospace', margin: '0 0 8px' }}>Inspiration</p>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: '#666', fontFamily: 'Inria Serif, serif', margin: '0 0 28px' }}>{activeProject.caseStudy.inspiration}</p>

                  {/* Wide images sit here, between inspiration and solution */}
                  {activeProject.caseStudy.wideImages && activeProject.caseStudy.images.length > 0 && (
                    <div style={{ margin: '0 0 28px', borderRadius: 8, overflow: 'hidden', height: 600, position: 'relative', background: '#f9f9f9' }}>
                      <ImageCarousel images={activeProject.caseStudy.images} bg='#f9f9f9' wide={true} />
                    </div>
                  )}

                  <p style={{ fontSize: 9, letterSpacing: '0.12em', color: '#bbb', textTransform: 'uppercase', fontFamily: 'monospace', margin: '0 0 8px' }}>{activeProject.caseStudy.wideImages ? 'What I Built' : 'Our Solution'}</p>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: '#666', fontFamily: 'Inria Serif, serif', margin: '0 0 28px' }}>{activeProject.caseStudy.solution}</p>

                  {activeProject.caseStudy.features.length > 0 && (
                    <>
                      <p style={{ fontSize: 9, letterSpacing: '0.12em', color: '#bbb', textTransform: 'uppercase', fontFamily: 'monospace', margin: '0 0 12px' }}>{activeProject.caseStudy.wideImages ? 'Features' : 'What We Built'}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 28 }}>
                        {activeProject.caseStudy.features.map(f => (
                          <div key={f.name} style={{ border: `1px dashed ${ACCENT}`, padding: '14px 16px', borderRadius: 4 }}>
                            <p style={{ fontSize: 14, fontWeight: 400, margin: '0 0 4px', fontFamily: 'Inria Serif, serif' }}>{f.name}</p>
                            <p style={{ fontSize: 12, color: '#aaa', margin: 0, fontFamily: 'monospace', lineHeight: 1.6 }}>{f.desc}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {activeProject.caseStudy.stats.length > 0 && (
                    <>
                      <p style={{ fontSize: 9, letterSpacing: '0.12em', color: '#bbb', textTransform: 'uppercase', fontFamily: 'monospace', margin: '0 0 12px' }}>Why It Matters</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
                        {activeProject.caseStudy.stats.map((s, i) => (
                          <div key={i} style={{ borderLeft: `2px solid ${ACCENT}`, paddingLeft: 12 }}>
                            <p style={{ fontSize: 12, color: '#777', fontFamily: 'monospace', margin: 0, lineHeight: 1.6 }}>{s}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, borderTop: '1px solid #f0f0f0', paddingTop: 24 }}>
                    <div>
                      <p style={{ fontSize: 9, letterSpacing: '0.12em', color: ACCENT, textTransform: 'uppercase', fontFamily: 'monospace', margin: '0 0 6px' }}>Role</p>
                      <p style={{ fontSize: 14, color: '#666', fontFamily: 'Inria Serif, serif', margin: 0, lineHeight: 1.6 }}>{activeProject.caseStudy.role}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 9, letterSpacing: '0.12em', color: ACCENT, textTransform: 'uppercase', fontFamily: 'monospace', margin: '0 0 6px' }}>Tools</p>
                      <p style={{ fontSize: 14, color: '#666', fontFamily: 'Inria Serif, serif', margin: 0 }}>{activeProject.caseStudy.tools}</p>
                    </div>
                    {activeProject.caseStudy.future && (
                      <div style={{ gridColumn: '1 / -1' }}>
                        <p style={{ fontSize: 9, letterSpacing: '0.12em', color: ACCENT, textTransform: 'uppercase', fontFamily: 'monospace', margin: '0 0 6px' }}>What's Next</p>
                        <p style={{ fontSize: 14, color: '#666', fontFamily: 'Inria Serif, serif', margin: 0, lineHeight: 1.7 }}>{activeProject.caseStudy.future}</p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <p style={{ fontSize: 16, color: '#bbb', fontFamily: 'Inria Serif, serif', margin: '16px 0 0', fontStyle: 'italic' }}>Case study coming soon.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App