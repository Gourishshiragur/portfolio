/**
 * RENDER.JS — reads directly from js/data.js and populates the DOM.
 *
 * To update your portfolio: edit js/data.js, commit, and push. GitHub Pages
 * redeploys automatically -- there's no in-browser edit mode, deliberately:
 * a static site has no backend to persist live edits for other visitors,
 * so editing the source file is the one true way to change the site.
 */
function renderPortfolio() {
  const data = PORTFOLIO_DATA;
  const { person, summary, strengths, skills, runs, education, projects } = data;

  // ---- Hero / meta ----
  document.title = `${person.name} — ${person.title}`;
  setText("heroName", person.name);
  setText("heroTagline", person.tagline);
  setText("heroSummary", summary);
  setText("summaryText", summary);
  setText("footerName", person.name);
  setText("brandMark", initials(person.name));

  const heroGithub = document.getElementById("heroGithub");
  if (heroGithub) heroGithub.href = person.github;

  setText("metaLocation", person.location);
  const githubEl = document.getElementById("metaGithub");
  githubEl.href = person.github;
  githubEl.textContent = person.github.replace("https://", "");

  const mailtoUrl = (email, subject) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  // Profile card: email + phone are hidden together behind one reveal button
  // (not injected into the page as plain text up front). Once revealed, the
  // email shows as a real mailto: link with the actual address as its text --
  // works with whatever mail client the visitor has set as default, and the
  // address itself is genuinely visible once revealed, not just an action button.
  const revealBtn = document.getElementById("revealContactBtn");
  const contactDetails = document.getElementById("contactDetails");
  revealBtn.addEventListener("click", () => {
    const emailEl = document.getElementById("metaEmail");
    emailEl.href = mailtoUrl(person.email, "Hello from your portfolio");
    emailEl.textContent = person.email;
    document.getElementById("metaPhone").textContent = person.phone;
    contactDetails.hidden = false;
    revealBtn.hidden = true;
  });

  // Contact section CTA: a real mailto: link showing the actual address
  const contactEmailBtn = document.getElementById("contactEmail");
  contactEmailBtn.href = mailtoUrl(person.email, "Hello from your portfolio");
  contactEmailBtn.textContent = person.email;
  const contactGithub = document.getElementById("contactGithub");
  contactGithub.href = person.github;

  const resumeBtn = document.getElementById("resumeBtn");
  if (resumeBtn) resumeBtn.href = person.resumeFile;

  // ---- Strengths ----
  const strengthsList = document.getElementById("strengthsList");
  strengthsList.innerHTML = strengths.map((s) => `<li>${s}</li>`).join("");

  // ---- Education ----
  const eduBlock = document.getElementById("educationBlock");
  eduBlock.innerHTML = education
    .map(
      (e) => `<div class="edu-item"><strong>${e.degree}</strong>${e.school}${e.period ? " · " + e.period : ""}</div>`
    )
    .join("");

  // ---- Skills ----
  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = skills
    .map(
      (cat) => `
      <div class="card skill-card">
        <h3>${cat.category}</h3>
        <div class="skill-badges">
          ${cat.items.map((i) => `<span class="badge">${i}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");

  // ---- Runs (experience) ----
  const runsList = document.getElementById("runsList");
  runsList.innerHTML = runs
    .map(
      (r) => `
      <div class="card run-card">
        <div class="run-head">
          <div>
            <div class="run-title">${r.company}</div>
            <div class="run-role">${r.role}${r.location ? " · " + r.location : ""}</div>
          </div>
          <div style="text-align:right">
            <span class="status-pill">${r.status || "SUCCEEDED"}</span>
            <div class="run-period">${r.period}</div>
          </div>
        </div>
        ${
          r.metrics && r.metrics.length
            ? `<div class="run-metrics">${r.metrics
                .map((m) => `<div class="run-metric"><span class="val">${m.value}</span><span class="lbl">${m.label}</span></div>`)
                .join("")}</div>`
            : ""
        }
        <ul class="run-highlights">${r.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
        <div class="run-stack">${(r.stack || []).map((s) => `<span class="badge">${s}</span>`).join("")}</div>
      </div>`
    )
    .join("");

  // ---- Projects ----
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = projects
    .map(
      (p) => `
      <div class="card project-card">
        <div class="project-name">${p.name}</div>
        <div class="project-subtitle">${p.subtitle}</div>
        <p class="project-desc">${p.description}</p>
        ${p.metric ? `<div class="project-metric">${p.metric}</div>` : ""}
        <div class="project-stack">${p.stack.map((s) => `<span class="badge">${s}</span>`).join("")}</div>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">Repo ↗</a>` : ""}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Live demo ↗</a>` : ""}
        </div>
      </div>`
    )
    .join("");
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// ---- Scrollspy for the pipeline rail ----
function initRailScrollspy() {
  const sections = ["bronze", "silver", "runs", "gold", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const nodes = document.querySelectorAll(".rail-node");

  nodes.forEach((node) => {
    node.addEventListener("click", () => {
      const target = document.getElementById(node.dataset.target);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          nodes.forEach((n) => n.classList.toggle("active", n.dataset.target === entry.target.id));
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => observer.observe(s));
}

document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio();
  initRailScrollspy();
});

window.renderPortfolio = renderPortfolio;
