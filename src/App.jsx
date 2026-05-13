import { useState, useEffect, useRef } from "react";

const IMG_BLOOD   = "/Photos/revolution-blood.jpg";
const IMG_PROTEST = "/Photos/revolution-protest.png";
const IMG_FIRE    = "/Photos/revolution-fire.jpg";
const IMG_CLASH   = "/Photos/revolution-clash.png";
const IMG_PROFILE = "/Photos/Photo.png"; // Your new profile photo

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
  { name: "Embedded Systems", icon: "💾", desc: "Firmware & real-time systems", interest: false },
  { name: "C / C++", icon: "{ }", desc: "Systems & low-level programming", interest: false },
  { name: "Web Development", icon: "🌐", desc: "React, HTML/CSS & modern stacks", interest: false },
  { name: "Problem Solving", icon: "🧩", desc: "Analytical & creative thinking", interest: false },
  { name: "Renewable Energy", icon: "☀️", desc: "Solar systems & sustainable tech", interest: true },
  { name: "Power Systems", icon: "⚙️", desc: "Grid analysis & power electronics", interest: true },
  { name: "Startups & Business", icon: "🚀", desc: "Tech entrepreneurship & product thinking", interest: true },
  { name: "Leadership", icon: "👔", desc: "Team management & strategic planning", interest: true },
  { name: "Trekking", icon: "🏔️", desc: "Exploring the Himalayas & nature trails", interest: true },
  { name: "Travel & Exploration", icon: "🗺️", desc: "Documenting journeys & cultures", interest: true },
  { name: "Cricket", icon: "🏏", desc: "Playing Cricket", interest: true },
  

];

const PROJECTS = [
  {
    title: "Adaptive DWT-Based Fault Classification for Double-Circuit Transmission Lines: Validation Under Mutual Coupling Effects",
    tag: "Power Systems",
    color: "#00d4ff",
    icon: "⚡",
    intro: "An adaptive fault classification system developed for double-circuit transmission lines to accurately detect and classify electrical faults under mutual coupling conditions. The proposed method employs Discrete Wavelet Transform (DWT) for real-time extraction of transient current features and utilizes distance-adaptive threshold logic to identify fault types with high precision. By enabling fast and reliable fault isolation without requiring offline training, the system enhances transmission network protection, minimizes misclassification, and improves overall power system reliability.",
    tech: ["Matlab", "Simulink", "db4 wavelet", "DWT Method"],
    pdfLabel: "View Project Report",
    pdfUrl: "/Documents/Research_Paper Final.pdf",
  },
  {
    title: "GSM-based Remote Monitoring System",
    tag: "IoT / Telecom",
    color: "#00ff9d",
    icon: "📡",
    intro: "A remote monitoring system leveraging GSM communication modules to transmit real-time electrical sensor data via SMS alerts to registered numbers. The system is designed for off-site monitoring of critical parameters including voltage fluctuation, temperature, and load current — enabling operators to respond to anomalies without physical presence at the installation site.",
    tech: ["GSM SIM800L", "Arduino", "Sensors", "AT Commands"],
    pdfLabel: "In the Final Phase",
    pdfUrl: "#",
  },
  {
    title: "Solar-Powered Electronics Project",
    tag: "Renewable Energy",
    color: "#ffd700",
    icon: "☀️",
    intro: "Design and practical implementation of a solar energy harvesting system with Maximum Power Point Tracking (MPPT) charging, lithium-ion battery management, and regulated DC load output. This project explores sustainable off-grid power delivery, focusing on charge optimization, battery health monitoring, and efficient load distribution for small electronics and sensor nodes.",
    tech: ["Solar Panels", "MPPT Controller", "Li-ion BMS", "PWM"],
    pdfLabel: "In the Final Phase",
    pdfUrl: "#",
  },
];

const GALLERY_ITEMS= [
 { url: "/Photos/Mountains.jpeg", caption: "Snow, silence, serenity." },

{ url: "/Photos/Langtang Lerung.jpg", caption: "When dawn kissed Langtang Lerung." },

{ url: "/Photos/Tsergori's Trail.jpg", caption: "Road to heaven??" },

{ url: "/Photos/Crazy menu.jpg", caption: "One of the craziest menu I've ever seen." },

{ url: "/Photos/Chiya Bari.jpg", caption: "इलामको चियाबारी." },

{ url: "/Photos/Pathivara.jpeg", caption: "Pathivara Mata" },

{ url: "/Photos/Pathivara Mandir.jpg", caption: "Pathivara" },

{ url: "/Photos/Darjeeling.jpg", caption: "Darjeeling" },

{ url: "/Photos/Kalinchowk View.jpg", caption: "Above the clouds, beyond the noise." },

{ url: "/Photos/Rara.jpeg", caption: "रारा कि अप्सरा" },

{ url: "/Photos/Jumla.jpg", caption: "Jumla" },

{ url: "/Photos/Surkhet.jpg", caption: "Surkhet" },


];



const ACADEMIC = [
  {
    phase: "Phase 01",
    period: "2009 – 2022",
    color: "#00d4ff",
    title: "School Education",
    items: [
      { label: "Nursery – Grade 7", school: "Takshashila Academy", note: "Early schooling — where curiosity first sparked" },
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
// ════════════════════════════════════════════════════════════════
// NAVBAR (Updated with Branding & Domain Link)
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
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(6, 10, 22, 0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(15px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0, 212, 255, 0.1)" : "none",
      transition: "all 0.4s ease", padding: "0 3rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        
        {/* Adhish Paudel Branding & Domain Link */}
        <a 
          href="https://adhishpaudel.com.np" 
          style={{ 
            fontFamily: "'Sora', sans-serif", 
            fontWeight: 800, 
            fontSize: "1.3rem", 
            color: "#00d4ff", 
            textDecoration: "none"
          }}
        >
          Adhish <span style={{ color: "white" }}>Paudel</span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-desktop" style={{ display: "flex", gap: "25px" }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              background: "none", border: "none",
              color: active === link.toLowerCase() ? "#00d4ff" : "rgba(255,255,255,0.6)",
              fontFamily: "'Share Tech Mono', monospace", fontSize: "11px",
              cursor: "pointer", transition: "0.2s", textTransform: "uppercase",
              letterSpacing: "1px"
            }}>{link}</button>
          ))}
        </div>
        
        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile-btn" style={{
          background: "none", border: "none", color: "#00d4ff", fontSize: "24px", cursor: "pointer", display: "none"
        }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{ background: "#060a16", padding: "20px", borderBottom: "1px solid rgba(0, 212, 255, 0.1)" }}>
          {NAV_LINKS.map(link => (
            <button key={link} className="nav-mobile-link" onClick={() => scrollTo(link)} style={{
              display: "block", width: "100%", textAlign: "left", background: "none",
              border: "none", color: "white", padding: "15px 0",
              fontFamily: "'Share Tech Mono', monospace", textTransform: "uppercase"
            }}>{link}</button>
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
  const words = ["Electrical Engineer.","Tech Enthusiast.", "Explorer."];
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
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "0 3rem" }}>
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
          Engineering Electricity, Exploring Infinity
        </div>
        <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5.2rem)", fontWeight: 900, lineHeight: 1.08, marginBottom: 18, fontFamily: "'Sora', sans-serif", animation: "fadeUp 0.8s ease 0.4s both", color: "white" }}>
          Hi, I'm{" "}
          <span style={{ background: "linear-gradient(135deg, #00d4ff 0%, #00ff9d 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Adhish Paudel</span>
        </h1>
        <div style={{ fontSize: "clamp(1rem, 2.8vw, 1.5rem)", color: "rgba(255,255,255,0.65)", fontFamily: "'Share Tech Mono', monospace", minHeight: 44, marginBottom: 36, animation: "fadeUp 0.8s ease 0.6s both" }}>
          {typed}<span style={{ color: "#00d4ff", animation: "blink 1s step-end infinite" }}>|</span>
        </div>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 0.8s ease 0.8s both" }}>
    <a 
    href="/Documents/Adhish_Paudel_CV.pdf" 
    target="_blank" 
    rel="noreferrer"
    style={{ textDecoration: "none" }}
  >
    <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{
            background: "transparent", border: "1px solid rgba(0,212,255,0.45)", color: "#00d4ff",
            fontWeight: 600, fontFamily: "'Sora', sans-serif", padding: "13px 30px", borderRadius: 8,
            fontSize: 14, letterSpacing: 0.5, cursor: "pointer", transition: "all 0.2s",
          }} onMouseEnter={e => { e.target.style.background = "rgba(0,212,255,0.08)"; e.target.style.borderColor = "#00d4ff"; }}
             onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(0,212,255,0.45)"; }}>
            RESUME ↗
          </button>
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
  const [ref, visible] = useScrollReveal();
  const [isExpanded, setIsExpanded] = useState(false);

  const shortBio = `I'm Adhish Paudel, an Electrical Engineering undergraduate at the Institute of Engineering, Pulchowk Campus; one of Nepal's most prestigious engineering institutions. From a young age, I was drawn to how things works that curiosity eventually became a calling. I believe that real engineering is learned by building; not just by reading textbooks. Growing up in a supportive and academically oriented environment played a major role in shaping my personality, interests, and ambitions.`;

  const fullBio = `Born in 2006 into a middle-class family in Nepal, I grew up in a supportive and academically oriented environment. From an early age, I was taught the value of discipline, education, and hard work, which played a very important role in what I have become today. 

My dad, Ramesh Kumar Paudel, is an Assistant Professor of Economics. He always encouraged me to ask questions, think critically, and understand concepts deeply rather than memorizing them. Because of his influence, I gradually developed a strong interest in mathematics and science. My mother, Laxmi Sharma, works as an accountant and has always been a symbol of responsibility and determination in our family. And the most important person in my life, my sister Aaradhya whom I love the most. Our bond is like of Tom and Jerry; Chaotic but very deep. 

My educational journey began at Takshashila Academy, where I studied until Grade 7. Later, I joined Meridian International School in Grade 8, form where I completed my SEE. During this period, my interest in mathematics and science became stronger. I enjoyed solving problems and understand scientific concepts, I also started developing a fascination for computers and technology. I was always eager to learn new things and actively participated in classroom activities. After completing my secondary education, I chose the science faculty in high school with Physics, Chemistry, Mathematics, and Computer Science as my major subjects.

One of the most significant milestones in my life came when I got admitted to the Institute of Engineering (IOE), Pulchowk Campus. Getting accepted into IOE Pulchowk was a proud achievement for me. It marked the beginning of a new chapter in my journey toward becoming an engineer. Currently, I am pursuing Electrical Engineering at IOE Pulchowk, where I am continuously learning about electrical systems, electronics, power engineering, and emerging technologies.

Apart from academics, I have always been a curious person who loves understanding how things function. I also enjoy taking leadership roles in group activities and projects. I believe leadership is not just about guiding others but also about learning teamwork, communication, and responsibility. I also have several personal interests and hobbies that help me maintain balance in life. I enjoy cooking because it allows me to be creative and experiment with different ideas. Traveling and trekking are also among my favorite activities.

Overall, my journey so far has been shaped by curiosity, determination, and the constant desire to learn and grow. I believe that with continuous learning, leadership, and hard work, I can contribute positively to society while also achieving my personal and professional goals.`;

  return (
    <section id="about" style={{ padding: "100px 0", background: "transparent" }}>
      {/* Centered Header */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 14, letterSpacing: 4, marginBottom: 10 }}>
          01. ABOUT ME
        </div>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, fontFamily: "'Sora', sans-serif", color: "white" }}>
          Signals, <span style={{ color: "#00d4ff" }}>systems</span>, and endless <span style={{ color: "#00d4ff" }}>curiosity.</span>
        </h2>
      </div>

      <div ref={ref} style={{
        display: "grid",
        gridTemplateColumns: "1fr 400px",
        gap: "50px",
        alignItems: "start",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "all 0.8s ease"
      }} className="about-grid">
        
        <div style={{ textAlign: "justify" }}>
          <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: "1.9", fontSize: "1.1rem", whiteSpace: "pre-line" }}>
            {isExpanded ? fullBio : shortBio}
          </p>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              marginTop: "30px",
              padding: "12px 24px",
              background: "transparent",
              border: "1px solid #00d4ff",
              color: "#00d4ff",
              fontFamily: "'Share Tech Mono', monospace",
              cursor: "pointer"
            }}
          >
            {isExpanded ? "Show Less" : "Read more"}
          </button>
        </div>

        {/* Photo stays visible at all times */}
        <div style={{ position: "sticky", top: "20px" }}>
          <img 
            src={IMG_PROFILE} 
            alt="Adhish" 
            style={{ 
              width: "100%", 
              maxWidth: "380px", 
              borderRadius: "12px", 
              border: "1px solid #00d4ff",
              boxShadow: "0 20px 30px -15px rgba(2,12,27,0.7)"
            }} 
          />
        </div>
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
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Sora', sans-serif", marginBottom: 32, color: "white" }}>
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
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Sora', sans-serif", marginBottom: 12, color: "white" }}>My <span style={{ color: "#00d4ff" }}>Works</span></h2>
        <p style={{ color: "rgba(255,255,255,0.42)", fontFamily: "'Sora', sans-serif", marginBottom: 56, fontSize: "0.9rem" }}>Design. Build. Test. Repeat</p>
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
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Sora', sans-serif", marginBottom: 12, color: "white" }}>
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
// BLOG ARTICLE PAGE — GenZ Revolution
// ════════════════════════════════════════════════════════════════
function ArticlePage({ onClose }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
 
  const paragraphs = [
    "There are some days in life that stay with you forever. One such period in my life is called the 'GenZ Revolution.' It was a time of intense protests, political uncertainty, and emotional chaos that affected everyone, including students like me who were simply trying to continue with normal life.",
    "It all started around the time when my semester exams were going on. I remember it clearly because my Python exam was scheduled just two days after Bhadra 23. I had been preparing seriously, revising topics, and practicing coding problems. Like any other student, my world at that time was limited to notes, books, and exam pressure. But everything suddenly shifted when news of nationwide protests began spreading rapidly through social media, where many young people were actively sharing updates and opinions.",
    "At first, it felt like something happening far away from my personal life. But very quickly, it became impossible to ignore. The situation escalated, and the atmosphere in the country started becoming tense. There were reports of large-scale protests involving students and young people, and political pressure was building at the national level.",
    "For someone like me, who was in the middle of exams, it became extremely difficult to concentrate. One of the most disturbing things reported during the first day of protest was about incidents near New Baneshwor, in front of the parliament area. The police started firing gunshots. News of people being shot dead and injured began spreading like wildfire, and soon the situation became even more violent, uncontrollable, and deeply alarming. For many of us, it was the first moment when we realized this was no longer just a peaceful protest — it had turned into something far more serious.",
    "Because of the increasing instability, our exam schedule was eventually postponed. That moment gave a strange mix of relief and anxiety — relief because exams were delayed, but anxiety because the situation outside was worsening rapidly.",
    "In the next day that followed, the situation escalated further. Many political leaders' houses were burned, and by noon, the then Prime Minister KP Sharma Oli resigned from his post. However, after the PM's resignation the situation still did not come under control. I remember seeing heavy smoke rising from different parts of the city, especially around important government and administrative areas affected during the protests.",
    "One of the most shocking visuals for many people, including me, was seeing reports and images of key institutions such as Singha Durbar and the Supreme Court being damaged or burned during the chaos. Even more disturbing was the news that thousands of prisoners broke out of jail during the unrest, creating a serious security crisis across the country.",
    "For a while, there was almost no visible control from security forces in many areas. The streets felt unsafe, and uncertainty increased every hour. However, later that evening, the situation took a critical turn when the Nepal Army, under the leadership of Chief Ashok Raj Sigdel, addressed the nation and announced that the army was taking responsibility for national security. That announcement finally brought a sense of relief and stability after an extremely disturbing day.",
    "During this entire time, social media played a very powerful role. Platforms like Discord, Facebook, Reddit and others were filled with live updates, emotional reactions, and debates. Some people expressed anger, some viewed it as a call for reform, while others were simply trying to understand what was happening in real time. Information spread faster than ever, and emotions spread even faster.",
    "Slowly, after several tense days, the situation began to stabilize. The presence of security forces helped bring control back to the streets, and restrictions gradually started easing. There was a sense of relief returning, even though the emotional impact of everything that had happened still remained. Normal life did not return instantly, but the intensity of the crisis slowly began to decrease.",
    "During the transitional phase, discussions also emerged around forming an interim leadership, and Sushila Karki was widely mentioned in public discourse as a potential interim Prime Minister figure during the political transition period. This reflected how uncertain and fluid the political situation had become during that time.",
    "In the end, the GenZ Revolution remains one of the most intense chapters of my life — as I had never witnessed anything like that before.",
  ];
 
  const images = [
    { src: IMG_BLOOD,   caption: "" },
    { src: IMG_CLASH,   caption: "" },
    { src: IMG_FIRE,    caption: "" },
    { src: IMG_PROTEST, caption: "" },
  ];
 
  const insertAfter = [2, 5, 8, 11]; // paragraph indices after which to insert images
 
  const articleStyle = {
    fontFamily: "'Sora', sans-serif",
    fontSize: "1.05rem",
    lineHeight: 1.95,
    color: "rgba(255,255,255,0.8)",
    textAlign: "justify",
    marginBottom: 24,
  };
 
  return (
    <div style={{ background: "#060a16", minHeight: "100vh", paddingBottom: 80 }}>
      {/* Top bar */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(6,10,22,0.97)", backdropFilter: "blur(18px)", borderBottom: "1px solid rgba(255,68,68,0.2)", padding: "0 2rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#ff4444", fontSize: 11, letterSpacing: 3 }}>BLOG / MEMORABLE DIARY</span>
          <button onClick={onClose} style={{ background: "none", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", fontFamily: "'Share Tech Mono', monospace", fontSize: 11, letterSpacing: 1.5, padding: "7px 16px", borderRadius: 6, cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.target.style.borderColor = "#ff4444"; e.target.style.color = "#ff4444"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.color = "rgba(255,255,255,0.6)"; }}>
            ← BACK
          </button>
        </div>
      </div>
 
      {/* Hero banner */}
      <div style={{ position: "relative", height: 340, overflow: "hidden" }}>
        <img src={IMG_FIRE} alt="GenZ Revolution" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #060a16 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 3rem", textAlign: "center" }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#ff4444", fontSize: 11, letterSpacing: 4, marginBottom: 16, opacity: 0.9 }}>MEMORABLE DIARY · 2025</div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: 1.15, color: "#fff", maxWidth: 700 }}>
            GenZ Revolution —<br/>
            <span style={{ color: "#ff4444" }}>A Day I Will Never Forget</span>
          </h1>
          <div style={{ marginTop: 20, fontFamily: "'Share Tech Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: 2 }}>BY ADHISH PAUDEL</div>
        </div>
      </div>
 
      {/* Article body */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 2rem 0" }}>
        {paragraphs.map((para, i) => {
          const imgIdx = insertAfter.indexOf(i);
          return (
            <div key={i}>
              <p style={articleStyle}>{para}</p>
              {imgIdx !== -1 && (
                <div style={{ margin: "36px 0 44px", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,68,68,0.25)", boxShadow: "0 8px 40px rgba(255,68,68,0.08)" }}>
                  <img src={images[imgIdx].src} alt={images[imgIdx].caption} style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: 460 }} />
                  <div style={{ background: "rgba(255,68,68,0.06)", padding: "14px 20px", fontFamily: "'Sora', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", fontStyle: "italic", lineHeight: 1.55 }}>
                    {images[imgIdx].caption}
                  </div>
                </div>
              )}
            </div>
          );
        })}
 
        {/* Closing signature */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🇳🇵</div>
          <div>
            <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>Adhish Paudel</div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: 1.5, marginTop: 3 }}>KATHMANDU, NEPAL · 2025</div>
          </div>
        </div>
 
        <button onClick={onClose} style={{ marginTop: 48, display: "block", background: "rgba(255,68,68,0.08)", border: "1px solid rgba(255,68,68,0.3)", color: "#ff4444", fontFamily: "'Share Tech Mono', monospace", fontSize: 11, letterSpacing: 2, padding: "12px 28px", borderRadius: 8, cursor: "pointer", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,68,68,0.18)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,68,68,0.08)"; }}>
          ← BACK TO PORTFOLIO
        </button>
      </div>
    </div>
  );
}
 
// ════════════════════════════════════════════════════════════════
// BLOG SECTION (main portfolio page)
// ════════════════════════════════════════════════════════════════
function Blog({ onOpenArticle }) {
  return (
    <section id="blog" style={{ padding: "100px 0" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", letterSpacing: 4 }}>05. ARTICLES</div>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "white" }}>Latest <span style={{ color: "#00d4ff" }}>Writing</span></h2>
      </div>
 
      <div
        onClick={onOpenArticle}
        style={{
          background: "#0d1a2e",
          borderRadius: "16px",
          cursor: "pointer",
          border: "1px solid rgba(255,68,68,0.18)",
          transition: "all 0.35s ease",
          maxWidth: "820px",
          margin: "0 auto",
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(255,68,68,0.06)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.borderColor = "rgba(255,68,68,0.55)";
          e.currentTarget.style.boxShadow = "0 16px 60px rgba(255,68,68,0.14)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor = "rgba(255,68,68,0.18)";
          e.currentTarget.style.boxShadow = "0 8px 40px rgba(255,68,68,0.06)";
        }}
      >
        {/* Hero background — Singha Durbar fire */}
        <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
          <img
            src={IMG_FIRE}
            alt="GenZ Revolution — Singha Durbar on fire"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.38)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #0d1a2e 100%)" }} />
 
          {/* Tag badge */}
          <div style={{ position: "absolute", top: 18, left: 18, background: "rgba(255,68,68,0.18)", border: "1px solid rgba(255,68,68,0.4)", borderRadius: 6, padding: "4px 12px", fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: "#ff6666", letterSpacing: 2 }}>
            MEMORABLE DIARY · 2025
          </div>
 
          {/* Centered title overlay */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <h3 style={{ color: "#fff", fontSize: "clamp(1.2rem, 3vw, 1.7rem)", fontFamily: "'Sora', sans-serif", fontWeight: 900, lineHeight: 1.25, textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
              GenZ Revolution —{" "}
              <span style={{ color: "#ff4444" }}>A Day I Will Never Forget</span>
            </h3>
          </div>
        </div>
 
        {/* Card body */}
        <div style={{ padding: "26px 28px 28px" }}>
 
         
 
          <p style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.75, fontFamily: "'Sora', sans-serif", fontSize: "0.95rem", marginBottom: 22 }}>
            There are some days in life that stay with you forever. It all started when my semester exams were going on — then news of nationwide protests spread rapidly, gunshots were fired near parliament, and everything I knew about normal life shattered overnight...
          </p>
 
          {/* Meta row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🇳🇵</div>
              <div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "#fff" }}>Adhish Paudel</div>
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: 1.5, marginTop: 2 }}>KATHMANDU, NEPAL</div>
              </div>
            </div>
            <div style={{ color: "#ff4444", fontSize: "0.88rem", fontFamily: "'Share Tech Mono', monospace", letterSpacing: 1.5, display: "flex", alignItems: "center", gap: 6 }}>
              READ FULL ARTICLE <span style={{ fontSize: 16 }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// GALLERY
// ════════════════════════════════════════════════════════════════
function Gallery() {
  const [ref, visible] = useScrollReveal();
  const [showAll, setShowAll] = useState(false);
  // NEW: State for the expanded image
  const [selectedImg, setSelectedImg] = useState(null);

  const visiblePhotos = showAll ? GALLERY_ITEMS : GALLERY_ITEMS.slice(0, 6);

  return (
    <section id="gallery" style={{ padding: "100px 0" }}>
      <div ref={ref} style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "all 0.8s ease"
      }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 14, letterSpacing: 4, marginBottom: 8 }}>
            06. MOMENTS
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900, fontFamily: "'Sora', sans-serif", color: "white" }}>
            Visual <span style={{ color: "#00d4ff" }}>Diaries</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px"
        }}>
          {visiblePhotos.map((item, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImg(item)} // Click to expand
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                aspectRatio: "1/1",
                border: "1px solid rgba(0, 212, 255, 0.15)",
                backgroundColor: "#0a0f1e",
                cursor: "pointer"
              }}
            >
              <img 
                src={item.url} 
                alt={item.caption}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
                padding: "20px 15px",
                color: "white", fontSize: "0.85rem", textAlign: "center"
              }}>
                {item.caption}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button 
            onClick={() => setShowAll(!showAll)}
            style={{
              padding: "12px 35px", background: "transparent", border: "1px solid #00d4ff",
              color: "#00d4ff", fontFamily: "'Share Tech Mono', monospace", cursor: "pointer"
            }}
          >
            {showAll ? "Show Less" : "Click For More"}
          </button>
        </div>
      </div>

      {/* LIGHTBOX MODAL - Shows when an image is clicked */}
      {selectedImg && (
        <div 
          onClick={() => setSelectedImg(null)} // Click background to close
          style={{
            position: "fixed",
            top: 0, left: 0, width: "100vw", height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center",
            zIndex: 9999, padding: "20px", cursor: "zoom-out"
          }}
        >
          <img 
            src={selectedImg.url} 
            alt="Expanded"
            style={{
              maxWidth: "90%", maxHeight: "80%",
              borderRadius: "8px", border: "2px solid #00d4ff",
              boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)"
            }}
          />
          <p style={{
            color: "white", marginTop: "20px", fontSize: "1.2rem",
            fontFamily: "'Sora', sans-serif", textAlign: "center"
          }}>
            {selectedImg.caption}
          </p>
          <span style={{
            position: "absolute", top: "30px", right: "40px",
            color: "#00d4ff", fontSize: "30px", cursor: "pointer",
            fontFamily: "'Share Tech Mono', monospace"
          }}>
            [ESC]
          </span>
        </div>
      )}
    </section>
  );
}
// ════════════════════════════════════════════════════════════════
// CONTACT
// ════════════════════════════════════════════════════════════════
function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 3rem", textAlign: "center" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 11, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>
          07. CONTACT
        </div>

        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Sora', sans-serif", marginBottom: 20, color: "white" }}>
          Let's <span style={{ color: "#00d4ff" }}>Connect</span>
        </h2>

        <p style={{ color: "rgba(255,255,255,0.42)", fontFamily: "'Sora', sans-serif", marginBottom: 30 }}>
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <div
  style={{
    display: "flex",
    gap: "28px",
    justifyContent: "center",
    marginTop: "40px",
    flexWrap: "wrap",
  }}
>
  
  {/* Instagram */}
  <a
    href="https://www.instagram.com/its.adhish367/"
    target="_blank"
    rel="noreferrer"
    style={{
      width: "65px",
      height: "65px",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.08)",
      transition: "all 0.3s ease",
      boxShadow: "0 0 15px rgba(0,212,255,0.08)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px) scale(1.08)";
      e.currentTarget.style.boxShadow = "0 0 25px rgba(225,48,108,0.45)";
      e.currentTarget.style.border = "1px solid rgba(225,48,108,0.6)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0px) scale(1)";
      e.currentTarget.style.boxShadow = "0 0 15px rgba(0,212,255,0.08)";
      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
    }}
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
      alt="Instagram"
      style={{ width: "32px", height: "32px" }}
    />
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/adhish.paudel.2025"
    target="_blank"
    rel="noreferrer"
    style={{
      width: "65px",
      height: "65px",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.08)",
      transition: "all 0.3s ease",
      boxShadow: "0 0 15px rgba(0,212,255,0.08)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px) scale(1.08)";
      e.currentTarget.style.boxShadow = "0 0 25px rgba(24,119,242,0.45)";
      e.currentTarget.style.border = "1px solid rgba(24,119,242,0.6)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0px) scale(1)";
      e.currentTarget.style.boxShadow = "0 0 15px rgba(0,212,255,0.08)";
      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
    }}
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
      alt="Facebook"
      style={{ width: "32px", height: "32px" }}
    />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/adhish-paudel-36200a34b/"
    target="_blank"
    rel="noreferrer"
    style={{
      width: "65px",
      height: "65px",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.08)",
      transition: "all 0.3s ease",
      boxShadow: "0 0 15px rgba(0,212,255,0.08)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px) scale(1.08)";
      e.currentTarget.style.boxShadow = "0 0 25px rgba(10,102,194,0.45)";
      e.currentTarget.style.border = "1px solid rgba(10,102,194,0.6)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0px) scale(1)";
      e.currentTarget.style.boxShadow = "0 0 15px rgba(0,212,255,0.08)";
      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
    }}
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
      alt="LinkedIn"
      style={{ width: "32px", height: "32px" }}
    />
  </a>

  {/* Gmail */}
  <a
    href="mailto:paudeladhish51@gmail.com"
    style={{
      width: "65px",
      height: "65px",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.08)",
      transition: "all 0.3s ease",
      boxShadow: "0 0 15px rgba(0,212,255,0.08)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px) scale(1.08)";
      e.currentTarget.style.boxShadow = "0 0 25px rgba(234,67,53,0.45)";
      e.currentTarget.style.border = "1px solid rgba(234,67,53,0.6)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0px) scale(1)";
      e.currentTarget.style.boxShadow = "0 0 15px rgba(0,212,255,0.08)";
      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
    }}
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
      alt="Gmail"
      style={{ width: "32px", height: "32px" }}
    />
  </a>

</div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// FOOTER
// ════════════════════════════════════════════════════════════════

function Footer() {
  const socials = ["Instagram", "Facebook", "LinkedIn", "Email"];

  const hrefs = [
    "https://www.instagram.com/its.adhish367/",
    "https://www.facebook.com/adhish.paudel.2025",
    "https://www.linkedin.com/in/adhish-paudel-36200a34b/",
    "mailto:paudeladhish51@gmail.com"
  ];

  return (
    <footer style={{ borderTop: "1px solid rgba(0,212,255,0.09)", padding: "34px 2rem", textAlign: "center" }}>
      
      <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 15, fontWeight: 700, letterSpacing: 3, marginBottom: 18 }}>
        &lt;AP/&gt;
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 28, marginBottom: 20, flexWrap: "wrap" }}>
        {socials.map((l, i) => (
          <a
            key={l}
            href={hrefs[i]}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "rgba(255,255,255,0.32)",
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 9,
              textDecoration: "none",
              letterSpacing: 1.5,
              transition: "color 0.2s"
            }}
            onMouseEnter={e => e.target.style.color = "#00d4ff"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.32)"}
          >
            {l}
          </a>
        ))}
      </div>

      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.16)", fontFamily: "'Sora', sans-serif" }}>
        © 2025 Adhish Paudel · Built with circuits & curiosity.
      </div>

      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.16)", fontFamily: "'Sora', sans-serif" }}>
        paudeladhish51@gmail.com
      </div>

    </footer>
  );
}

// ════════════════════════════════════════════════════════════════
// APP ROOT
// ════════════════════════════════════════════════════════════════
export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [articleOpen, setArticleOpen] = useState(false);
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
          .nav-mobile-link {
            font-size: 14px;
          }
        }
        section {
          scroll-margin-top: 100px;
        }
        .about-grid {
          grid-template-columns: 1fr 400px;
        }
        .about-grid > div:last-child {
          display: flex;
          justify-content: flex-end;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .about-grid > div:last-child {
            display: flex;
            justify-content: center;
            order: 2;
          }
        }
        @media (max-width: 640px) {
          section { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: 200px 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: 130px 1fr"] { grid-template-columns: 1fr !important; }
          .about-grid > div:last-child {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
      {articleOpen ? (
        <ArticlePage onClose={() => { setArticleOpen(false); setTimeout(() => { document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" }); }, 100); }} />
      ) : (
      <div style={{ background: "#060a16", minHeight: "100vh", paddingTop: "70px" }}>
        <Navbar active={activeSection} />
        <Hero />
        <About articleOpen={articleOpen} setArticleOpen={setArticleOpen} />
        <Skills />
        <Projects />
        <Academic />
        <Blog onOpenArticle={() => setArticleOpen(true)} />
        <Gallery />
        <Contact />
        <Footer />
      </div>
      )}
    </>
  );
}
