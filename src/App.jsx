import { useState, useEffect, useRef } from "react";

const IMG_BLOOD   = "/Photos/revolution-blood.jpg";
const IMG_PROTEST = "/Photos/revolution-protest.png";
const IMG_FIRE    = "/Photos/revolution-fire.jpg";
const IMG_CLASH   = "/Photos/revolution-clash.png";
const IMG_PROFILE = "/Photos/Photo.png"; 
const IMG_BAMBOO       = "/Photos/View From Bamboo.jpg";
const IMG_KYANJIN      = "/Photos/View From Kyanjin Ri.jpg";
const IMG_TSERGO_TRAIL = "/Photos/Tsergori's Trail.jpg";
const IMG_LANGTANG_COV = "/Photos/Langtang Lerung.jpg";
const IMG_MNT          = "/Photos/Mountains.jpeg";
const IMG_KARN_BANNER  = "/Photos/Rara.jpeg";
const IMG_KARN_JUMLA1  = "/Photos/Jumla.jpg";
const IMG_KARN_RARA3   = "/Photos/Rara-3.jpg";
const IMG_KARN_JUMLA2  = "/Photos/Jumla-1.jpg";
const IMG_KARN_THARU   = "/Photos/Tharu.jpg";


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
      <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "center", maxWidth: 1200, width: "100%" }} className="hero-grid">
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 13, letterSpacing: 4, marginBottom: 20, opacity: 0.75, animation: "fadeUp 0.8s ease 0.2s both" }}>
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

        {/* Hero Display Picture */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="hero-image">
          <img 
            src={IMG_PROFILE} 
            alt="Adhish Paudel" 
            style={{ 
              width: "100%", 
              maxWidth: "380px", 
              height: "auto",
              borderRadius: "12px", 
              border: "2px solid #00d4ff",
              boxShadow: "0 20px 40px rgba(0,212,255,0.2)"
            }} 
          />
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// ABOUT
// ════════════════════════════════════════════════════════════════
function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" style={{ padding: "100px 0", background: "#060a16" }}>
      <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 18, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>01.About Me  </div>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, fontFamily: "'Sora', sans-serif", marginBottom: 32, color: "white" }}>
           Signals, <span style={{ color: "#00d4ff" }}>Systems</span> & endless curiosity.
          </h2>

        {/* PRIMARY INTRODUCTION (Always Visible) */}
        <div style={{ 
          fontFamily: "'Sora', sans-serif", 
          lineHeight: "1.8", 
          textAlign: "justify",
          color: "rgba(255,255,255,0.9)",
          fontSize: "1.1rem"
        }}>
          <p>
            I'm Adhish Paudel, an Electrical Engineering undergraduate at the Institute of Engineering, Pulchowk Campus; one of Nepal's most prestigious engineering institutions.
            From a young age, I was drawn to how things works that curiosity eventually became a calling. I believe that real engineering is learned by building; not just by reading textbooks.
            Growing up in a supportive and academically oriented environment played a major role in shaping my personality, interests, and ambitions.
          </p>
        </div>

        {/* EXPANDABLE CONTENT (The full story from your document) */}
        {isExpanded && (
          <div style={{ 
            marginTop: "20px", 
            fontFamily: "'Sora', sans-serif", 
            lineHeight: "1.8", 
            color: "rgba(255,255,255,0.8)",
            textAlign: "justify",
            animation: "fadeIn 0.6s ease" 
          }}>
            <p>
              Born in 2006 into a middle-class family in Nepal, I grew up in a supportive and academically oriented environment. 
              From an early age, I was taught the value of discipline, education, and hard work, which played a very important role in what I have become today. 
            </p>
            <p>
              My dad, Ramesh Kumar Paudel, is an Assistant Professor of Economics. He always encouraged me to ask questions, think critically, and understand concepts deeply rather than memorizing them.
              Because of his influence, I gradually developed a strong interest in mathematics and science.
              My mother, Laxmi Sharma, works as an accountant and has always been a symbol of responsibility and determination in our family. 
              From her, I learned the importance of consistency, patience, and managing responsibilities efficiently.
              And the most important person in my life, my sister Aaradhya whom I love the most. Our bond is like of Tom and Jerry; Chaotic but very deep. 
            </p>
            <p>
              My educational journey began at Takshashila Academy, where I studied until Grade 7. Later, I joined Meridian International School in Grade 8, form where I completed my SEE. 
              During this period, my interest in mathematics and science became even stronger. 
              I enjoyed solving problems and understand scientific concepts, I also started developing a fascination for computers and technology.               
              I was always eager to learn new things and actively participated in classroom activities. 
              After completing my secondary education, I chose the science faculty in high school with Physics, Chemistry, Mathematics, and Computer Science as my major subjects.
              This was an important decision because it aligned perfectly with my interests and future goals. It was a very important phase of my life as it was the base for my future in engineering.
            </p>
            <p>
              One of the most significant milestones in my life came when I got admitted to the Institute of Engineering (IOE), Pulchowk Campus.
               Getting accepted into IOE Pulchowk was a proud achievement for me. It marked the beginning of a new chapter in my journey toward becoming an engineer. 
               Currently, I am pursuing Electrical Engineering at IOE Pulchowk, where I am continuously learning about electrical systems, electronics, power engineering, and emerging technologies.
               The field of electrical engineering perfectly matches my passion for problem solving, innovation, and understanding how modern technology powers the world around us.
            </p>
            <p>
              Apart from academics, I have always been a curious person who loves understanding how things function.
               Whether it is a machine, an electrical system, or even a simple everyday device, this curiosity naturally pushed me toward technical and engineering-related fields.
               I also enjoy taking leadership roles in group activities and projects. I believe leadership is not just about guiding others but also about learning teamwork, communication, and responsibility.
               Throughout my school life, I often enjoyed collaborating with classmates, sharing ideas, and helping organize activities. 
               I also have several personal interests and hobbies that help me maintain balance in life. 
               I enjoy cooking because it allows me to be creative and experiment with different ideas.
              Traveling and trekking are also among my favorite activities. Exploring new places, culture and traditions, experiencing nature, and challenging myself physically through trekking gives me a sense of adventure and refreshes my mind.
               These experiences teach me resilience, adaptability, and appreciation for the world beyond classrooms and textbooks.
            </p>
            <p>
              Overall, my journey so far has been shaped by curiosity, determination, and the constant desire to learn and grow. 
              I believe that with continuous learning, leadership, and hard work, I can contribute positively to society while also achieving my personal and professional goals.
            </p>
          </div>
        )}

        {/* CENTERED TOGGLE BUTTON */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              background: "transparent",
              border: "1px solid #00d4ff",
              color: "#00d4ff",
              fontFamily: "'Share Tech Mono', monospace",
              padding: "12px 30px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "0.3s"
            }}
            onMouseOver={(e) => e.target.style.background = "rgba(0, 212, 255, 0.1)"}
            onMouseOut={(e) => e.target.style.background = "transparent"}
          >
            {isExpanded ? "Read Less ↑" : "Read More →"}
          </button>
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
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 18, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>02.SKILLS & INTERESTS</div>
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
        <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 18, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>03.PROJECTS</div>
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
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 18, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>04.ACADEMIC JOURNEY</div>
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
// ════════════════════════════════════════════════════════════════
// DYNAMIC ARTICLE DATA LIST
// ════════════════════════════════════════════════════════════════
const DIARY_POSTS = {
  genz: {
    title: "GenZ Revolution",
    subtitle: "A Day I Will Never Forget",
    badge: "MEMORABLE DIARY · 2025",
    themeColor: "#ff4444",
    bannerImg: "/Photos/revolution-fire.jpg",
    summary: "There are some days in life that stay with you forever. It all started when my semester exams were going on — then news of nationwide protests spread rapidly, gunshots were fired near parliament, and everything I knew about normal life shattered overnight...",
    paragraphs: [
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
      "In the end, the GenZ Revolution remains one of the most intense chapters of my life — as I had never witnessed anything like that before."
    ],
    images: [
      { src: "/Photos/revolution-blood.jpg", caption: "" },
      { src: "/Photos/revolution-clash.png", caption: "" },
      { src: "/Photos/revolution-fire.jpg", caption: "" },
      { src: "/Photos/revolution-protest.png", caption: "" }
    ],
    insertAfter: [2, 5, 8, 11]
  },
  langtang: {
    title: "Langtang Diaries",
    subtitle: "A Journey Through Silence, Struggle, and Grandeur",
    badge: "TRAVEL DIARY · 6 DAYS TREK",
    themeColor: "#00d4ff",
    bannerImg: "/Photos/Langtang Lerung.jpg",
    summary: "Initially, I had planned a Pokhara–Chitwan trip during the semester break with some campus friends. However, as some of them backed out, I changed my plan and decided to go on a trek instead. First came the destination—Langtang it was...",
    paragraphs: [
      "Initially, I had planned a Pokhara–Chitwan trip during the semester break with some campus friends. However, as some of them backed out, I changed my plan and decided to go on a trek instead. First came the destination—Langtang it was. Then came the bigger question: with whom? I asked a cousin, but he was busy and couldn’t join. Later, I remembered another cousin who was also on vacation, and fortunately, he accepted the proposal. Now everything was set—the destination, the partner, and the date: just two days away. It was time to gather gear and finalize the plan.",
      "Day 1: At 6 AM, we left Machhapokhari bus park for Syabrubesi. By around 2 PM, our Langtang trek officially began. There was a small twist at the very start—my trekking stick broke into two pieces. Luckily, a local shop fixed it, and we continued. By 6 PM, we reached Bamboo. Our pace had been good. We shared the lodge with KU MBBS students, and the evening turned into an unexpected but memorable exchange of stories between engineering and medical students. It was fun, simple, and genuinely refreshing. After dinner, we went to sleep. Bamboo, located beside a fast-flowing river, offered a constant soothing sound throughout the night. It felt peaceful, almost healing.",
      "Day 2: We woke up early at around 4:30 AM. This was a long and demanding day as we had to reach Langtang Valley. After breakfast, we started trekking at 5:15 AM and bid farewell to the KU group. What followed was an exhausting but beautiful 14-hour walk through forests, rivers, and changing landscapes. Along the way, we also saw the devastating landslide debris from the 2015 earthquake, which had wiped out the old Langtang village. Hundreds of lives were lost. A new settlement now stands a short distance away, rebuilt with resilience. In the afternoon, we finally reached Langtang Valley. I took a hot shower, but the moment I stepped out, the cold hit so hard that I had to wear every layer I had. The temperature was around -25°C. Later, the hotel lit a fire in the dining area, and that warmth slowly brought life back into my frozen body. After lunch, we rested and slept.",
      "Day 3: We woke up again at 4:45 AM. Our legs were slightly sore, but the excitement pushed us forward. After breakfast, we headed toward Kyanjin Gompa, the final village of the trek. By around 12 PM, we reached it at an altitude of nearly 3,800 meters. After lunch and rest, we planned a hike to Kyanjin Ri. There are two peaks—Kyanjin Ri I and II. The climb was intense. We gained around 1,000 meters in just an hour, battling steep trails and strong winds that made every step feel uncertain. The view, however, was worth everything. We had initially thought of going to Tsergo Ri (5,000 m), but after seeing the difficulty, we hesitated. Luckily, we met a group of four trekkers—three friends and one solo traveler who had joined them. We decided to team up and attempt it together the next day. That night, the sky was unforgettable. Countless stars, clear constellations, and even a shooting star—it felt surreal. No description can truly capture it.",
      "Day 4: This was the most challenging and rewarding day. We started early at 4:30 AM, using flashlights to guide our way. After climbing for hours through steep, icy trails, slipping and pushing through exhaustion, we finally reached the summit of Tsergo Ri at around 11 AM. I used crampons for the first time in my life, carefully stepping over deep snow that covered everything in silence. Snow goggles were essential, not just for comfort but to protect from snow blindness. And then came the moment that erased every struggle. A full 360-degree mountain range unfolded around us—towering, snow-covered peaks stretching endlessly in every direction. The world felt completely still. No noise, no movement, only white silence and frozen grandeur. Massive white giants stood calmly around us, as if time itself had paused to admire them. The wind brushed past us sharply, yet even it felt distant in front of that vast stillness. We stood there surrounded by clouds below and peaks above, feeling like we were on the roof of the world. In that moment, words stopped making sense—the view wasn’t something to describe, it was something to feel.",
      "Descending was even harder. It took nearly 6 hours to go down, compared to 4 hours of ascent. By 4 PM, we returned to Kyanjin Gompa, had a simple chow chow soup, and immediately started heading back toward Langtang Valley. We reached around 7 PM, completely drained. My legs felt numb from exhaustion. After dinner, I soaked them in hot water, which helped slightly. We then spent the evening listening to stories from locals and guides about the mountains and past trekkers. Sleep that night came deeply and peacefully.",
      "Day 5: Due to the exhaustion from the previous day, we woke up a bit late. After breakfast, we started our descent toward Syabrubesi at around 7 AM. By 6 PM, we reached Syabrubesi. On the way, we bought small souvenirs for our families, though they felt slightly expensive. In the evening, we checked into a hotel, booked our bus back to Kathmandu, and spent time playing UNO with the group we had met earlier. It was simple but very enjoyable.",
      "Day 6: We said our goodbyes to the group and left for Kathmandu at 7 AM. By evening, I reached home.",
      "Langtang was more than just a trek—it was a journey through changing worlds. From dense forests echoing with rivers to silent valleys shaped by loss and resilience, every step carried a story. The melting snow feeding endless streams reminded me how everything in the mountains is alive, constantly transforming. The cold that once made me shiver also taught me warmth of fire-lit rooms, shared meals, and strangers becoming companions. The mountains tested us physically, but more importantly, they reset something inside us. Langtang didn’t just show me landscapes and mountains, it showed me silence, struggle, and beauty in their purest form."
    ],
    images: [
      { src: "/Photos/View From Bamboo.jpg", caption: "The soothing dusk view from Bamboo alongside the river" },
      { src: "/Photos/View From Kyanjin Ri.jpg", caption: "Panoramas opening up high on the trails of Kyanjin Ri" },
      { src: "/Photos/Tsergori's Trail.jpg", caption: "Traversing through layers of heavy mountain snow near the summit" },
      { src: "/Photos/Mountains.jpeg", caption: "Prayer flags welcoming us amidst the peaceful Himalayan silence" }
    ],
    insertAfter: [1, 3, 4, 7] // View From Bamboo photo renders precisely after Day 1
  },
  karnali: {
    title: "Koilabash to Karnali",
    subtitle: "Unexplored, Untouched and Raw Nepal",
    badge: "ROAD TRIP DIARY · 8 DAYS JOURNEY",
    themeColor: "#a855f7",
    bannerImg: IMG_KARN_BANNER,
    summary: "After completing my second semester during the break, my cousin and I took off on a motorcycle adventure from Dang, riding all the way across pristine lakes, suspension bridges, and into the raw, untouched beauty of Karnali...",
    paragraphs: [
      "After completing my second semester during the semester break, I visited my hometown, Dang. After a few days, my cousin also joined me. He managed a motorcycle, and together we took off on our little adventure.",
      "Our first destination was Purandhara, a famous waterfall located in the western part of Dang. The roaring water, cool breeze, and green surroundings made the place feel alive. On the same day, we continued further towards Hansapur, a place very special to our parents as they had spent most of their childhood there while completing their schooling. We even visited the same old school where they once studied. It felt nostalgic even for us, imagining the stories and memories connected to that place.",
      "While returning, we entered a Tharu cultural museum where we explored various aspects of Tharu culture, their traditional houses, weapons, tools, clothing, and daily-life equipment. It was unique and gave us a glimpse into a lifestyle deeply rooted in tradition.",
      "The next day, we requested our Fupaju to guide us to different places around the region. First, he took us to a lake called Jalbirey, located in Lamahi in the eastern part of Dang. Crossing the Rapti River through a suspension bridge nearly a kilometer long, we reached Fupaju’s ancestral home where we spent the night.",
      "The following morning, before sunrise, we rushed towards Koilabash, the India–Nepal border located in Dang. We had to leave early because we planned to return to Ghorahi for lunch and then continue towards Surkhet later in the day. At Koilabash, we explored the border area and observed several ancient buildings that carried the history within their walls. After spending some time there, we returned to Ghorahi, had lunch, and around 12 PM headed towards Surkhet.",
      "First, we caught a bus to Nepalgunj. After nearly three hours of travel, we reached Kohalpur at around 3 PM. We had some snacks, drank a refreshing glass of sugarcane juice, and continued our journey towards Surkhet. Until Kohalpur, I had already travelled once before, but Surkhet and everything beyond it were completely new to me. Since I love exploring unfamiliar places, every turn on the road felt exciting. At around 7 PM, we finally reached Surkhet where we met another Fupu and Fupaju, my cousin’s mom and dad.",
      "The next morning, our Karnali journey officially began. Early in the morning, we left for Manma, Kalikot. Every moment on the road was breathtaking in a way words can barely capture. The highway followed the mighty Karnali River, flowing freely through deep gorges beneath towering hills. The roads themselves were an adventure, 50% pitched road, 40% off-road, and the remaining 10% felt like no road at all. Driving through those narrow single-lane mountain highways with the deep Karnali flowing below us was both thrilling and terrifying.",
      "Crossing Surkhet and Dailekh, we finally reached Manma Bazaar at around 2 PM. Kalikot felt completely different from the rest of Nepal I had seen before. The entire settlement seemed to rest upon steep mountain slopes with the Karnali flowing far below. Looking at the topography, it almost felt as if one heavy landslide could sweep the entire hillside into the river, even though that’s impossible in reality. The geography itself looked dramatic and raw.",
      "There, we tasted local fish from the Karnali River along with the famous local red rice called Marsi rice. The simplicity of the meal somehow made it even more delicious. After lunch, we explored Manma Bazaar further. The landscapes, the people, and the atmosphere all felt untouched and authentic. I also got the chance to witness a local marriage ceremony. It was very different from the modern city weddings we are used to seeing; simple, traditional, and deeply connected to the local culture.",
      "The next day, we travelled towards Mugu. The road to Mugu was extremely rough; riding on it honestly felt like riding a horse because of the constant bumps and uneven tracks. Despite the difficult road, the beauty around us kept us energized. In Mugu, I explored local schools and villages, but one of the most memorable moments of the entire trip was dancing Deuda with the locals. Their energy, music, and togetherness made the experience unforgettable.",
      "From there, we headed towards Rara Lake. On the way, we stopped at Talcha Airport, and fortunately, we even witnessed a plane landing and taking off. Since flights there are very limited and scheduled only once or twice a week, it felt like a rare moment to witness as a traveler.",
      "A few kilometers before reaching Rara, we had to park our vehicle at an army barrack. From there, we chose horse riding to reach our hotel. The ride through the forest trails was incredibly fun and added a whole new experience to the journey. After nearly thirty minutes of horse riding, we finally reached Rara.",
      "Rara was beyond beautiful, it felt unreal. The deep blue water reflected the surrounding green hills like a giant mirror. The calmness of the lake, combined with the cool breeze and complete silence of nature, created a peaceful atmosphere that words struggle to describe. The pine forests surrounding the lake added even more charm, while the distant mountains stood quietly like guardians of the region. No wonder people say, “Rara ki Apsara.” The phrase perfectly matches its heavenly beauty. That evening, around 7 PM, we reached our hotel, had dinner, and rested. The next day, we spent our time fully exploring Rara and enjoying boating on its crystal-clear water. Floating peacefully in the middle of Nepal’s largest lake while surrounded by untouched wilderness felt magical.",
      "After exploring Rara, we headed towards another historic district ‘Jumla.’ Jumla carried a completely different atmosphere. The district felt rich with history, civilization, unique land structures, and traditional lifestyles. One thing that fascinated me most was the architecture of the houses there. The front yard of one house often served as the rooftop of the house below it. The houses appeared layered upon the hillsides in such a unique way that the entire settlement looked naturally woven into the mountains themselves. We spent a night in Jumla, explored the local markets, tasted local food, and bought souvenirs before finally returning to Surkhet. With that, our Karnali diary slowly came to an end.",
      "Karnali is not just a destination; it is an emotion hidden within the mountains of Nepal. From the roaring Karnali River flowing fearlessly through deep gorges to the peaceful silence of Rara Lake, every place carried its own identity and beauty. The roads were rough, the journeys exhausting, yet every turn revealed landscapes so raw and untouched that all the struggles felt insignificant.",
      "What makes Karnali truly special is its purity. The towering hills, scattered villages, ancient traditions, unique architecture, and warm-hearted locals together create a world completely different from the fast-moving cities. It feels unexplored, unfiltered, and deeply connected to nature. There are many beautiful places in Nepal, but Karnali possesses a rare kind of beauty; wild, silent, and honest. Some memories from Karnali can be written in words, but most of them can only be felt in the heart."
    ],
    images: [
      { src: IMG_KARN_THARU,  caption: "" },
      { src: IMG_KARN_JUMLA2, caption: "" },
      { src: IMG_KARN_RARA3,  caption: "" },
      { src: IMG_KARN_BANNER, caption: "" },
      
    ],
    insertAfter: [2, 6, 11, 12, 13] // Perfectly timed after Tharu, Surkhet highway, horse riding arrival, Rara exploration, and Jumla entry paragraphs
  }
};


function ArticlePage({ articleKey = "genz", onClose }) {
  useEffect(() => { window.scrollTo(0, 0); }, [articleKey]);
  
  // State for tracking the full-screen lightbox image
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);
  
  const currentPost = DIARY_POSTS[articleKey] || DIARY_POSTS.genz;
  const { title, subtitle, badge, themeColor, bannerImg, paragraphs, images, insertAfter } = currentPost;

  return (
    <div style={{ background: "#060a16", minHeight: "100vh", paddingBottom: 80 }}>
      {/* Article Navigation Bar */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(6,10,22,0.97)", backdropFilter: "blur(18px)", borderBottom: `1px solid ${themeColor}33`, padding: "0 2rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Share Tech Mono', monospace", color: themeColor, fontSize: 11, letterSpacing: 3 }}>{badge}</span>
          <button onClick={onClose} style={{ background: "none", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", fontFamily: "'Share Tech Mono', monospace", fontSize: 11, letterSpacing: 1.5, padding: "7px 16px", borderRadius: 6, cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.target.style.borderColor = themeColor; e.target.style.color = themeColor; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.color = "rgba(255,255,255,0.6)"; }}>
            ← BACK
          </button>
        </div>
      </div>

      {/* Hero Banner Banner */}
      <div style={{ position: "relative", height: 340, overflow: "hidden" }}>
        <img src={bannerImg} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #060a16 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 3rem", textAlign: "center" }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: themeColor, fontSize: 11, letterSpacing: 4, marginBottom: 16, opacity: 0.9 }}>{badge}</div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: 1.15, color: "#fff", maxWidth: 700 }}>
            {title} —<br/>
            <span style={{ color: themeColor }}>{subtitle}</span>
          </h1>
          <div style={{ marginTop: 20, fontFamily: "'Share Tech Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: 2 }}>BY ADHISH PAUDEL</div>
        </div>
      </div>

      {/* Article Core Layout Content */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 2rem 0" }}>
        {paragraphs.map((para, i) => {
          const imgIdx = insertAfter.indexOf(i);
          const isDayHeader = para.startsWith("Day 1") || para.startsWith("Day 2") || para.startsWith("Day 3") || para.startsWith("Day 4") || para.startsWith("Day 5") || para.startsWith("Day 6");

          return (
            <div key={i}>
              {isDayHeader ? (
                <h3 style={{ fontFamily: "'Share Tech Mono', monospace", color: themeColor, fontSize: "1.4rem", marginTop: 40, marginBottom: 15, borderBottom: `1px solid ${themeColor}1a`, paddingBottom: 6 }}>
                  {para.split(":")[0]}
                </h3>
              ) : null}
              
              <p style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.05rem", lineHeight: 1.95, color: "rgba(255,255,255,0.8)", textAlign: "justify", marginBottom: 24 }}>
                {isDayHeader ? para.substring(para.indexOf(":") + 1).trim() : para}
              </p>
              
              {imgIdx !== -1 && images[imgIdx] && (
                <div 
                  onClick={() => setActiveLightboxImg(images[imgIdx])}
                  style={{ 
                    margin: "36px 0 44px", 
                    borderRadius: 14, 
                    overflow: "hidden", 
                    border: `1px solid ${themeColor}40`, 
                    boxShadow: `0 8px 40px ${themeColor}14`,
                    cursor: "zoom-in",
                    transition: "transform 0.25s ease-in-out"
                  }}
                  className="blog-image-wrapper"
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.015)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                >
                  <img src={images[imgIdx].src} alt={images[imgIdx].caption || "Blog snapshot"} style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: 460 }} />
                  {images[imgIdx].caption && (
                    <div style={{ background: `${themeColor}0f`, padding: "14px 20px", fontFamily: "'Sora', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", fontStyle: "italic", lineHeight: 1.55 }}>
                      {images[imgIdx].caption} <span style={{ float: "right", fontStyle: "normal", opacity: 0.6, fontSize: "0.75rem" }}>🔍 CLICK TO EXPAND</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Signature Element Footer */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${themeColor}1a`, border: `1px solid ${themeColor}33`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontFamily: "'Share Tech Mono', monospace", color: themeColor, fontWeight: "bold" }}>A</div>
          <div>
            <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>Adhish Paudel</div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: 1.5, marginTop: 3 }}>KATHMANDU, NEPAL</div>
          </div>
        </div>

        <button onClick={onClose} style={{ marginTop: 48, display: "block", background: `${themeColor}14`, border: `1px solid ${themeColor}4d`, color: themeColor, fontFamily: "'Share Tech Mono', monospace", fontSize: 11, letterSpacing: 2, padding: "12px 28px", borderRadius: 8, cursor: "pointer", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = `${themeColor}2e`; }}
          onMouseLeave={e => { e.currentTarget.style.background = `${themeColor}14`; }}>
          ← BACK TO PORTFOLIO
        </button>
      </div>

      {/* LIGHTBOX DIALOG OVERLAY VIEW */}
      {activeLightboxImg && (
        <div 
          onClick={() => setActiveLightboxImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(3, 5, 11, 0.95)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            cursor: "zoom-out",
            animation: "fadeIn 0.2s ease"
          }}
        >
          {/* Top Close Control Label */}
          <div style={{ position: "absolute", top: 20, right: 30, color: "rgba(255,255,255,0.5)", fontFamily: "'Share Tech Mono', monospace", fontSize: 12, letterSpacing: 2 }}>
            CLOSE ×
          </div>

          {/* Full Screen Projected Frame */}
          <img 
            src={activeLightboxImg.src} 
            alt="Expanded view" 
            style={{
              maxWidth: "90%",
              maxHeight: "75vh",
              objectFit: "contain",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 80px rgba(0,0,0,0.7)"
            }} 
          />

          {/* Caption Text Banner inside Lightbox */}
          {activeLightboxImg.caption && (
            <p style={{
              marginTop: 20,
              color: "rgba(255,255,255,0.8)",
              fontFamily: "'Sora', sans-serif",
              fontSize: "0.95rem",
              textAlign: "center",
              maxWidth: 600,
              lineHeight: 1.6
            }}>
              {activeLightboxImg.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
function Blog({ onOpenArticle }) {
  return (
    <section id="blog" style={{ padding: "100px 0" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 18, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>05. Notebook & Diaries</div>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "white" }}>Latest <span style={{ color: "#00d4ff" }}>Writings</span></h2>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
        gap: "35px",
        maxWidth: "1140px", 
        margin: "0 auto", 
        padding: "0 20px" 
      }}>
        {Object.keys(DIARY_POSTS).map((key) => {
          const item = DIARY_POSTS[key];
          return (
            <div
              key={key}
              onClick={() => onOpenArticle(key)}
              style={{
                background: "#0d1a2e",
                borderRadius: "16px",
                cursor: "pointer",
                border: `1px solid ${item.themeColor}30`,
                transition: "all 0.35s ease",
                overflow: "hidden",
                boxShadow: `0 8px 40px ${item.themeColor}0f`,
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = item.themeColor;
                e.currentTarget.style.boxShadow = `0 16px 60px ${item.themeColor}24`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = `${item.themeColor}30`;
                e.currentTarget.style.boxShadow = `0 8px 40px ${item.themeColor}0f`;
              }}
            >
              <div style={{ position: "relative", height: 190, overflow: "hidden" }}>
                <img src={item.bannerImg} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.45)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #0d1a2e 100%)" }} />
                <div style={{ position: "absolute", top: 14, left: 14, background: `${item.themeColor}2e`, border: `1px solid ${item.themeColor}66`, borderRadius: 6, padding: "4px 10px", fontFamily: "'Share Tech Mono', monospace", fontSize: 9, color: item.themeColor, letterSpacing: 1.5 }}>
                  {item.badge}
                </div>
              </div>

              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ color: "#fff", fontSize: "1.35rem", fontFamily: "'Sora', sans-serif", fontWeight: 800, margin: "0 0 6px 0" }}>
                  {item.title}
                </h3>
                <h5 style={{ fontFamily: "'Share Tech Mono', monospace", color: item.themeColor, margin: "0 0 16px 0", fontSize: "0.88rem", fontWeight: 400 }}>
                  {item.subtitle}
                </h5>
                <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontFamily: "'Sora', sans-serif", fontSize: "0.92rem", textAlign: "justify", margin: "0 0 24px 0" }}>
                  {item.summary}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${item.themeColor}1a`, border: `1px solid ${item.themeColor}33`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontFamily: "'Share Tech Mono', monospace", color: item.themeColor, fontWeight: "bold" }}>A</div>
                    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>Adhish</span>
                  </div>
                  <div style={{ color: item.themeColor, fontSize: "0.82rem", fontFamily: "'Share Tech Mono', monospace", letterSpacing: 1, display: "flex", alignItems: "center", gap: 4 }}>
                    READ FULL ARTICLE <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
          <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 18, letterSpacing: 4, marginBottom: 8 }}>
            06.MOMENTS
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
        <div style={{ fontFamily: "'Share Tech Mono', monospace", color: "#00d4ff", fontSize: 18, letterSpacing: 4, marginBottom: 12, opacity: 0.75 }}>
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
  
  // Changed from a boolean to a key selector ('null', 'genz', or 'langtang')
  const [articleKey, setArticleKey] = useState(null);

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
        .hero-grid {
          grid-template-columns: 1fr 1fr;
        }
        .hero-image {
          display: flex;
          justify-content: flex-end;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .hero-image {
            display: flex;
            justify-content: center;
            order: -1;
          }
          .hero-image img {
            max-width: 100%;
            height: auto;
          }
        }
        .about-grid {
          grid-template-columns: 1fr;
        }
        .about-grid > div:last-child {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 30px;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 30px;
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
      
      {/* Dynamic Conditional Display Toggle */}
      {articleKey ? (
        <ArticlePage 
          articleKey={articleKey} 
          onClose={() => { 
            setArticleKey(null); 
            setTimeout(() => { document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" }); }, 100); 
          }} 
        />
      ) : (
        <div style={{ background: "#060a16", minHeight: "100vh", paddingTop: "70px" }}>
          <Navbar active={activeSection} />
          <Hero />
          
          {/* Kept your about section parameters safe */}
          <About articleOpen={!!articleKey} setArticleOpen={(val) => setArticleKey(val ? "genz" : null)} />
          
          <Skills />
          <Projects />
          <Academic />
          
          {/* Dynamically captures whether you selected 'genz' or 'langtang' from the matrix cards */}
          <Blog onOpenArticle={(key) => setArticleKey(key)} />
          
          <Gallery />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}