import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={styles.container}>
      <Background />
      <Navbar />
      <Hero />
      <Apps />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

/* BACKGROUND */
function Background() {
  return (
    <>
      <div style={styles.bg1}></div>
      <div style={styles.bg2}></div>
    </>
  );
}

/* NAVBAR */
function Navbar() {
  return (
    <div style={styles.nav}>
      <h2>Gourishankar</h2>
      <div>
        <a href="#apps" style={styles.link}>Apps</a>
        <a href="#about" style={styles.link}>About</a>
      </div>
    </div>
  );
}

/* HERO */
function Hero() {
  return (
    <div style={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.title}
      >
        AI + Data Engineer
      </motion.h1>

      <p style={styles.subtitle}>
        Building intelligent data pipelines and AI-powered platforms
      </p>
    </div>
  );
}

/* APPS */
function Apps() {
  return (
    <div id="apps" style={styles.section}>
      <h2>🚀 Featured Application</h2>

      <AppCard
        title="DataDoctor AI"
        desc="AI-powered system that detects, analyzes, and auto-fixes data pipeline issues."
        img="/app1.png"
        app="https://github.com/Gourishshiragur/commerce-doctor-ai"
        github="https://github.com/Gourishshiragur/commerce-doctor-ai"
      />
    </div>
  );
}

/* APP CARD */
function AppCard({ title, desc, img, app, github }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 40px rgba(124,58,237,0.4)",
      }}
      whileTap={{ scale: 0.98 }}
      style={styles.card}
    >
      <div style={styles.imageWrapper}>
        <img src={img} style={styles.image} />
        <div style={styles.imageOverlay}></div>
      </div>

      <h3>{title}</h3>
      <p>{desc}</p>

      <div style={{ marginTop: "10px" }}>
        {app && (
          <a href={app} target="_blank">
            <button style={styles.primaryBtn}>Open App</button>
          </a>
        )}
        {github && (
          <a href={github} target="_blank">
            <button style={styles.secondaryBtn}>GitHub</button>
          </a>
        )}
      </div>
    </motion.div>
  );
}

/* PROJECTS */
function Projects() {
  return (
    <div style={styles.section}>
      <h2>📊 Data Engineering Projects</h2>

      <ProjectCard
        title="Mining Telemetry Pipeline"
        desc="ADF + Databricks Bronze-Silver-Gold architecture"
        github="https://github.com/Gourishshiragur/mining-telemetry-pipeline"
      />

      <ProjectCard
        title="CDC Streaming Pipeline"
        desc="Kafka + Spark + SCD Type 2 processing"
        github="#"
      />

      <ProjectCard
        title="Micro Batch Pipeline"
        desc="Idempotent pipeline with retry & reconciliation"
        github="#"
      />

      <ProjectCard
        title="Incremental Batch Pipeline"
        desc="Delta MERGE + snapshot comparison"
        github="#"
      />
    </div>
  );
}

/* PROJECT CARD */
function ProjectCard({ title, desc, github }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        boxShadow: "0 0 30px rgba(37,99,235,0.3)",
      }}
      style={styles.card}
    >
      <h3>{title}</h3>
      <p>{desc}</p>

      {github && github !== "#" && (
        <a href={github} target="_blank">
          <button style={styles.secondaryBtn}>View Code</button>
        </a>
      )}
    </motion.div>
  );
}

/* SKILLS */
function Skills() {
  return (
    <div style={styles.section}>
      <h2>⚡ Skills & Expertise</h2>

      <div style={styles.skillsGrid}>
        <SkillBlock title="Data Engineering" items="Batch, Streaming, SCD2, Data Modeling" />
        <SkillBlock title="Tools" items="Azure, Databricks, ADF, Delta Lake" />
        <SkillBlock title="Languages" items="Python, SQL, PySpark" />
        <SkillBlock title="Advanced" items="Spark Internals, Optimization, Debugging" />
        <SkillBlock title="AI" items="LLM Integration, AI Debugging Systems" />
      </div>
    </div>
  );
}

function SkillBlock({ title, items }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} style={styles.skillCard}>
      <h3>{title}</h3>
      <p>{items}</p>
    </motion.div>
  );
}

/* ABOUT */
function About() {
  return (
    <div id="about" style={styles.section}>
      <h2>👤 About Me</h2>

      <p style={styles.text}>
        Data Engineer specializing in Azure, Databricks, and PySpark.
      </p>

      <p style={styles.text}>
        Building scalable pipelines, streaming systems, and AI-driven solutions.
      </p>

      <p style={styles.text}>
        Creator of DataDoctor AI for intelligent pipeline debugging.
      </p>
    </div>
  );
}

/* FOOTER */
function Footer() {
  return <div style={styles.footer}>© 2026 Gourishankar</div>;
}

/* STYLES */
const styles = {
  container: {
    background: "#07070a",
    color: "white",
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
  },

  bg1: {
    position: "fixed",
    width: "400px",
    height: "400px",
    background: "#7c3aed",
    filter: "blur(140px)",
    top: "10%",
    left: "10%",
    opacity: 0.4,
  },

  bg2: {
    position: "fixed",
    width: "400px",
    height: "400px",
    background: "#2563eb",
    filter: "blur(140px)",
    bottom: "10%",
    right: "10%",
    opacity: 0.4,
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    position: "sticky",
    top: 0,
    backdropFilter: "blur(10px)",
    background: "rgba(0,0,0,0.4)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  link: {
    marginLeft: "20px",
    color: "#aaa",
    textDecoration: "none",
  },

  hero: {
    padding: "120px 40px",
  },

  title: {
    fontSize: "56px",
    fontWeight: "700",
    background: "linear-gradient(90deg, #7c3aed, #2563eb)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#aaa",
    marginTop: "12px",
    fontSize: "18px",
  },

  section: {
    padding: "60px 40px",
  },

  text: {
    color: "#aaa",
    marginTop: "10px",
    maxWidth: "700px",
  },

  card: {
    background: "rgba(255,255,255,0.04)",
    backdropFilter: "blur(20px)",
    padding: "20px",
    marginTop: "25px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  imageWrapper: {
    position: "relative",
    height: "220px",
    overflow: "hidden",
    borderRadius: "12px",
    marginBottom: "12px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  imageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "40%",
    background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
  },

  primaryBtn: {
    background: "linear-gradient(135deg, #7c3aed, #2563eb)",
    color: "#fff",
    padding: "8px 14px",
    border: "none",
    marginRight: "10px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  secondaryBtn: {
    background: "transparent",
    color: "#fff",
    padding: "8px 14px",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "8px",
    cursor: "pointer",
  },

  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  skillCard: {
    background: "rgba(255,255,255,0.04)",
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  footer: {
    textAlign: "center",
    padding: "40px",
    color: "#777",
  },
};