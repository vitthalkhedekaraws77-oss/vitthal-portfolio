export const portfolioData = {
  personal: {
    name: "Vitthal Khedekar",
    role: "Full Stack Node.js Developer & AWS Cloud Specialist",
    tagline: "Building scalable MERN stack web applications, resilient microservices, and automated AWS cloud deployment pipelines.",
    location: "Pune, Maharashtra, India",
    email: "vittalkhedekardev77@gmail.com",
    phone: "+91-7796240277",
    githubUsername: "vitthalkhedekaraws77-oss",
    githubUrl: "https://github.com/vitthalkhedekaraws77-oss",
    linkedinUrl: "https://linkedin.com/in/vitthalkhedekar",
    status: "Available for Full-Time Roles & High-Impact Cloud Projects",
    experienceYears: "2+",
    uptimeRecord: "99.98%",
    servicesMastered: "10+",
    bio: "Full Stack Engineer with 2+ years of hands-on production experience specializing in building secure, high-throughput RESTful APIs using Node.js & Express, reactive frontends with React.js & Redux, and architecting automated zero-downtime CI/CD deployment pipelines on AWS cloud infrastructure."
  },

  stats: [
    { label: "Production Experience", value: "2+ Years", sub: "Visionary World Infotech" },
    { label: "AWS Cloud Services", value: "10+", sub: "VPC, EC2, RDS, S3 & more" },
    { label: "Pipeline Reliability", value: "99.9%", sub: "Docker & Jenkins CI/CD" },
    { label: "API Response Average", value: "<45ms", sub: "Optimized Node/Express" }
  ],

  badges: [
    { name: "Node.js", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
    { name: "React.js", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
    { name: "AWS Cloud Specialist", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
    { name: "Docker", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
    { name: "Jenkins CI/CD", color: "text-red-400 border-red-500/30 bg-red-500/10" },
    { name: "MongoDB", color: "text-green-400 border-green-500/30 bg-green-500/10" }
  ],

  skillsCategories: [
    {
      id: "fullstack",
      title: "Full-Stack Web Development",
      description: "Building scalable, end-to-end web apps with Node.js, Express, and React",
      skills: [
        { name: "Node.js", level: 92, badge: "Advanced", desc: "Event-loop optimization, async/await, stream processing, microservices" },
        { name: "Express.js", level: 90, badge: "Advanced", desc: "RESTful architecture, custom middleware, error handling, rate limiting" },
        { name: "React.js", level: 88, badge: "Advanced", desc: "Hooks, component lifecycle, virtual DOM performance, modern UI" },
        { name: "Redux / Redux Toolkit", level: 85, badge: "Proficient", desc: "Global state management, slices, asynchronous thunks, caching" },
        { name: "REST APIs & JSON", level: 94, badge: "Expert", desc: "RESTful design standards, versioning, status codes, payload validation" },
        { name: "JWT & RBAC Security", level: 90, badge: "Advanced", desc: "Token authentication, refresh cycles, role-based access control" },
        { name: "Axios & Fetch API", level: 92, badge: "Advanced", desc: "HTTP interceptors, request retry strategies, auth headers" },
        { name: "HTML5 & Modern CSS3", level: 90, badge: "Advanced", desc: "Semantic markup, responsive flexbox/grid, CSS animations" }
      ]
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure (AWS)",
      description: "Architecting resilient, highly-available, and cost-optimized cloud solutions",
      skills: [
        { name: "Amazon EC2", level: 92, badge: "Expert", desc: "Compute sizing, AMI provisioning, Key pairs, User Data automation" },
        { name: "Amazon VPC", level: 88, badge: "Advanced", desc: "CIDR blocks, public/private subnets, NAT gateways, route tables" },
        { name: "Amazon S3", level: 92, badge: "Expert", desc: "Object lifecycle, bucket policies, static asset delivery, presigned URLs" },
        { name: "Amazon RDS (MySQL)", level: 86, badge: "Advanced", desc: "Multi-AZ setup, automated backups, read replicas, connection pooling" },
        { name: "AWS CloudWatch", level: 88, badge: "Advanced", desc: "Custom metrics, log groups, alarms, CPU/memory auto triggers" },
        { name: "Application Load Balancer (ALB)", level: 86, badge: "Advanced", desc: "Target groups, SSL termination, path-based routing, health checks" },
        { name: "Auto Scaling Groups (ASG)", level: 84, badge: "Proficient", desc: "Scaling policies, dynamic compute expansion, load balancing" },
        { name: "AWS IAM", level: 90, badge: "Advanced", desc: "Least privilege policies, roles for EC2/Lambda, access keys" },
        { name: "Amazon Route 53 & CloudFront", level: 82, badge: "Proficient", desc: "DNS routing, SSL certificates with ACM, CDN edge caching" }
      ]
    },
    {
      id: "devops",
      title: "DevOps & Automation",
      description: "Automating pipelines, containerizing workloads, and orchestrating deployments",
      skills: [
        { name: "Docker", level: 90, badge: "Advanced", desc: "Multi-stage builds, minimal images, volume persistence, Docker Compose" },
        { name: "Jenkins CI/CD", level: 88, badge: "Advanced", desc: "Declarative pipelines, webhook triggers, automated test/build/deploy" },
        { name: "Nginx (Reverse Proxy)", level: 88, badge: "Advanced", desc: "Reverse proxying, load distribution, gzip compression, SSL certs" },
        { name: "Linux Administration", level: 88, badge: "Advanced", desc: "Ubuntu/Debian, bash scripting, systemd services, SSH hardening" },
        { name: "Git & GitHub", level: 94, badge: "Expert", desc: "Git branching strategies, merge conflict resolution, GitHub actions" },
        { name: "Process Management (PM2)", level: 90, badge: "Advanced", desc: "Cluster mode, zero-downtime reloads, logs & memory limits" }
      ]
    },
    {
      id: "databases",
      title: "Databases & Storage",
      description: "Designing schemas, indexing, and optimizing data persistence layers",
      skills: [
        { name: "MongoDB (Atlas)", level: 90, badge: "Advanced", desc: "Schema design with Mongoose, aggregation pipelines, replica sets" },
        { name: "MySQL", level: 86, badge: "Advanced", desc: "Relational schema design, normalization, foreign keys, transactions" },
        { name: "Amazon RDS", level: 85, badge: "Advanced", desc: "Managed relational database engine, automated snapshots" },
        { name: "Data Modeling & Indexing", level: 88, badge: "Advanced", desc: "Compound indexes, query explain plans, write concern optimization" }
      ]
    },
    {
      id: "networking",
      title: "Networking & Security",
      description: "Enforcing zero-trust network boundaries, SSL encryption, and API robustness",
      skills: [
        { name: "TCP/IP & OSI Model", level: 88, badge: "Advanced", desc: "Protocols, port management, packet flow, DNS resolution" },
        { name: "VPC Subnetting & CIDR", level: 86, badge: "Advanced", desc: "Network isolation, public DMZ, isolated private database layers" },
        { name: "Security Groups & NACLs", level: 90, badge: "Advanced", desc: "Stateful firewall rules, stateless subnet filtering, port lockdown" },
        { name: "SSL / TLS Encryption", level: 90, badge: "Advanced", desc: "Let's Encrypt Certbot, HTTPS redirection, end-to-end data encryption" },
        { name: "Postman & API Testing", level: 92, badge: "Expert", desc: "Automated test collections, environment variables, contract testing" }
      ]
    }
  ],

  experience: [
    {
      role: "Full Stack Node.js Developer",
      company: "Visionary World Infotech Pvt. Ltd.",
      period: "March 2025 - Present",
      location: "Pune, Maharashtra, India",
      type: "Full-Time",
      description: "Leading the development of mission-critical full stack applications, microservices architecture, and managing end-to-end AWS cloud infrastructure and CI/CD pipelines.",
      highlights: [
        "Architected and implemented high-performance RESTful APIs using Node.js & Express, introducing JWT authentication and granular Role-Based Access Control (RBAC).",
        "Engineered modular and responsive frontend interfaces using React.js, Redux Toolkit, and Axios, improving user engagement and page load times by 35%.",
        "Provisioned, configured, and secured AWS cloud infrastructure across VPCs, public/private subnets, EC2 instances, S3 buckets, and RDS databases.",
        "Created automated CI/CD deployment pipelines using Jenkins and Docker, reducing deployment cycle times from manual hours to sub-5-minute automated builds.",
        "Configured Nginx as a reverse proxy with SSL termination and established AWS CloudWatch alarms for 24/7 proactive system telemetry."
      ],
      technologies: ["Node.js", "Express.js", "React.js", "Redux", "AWS EC2", "AWS VPC", "AWS S3", "AWS RDS", "Docker", "Jenkins", "MongoDB", "Nginx", "Linux"]
    }
  ],

  projects: [
    {
      id: "digital-banking",
      title: "Digital Banking Transaction Monitoring Platform",
      category: "Fintech & Cloud Microservices",
      description: "An enterprise-grade transaction surveillance and monitoring web application designed to track high-volume account activities, enforce role-based access, and detect suspicious patterns in real-time.",
      image: "banking",
      metrics: [
        { label: "API Latency", value: "<40ms" },
        { label: "Security Level", value: "Bank-Grade RBAC" },
        { label: "Deployment", value: "AWS EC2 + Docker" },
        { label: "Uptime", value: "99.95%" }
      ],
      highlights: [
        "Engineered role-based portals for System Admins, Compliance Officers, and Support Specialists with fine-grained permission enforcement via JWT & RBAC.",
        "Built responsive live transaction monitoring dashboards in React.js with real-time status filtering and transaction detail drill-downs.",
        "Provisioned AWS EC2 inside a secure Virtual Private Cloud (VPC) with Nginx reverse proxying requests to dockerized Node.js services.",
        "Integrated AWS S3 for secure audit log and compliance statement storage with strict IAM bucket policies.",
        "Established automated Jenkins CI/CD pipeline triggering automated Docker builds and zero-downtime rolling container redeployment."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "AWS EC2", "AWS S3", "AWS VPC", "Docker", "Jenkins", "Nginx", "JWT", "Tailwind CSS"],
      github: "https://github.com/vitthalkhedekaraws77-oss/digital-banking-monitoring",
      demoType: "simulated-banking"
    },
    {
      id: "cloud-ecommerce",
      title: "Cloud-Native Scalable E-Commerce Platform",
      category: "E-Commerce & High Availability",
      description: "A production-ready e-commerce solution architected for high availability, automatic compute scaling during flash sales, and decoupled microservices with Amazon RDS and S3.",
      image: "ecommerce",
      metrics: [
        { label: "Auto Scaling", value: "1 to 10 Nodes" },
        { label: "Load Balancer", value: "AWS ALB Multi-AZ" },
        { label: "Database", value: "Amazon RDS MySQL" },
        { label: "CDN", value: "CloudFront + S3" }
      ],
      highlights: [
        "Implemented full e-commerce lifecycle: product catalog with dynamic multi-filter indexing, persistent cart state, and order tracking.",
        "Configured AWS Application Load Balancer (ALB) coupled with Auto Scaling Groups (ASG) to handle spontaneous traffic spikes seamlessly.",
        "Transitioned database layer to Amazon RDS (MySQL) with automated snapshots, connection pooling, and Multi-AZ standby replica.",
        "Integrated AWS S3 + CloudFront CDN for ultra-fast product image delivery and media asset caching.",
        "Automated Docker containerization and Jenkins declarative pipeline with automated regression test validation before container spin-up."
      ],
      techStack: ["MERN Stack", "Node.js", "Express.js", "React.js", "Amazon RDS", "AWS ALB", "Auto Scaling", "AWS S3", "Docker", "Jenkins", "Nginx"],
      github: "https://github.com/vitthalkhedekaraws77-oss/cloud-native-ecommerce",
      demoType: "simulated-ecommerce"
    },
    {
      id: "devops-telemetry",
      title: "Microservices CI/CD Pipeline & CloudWatch Telemetry Engine",
      category: "DevOps & Cloud Telemetry",
      description: "An automated infrastructure and deployment orchestrator that builds, scans, containerizes, and rolls out Node.js microservices with real-time AWS CloudWatch metric alarms.",
      image: "devops",
      metrics: [
        { label: "Build Time", value: "<3.5 mins" },
        { label: "Rollback", value: "Instant Automated" },
        { label: "Zero Downtime", value: "100% Blue/Green" },
        { label: "Monitoring", value: "CloudWatch Alarms" }
      ],
      highlights: [
        "Configured multi-branch Jenkins CI/CD pipeline connected with GitHub Webhooks for continuous integration on pull requests.",
        "Dockerized backend microservices using multi-stage lightweight Alpine images with automated vulnerability scanning.",
        "Implemented Nginx reverse proxy configuration with automatic SSL renewal via Certbot and rate-limiting to mitigate DDoS threats.",
        "Configured AWS CloudWatch alarms that trigger SNS notifications when CPU utilization exceeds 80% or 5xx error rates spike."
      ],
      techStack: ["Node.js", "Docker", "Jenkins", "AWS CloudWatch", "AWS EC2", "Nginx", "Linux Bash", "Git", "Postman"],
      github: "https://github.com/vitthalkhedekaraws77-oss/aws-devops-cicd-pipeline",
      demoType: "simulated-pipeline"
    }
  ],

  architectureSteps: [
    {
      id: 1,
      step: "01",
      title: "Developer Code",
      category: "Source & Quality",
      icon: "Code2",
      summary: "Clean code written in VS Code / IDE with ESLint & Prettier validation",
      details: "Node.js/Express backend APIs and React frontend modules are developed adhering to modular architecture, strict typing conventions, and unit tests.",
      badge: "Local Dev",
      snippet: `// Express API Endpoint Example with RBAC middleware
router.post('/api/v1/transactions', 
  authenticateJWT, 
  authorizeRole(['ADMIN', 'COMPLIANCE']), 
  validatePayload(transactionSchema), 
  async (req, res, next) => {
    const result = await transactionService.process(req.body);
    res.status(201).json({ success: true, data: result });
});`,
      snippetLang: "javascript",
      checklist: ["Clean MVC / Microservice Architecture", "Input Validation with Joi / Zod", "Environment variables separated in .env"]
    },
    {
      id: 2,
      step: "02",
      title: "GitHub Repository",
      category: "Version Control",
      icon: "GitBranch",
      summary: "Branching workflow, protected main branch, automated webhook trigger",
      details: "Code is pushed to GitHub with feature branches. Pull requests require review before merging to main, automatically triggering Jenkins webhook payloads.",
      badge: "vitthalkhedekaraws77-oss",
      snippet: `# Git Branching & Webhook Flow
git checkout -b feature/jwt-rbac-auth
git commit -m "feat(security): implement RBAC middleware and JWT refresh cycle"
git push origin feature/jwt-rbac-auth
# Pull Request merged -> GitHub Webhook fires POST to Jenkins Server`,
      snippetLang: "bash",
      checklist: ["Protected branch rules", "Commit linting & semantic messages", "Automated Webhook payload sent over HTTPS"]
    },
    {
      id: 3,
      step: "03",
      title: "Jenkins CI/CD",
      category: "Build & Test Automation",
      icon: "Cpu",
      summary: "Automated test suite, lint check, artifact build, and Docker image packaging",
      details: "Jenkins server pulls latest commit, runs npm test suites, builds production React assets, and creates optimized Docker images tagged with commit SHA.",
      badge: "Automated Pipeline",
      snippet: `pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'vitthalkhedekar/banking-app'
    }
    stages {
        stage('Checkout & Test') {
            steps {
                sh 'npm ci'
                sh 'npm run test:ci'
            }
        }
        stage('Docker Build') {
            steps {
                sh "docker build -t \${DOCKER_IMAGE}:\${BUILD_NUMBER} ."
            }
        }
    }
}`,
      snippetLang: "groovy",
      checklist: ["Zero manual intervention", "Automated rollback on failed tests", "Artifact versioning with unique build numbers"]
    },
    {
      id: 4,
      step: "04",
      title: "Docker Container",
      category: "Containerization",
      icon: "Box",
      summary: "Lightweight multi-stage container image with isolated runtime",
      details: "Containerizes the application using Alpine base images to minimize image footprint (<120MB), guaranteeing identical runtime execution across all environments.",
      badge: "Docker Alpine",
      snippet: `# Production Multi-Stage Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

FROM node:20-alpine
WORKDIR /app
USER node
COPY --from=builder /app /app
EXPOSE 5000
CMD ["node", "server.js"]`,
      snippetLang: "dockerfile",
      checklist: ["Non-root user execution ('node')", "Multi-stage build discarding devDependencies", "Strict healthcheck instruction"]
    },
    {
      id: 5,
      step: "05",
      title: "AWS EC2 / Nginx",
      category: "Production Cloud Hosting",
      icon: "Server",
      summary: "Reverse proxy, SSL termination, and Docker container orchestration",
      details: "Deploys to AWS EC2 instances residing in private subnets. Nginx acts as high-speed reverse proxy with SSL termination, forwarding traffic to local Docker ports.",
      badge: "AWS VPC + Nginx",
      snippet: `# /etc/nginx/sites-available/app.conf
upstream node_backend {
    server 127.0.0.1:5000;
    keepalive 64;
}
server {
    listen 443 ssl http2;
    server_name api.vitthalkhedekar.dev;
    ssl_certificate /etc/letsencrypt/live/api.vitthalkhedekar.dev/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.vitthalkhedekar.dev/privkey.pem;

    location / {
        proxy_pass http://node_backend;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
    }
}`,
      snippetLang: "nginx",
      checklist: ["HTTPS enforced via Let's Encrypt", "Security Groups restrict port 5000 to localhost", "Gzip compression & header hardening"]
    },
    {
      id: 6,
      step: "06",
      title: "CloudWatch Telemetry",
      category: "Monitoring & Alarms",
      icon: "Activity",
      summary: "Real-time metrics, log streaming, and automated health threshold alarms",
      details: "CloudWatch Agent streams system memory, disk I/O, and application error logs. Alarms trigger automated email notifications and auto-recovery if instances degrade.",
      badge: "24/7 Telemetry",
      snippet: `{
  "AlarmName": "High-CPU-Utilization-Node-API",
  "MetricName": "CPUUtilization",
  "Namespace": "AWS/EC2",
  "Statistic": "Average",
  "Period": 300,
  "EvaluationPeriods": 2,
  "Threshold": 80.0,
  "ComparisonOperator": "GreaterThanOrEqualToThreshold",
  "AlarmActions": ["arn:aws:sns:ap-south-1:123456789012:DevOpsAlerts"]
}`,
      snippetLang: "json",
      checklist: ["CPU/Memory alarms at 80% threshold", "Aggregated JSON log streams", "Automated recovery action on failure"]
    }
  ],

  resumeData: {
    name: "Vitthal Khedekar",
    title: "Full Stack Node.js Developer & AWS Cloud Specialist",
    contact: {
      phone: "+91-7796240277",
      email: "vittalkhedekardev77@gmail.com",
      location: "Pune, Maharashtra, India",
      github: "github.com/vitthalkhedekaraws77-oss",
      linkedin: "linkedin.com/in/vitthalkhedekar"
    },
    summary: "Dynamic and results-driven Full Stack Developer with 2+ years of experience in building and deploying scalable web applications using the MERN stack and AWS cloud infrastructure. Proven expertise in developing robust RESTful APIs with Node.js/Express, state-driven frontends with React.js, provisioning AWS infrastructure (EC2, S3, RDS, VPC), and implementing automated CI/CD pipelines with Docker and Jenkins.",
    skillsSummary: [
      "Languages & Core: JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL, Bash Scripting",
      "Backend: Node.js, Express.js, REST APIs, Microservices, JWT, RBAC, Socket.io",
      "Frontend: React.js, Redux / Redux Toolkit, Axios, Tailwind CSS, Responsive Design",
      "Cloud (AWS): EC2, S3, RDS (MySQL), IAM, VPC, ALB, Auto Scaling, CloudWatch, Route 53",
      "DevOps: Docker, Jenkins CI/CD, Nginx, Linux (Ubuntu), Git/GitHub, PM2",
      "Databases: MongoDB Atlas, MySQL, Amazon RDS, Mongoose ODM"
    ],
    experience: [
      {
        role: "Full Stack Node.js Developer",
        company: "Visionary World Infotech Pvt. Ltd.",
        period: "March 2025 - Present",
        location: "Pune, India",
        points: [
          "Developed high-throughput RESTful APIs using Node.js & Express with JWT and RBAC security standards.",
          "Designed and built modern reactive web interfaces using React.js and Redux Toolkit, integrating with backend endpoints.",
          "Configured and maintained AWS infrastructure including VPC networking, EC2 compute instances, S3 storage, and RDS MySQL.",
          "Built and maintained continuous integration and deployment pipelines using Docker containers and Jenkins automation.",
          "Implemented Nginx reverse proxy configurations, SSL/TLS certificates, and AWS CloudWatch logging and alarms."
        ]
      }
    ],
    education: {
      degree: "Bachelor of Engineering / Computer Science",
      institution: "Pune University",
      status: "Completed"
    }
  }
};
