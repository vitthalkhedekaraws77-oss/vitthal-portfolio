import React, { useState } from 'react';
import { 
  Server, 
  Cloud, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Terminal, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Play, 
  Check, 
  Copy, 
  X, 
  Menu, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Custom SVG Icons
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function SingleFilePortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeStep, setActiveStep] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(1);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const personal = {
    name: "Vitthal Khedekar",
    role: "Full Stack Node.js Developer & AWS Cloud Specialist",
    tagline: "2+ years of experience building scalable MERN stack web applications, RESTful microservices, and automated AWS cloud deployment pipelines.",
    location: "Pune, Maharashtra, India",
    email: "vittalkhedekardev77@gmail.com",
    phone: "+91-7796240277",
    githubUrl: "https://github.com/vitthalkhedekaraws77-oss",
    company: "Visionary World Infotech Pvt. Ltd.",
    period: "March 2025 - Present"
  };

  const skillsData = [
    { cat: 'web', name: 'Node.js & Express.js', level: 92, badge: 'Advanced', desc: 'RESTful microservices, JWT authentication, RBAC authorization, custom middleware.' },
    { cat: 'web', name: 'React.js & Redux', level: 88, badge: 'Advanced', desc: 'Hooks, responsive state architecture, Axios interceptors, Tailwind CSS.' },
    { cat: 'cloud', name: 'Amazon EC2 & VPC', level: 92, badge: 'Expert', desc: 'Multi-AZ subnets, security groups, route tables, internet & NAT gateways.' },
    { cat: 'cloud', name: 'Amazon RDS & S3', level: 90, badge: 'Advanced', desc: 'MySQL Multi-AZ, automated backups, S3 static assets & IAM bucket policies.' },
    { cat: 'cloud', name: 'AWS CloudWatch & ALB', level: 88, badge: 'Advanced', desc: 'Application Load Balancing, SSL termination, real-time alarms, SNS alerts.' },
    { cat: 'devops', name: 'Docker & Containerization', level: 90, badge: 'Advanced', desc: 'Multi-stage Alpine Dockerfiles, minimal footprint, Docker Compose.' },
    { cat: 'devops', name: 'Jenkins CI/CD Pipelines', level: 88, badge: 'Advanced', desc: 'Declarative pipelines, automated build/test/deploy, zero-downtime rolling updates.' },
    { cat: 'devops', name: 'Nginx & Linux', level: 88, badge: 'Advanced', desc: 'Reverse proxying, gzip compression, Certbot SSL, systemd services.' },
    { cat: 'db', name: 'MongoDB (Atlas) & MySQL', level: 88, badge: 'Advanced', desc: 'Mongoose schema design, aggregation pipelines, replica sets, connection pools.' },
    { cat: 'sec', name: 'Networking & API Security', level: 90, badge: 'Advanced', desc: 'TCP/IP, subnetting, SSL/TLS, CORS policies, Postman automated test suites.' }
  ];

  const workflowSteps = [
    { id: 1, title: 'Developer Code', icon: Server, desc: 'Node.js/Express APIs & React modules with strict ESLint, JWT, and RBAC rules.' },
    { id: 2, title: 'GitHub', icon: GithubIcon, desc: 'Protected main branch, feature branches, and automated webhook dispatch.' },
    { id: 3, title: 'Jenkins CI/CD', icon: Cpu, desc: 'Automated npm test suites, asset compilation, and Docker image packaging.' },
    { id: 4, title: 'Docker Container', icon: Layers, desc: 'Multi-stage Alpine image with non-root runtime (<120MB).' },
    { id: 5, title: 'AWS EC2 / Nginx', icon: Cloud, desc: 'Zero-downtime rolling reload behind Nginx reverse proxy with SSL.' },
    { id: 6, title: 'CloudWatch Telemetry', icon: Activity, desc: 'Continuous CPU/Memory metric monitoring and automated SNS alarms.' }
  ];

  const projects = [
    {
      title: "Digital Banking Transaction Monitoring Platform",
      category: "Fintech & Cloud Microservices",
      desc: "Enterprise-grade surveillance application to track high-volume transactions, enforce granular role-based access, and detect suspicious patterns.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS EC2/S3/VPC", "Docker", "Jenkins", "Nginx"],
      metrics: ["<40ms API Latency", "Bank-Grade RBAC", "AWS EC2 + Docker", "99.95% Uptime"],
      github: "https://github.com/vitthalkhedekaraws77-oss/digital-banking-monitoring"
    },
    {
      title: "Cloud-Native Scalable E-Commerce Platform",
      category: "E-Commerce & High Availability",
      desc: "High-availability retail architecture featuring AWS ALB, dynamic Auto Scaling Groups, Amazon RDS MySQL, and automated Docker CI/CD delivery.",
      tech: ["MERN Stack", "Amazon RDS", "AWS ALB", "Auto Scaling", "AWS S3", "Docker", "Jenkins", "Nginx"],
      metrics: ["1 to 10 Nodes ASG", "Multi-AZ Database", "CloudFront CDN", "Zero-Downtime Deploy"],
      github: "https://github.com/vitthalkhedekaraws77-oss/cloud-native-ecommerce"
    }
  ];

  const startPipelineSim = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    let cur = 1;
    setSimStep(1);
    setActiveStep(1);
    const int = setInterval(() => {
      cur += 1;
      if (cur <= 6) {
        setSimStep(cur);
        setActiveStep(cur);
      } else {
        clearInterval(int);
        setIsSimulating(false);
      }
    }, 1000);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 }, colors: ['#00f2fe', '#38bdf8', '#10b981'] });
    window.location.href = `mailto:${personal.email}?subject=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
  };

  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.cat === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans selection:bg-[#00f2fe]/20 selection:text-[#00f2fe]">
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 text-white font-mono font-bold text-sm">
            <span className="w-8 h-8 rounded-lg bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center text-[#00f2fe]">
              <Cloud className="w-4 h-4" />
            </span>
            <span>Vitthal Khedekar</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">AWS • Node</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#hero" className="hover:text-[#00f2fe] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#00f2fe] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#00f2fe] transition-colors">Skills</a>
            <a href="#experience" className="hover:text-[#00f2fe] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#00f2fe] transition-colors">Projects</a>
            <a href="#architecture" className="hover:text-[#00f2fe] transition-colors">Architecture</a>
            <a href="#contact" className="hover:text-[#00f2fe] transition-colors">Contact</a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#00f2fe] to-[#38bdf8] hover:opacity-90 shadow-md transition-all"
            >
              Resume
            </button>
            <a href={personal.githubUrl} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white">
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-400">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Full-Time Roles & Cloud Projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#38bdf8]">Node.js</span> Developer & <span className="text-[#38bdf8]">AWS Cloud</span> Specialist
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {personal.tagline}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#projects" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#38bdf8] text-slate-950 font-bold text-xs font-mono shadow-lg hover:scale-105 transition-all">
                View Projects →
              </a>
              <button onClick={() => setIsResumeOpen(true)} className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-xs font-mono hover:bg-slate-800 transition-all">
                Download Resume
              </button>
              <a href="#contact" className="px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-300 font-semibold text-xs font-mono hover:text-white transition-all">
                Contact Me
              </a>
            </div>

            {/* Badges */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2 text-xs font-mono">
              {['Node.js', 'React.js', 'AWS Cloud', 'Docker', 'Jenkins', 'MongoDB', 'Nginx'].map(b => (
                <span key={b} className="px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Terminal Card */}
          <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-slate-800 p-5 shadow-2xl font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="ml-2 text-slate-300">aws-telemetry ~ zsh</span>
              </div>
              <span className="text-[#00f2fe]">ap-south-1</span>
            </div>
            <pre className="py-4 text-slate-300 leading-relaxed overflow-x-auto">
{`{
  "engineer": "Vitthal Khedekar",
  "role": "Full Stack & AWS Specialist",
  "experience": "2+ Years (Visionary World)",
  "aws_cluster": {
    "vpc": "10.0.0.0/16 [Multi-AZ]",
    "compute": "EC2 t3.medium + Docker",
    "databases": ["MongoDB Atlas", "Amazon RDS"],
    "networking": ["ALB", "Nginx", "CloudWatch"]
  },
  "uptime": "99.98% Healthy"
}`}
            </pre>
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-emerald-400">● 14 Pods Operational</span>
              <span>Latency: 18ms</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-950/60 border-y border-slate-800/80 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#00f2fe] uppercase">About The Engineer</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Scalable Code & Resilient Infrastructure</h2>
            <p className="text-slate-400 text-sm mt-3">Full Stack Engineer based in Pune with end-to-end expertise spanning frontend user interfaces, backend RESTful microservices, and automated AWS cloud deployment pipelines.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Server, title: "Node.js & Microservices", desc: "RESTful APIs with Express, JWT authentication, and fine-grained RBAC authorization." },
              { icon: Cloud, title: "AWS Cloud & VPC", desc: "Custom VPCs, public/private subnets, EC2 compute, RDS Multi-AZ, and ALB load balancing." },
              { icon: Cpu, title: "CI/CD & Containerization", desc: "Automated Jenkins pipelines, lightweight multi-stage Dockerfiles, and zero-downtime rolling deploys." },
              { icon: ShieldCheck, title: "Security & Observability", desc: "SSL/TLS certificates, security groups, and 24/7 AWS CloudWatch metric alarms." }
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-[#38bdf8]/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#00f2fe]/10 border border-[#00f2fe]/20 text-[#00f2fe] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono text-[#38bdf8] uppercase">Technical Stack</span>
          <h2 className="text-3xl font-extrabold text-white mt-2">Core Skills & Production Stacks</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Skills' },
            { id: 'web', label: 'Full-Stack Web' },
            { id: 'cloud', label: 'AWS Cloud' },
            { id: 'devops', label: 'DevOps & CI/CD' },
            { id: 'db', label: 'Databases' },
            { id: 'sec', label: 'Networking & Security' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedCategory(t.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedCategory === t.id 
                  ? 'bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/40' 
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((s, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-white">{s.name}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">{s.badge}</span>
                </div>
                <p className="text-xs text-slate-400 mb-4">{s.desc}</p>
              </div>
              <div>
                <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span>Proficiency</span>
                  <span className="text-[#00f2fe]">{s.level}%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#00f2fe] to-[#38bdf8] h-1.5" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-slate-950/60 border-y border-slate-800 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[#00f2fe] uppercase">Career Trajectory</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Work Experience & Delivery</h2>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Current Full-Time Role</span>
                <h3 className="text-2xl font-bold text-white mt-1">Full Stack Node.js Developer</h3>
                <p className="text-sm font-mono text-[#38bdf8]">Visionary World Infotech Pvt. Ltd. • Pune, India</p>
              </div>
              <span className="text-xs font-mono text-slate-400">{personal.period}</span>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              {[
                "Architected and developed RESTful APIs using Node.js and Express with JWT authentication and RBAC authorization.",
                "Built responsive, dynamic frontend user modules using React.js, Redux Toolkit, and Axios interceptors.",
                "Provisioned and managed AWS infrastructure including VPC networking, EC2 compute instances, S3 storage, and RDS MySQL.",
                "Implemented automated CI/CD deployment pipelines using Docker containers and Jenkins automation.",
                "Configured Nginx reverse proxy with SSL termination and established AWS CloudWatch monitoring with alarm notifications."
              ].map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00f2fe] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#38bdf8] uppercase">Featured Work</span>
          <h2 className="text-3xl font-extrabold text-white mt-2">Production Projects</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <span className="text-xs font-mono text-[#00f2fe] bg-[#00f2fe]/10 px-2.5 py-1 rounded border border-[#00f2fe]/20">{proj.category}</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">{proj.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{proj.desc}</p>

                <div className="grid grid-cols-2 gap-2 mb-4 font-mono text-xs">
                  {proj.metrics.map((m, i) => (
                    <div key={i} className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-center text-slate-300">
                      {m}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tech.map(t => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">{t}</span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <a href={proj.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white">
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
                <span className="text-xs font-mono text-emerald-400">● Deployed AWS</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Workflow */}
      <section id="architecture" className="py-20 bg-slate-950/70 border-y border-slate-800 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#00f2fe] uppercase">Cloud Delivery Pipeline</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">How I Ship Code: Architecture Flow</h2>
            <p className="text-slate-400 text-sm mt-2">Interactive visual progression from local code to automated AWS production deployment.</p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={startPipelineSim}
              disabled={isSimulating}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#38bdf8] text-slate-950 font-bold text-xs font-mono shadow-md"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isSimulating ? `Simulating Step ${simStep}/6...` : 'Simulate Deployment Pipeline'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {workflowSteps.map((st) => {
              const Icon = st.icon;
              const isCur = activeStep === st.id;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStep(st.id)}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    isCur ? 'bg-slate-900 border-[#00f2fe] shadow-lg shadow-[#00f2fe]/10 scale-105' : 'bg-slate-950/80 border-slate-800'
                  }`}
                >
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 mb-2">STAGE 0{st.id}</div>
                    <Icon className={`w-5 h-5 mb-2 ${isCur ? 'text-[#00f2fe]' : 'text-slate-400'}`} />
                    <h4 className="text-xs font-bold text-white">{st.title}</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">{st.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#38bdf8] uppercase">Let's Connect</span>
          <h2 className="text-3xl font-extrabold text-white mt-2">Get In Touch</h2>
          <p className="text-slate-400 text-sm mt-2">Open for Full Stack Node.js Developer and AWS Cloud Engineer positions in Pune and remote.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Email</span>
                <div className="text-xs sm:text-sm font-mono text-white font-bold">{personal.email}</div>
              </div>
              <button onClick={() => handleCopy(personal.email)} className="p-2 bg-slate-800 rounded-lg text-slate-300">
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Phone / WhatsApp</span>
                <div className="text-xs sm:text-sm font-mono text-white font-bold">{personal.phone}</div>
              </div>
              <a href="https://wa.me/917796240277" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-mono">
                Chat
              </a>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Location</span>
              <div className="text-xs sm:text-sm text-white font-bold">{personal.location}</div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
            {formSent ? (
              <div className="text-center py-8 space-y-2">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                <p className="text-xs text-slate-400">Opening mail client to send directly to Vitthal Khedekar.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-[#00f2fe]"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-[#00f2fe]"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Vitthal, we have a Full Stack & AWS role..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-[#00f2fe] resize-none"
                  />
                </div>
                <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00f2fe] to-[#38bdf8] text-slate-950 font-bold">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800 text-center text-xs font-mono text-slate-500">
        <div>© {new Date().getFullYear()} Vitthal Khedekar • Full Stack Node.js & AWS Cloud Engineer • Pune, India</div>
      </footer>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-slate-950 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto font-sans text-xs">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white font-mono">Vitthal_Khedekar_Resume</h3>
              <button onClick={() => setIsResumeOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{personal.name}</h2>
              <p className="text-[#00f2fe] font-mono">{personal.role}</p>
              <p className="text-slate-400 mt-1">{personal.location} • {personal.email} • {personal.phone}</p>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase text-[11px] font-mono text-[#38bdf8]">Professional Summary</h4>
              <p className="text-slate-300 mt-1">{personal.tagline}</p>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase text-[11px] font-mono text-[#38bdf8]">Experience</h4>
              <p className="text-white font-bold mt-1">Full Stack Node.js Developer — Visionary World Infotech Pvt. Ltd. ({personal.period})</p>
              <ul className="list-disc pl-4 text-slate-300 space-y-1 mt-1">
                <li>Developed high-throughput Node.js & Express RESTful APIs with JWT and RBAC.</li>
                <li>Built dynamic React.js & Redux user interfaces integrated with backend services.</li>
                <li>Managed AWS cloud infrastructure across VPC, EC2, RDS MySQL, and S3.</li>
                <li>Automated CI/CD deployment pipelines using Docker containers and Jenkins.</li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2 font-mono">
              <button onClick={() => window.print()} className="px-4 py-1.5 rounded-lg bg-slate-800 text-white hover:bg-slate-700">Print / PDF</button>
              <button onClick={() => setIsResumeOpen(false)} className="px-4 py-1.5 rounded-lg bg-[#00f2fe] text-slate-950 font-bold">Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
