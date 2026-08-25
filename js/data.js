/**
 * DATA.JS — single source of truth for the entire portfolio.
 *
 * To update your portfolio permanently: edit this file and redeploy
 * (git commit + push -- GitHub Pages picks it up automatically).
 *
 * You can ALSO edit everything live in the browser via Edit Mode (the
 * pencil icon, bottom-right) -- changes there save to your browser's
 * localStorage instantly, and you can hit "Export data.js" to download
 * an updated version of this exact file to replace this one with.
 */
const PORTFOLIO_DATA = {
  person: {
    name: "Gourishankar Shiragur",
    title: "Data Engineer",
    tagline: "Azure Databricks · PySpark · ADF · Delta Lake · Spark Structured Streaming",
    location: "Bengaluru, India",
    email: "gouri.shankar2421@gmail.com",
    phone: "+91-8431637006",
    github: "https://github.com/Gourishshiragur",
    linkedin: "",
    resumeFile: "assets/resume.pdf",
  },

  summary:
    "Data Engineer with 3+ years building production-grade batch and streaming pipelines on " +
    "Azure Databricks, PySpark, ADF, and Delta Lake. Delivered Bronze-Silver-Gold Lakehouse " +
    "pipelines processing daily datasets from 10-50 customer sources at HCL Technologies, " +
    "alongside independently built pipeline projects extending that experience into incremental " +
    "batch design, micro-batch idempotency, and real-time streaming with SCD Type 2.",

  strengths: [
    "Production Lakehouse pipelines at multi-customer scale",
    "Delta Lake MERGE / SCD Type 2 upsert design",
    "Spark performance tuning (partition pruning, broadcast joins, Z-Ordering)",
    "Manufacturing background enables faster onboarding onto factory/plant (Industry 4.0) data",
  ],

  skills: [
    {
      category: "Big Data & Processing",
      items: ["Apache Spark", "PySpark", "Spark SQL", "Spark Structured Streaming", "Delta Lake"],
    },
    {
      category: "Cloud & Platforms",
      items: ["Azure Databricks", "Azure Data Factory (ADF)", "ADLS Gen2", "AWS S3 (working)", "Glue (working)", "EMR (working)"],
    },
    {
      category: "Data Engineering",
      items: ["Medallion Architecture", "Incremental Processing", "CDC", "SCD Type 2", "Micro-Batch Processing", "Metadata-driven Pipelines"],
    },
    {
      category: "Databases & Querying",
      items: ["SQL", "Delta Tables", "Window Functions", "Query Optimization", "MERGE/Upserts"],
    },
    {
      category: "Streaming",
      items: ["Structured Streaming", "Checkpointing", "Watermarking", "Exactly-once Processing"],
    },
    {
      category: "Performance Tuning",
      items: ["Partitioning", "Broadcast Joins", "Caching", "Partition Pruning", "Z-Ordering", "File Compaction"],
    },
    {
      category: "Governance & Quality",
      items: ["Unity Catalog", "RBAC", "Data Lineage", "Schema Evolution", "Audit Frameworks", "Data Quality Validation"],
    },
    {
      category: "DevOps & Languages",
      items: ["Git", "GitHub Actions (CI/CD)", "Jenkins (working)", "Python", "SQL", "Java"],
    },
  ],

  // "Pipeline Runs" == work experience, styled as execution history
  runs: [
    {
      company: "HCL Technologies",
      role: "Senior Developer — Data Engineering",
      period: "Oct 2021 – Mar 2025",
      location: "Bengaluru, India",
      status: "SUCCEEDED",
      stack: ["Azure Databricks", "PySpark", "ADF", "Delta Lake"],
      metrics: [
        { label: "customer sources", value: "10–50" },
        { label: "daily telemetry volume", value: "30–50 GB" },
        { label: "recovery SLA", value: "4 hrs" },
      ],
      highlights: [
        "Owned Bronze-Silver-Gold batch pipelines on Azure Databricks and ADF, transforming daily snapshot datasets from 10-50 customer machine-telemetry sources into analytics-ready curated outputs.",
        "Engineered PySpark Silver-layer logic — cleansing, standardization, deduplication, null-handling — with schema validation gating every downstream release across millions of daily records.",
        "Designed comparison-based incremental-load logic that meaningfully cut reprocessing volume versus full multi-GB reloads, reducing daily pipeline runtime from hours to under 45 minutes.",
        "Drove root-cause analysis and controlled replay/reprocessing within a 4-hour recovery SLA, backed by audit logging and metadata traceability.",
        "Established data quality gates before every Gold-layer publish, catching issues before they reached downstream consumers.",
        "Implemented Unity Catalog-based access control and data lineage tracking across Gold-layer datasets to support governance and audit requirements.",
        "Set up Jenkins-based CI/CD for Databricks notebook and ADF pipeline deployments, standardizing the promotion path from development to production.",
      ],
    },
    {
      company: "Independent Data Engineering Projects",
      role: "Self-directed portfolio build",
      period: "2025 – 2026",
      location: "Remote",
      status: "SUCCEEDED",
      stack: ["Databricks", "ADF", "Delta Lake", "Structured Streaming"],
      metrics: [
        { label: "projects in portfolio", value: "4" },
        { label: "replay scenarios tested", value: "100" },
        { label: "streaming latency (local test)", value: "~15-25s" },
      ],
      highlights: [
        "Extended HCL production experience into architectures not covered day-to-day: incremental batch design, micro-batch idempotency, and real-time streaming with SCD Type 2.",
        "Built 4 portfolio projects with automated test coverage, Databricks notebook + ADF orchestration layers, and public GitHub repos; CI/CD pipelines live on GitHub Actions.",
      ],
    },
    {
      company: "Mahindra Aerospace Pvt. Ltd.",
      role: "Methods Engineer",
      period: "Jul 2018 – Mar 2019",
      location: "India",
      status: "SUCCEEDED",
      stack: ["AutoCAD", "Process Planning"],
      metrics: [],
      highlights: [
        "Supported aerospace manufacturing operations through process planning, method-sheet preparation, and AutoCAD-based engineering documentation.",
      ],
    },
    {
      company: "Simha Manufacturing Company",
      role: "Project Engineer",
      period: "May 2016 – Jul 2017",
      location: "India",
      status: "SUCCEEDED",
      stack: ["AutoCAD", "BOM", "Process Design"],
      metrics: [],
      highlights: [
        "Worked on process design, AutoCAD drawings, BOM preparation, and material traceability with shop-floor and vendor coordination.",
      ],
    },
    {
      company: "Southern Machine Industries",
      role: "Production Trainee",
      period: "Feb 2015 – Apr 2016",
      location: "Pune, India",
      status: "SUCCEEDED",
      stack: ["Manufacturing Ops", "Quality Docs"],
      metrics: [],
      highlights: [
        "Gained hands-on exposure to manufacturing operations, production workflows, and quality documentation practices.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.)",
      school: "Visvesvaraya Technological University (VTU), Belagavi",
      period: "",
    },
  ],

  // "Gold" == curated project deliverables
  projects: [
    {
      name: "Incremental Batch Data Pipeline",
      subtitle: "Bronze–Silver–Gold on Azure Databricks",
      description:
        "Production-style incremental batch pipeline modeling large-scale transactional snapshot data at 1-2 million records per run, with Delta Lake MERGE-based upsert logic keyed on natural record identity to avoid full-table reloads on incremental updates. Live CI/CD on GitHub Actions.",
      stack: ["Databricks", "ADLS", "ADF", "Delta Lake", "PySpark"],
      metric: "~1-2M records/run",
      github: "https://github.com/Gourishshiragur/increment_batch_pipeline",
      demo: "",
    },
    {
      name: "Micro-Batch Processing Pipeline",
      subtitle: "Idempotent retries, zero duplicate writes",
      description:
        "Idempotent micro-batch ingestion with full Bronze-Silver-Gold medallion processing, runnable identically as a local CLI job or as chained Databricks notebooks against the same shared codebase. Delta MERGE upserts and a dependency-ordered retry executor, tested to zero duplicate writes across 100 replay attempts.",
      stack: ["Databricks", "ADF", "Delta Lake", "PySpark", "pytest"],
      metric: "0 duplicates / 100 replays",
      github: "https://github.com/Gourishshiragur/micro-batch-pipeline",
      demo: "",
    },
    {
      name: "Real-Time Streaming Pipeline (SCD Type 2)",
      subtitle: "Structured Streaming on Databricks Jobs",
      description:
        "Spark Structured Streaming for banking account-state tracking, with watermarking and checkpoint recovery, full SCD Type 2 history tracking with effective dating, and schema evolution handling that quarantines type-drifted records. Correctly handles late-arriving and same-window changed events.",
      stack: ["Databricks Jobs", "Structured Streaming", "Delta Lake", "SCD2"],
      metric: "~15-25s latency (local single-node test)",
      github: "https://github.com/Gourishshiragur/banking-streaming-scd2-pipeline",
      demo: "",
    },
    {
      name: "DataDoctor AI",
      subtitle: "Agentic Lakehouse ops console",
      description:
        "Enterprise-style ops console: visual pipeline builder, monitor & repair for failed runs, and an agentic AI console (RAG + tool calling via Claude API) that diagnoses failed steps from logs and proposes fixes — deployable free on Streamlit Community Cloud.",
      stack: ["Streamlit", "Claude API", "Python", "Agentic AI"],
      metric: "Observe → reason → act",
      github: "https://github.com/Gourishshiragur/DataDoctor-AI",
      demo: "",
    },
  ],
};
