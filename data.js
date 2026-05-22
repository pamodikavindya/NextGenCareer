// data.js - NextGen Career: 25 Global Career Tracks with REAL working resource links
const careerTracksData = {
  frontend_dev: {
    title: "Frontend Developer",
    desc: "Master modern UI engineering with React, Vue, and performance optimization.",
    icon_class: "fab fa-html5",
    steps: [
      { id: "fe1", num: 1, time: "Weeks 1-3", title: "HTML5 & CSS3 Fundamentals", body: "Semantic HTML, Flexbox, Grid, responsive design, accessibility basics.", tags: ["HTML5", "CSS3", "Responsive"], link: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
      { id: "fe2", num: 2, time: "Weeks 4-8", title: "JavaScript & DOM Mastery", body: "ES6+, async patterns, event loop, DOM manipulation, fetch API.", tags: ["JavaScript", "ES6", "DOM"], link: "https://javascript.info/" },
      { id: "fe3", num: 3, time: "Weeks 9-14", title: "React + Ecosystem", body: "Components, state, hooks, context, React Router, Next.js basics.", tags: ["React", "Next.js", "State Management"], link: "https://react.dev/learn" },
      { id: "fe4", num: 4, time: "Weeks 15-18", title: "Performance & Tooling", body: "Webpack, Vite, Lighthouse, Core Web Vitals, testing (Jest).", tags: ["Webpack", "Jest", "Performance"], link: "https://web.dev/learn/#performance" }
    ]
  },
  backend_eng: {
    title: "Backend Engineer", desc: "Build scalable APIs, databases, and server-side logic.", icon_class: "fas fa-server",
    steps: [
      { id: "be1", num: 1, time: "Weeks 1-4", title: "Node.js & Express", body: "RESTful APIs, middleware, routing, error handling.", tags: ["Node.js", "Express"], link: "https://nodejs.org/en/docs/guides/getting-started-guide/" },
      { id: "be2", num: 2, time: "Weeks 5-8", title: "SQL & PostgreSQL", body: "Database design, joins, indexes, migrations.", tags: ["SQL", "PostgreSQL"], link: "https://www.postgresqltutorial.com/" },
      { id: "be3", num: 3, time: "Weeks 9-12", title: "Authentication & Security", body: "JWT, OAuth, hashing, CORS, Helmet.js.", tags: ["JWT", "OAuth", "Security"], link: "https://auth0.com/docs" }
    ]
  },
  fullstack_dev: {
    title: "Full-Stack Developer", desc: "Combine frontend + backend to deliver complete applications.", icon_class: "fas fa-layer-group",
    steps: [
      { id: "fs1", num: 1, time: "Weeks 1-5", title: "MERN Stack Foundation", body: "MongoDB, Express, React, Node integration.", tags: ["MERN", "MongoDB"], link: "https://www.mongodb.com/docs/manual/" },
      { id: "fs2", num: 2, time: "Weeks 6-10", title: "REST & GraphQL", body: "Build APIs and GraphQL with Apollo.", tags: ["GraphQL", "REST"], link: "https://graphql.org/learn/" },
      { id: "fs3", num: 3, time: "Weeks 11-15", title: "Deployment & CI/CD", body: "Docker basics, Vercel, Heroku, GitHub Actions.", tags: ["Docker", "CI/CD"], link: "https://docs.docker.com/get-started/" }
    ]
  },
  devops_spec: {
    title: "DevOps Specialist", desc: "Automate infrastructure, CI/CD pipelines, cloud monitoring.", icon_class: "fas fa-cloud-upload-alt",
    steps: [
      { id: "do1", num: 1, time: "Weeks 1-4", title: "Linux & Scripting", body: "Bash, system administration, process management.", tags: ["Linux", "Bash"], link: "https://linuxjourney.com/" },
      { id: "do2", num: 2, time: "Weeks 5-9", title: "Docker & Kubernetes", body: "Containerization, pods, services, kubectl.", tags: ["Docker", "K8s"], link: "https://kubernetes.io/docs/tutorials/" },
      { id: "do3", num: 3, time: "Weeks 10-14", title: "CI/CD & Monitoring", body: "Jenkins, GitHub Actions, Prometheus, Grafana.", tags: ["Jenkins", "Prometheus"], link: "https://prometheus.io/docs/introduction/overview/" }
    ]
  },
  mobile_dev: {
    title: "Mobile App Developer", desc: "Flutter & React Native – cross-platform apps.", icon_class: "fab fa-android",
    steps: [
      { id: "mob1", num: 1, time: "Weeks 1-5", title: "Flutter/Dart Basics", body: "Widgets, state, navigation, Firebase integration.", tags: ["Flutter", "Dart"], link: "https://docs.flutter.dev/get-started/install" },
      { id: "mob2", num: 2, time: "Weeks 6-10", title: "React Native", body: "Hooks, navigation, native modules, Expo.", tags: ["React Native", "Expo"], link: "https://reactnative.dev/docs/getting-started" },
      { id: "mob3", num: 3, time: "Weeks 11-14", title: "App Store Deployment", body: "iOS/Android signing, store listings, upgrades.", tags: ["Deployment", "App Store"], link: "https://developer.apple.com/app-store/submitting/" }
    ]
  },
  ui_ux_designer: {
    title: "UI/UX Designer", desc: "Human‑centered design, prototyping, user research.", icon_class: "fas fa-paint-brush",
    steps: [
      { id: "ux1", num: 1, time: "Weeks 1-3", title: "Design Principles", body: "Typography, color theory, spacing, accessibility.", tags: ["Figma", "UI"], link: "https://www.figma.com/resources/learn-design/" },
      { id: "ux2", num: 2, time: "Weeks 4-7", title: "Wireframing & Prototyping", body: "Figma, Sketch, interactive prototypes.", tags: ["Figma", "Prototyping"], link: "https://www.interaction-design.org/literature/topics/prototyping" },
      { id: "ux3", num: 3, time: "Weeks 8-12", title: "User Research & Testing", body: "Usability tests, surveys, analytics.", tags: ["UX Research", "Testing"], link: "https://www.nngroup.com/articles/usability-testing-101/" }
    ]
  },
  data_scientist: {
    title: "Data Scientist", desc: "Machine learning, statistical analysis, Python.", icon_class: "fas fa-chart-line",
    steps: [
      { id: "ds1", num: 1, time: "Weeks 1-5", title: "Python Data Stack", body: "Pandas, NumPy, Matplotlib, Jupyter.", tags: ["Python", "Pandas"], link: "https://pandas.pydata.org/docs/getting_started/" },
      { id: "ds2", num: 2, time: "Weeks 6-11", title: "Machine Learning", body: "Scikit-learn, regression, classification, clustering.", tags: ["Scikit-learn", "ML"], link: "https://scikit-learn.org/stable/tutorial/index.html" },
      { id: "ds3", num: 3, time: "Weeks 12-16", title: "Deep Learning & AI", body: "TensorFlow, Keras, neural networks.", tags: ["TensorFlow", "Deep Learning"], link: "https://www.tensorflow.org/tutorials" }
    ]
  },
  data_engineer: {
    title: "Data Engineer", desc: "ETL pipelines, data warehousing, Spark.", icon_class: "fas fa-database",
    steps: [
      { id: "de1", num: 1, time: "Weeks 1-4", title: "SQL & Data Modeling", body: "Advanced SQL, star schema, normalization.", tags: ["SQL", "Data Modeling"], link: "https://mode.com/sql-tutorial/" },
      { id: "de2", num: 2, time: "Weeks 5-9", title: "Big Data (Spark/Hadoop)", body: "PySpark, DataFrames, HDFS.", tags: ["Spark", "Hadoop"], link: "https://spark.apache.org/docs/latest/quick-start.html" },
      { id: "de3", num: 3, time: "Weeks 10-14", title: "Cloud Data Warehouses", body: "BigQuery, Redshift, Airflow.", tags: ["BigQuery", "Airflow"], link: "https://cloud.google.com/bigquery/docs" }
    ]
  },
  cyber_security: {
    title: "Cyber Security Analyst", desc: "Threat monitoring, ethical hacking, compliance.", icon_class: "fas fa-shield-alt",
    steps: [
      { id: "sec1", num: 1, time: "Weeks 1-5", title: "Network Security", body: "Firewalls, IDS/IPS, VPN, Wireshark.", tags: ["Network Security", "Wireshark"], link: "https://www.wireshark.org/docs/" },
      { id: "sec2", num: 2, time: "Weeks 6-10", title: "Ethical Hacking", body: "Kali Linux, Metasploit, vulnerability scanning.", tags: ["Kali", "Metasploit"], link: "https://www.kali.org/docs/" },
      { id: "sec3", num: 3, time: "Weeks 11-15", title: "SIEM & Incident Response", body: "Splunk, ELK stack, IR playbooks.", tags: ["SIEM", "Incident Response"], link: "https://www.elastic.co/guide/index.html" }
    ]
  },
  cloud_architect: {
    title: "Cloud Architect (AWS/Azure)", desc: "Design resilient, scalable cloud solutions.", icon_class: "fab fa-aws",
    steps: [
      { id: "ca1", num: 1, time: "Weeks 1-4", title: "Cloud Fundamentals", body: "IaaS, PaaS, regions, AZs, pricing.", tags: ["AWS", "Cloud Concepts"], link: "https://aws.amazon.com/training/learn-about/" },
      { id: "ca2", num: 2, time: "Weeks 5-10", title: "AWS Solutions Architect", body: "EC2, S3, VPC, IAM, Lambda.", tags: ["AWS", "Lambda"], link: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html" },
      { id: "ca3", num: 3, time: "Weeks 11-15", title: "Azure & Multi-cloud", body: "Azure AD, AKS, Terraform.", tags: ["Azure", "Terraform"], link: "https://learn.microsoft.com/en-us/azure/architecture/" }
    ]
  },
  ai_ml_engineer: {
    title: "AI / Machine Learning Engineer", desc: "Build and deploy production ML models.", icon_class: "fas fa-brain",
    steps: [
      { id: "ai1", num: 1, time: "Weeks 1-6", title: "ML Engineering", body: "Feature engineering, model evaluation, pipelines.", tags: ["Scikit-learn", "MLOps"], link: "https://mlops.community/" },
      { id: "ai2", num: 2, time: "Weeks 7-12", title: "Deep Learning (PyTorch)", body: "Neural networks, CNNs, RNNs.", tags: ["PyTorch", "CNN"], link: "https://pytorch.org/tutorials/" },
      { id: "ai3", num: 3, time: "Weeks 13-18", title: "ML Deployment", body: "TensorFlow Serving, Docker, FastAPI.", tags: ["FastAPI", "Deployment"], link: "https://www.tensorflow.org/tfx/guide/serving" }
    ]
  },
  blockchain_dev: {
    title: "Blockchain Developer", desc: "Smart contracts, dApps, Solidity.", icon_class: "fab fa-ethereum",
    steps: [
      { id: "bc1", num: 1, time: "Weeks 1-4", title: "Blockchain Basics", body: "Cryptography, consensus, wallets.", tags: ["Cryptography", "Ethereum"], link: "https://ethereum.org/en/developers/docs/" },
      { id: "bc2", num: 2, time: "Weeks 5-10", title: "Solidity & Smart Contracts", body: "ERC20, ERC721, Hardhat, Truffle.", tags: ["Solidity", "Hardhat"], link: "https://soliditylang.org/docs/" },
      { id: "bc3", num: 3, time: "Weeks 11-14", title: "Web3 Integration", body: "ethers.js, MetaMask, dApp frontend.", tags: ["Web3.js", "dApp"], link: "https://web3js.readthedocs.io/" }
    ]
  },
  qa_automation: {
    title: "QA / Automation Tester", desc: "Automated testing, CI integration, Selenium.", icon_class: "fas fa-vial",
    steps: [
      { id: "qa1", num: 1, time: "Weeks 1-3", title: "Testing Fundamentals", body: "Unit, integration, regression.", tags: ["Jest", "JUnit"], link: "https://jestjs.io/docs/getting-started" },
      { id: "qa2", num: 2, time: "Weeks 4-8", title: "Selenium & Cypress", body: "Web automation, selectors, reporting.", tags: ["Selenium", "Cypress"], link: "https://www.selenium.dev/documentation/" },
      { id: "qa3", num: 3, time: "Weeks 9-12", title: "Performance & API Testing", body: "JMeter, Postman, k6.", tags: ["Postman", "JMeter"], link: "https://learning.postman.com/docs/getting-started/introduction/" }
    ]
  },
  product_manager: {
    title: "Product Manager", desc: "Product strategy, roadmaps, agile delivery.", icon_class: "fas fa-chalkboard-user",
    steps: [
      { id: "pm1", num: 1, time: "Weeks 1-4", title: "Product Discovery", body: "User stories, market research, MVP.", tags: ["Agile", "MVP"], link: "https://www.productplan.com/learn/product-discovery/" },
      { id: "pm2", num: 2, time: "Weeks 5-8", title: "Roadmapping & Metrics", body: "OKRs, KPIs, product analytics.", tags: ["Analytics", "OKRs"], link: "https://www.productroadmap.com/" },
      { id: "pm3", num: 3, time: "Weeks 9-12", title: "Stakeholder Management", body: "Communication, prioritization frameworks.", tags: ["Leadership", "Prioritization"], link: "https://www.scrum.org/resources/blog/stakeholder-management-agile-teams" }
    ]
  },
  scrum_master: {
    title: "Scrum Master / Agile PM", desc: "Facilitate Scrum, remove impediments, coach teams.", icon_class: "fas fa-people-arrows",
    steps: [
      { id: "sm1", num: 1, time: "Weeks 1-3", title: "Agile & Scrum Framework", body: "Roles, events, artifacts, user stories.", tags: ["Scrum", "Agile"], link: "https://www.scrumguides.org/" },
      { id: "sm2", num: 2, time: "Weeks 4-7", title: "Facilitation & Coaching", body: "Retrospectives, conflict resolution.", tags: ["Facilitation", "Coaching"], link: "https://www.agilealliance.org/agile101/" },
      { id: "sm3", num: 3, time: "Weeks 8-10", title: "Metrics & Improvement", body: "Burndown, velocity, cycle time.", tags: ["Metrics", "Jira"], link: "https://www.atlassian.com/agile/scrum/burndown-charts" }
    ]
  },
  business_analyst: {
    title: "Business Analyst", desc: "Bridge stakeholders & tech: requirements, process modelling.", icon_class: "fas fa-chart-simple",
    steps: [
      { id: "ba1", num: 1, time: "Weeks 1-4", title: "Requirements Engineering", body: "BRD, FRD, use cases, user stories.", tags: ["BABOK", "Requirements"], link: "https://www.iiba.org/babok-guide/" },
      { id: "ba2", num: 2, time: "Weeks 5-8", title: "Data & Process Modeling", body: "UML, BPMN, ER diagrams.", tags: ["UML", "BPMN"], link: "https://www.uml.org/" },
      { id: "ba3", num: 3, time: "Weeks 9-12", title: "Tools: Jira, Confluence, SQL", body: "Querying data for analysis.", tags: ["SQL", "Jira"], link: "https://www.atlassian.com/software/jira/features" }
    ]
  },
  digital_marketing: {
    title: "Digital Marketing Specialist", desc: "SEO, content, analytics, PPC campaigns.", icon_class: "fas fa-chart-line",
    steps: [
      { id: "dm1", num: 1, time: "Weeks 1-3", title: "SEO & Content Marketing", body: "Keyword research, on-page SEO, backlinks.", tags: ["SEO", "Content"], link: "https://developers.google.com/search/docs" },
      { id: "dm2", num: 2, time: "Weeks 4-7", title: "Social Media & PPC", body: "Google Ads, Meta Ads, analytics.", tags: ["PPC", "Google Ads"], link: "https://ads.google.com/intl/en_us/home/resources/" },
      { id: "dm3", num: 3, time: "Weeks 8-11", title: "Analytics & Reporting", body: "Google Analytics 4, Data Studio.", tags: ["GA4", "Data Studio"], link: "https://support.google.com/analytics/answer/9304153" }
    ]
  },
  game_dev: {
    title: "Game Developer (Unity/Unreal)", desc: "2D/3D game mechanics, C#, Blueprints.", icon_class: "fas fa-gamepad",
    steps: [
      { id: "gd1", num: 1, time: "Weeks 1-5", title: "Unity C# Fundamentals", body: "GameObjects, physics, UI, animations.", tags: ["Unity", "C#"], link: "https://learn.unity.com/" },
      { id: "gd2", num: 2, time: "Weeks 6-11", title: "Unreal Engine Blueprints", body: "Visual scripting, level design, materials.", tags: ["Unreal", "Blueprints"], link: "https://docs.unrealengine.com/5.0/en-US/blueprints-visual-scripting-in-unreal-engine/" },
      { id: "gd3", num: 3, time: "Weeks 12-16", title: "Game Optimization & Publishing", body: "Profiling, Steam/console deployment.", tags: ["Optimization", "Steam"], link: "https://partner.steamgames.com/doc/store" }
    ]
  },
  embedded_systems: {
    title: "Embedded Systems Engineer", desc: "C/C++, microcontrollers, IoT.", icon_class: "fas fa-microchip",
    steps: [
      { id: "emb1", num: 1, time: "Weeks 1-4", title: "Embedded C & ARM", body: "Registers, interrupts, memory mapping.", tags: ["C", "ARM"], link: "https://www.arm.com/resources/education/online-courses" },
      { id: "emb2", num: 2, time: "Weeks 5-9", title: "RTOS & Peripherals", body: "FreeRTOS, I2C, SPI, UART.", tags: ["RTOS", "IoT"], link: "https://www.freertos.org/Documentation/FreeRTOS-documentation.html" },
      { id: "emb3", num: 3, time: "Weeks 10-14", title: "Hardware Integration", body: "PCB design basics, debugging.", tags: ["Hardware", "Debugging"], link: "https://www.arduino.cc/en/Tutorial/HomePage" }
    ]
  },
  network_admin: {
    title: "Network Administrator", desc: "Cisco, routing, switching, network security.", icon_class: "fas fa-network-wired",
    steps: [
      { id: "net1", num: 1, time: "Weeks 1-5", title: "CCNA Fundamentals", body: "OSI model, subnetting, routing protocols.", tags: ["CCNA", "Routing"], link: "https://www.netacad.com/courses/ccna-intro-networking" },
      { id: "net2", num: 2, time: "Weeks 6-10", title: "Switching & VLANs", body: "STP, EtherChannel, VLAN trunking.", tags: ["Switching", "VLAN"], link: "https://www.cisco.com/c/en/us/support/docs/lan-switching/vlan/107936-56.html" },
      { id: "net3", num: 3, time: "Weeks 11-14", title: "Network Automation", body: "Python, Ansible, SDN basics.", tags: ["Python", "Ansible"], link: "https://www.ansible.com/resources/get-started" }
    ]
  },
  dba: {
    title: "Database Administrator (DBA)", desc: "Performance tuning, backup, high availability.", icon_class: "fas fa-database",
    steps: [
      { id: "dba1", num: 1, time: "Weeks 1-4", title: "Advanced SQL & Indexing", body: "Query optimization, execution plans.", tags: ["SQL", "Indexing"], link: "https://use-the-index-luke.com/" },
      { id: "dba2", num: 2, time: "Weeks 5-9", title: "Admin (PostgreSQL/MySQL)", body: "Backup strategies, replication, user mgmt.", tags: ["PostgreSQL", "Backup"], link: "https://www.postgresql.org/docs/current/admin.html" },
      { id: "dba3", num: 3, time: "Weeks 10-13", title: "Cloud Databases & Monitoring", body: "RDS, Azure SQL, Prometheus.", tags: ["Cloud DB", "Monitoring"], link: "https://aws.amazon.com/rds/" }
    ]
  },
  it_support: {
    title: "IT Support Specialist", desc: "Help desk, troubleshooting, hardware/software.", icon_class: "fas fa-headset",
    steps: [
      { id: "its1", num: 1, time: "Weeks 1-3", title: "CompTIA A+ Core", body: "Hardware, OS, networking basics.", tags: ["CompTIA", "Hardware"], link: "https://www.comptia.org/certifications/a" },
      { id: "its2", num: 2, time: "Weeks 4-6", title: "Ticketing & Remote Tools", body: "ServiceNow, TeamViewer, Active Directory.", tags: ["Active Directory", "Ticketing"], link: "https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/getting-started" },
      { id: "its3", num: 3, time: "Weeks 7-10", title: "Customer Service & Scripting", body: "PowerShell basics, soft skills.", tags: ["PowerShell", "Soft Skills"], link: "https://docs.microsoft.com/en-us/powershell/scripting/overview" }
    ]
  },
  solutions_architect: {
    title: "Solutions Architect", desc: "Translate business requirements into technical architecture.", icon_class: "fas fa-building",
    steps: [
      { id: "sa1", num: 1, time: "Weeks 1-5", title: "Architecture Patterns", body: "Microservices, event-driven, serverless.", tags: ["Microservices", "Serverless"], link: "https://microservices.io/" },
      { id: "sa2", num: 2, time: "Weeks 6-11", title: "Designing for Scale", body: "Load balancing, caching, CDN, queues.", tags: ["Scalability", "Caching"], link: "https://aws.amazon.com/architecture/" },
      { id: "sa3", num: 3, time: "Weeks 12-16", title: "Enterprise Integration", body: "API gateways, ESB, governance.", tags: ["APIs", "Governance"], link: "https://www.redhat.com/en/topics/integration/what-is-enterprise-integration" }
    ]
  },
  growth_hacker: {
    title: "Growth Hacker", desc: "Data-driven marketing, A/B testing, viral loops.", icon_class: "fas fa-rocket",
    steps: [
      { id: "gh1", num: 1, time: "Weeks 1-3", title: "Growth Frameworks", body: "AARRR, experimentation mindset.", tags: ["AARRR", "Experiments"], link: "https://www.productled.org/frameworks/aarrr" },
      { id: "gh2", num: 2, time: "Weeks 4-7", title: "Analytics & A/B Testing", body: "Mixpanel, Optimizely, cohort analysis.", tags: ["A/B testing", "Analytics"], link: "https://www.optimizely.com/optimization-glossary/ab-testing/" },
      { id: "gh3", num: 3, time: "Weeks 8-11", title: "Automation & CRM", body: "HubSpot, email sequences, retargeting.", tags: ["CRM", "Automation"], link: "https://www.hubspot.com/products/crm" }
    ]
  },
  cyber_forensics: {
    title: "Cyber Forensics Investigator", desc: "Digital evidence, incident response, forensic tools.", icon_class: "fas fa-search",
    steps: [
      { id: "cf1", num: 1, time: "Weeks 1-5", title: "Digital Forensics Basics", body: "Chain of custody, forensic imaging.", tags: ["Forensics", "Encase"], link: "https://www.nist.gov/computer-forensics" },
      { id: "cf2", num: 2, time: "Weeks 6-10", title: "Memory & Disk Analysis", body: "Volatility, Autopsy, FTK.", tags: ["Volatility", "Autopsy"], link: "https://www.sleuthkit.org/autopsy/" },
      { id: "cf3", num: 3, time: "Weeks 11-15", title: "Incident Response & Reporting", body: "IR lifecycle, legal compliance.", tags: ["Incident Response", "Reporting"], link: "https://www.sans.org/white-papers/incident-response/" }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) module.exports = { careerTracksData };