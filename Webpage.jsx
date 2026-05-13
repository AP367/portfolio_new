import { useState, useEffect, useRef } from "react";

const useScrollReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

const RevealDiv = ({ children, className = "", delay = 0, style = {} }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
};

const NAV_LINKS = ["About", "Skills", "Projects", "Academic", "Blog", "Gallery", "Contact"];

const SKILLS = [
  { name: "Arduino", icon: "⚡", desc: "Microcontroller programming & prototyping", interest: false },
  { name: "Circuit Design", icon: "🔌", desc: "Schematic capture & PCB layout", interest: false },
  { name: "MATLAB", icon: "📐", desc: "Simulation & numerical analysis", interest: false },
  { name: "Power Systems", icon: "⚙️", desc: "Grid analysis & power electronics", interest: false },
  { name: "Embedded Systems", icon: "💾", desc: "Firmware & real-time systems", interest: false },
  { name: "C / C++", icon: "{ }", desc: "Systems & low-level programming", interest: false },
  { name: "Web Development", icon: "🌐", desc: "React, HTML/CSS & modern stacks", interest: false },
  { name: "Problem Solving", icon: "🧩", desc: "Analytical & creative thinking", interest: false },
  { name: "Renewable Energy", icon: "☀️", desc: "Solar systems & sustainable tech", interest: true },
  { name: "Startups & Business", icon: "🚀", desc: "Tech entrepreneurship & product thinking", interest: true },
  { name: "Travel & Exploration", icon: "🗺️", desc: "Documenting journeys & cultures", interest: true },
  { name: "Photography", icon: "📷", desc: "Capturing moments & landscapes", interest: true },
];

const PROJECTS = [
  {
    title: "Fault Detector with Automatic Recovery System",
    tag: "Power Systems",
    color: "#00d4ff",
    icon: "⚡",
    intro: "An intelligent fault detection system designed to identify electrical faults in real-time and trigger automatic circuit recovery mechanisms. The system monitors voltage and current parameters continuously, classifies fault types using threshold logic, and activates relay-based isolation and recovery routines — minimizing equipment downtime and preventing cascade failures in distribution networks.",
    tech: ["Arduino", "Current Sensors", "Relay Modules", "C++"],
    pdfLabel: "View Project Report",
    pdfUrl: "#",
  },
  {
    title: "GSM-based Remote Monitoring System",
    tag: "IoT / Telecom",
    color: "#00ff9d",
    icon: "📡",
    intro: "A remote monitoring system leveraging GSM communication modules to transmit real-time electrical sensor data via SMS alerts to registered numbers. The system is designed for off-site monitoring of critical parameters including voltage fluctuation, temperature, and load current — enabling operators to respond to anomalies without physical presence at the installation site.",
    tech: ["GSM SIM800L", "Arduino", "Sensors", "AT Commands"],
    pdfLabel: "View Project Report",
    pdfUrl: "#",
  },
  {
    title: "Solar-Powered Electronics Project",
    tag: "Renewable Energy",
    color: "#ffd700",
    icon: "☀️",
    intro: "Design and practical implementation of a solar energy harvesting system with Maximum Power Point Tracking (MPPT) charging, lithium-ion battery management, and regulated DC load output. This project explores sustainable off-grid power delivery, focusing on charge optimization, battery health monitoring, and efficient load distribution for small electronics and sensor nodes.",
    tech: ["Solar Panels", "MPPT Controller", "Li-ion BMS", "PWM"],
    pdfLabel: "View Project Report",
    pdfUrl: "#",
  },
];

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", caption: "Mountains never get old — trekking through the Himalayas" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", caption: "Above the clouds, everything feels clearer" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80", caption: "Early morning light on the valley — worth every step" },
  { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80", caption: "Snow-capped peaks and silence — nature's reset button" },
  { src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=80", caption: "Campfire conversations under a million stars" },
  { src: "https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?w=600&q=80", caption: "Kathmandu's rooftops at golden hour" },
];

const BLOGS = [
  {
    title: "Three Days on the Annapurna Trail",
    date: "Nov 2024",
    tag: "Travel Diary",
    color: "#00ff9d",
    excerpt: "The first night at basecamp, I couldn't sleep — not from altitude, but from the sound of absolute silence. This is the story of three days that changed how I think about engineering, time, and myself...",
    emoji: "🏔️",
  },
  {
    title: "Engineering School: What Nobody Tells You",
    date: "Aug 2024",
    tag: "Life at IOE",
    color: "#00d4ff",
    excerpt: "Pulchowk Campus looked different in the monsoon. The labs smelled like solder and old textbooks, and the seniors had this look — part exhaustion, part pride. Here's what my first semester really taught me...",
    emoji: "⚡",
  },
  {
    title: "A Weekend I Won't Forget — Pokhara Solo",
    date: "Mar 2024",
    tag: "Memorable Diary",
    color: "#a855f7",
    excerpt: "I booked the bus ticket at 11 PM on a Friday. No plan, one bag, and a notebook. What happened over those 48 hours in Pokhara became one of those stories you only tell people you trust...",
    emoji: "🌊",
  },
];

const ACADEMIC = [
  {
    phase: "Phase 01",
    period: "2009 – 2022",
    color: "#00d4ff",
    title: "School Education",
    items: [
      { label: "2009 – Grade 7", school: "Takshashila Academy", note: "Early schooling — where curiosity first sparked" },
      { label: "Grade 8 – Grade 10", school: "Meridian International School", note: "Completed secondary education in 2022" },
    ],
  },
  {
    phase: "Phase 02",
    period: "2022 – 2024",
    color: "#ffd700",
    title: "Higher Secondary (+2 Science)",
    items: [
      { label: "2022 – 2024", school: "Takshashila Academy", note: "Science stream — Physics, Chemistry, Mathematics" },
    ],
  },
  {
    phase: "Phase 03",
    period: "2024 – Present",
    color: "#00ff9d",
    title: "Bachelor in Electrical Engineering",
    items: [
      { label: "Currently: 2nd Year, 2nd Part", school: "Institute of Engineering, Pulchowk Campus", note: "Tribhuvan University — one of Nepal's most prestigious engineering colleges" },
    ],
  },
];

// ════════════════════════════════════════════════════════════════
// NAVBAR
// ════════════════════════════════════════════════════════════════
function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(6,10,22,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,212,255,0.12)" : "none",
      transition: "all 0.4s ease", padding: "0 2rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
        <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 17, fontWeight: 700, letterSpacing: 2 }}>&lt;AP/&gt;</span>
        <div className="nav-desktop" style={{ display: "flex", gap: 24 }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none",
              color: active === l.toLowerCase() ? "#00d4ff" : "rgba(255,255,255,0.55)",
              fontFamily: "'Share Tech Mono', monospace", fontSize: 10, letterSpacing: 1.5,
              cursor: "pointer", transition: "color 0.2s", textTransform: "uppercase",
              borderBottom: active === l.toLowerCase() ? "1px solid #00d4ff" : "1px solid transparent",
              paddingBottom: 2,
            }}>{l}</button>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile-btn" style={{
          background: "none", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff",
          padding: "6px 10px", borderRadius: 6, cursor: "pointer", display: "none", fontSize: 18,
        }}>☰</button>
      </div>
      {menuOpen && (
        <div style={{ background: "rgba(6,10,22,0.99)", padding: "1rem 2rem 1.5rem", borderBottom: "1px solid rgba(0,212,255,0.12)" }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              display: "block", width: "100%", textAlign: "left", background: "none",
              border: "none", color: "rgba(255,255,255,0.8)", fontFamily: "'Share Tech Mono', monospace",
              fontSize: 13, letterSpacing: 1.5, cursor: "pointer", padding: "10px 0", textTransform: "uppercase",
            }}>{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ════════════════════════════════════════════════════════════════
// HERO
// ════════════════════════════════════════════════════════════════
function Hero() {
  const [typed, setTyped] = useState("");
  const words = ["Electrical Engineer.", "Hardware Builder.", "Tech Entrepreneur.", "Explorer & Maker."];
  useEffect(() => {
    let wi = 0, ci = 0, deleting = false, timeout;
    const tick = () => {
      const word = words[wi % words.length];
      if (!deleting) {
        setTyped(word.slice(0, ci + 1)); ci++;
        if (ci === word.length) { deleting = true; timeout = setTimeout(tick, 1800); return; }
      } else {
        setTyped(word.slice(0, ci - 1)); ci--;
        if (ci === 0) { deleting = false; wi++; }
      }
      timeout = setTimeout(tick, deleting ? 55 : 90);
    };
    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "0 2rem" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <div style={{ position: "absolute", top: "18%", left: "8%", width: 500, height: 500, background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 65%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "15%", right: "8%", width: 350, height: 350, background: "radial-gradient(circle, rgba(0,255,157,0.05) 0%, transparent 65%)", borderRadius: "50%" }} />
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.035 }} xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="#00d4ff" strokeWidth="0.8" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 820 }}>
        <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 11, letterSpacing: 4, marginBottom: 20, opacity: 0.75, animation: "fadeUp 0.8s ease 0.2s both" }}>
          ELECTRICAL ENGINEERING STUDENT & TECH ENTHUSIAST
        </div>
        <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5.2rem)", fontWeight: 900, lineHeight: 1.08, marginBottom: 18, fontFamily: "'Sora', sans-serif", animation: "fadeUp 0.8s ease 0.4s both" }}>
          Hi, I'm{" "}
          <span style={{ background: "linear-gradient(135deg, #00d4ff 0%, #00ff9d 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Adhish Paudel</span>
        </h1>
        <div style={{ fontSize: "clamp(1rem, 2.8vw, 1.5rem)", color: "rgba(255,255,255,0.65)", fontFamily: "'Share Tech Mono', monospace", minHeight: 44, marginBottom: 36, animation: "fadeUp 0.8s ease 0.6s both" }}>
          {typed}<span style={{ color: "#00d4ff", animation: "blink 1s step-end infinite" }}>|</span>
        </div>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 0.8s ease 0.8s both" }}>
          <a href="#" download style={{
            background: "linear-gradient(135deg, #00d4ff, #00a8cc)", color: "#030810", fontWeight: 700,
            fontFamily: "'Sora', sans-serif", padding: "13px 30px", borderRadius: 8, textDecoration: "none",
            fontSize: 14, letterSpacing: 0.5, transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 0 24px rgba(0,212,255,0.35)",
          }} onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 0 36px rgba(0,212,255,0.55)"; }}
             onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = "0 0 24px rgba(0,212,255,0.35)"; }}>
            ↓ Download Resume
          </a>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{
            background: "transparent", border: "1px solid rgba(0,212,255,0.45)", color: "#00d4ff",
            fontWeight: 600, fontFamily: "'Sora', sans-serif", padding: "13px 30px", borderRadius: 8,
            fontSize: 14, letterSpacing: 0.5, cursor: "pointer", transition: "all 0.2s",
          }} onMouseEnter={e => { e.target.style.background = "rgba(0,212,255,0.08)"; e.target.style.borderColor = "#00d4ff"; }}
             onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(0,212,255,0.45)"; }}>
            Get In Touch →
          </button>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// ABOUT
// ════════════════════════════════════════════════════════════════
function About() {
  const [expanded, setExpanded] = useState(false);
  const shortBio = `I'm Adhish Paudel, an Electrical Engineering undergraduate at the Institute of Engineering, Pulchowk Campus; one of Nepal's most prestigious engineering institutions. From a young age, I was drawn to how things works that curiosity eventually became a calling. I believe that real engineering is learned by building; not just by reading textbooks. Growing up in a supportive and academically oriented environment played a major role in shaping my personality, interests, and ambitions.`;
  const fullBio = [
    `I'm Adhish Paudel, an Electrical Engineering undergraduate at the Institute of Engineering, Pulchowk Campus; one of Nepal's most prestigious engineering institutions. From a young age, I was drawn to how things works that curiosity eventually became a calling. I believe that real engineering is learned by building; not just by reading textbooks. Growing up in a supportive and academically oriented environment played a major role in shaping my personality, interests, and ambitions.`,
    `Born on 25 January 2006 into a middle-class family in Nepal, I grew up in a supportive and academically oriented environment. From an early age, I was taught the value of discipline, education, and hard work, which played a very important role in what I have become today. `,
    `My dad, Ramesh Kumar Paudel, is an Assistant Professor of Economics at Shanker Dev Campus. He always encouraged me to ask questions, think critically, and understand concepts deeply rather than memorizing them. Because of his influence, I gradually developed a strong interest in mathematics and science. My mother, Laxmi Sharma, works as an accountant and has always been a symbol of responsibility and determination in our family. From her, I learned the importance of consistency, patience, and managing responsibilities efficiently. And the most important person in my life, my sister Aaradhya whom I love the most. Our bond is like of Tom and Jerry; Chaotic but very deep. `,
    `My educational journey began at Takshashila Academy, where I studied until Grade 7. Later, I joined Meridian International School in Grade 8, form where I completed my SEE. During this period, my interest in mathematics and science became even stronger. I enjoyed solving problems and understand scientific concepts, I also started developing a fascination for computers and technology. I was always eager to learn new things and actively participated in classroom activities. After completing my secondary education, I chose the science faculty in high school with Physics, Chemistry, Mathematics, and Computer Science as my major subjects. This was an important decision because it aligned perfectly with my interests and future goals. It was a very important phase of my life as it was the base for my future in engineering.`,
    `One of the most significant milestones in my life came when I got admitted to the Institute of Engineering (IOE), Pulchowk Campus. Getting accepted into IOE Pulchowk was a proud achievement for me. It marked the beginning of a new chapter in my journey toward becoming an engineer. Currently, I am pursuing Electrical Engineering at IOE Pulchowk, where I am continuously learning about electrical systems, electronics, power engineering, and emerging technologies. The field of electrical engineering perfectly matches my passion for problem solving, innovation, and understanding how modern technology powers the world around us.`,
    `Apart from academics, I have always been a curious person who loves understanding how things function. Whether it is a machine, an electrical system, or even a simple everyday device, this curiosity naturally pushed me toward technical and engineering-related fields. I also enjoy taking leadership roles in group activities and projects. I believe leadership is not just about guiding others but also about learning teamwork, communication, and responsibility. Throughout my school life, I often enjoyed collaborating with classmates, sharing ideas, and helping organize activities. I also have several personal interests and hobbies that help me maintain balance in life. I enjoy cooking because it allows me to be creative and experiment with different ideas. Traveling and trekking are also among my favorite activities. Exploring new places, culture and traditions, experiencing nature, and challenging myself physically through trekking gives me a sense of adventure and refreshes my mind. These experiences teach me resilience, adaptability, and appreciation for the world beyond classrooms and textbooks.`,
    `Overall, my journey so far has been shaped by curiosity, determination, and the constant desire to learn and grow. I believe that with continuous learning, leadership, and hard work, I can contribute positively to society while also achieving my personal and professional goals.`,

];

  return (
    <section id="about" style={{ padding: "100px 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <RevealDiv>
        <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 11, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>01. ABOUT ME</div>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Sora', sans-serif", marginBottom: 48 }}>
          Building at the <span style={{ color: "#00d4ff" }}>intersection</span> of hardware & ideas
        </h2>
      </RevealDiv>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        <RevealDiv delay={100}>
          <div style={{ fontSize: "0.97rem", lineHeight: 1.9, color: "rgba(255,255,255,0.72)", fontFamily: "'Sora', sans-serif" }}>
            {expanded ? (
              fullBio.map((p, i) => <p key={i} style={{ marginBottom: 18 }}>{p}</p>)
            ) : (
              <p style={{ marginBottom: 18 }}>{shortBio}</p>
            )}
            <button onClick={() => setExpanded(!expanded)} style={{
              background: "none", border: "none", color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace",
              fontSize: 11, letterSpacing: 2, cursor: "pointer", textTransform: "uppercase", padding: 0,
              marginTop: 4, transition: "opacity 0.2s",
            }} onMouseEnter={e => e.target.style.opacity = "0.65"}
               onMouseLeave={e => e.target.style.opacity = "1"}>
              {expanded ? "← Read Less" : "Read More →"}
            </button>
          </div>
        </RevealDiv>
        <RevealDiv delay={200}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              { val: "3+", label: "Years of Learning" },
              { val: "3", label: "Projects Built" },
              { val: "IOE", label: "Pulchowk Campus" },
              { val: "∞", label: "Curiosity Level" },
            ].map((s, i) => (
              <div key={i} style={{
                background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.14)",
                borderRadius: 12, padding: "24px 20px", textAlign: "center", transition: "all 0.3s",
              }} onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.45)"; e.currentTarget.style.background = "rgba(0,212,255,0.09)"; }}
                 onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.14)"; e.currentTarget.style.background = "rgba(0,212,255,0.04)"; }}>
                <div style={{ fontSize: 34, fontWeight: 900, fontFamily: "'Sora', sans-serif", color: "#00d4ff", marginBottom: 6 }}>{s.val}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "'Share Tech Mono', monospace", letterSpacing: 1 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// SKILLS & INTERESTS
// ════════════════════════════════════════════════════════════════
function Skills() {
  const [tab, setTab] = useState("skills");
  const items = SKILLS.filter(s => tab === "skills" ? !s.interest : s.interest);
  return (
    <section id="skills" style={{ padding: "100px 2rem", background: "rgba(0,212,255,0.02)", borderTop: "1px solid rgba(0,212,255,0.07)", borderBottom: "1px solid rgba(0,212,255,0.07)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <RevealDiv>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 11, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>02. SKILLS & INTERESTS</div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Sora', sans-serif", marginBottom: 32 }}>
            Technical Arsenal <span style={{ color: "#00d4ff" }}>&</span> Passions
          </h2>
          <div style={{ display: "flex", gap: 0, marginBottom: 48, border: "1px solid rgba(0,212,255,0.2)", borderRadius: 10, overflow: "hidden", width: "fit-content" }}>
            {["skills", "interests"].map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                background: tab === t ? "rgba(0,212,255,0.15)" : "transparent",
                border: "none", color: tab === t ? "#00d4ff" : "rgba(255,255,255,0.4)",
                fontFamily: "'Share Tech Mono', monospace", fontSize: 11, letterSpacing: 2,
                textTransform: "uppercase", padding: "10px 28px", cursor: "pointer", transition: "all 0.25s",
                borderRight: t === "skills" ? "1px solid rgba(0,212,255,0.2)" : "none",
              }}>{t}</button>
            ))}
          </div>
        </RevealDiv>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 18 }}>
          {items.map((s, i) => (
            <RevealDiv key={s.name} delay={i * 55}>
              <div style={{
                background: "rgba(6,14,30,0.85)", border: "1px solid rgba(0,212,255,0.13)",
                borderRadius: 14, padding: "26px 22px", transition: "all 0.3s ease",
              }} onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.55)"; e.currentTarget.style.boxShadow = "0 0 24px rgba(0,212,255,0.1)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                 onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.13)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = ""; }}>
                <div style={{ fontSize: 26, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontWeight: 700, fontFamily: "'Sora', sans-serif", fontSize: "1rem", marginBottom: 7, color: "#fff" }}>{s.name}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", fontFamily: "'Sora', sans-serif", lineHeight: 1.55 }}>{s.desc}</div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// PROJECTS
// ════════════════════════════════════════════════════════════════
function Projects() {
  const [openPdf, setOpenPdf] = useState(null);
  return (
    <section id="projects" style={{ padding: "100px 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <RevealDiv>
        <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 11, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>03. PROJECTS</div>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Sora', sans-serif", marginBottom: 12 }}>What I've <span style={{ color: "#00d4ff" }}>Built</span></h2>
        <p style={{ color: "rgba(255,255,255,0.42)", fontFamily: "'Sora', sans-serif", marginBottom: 56, fontSize: "0.9rem" }}>Engineering projects from concept to prototype — open the full paper for each one.</p>
      </RevealDiv>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {PROJECTS.map((p, i) => (
          <RevealDiv key={p.title} delay={i * 80}>
            <div style={{
              background: "rgba(6,14,30,0.9)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 18, overflow: "hidden", display: "grid", gridTemplateColumns: "200px 1fr",
              transition: "all 0.35s ease",
            }} onMouseEnter={e => { e.currentTarget.style.borderColor = p.color + "40"; e.currentTarget.style.boxShadow = `0 8px 40px ${p.color}12`; }}
               onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{
                background: `linear-gradient(160deg, ${p.color}22 0%, rgba(6,14,30,0.95) 100%)`,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                padding: "32px 16px", gap: 14, position: "relative",
              }}>
                <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 40% 40%, ${p.color}18 0%, transparent 65%)` }} />
                <div style={{ fontSize: 48, position: "relative" }}>{p.icon}</div>
                <div style={{ background: `${p.color}22`, border: `1px solid ${p.color}44`, borderRadius: 20, padding: "4px 12px", fontSize: 9, fontFamily: "'Share Tech Mono', monospace", color: p.color, letterSpacing: 1, textAlign: "center", position: "relative" }}>{p.tag}</div>
              </div>
              <div style={{ padding: "28px 30px" }}>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "1.1rem", marginBottom: 12, color: "#fff", lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: "0.87rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 20, fontFamily: "'Sora', sans-serif" }}>{p.intro}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {p.tech.map(t => (
                      <span key={t} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 5, padding: "3px 10px", fontSize: 10, fontFamily: "'Share Tech Mono', monospace", color: "rgba(255,255,255,0.4)", letterSpacing: 0.5 }}>{t}</span>
                    ))}
                  </div>
                  <button onClick={() => setOpenPdf(p)} style={{
                    background: `${p.color}18`, border: `1px solid ${p.color}44`, color: p.color,
                    fontFamily: "'Share Tech Mono', monospace", fontSize: 10, letterSpacing: 1.5,
                    padding: "9px 18px", borderRadius: 8, cursor: "pointer", transition: "all 0.2s",
                    textTransform: "uppercase", whiteSpace: "nowrap",
                  }} onMouseEnter={e => { e.target.style.background = `${p.color}30`; }}
                     onMouseLeave={e => { e.target.style.background = `${p.color}18`; }}>
                    📄 {p.pdfLabel}
                  </button>
                </div>
              </div>
            </div>
          </RevealDiv>
        ))}
      </div>

      {openPdf && (
        <div onClick={() => setOpenPdf(null)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 200,
          display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem",
          backdropFilter: "blur(10px)",
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: "#090f1e", border: `1px solid ${openPdf.color}44`, borderRadius: 18,
            padding: "36px 40px", maxWidth: 520, width: "100%", textAlign: "center",
          }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>{openPdf.icon}</div>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "1.1rem", marginBottom: 12, color: "#fff" }}>{openPdf.title}</h3>
            <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "0.85rem", fontFamily: "'Sora', sans-serif", marginBottom: 30, lineHeight: 1.65 }}>
              The full project report (PDF) will open in a new tab. Update the PDF link in the code once your file is ready.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <a href={openPdf.pdfUrl} target="_blank" rel="noreferrer" style={{
                background: `linear-gradient(135deg, ${openPdf.color}, ${openPdf.color}99)`, color: "#030810",
                fontWeight: 700, fontFamily: "'Sora', sans-serif", padding: "11px 28px",
                borderRadius: 8, textDecoration: "none", fontSize: 13,
              }}>Open PDF →</a>
              <button onClick={() => setOpenPdf(null)} style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)",
                fontFamily: "'Sora', sans-serif", padding: "11px 24px", borderRadius: 8, cursor: "pointer", fontSize: 13,
              }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// ACADEMIC
// ════════════════════════════════════════════════════════════════
function Academic() {
  return (
    <section id="academic" style={{ padding: "100px 2rem", background: "rgba(0,212,255,0.02)", borderTop: "1px solid rgba(0,212,255,0.07)", borderBottom: "1px solid rgba(0,212,255,0.07)" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <RevealDiv>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 11, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>04. ACADEMIC JOURNEY</div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Sora', sans-serif", marginBottom: 12 }}>
            Education <span style={{ color: "#00d4ff" }}>Timeline</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.42)", fontFamily: "'Sora', sans-serif", marginBottom: 60, fontSize: "0.9rem" }}>From early schooling to engineering ambition.</p>
        </RevealDiv>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {ACADEMIC.map((phase, pi) => (
            <RevealDiv key={phase.phase} delay={pi * 130}>
              <div style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: 28, alignItems: "start" }}>
                <div style={{ textAlign: "right", paddingTop: 24 }}>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: phase.color, letterSpacing: 2, marginBottom: 6 }}>{phase.phase}</div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.28)", letterSpacing: 1 }}>{phase.period}</div>
                </div>
                <div style={{ position: "relative", paddingLeft: 32 }}>
                  <div style={{ position: "absolute", left: 0, top: 8, bottom: -8, width: 1, background: `linear-gradient(to bottom, ${phase.color}80, transparent)` }} />
                  <div style={{ position: "absolute", left: -6, top: 22, width: 12, height: 12, borderRadius: "50%", background: phase.color, boxShadow: `0 0 14px ${phase.color}99` }} />
                  <div style={{
                    background: "rgba(6,14,30,0.85)", border: "1px solid rgba(255,255,255,0.07)",
                    borderLeft: `3px solid ${phase.color}`, borderRadius: 12, padding: "22px 26px", transition: "all 0.3s",
                  }} onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 4px 24px ${phase.color}18`; }}
                     onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}>
                    <div style={{ fontWeight: 800, fontFamily: "'Sora', sans-serif", fontSize: "1rem", marginBottom: 16, color: phase.color }}>{phase.title}</div>
                    {phase.items.map((item, ii) => (
                      <div key={ii} style={{ marginBottom: ii < phase.items.length - 1 ? 18 : 0 }}>
                        <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.32)", letterSpacing: 1.5, marginBottom: 5 }}>{item.label}</div>
                        <div style={{ fontWeight: 700, fontFamily: "'Sora', sans-serif", fontSize: "0.95rem", color: "#fff", marginBottom: 5 }}>{item.school}</div>
                        <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.42)", fontFamily: "'Sora', sans-serif", fontStyle: "italic" }}>{item.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// BLOG
// ════════════════════════════════════════════════════════════════
function Blog() {
  return (
    <section id="blog" style={{ padding: "100px 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <RevealDiv>
        <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 11, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>05. BLOG</div>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Sora', sans-serif", marginBottom: 12 }}>
          Travel Diaries <span style={{ color: "#00d4ff" }}>&</span> Memorable Moments
        </h2>
        <p style={{ color: "rgba(255,255,255,0.42)", fontFamily: "'Sora', sans-serif", marginBottom: 56, fontSize: "0.9rem" }}>Stories from the trail, the classroom, and everywhere between.</p>
      </RevealDiv>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
        {BLOGS.map((b, i) => (
          <RevealDiv key={b.title} delay={i * 80}>
            <div style={{
              background: "rgba(6,14,30,0.9)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16, padding: "28px 26px", transition: "all 0.35s ease",
              cursor: "pointer", display: "flex", flexDirection: "column", gap: 14,
            }} onMouseEnter={e => { e.currentTarget.style.borderColor = b.color + "44"; e.currentTarget.style.boxShadow = `0 8px 36px ${b.color}10`; e.currentTarget.style.transform = "translateY(-4px)"; }}
               onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = ""; }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ background: `${b.color}20`, border: `1px solid ${b.color}40`, borderRadius: 20, padding: "3px 12px", fontSize: 9, fontFamily: "'Share Tech Mono', monospace", color: b.color, letterSpacing: 1 }}>{b.tag}</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", fontFamily: "'Share Tech Mono', monospace" }}>{b.date}</span>
              </div>
              <div style={{ fontSize: 36 }}>{b.emoji}</div>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#fff", lineHeight: 1.4, margin: 0 }}>{b.title}</h3>
              <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.46)", lineHeight: 1.75, fontFamily: "'Sora', sans-serif", fontStyle: "italic", margin: 0, flexGrow: 1 }}>"{b.excerpt}"</p>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: b.color, letterSpacing: 1.5, marginTop: 4 }}>COMING SOON →</div>
            </div>
          </RevealDiv>
        ))}
      </div>
      <RevealDiv delay={300}>
        <div style={{ textAlign: "center", marginTop: 44, padding: "26px", background: "rgba(0,212,255,0.03)", border: "1px dashed rgba(0,212,255,0.18)", borderRadius: 12 }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "rgba(255,255,255,0.28)", fontSize: 10, letterSpacing: 2 }}>MORE STORIES COMING SOON — DIARIES WILL BE ADDED SHORTLY</div>
        </div>
      </RevealDiv>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// GALLERY
// ════════════════════════════════════════════════════════════════
function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  return (
    <section id="gallery" style={{ padding: "100px 2rem", background: "rgba(0,212,255,0.02)", borderTop: "1px solid rgba(0,212,255,0.07)", borderBottom: "1px solid rgba(0,212,255,0.07)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <RevealDiv>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 11, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>06. GALLERY</div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Sora', sans-serif", marginBottom: 12 }}>
            Through My <span style={{ color: "#00d4ff" }}>Lens</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.42)", fontFamily: "'Sora', sans-serif", marginBottom: 56, fontSize: "0.9rem" }}>Moments captured along the way — click to expand.</p>
        </RevealDiv>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {GALLERY.map((g, i) => (
            <RevealDiv key={i} delay={i * 60}>
              <div onClick={() => setLightbox(g)} style={{
                cursor: "pointer", borderRadius: 14, overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.07)", transition: "all 0.3s",
                background: "rgba(6,14,30,0.8)",
              }} onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,212,255,0.1)"; }}
                 onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ height: 210, overflow: "hidden", position: "relative" }}>
                  <img src={g.src} alt={g.caption} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.45s ease", display: "block" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.07)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,14,30,0.55) 0%, transparent 55%)" }} />
                  <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,212,255,0.15)", border: "1px solid rgba(0,212,255,0.3)", borderRadius: 6, padding: "4px 8px", fontSize: 10, fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff" }}>expand</div>
                </div>
                <div style={{ padding: "14px 18px 18px" }}>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontSize: "0.84rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{g.caption}</p>
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
        <RevealDiv delay={260}>
          <div style={{ textAlign: "center", marginTop: 40, padding: "24px", background: "rgba(0,212,255,0.03)", border: "1px dashed rgba(0,212,255,0.17)", borderRadius: 12 }}>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "rgba(255,255,255,0.27)", fontSize: 10, letterSpacing: 2 }}>REPLACE PLACEHOLDER IMAGES WITH YOUR OWN PHOTOS — MORE COMING SOON</div>
          </div>
        </RevealDiv>
      </div>

      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.94)", zIndex: 200,
          display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem",
          backdropFilter: "blur(14px)",
        }}>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 800, width: "100%", textAlign: "center" }}>
            <img src={lightbox.src} alt={lightbox.caption} style={{ width: "100%", maxHeight: "66vh", objectFit: "cover", borderRadius: 14, border: "1px solid rgba(0,212,255,0.2)" }} />
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.62)", marginTop: 20, fontStyle: "italic" }}>{lightbox.caption}</p>
            <button onClick={() => setLightbox(null)} style={{ marginTop: 18, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.55)", fontFamily: "'Share Tech Mono', monospace", fontSize: 10, letterSpacing: 2, padding: "8px 20px", borderRadius: 8, cursor: "pointer" }}>CLOSE ✕</button>
          </div>
        </div>
      )}
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// CONTACT
// ════════════════════════════════════════════════════════════════
function Contact() {
  const socials = [
    { label: "Instagram", icon: "📸", href: "https://instagram.com/", color: "#e1306c", bg: "rgba(225,48,108,0.1)", border: "rgba(225,48,108,0.28)" },
    { label: "Facebook", icon: "f", href: "https://facebook.com/", color: "#1877f2", bg: "rgba(24,119,242,0.1)", border: "rgba(24,119,242,0.28)" },
    { label: "LinkedIn", icon: "in", href: "https://linkedin.com/in/", color: "#0a66c2", bg: "rgba(10,102,194,0.1)", border: "rgba(10,102,194,0.28)" },
    { label: "Email", icon: "✉", href: "mailto:adhishpaudel@example.com", color: "#00d4ff", bg: "rgba(0,212,255,0.09)", border: "rgba(0,212,255,0.28)" },
  ];

  return (
    <section id="contact" style={{ padding: "100px 2rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <RevealDiv>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 11, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>07. CONTACT</div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Sora', sans-serif", marginBottom: 18 }}>Let's <span style={{ color: "#00d4ff" }}>Connect</span></h2>
          <p style={{ color: "rgba(255,255,255,0.48)", fontFamily: "'Sora', sans-serif", marginBottom: 52, fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 440, margin: "0 auto 52px" }}>
            Whether you have a project idea, a collaboration in mind, or just want to say hi — reach out on any platform below.
          </p>
        </RevealDiv>
        <RevealDiv delay={100}>
          <div style={{ display: "flex", justifyContent: "center", gap: 18, flexWrap: "wrap", marginBottom: 52 }}>
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" title={s.label} style={{
                width: 76, height: 76, borderRadius: 20, background: s.bg, border: `1px solid ${s.border}`,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: 6, textDecoration: "none", transition: "all 0.28s", color: s.color,
              }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 10px 28px ${s.color}28`; e.currentTarget.style.borderColor = s.color; }}
                 onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = s.border; }}>
                <span style={{ fontSize: s.icon.length === 1 && s.icon !== "✉" && s.icon !== "📸" ? 20 : 22, fontFamily: s.icon === "f" || s.icon === "in" ? "'Share Tech Mono', monospace" : "inherit", fontWeight: 800, lineHeight: 1 }}>{s.icon}</span>
                <span style={{ fontSize: 9, fontFamily: "'Share Tech Mono', monospace", letterSpacing: 0.5, opacity: 0.72 }}>{s.label}</span>
              </a>
            ))}
          </div>
        </RevealDiv>
        <RevealDiv delay={200}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "rgba(255,255,255,0.22)", fontSize: 10, letterSpacing: 2 }}>
            BASED IN KATHMANDU, NEPAL 🇳🇵
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// FOOTER
// ════════════════════════════════════════════════════════════════
function Footer() {
  const socials = ["Instagram", "Facebook", "LinkedIn", "Email"];
  const hrefs = ["https://instagram.com/", "https://facebook.com/", "https://linkedin.com/in/", "mailto:adhishpaudel@example.com"];
  return (
    <footer style={{ borderTop: "1px solid rgba(0,212,255,0.09)", padding: "34px 2rem", textAlign: "center" }}>
      <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 15, fontWeight: 700, letterSpacing: 3, marginBottom: 18 }}>&lt;AP/&gt;</div>
      <div style={{ display: "flex", justifyContent: "center", gap: 28, marginBottom: 20, flexWrap: "wrap" }}>
        {socials.map((l, i) => (
          <a key={l} href={hrefs[i]} target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.32)", fontFamily: "'Share Tech Mono', monospace", fontSize: 9, textDecoration: "none", letterSpacing: 1.5, transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#00d4ff"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.32)"}>{l}</a>
        ))}
      </div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.16)", fontFamily: "'Sora', sans-serif" }}>
        © 2025 Adhish Paudel · Built with circuits & curiosity.
      </div>
    </footer>
  );
}

// ════════════════════════════════════════════════════════════════
// APP ROOT
// ════════════════════════════════════════════════════════════════
export default function App() {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sects = NAV_LINKS.map(l => ({ id: l.toLowerCase(), el: document.getElementById(l.toLowerCase()) }));
      for (let i = sects.length - 1; i >= 0; i--) {
        const s = sects[i];
        if (!s.el) continue;
        const { top } = s.el.getBoundingClientRect();
        if (top <= 140) { setActiveSection(s.id); break; }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #060a16; color: #ffffff; }
        html { scroll-behavior: smooth; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        ::selection { background: rgba(0,212,255,0.3); }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #060a16; }
        ::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.28); border-radius: 3px; }
        @media (max-width: 780px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
        @media (max-width: 640px) {
          section { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: 200px 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: 130px 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{ background: "#060a16", minHeight: "100vh" }}>
        <Navbar active={activeSection} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Academic />
        <Blog />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}