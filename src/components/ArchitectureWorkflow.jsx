import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  GitBranch, 
  Cpu, 
  Box, 
  Server, 
  Activity, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Copy, 
  Check, 
  Terminal, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  ChevronRight,
  Sparkles,
  Cloud
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ArchitectureWorkflow() {
  const steps = portfolioData.architectureSteps;
  const [selectedStepId, setSelectedStepId] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(null);
  const [simLogs, setSimLogs] = useState([]);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('pipeline'); // 'pipeline' | 'vpc-blueprint'

  const currentStep = steps.find(s => s.id === selectedStepId) || steps[0];

  const stepIcons = {
    Code2: Code2,
    GitBranch: GitBranch,
    Cpu: Cpu,
    Box: Box,
    Server: Server,
    Activity: Activity
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Run automated deployment pipeline simulation
  const startSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimLogs([]);
    setSimulationStep(1);
    setSelectedStepId(1);

    const logMessages = [
      "[Stage 1/6] Local Dev: Running ESLint, Prettier & unit tests... (PASS)",
      "[Stage 2/6] GitHub: Pull Request merged to main branch -> Webhook dispatched to Jenkins",
      "[Stage 3/6] Jenkins: Pulling commit SHA, executing npm ci, compiling assets",
      "[Stage 4/6] Docker: Building multi-stage alpine container image (vitthalkhedekar/app:v2.4)",
      "[Stage 5/6] AWS EC2: Pulling container via SSH, zero-downtime rolling reload via Nginx reverse proxy",
      "[Stage 6/6] CloudWatch: Telemetry heartbeat 200 OK. CPU 18%, Memory 240MB. Pipeline Success!"
    ];

    let current = 1;
    setSimLogs([logMessages[0]]);

    const interval = setInterval(() => {
      current += 1;
      if (current <= 6) {
        setSimulationStep(current);
        setSelectedStepId(current);
        setSimLogs(prev => [...prev, logMessages[current - 1]]);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setSimulationStep(null);
      }
    }, 1200);
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setSimulationStep(null);
    setSimLogs([]);
    setSelectedStepId(1);
  };

  return (
    <section id="architecture" className="py-24 bg-dark-900/80 relative overflow-hidden">
      {/* Background neon ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-neon-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-neon-cyan border border-neon-cyan/20 text-xs font-mono font-medium mb-3">
            <Cloud className="w-3.5 h-3.5 text-neon-teal" />
            <span>INTERACTIVE CI/CD & CLOUD BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Ship Code: <span className="text-gradient">Production Architecture Workflow</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl text-base">
            From local IDE commits to AWS multi-tier cloud infrastructure. Click any stage to inspect the exact configuration, code, and security controls.
          </p>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 mt-6 p-1 bg-dark-950 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-gradient-to-r from-neon-teal/20 to-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Pipeline Workflow (6 Stages)
            </button>
            <button
              onClick={() => setActiveTab('vpc-blueprint')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'vpc-blueprint'
                  ? 'bg-gradient-to-r from-amber-500/20 to-neon-cyan/20 text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AWS VPC Architecture Blueprint
            </button>
          </div>
        </div>

        {activeTab === 'pipeline' ? (
          <div>
            {/* Top Toolbar: Simulation Trigger */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-dark-950/70 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-neon-teal animate-ping" />
                <span>Live Interactive Architecture Runner</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={startSimulation}
                  disabled={isSimulating}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all ${
                    isSimulating
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-neon-teal to-neon-cyan text-slate-950 hover:from-white hover:to-neon-cyan shadow-md shadow-neon-cyan/20'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isSimulating ? `Running Stage ${simulationStep}/6...` : 'Simulate Deployment Pipeline'}</span>
                </button>

                {simLogs.length > 0 && (
                  <button
                    onClick={resetSimulation}
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    title="Reset simulation"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Pipeline Stage Cards (Desktop Horizontal / Mobile Vertical) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
              {steps.map((st) => {
                const Icon = stepIcons[st.icon] || Server;
                const isSelected = selectedStepId === st.id;
                const isRunning = simulationStep === st.id;
                const isCompleted = simulationStep && simulationStep > st.id;

                return (
                  <button
                    key={st.id}
                    onClick={() => setSelectedStepId(st.id)}
                    className={`relative text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-neon-cyan shadow-lg shadow-neon-cyan/15 scale-[1.02]'
                        : isRunning
                        ? 'bg-slate-900/90 border-neon-teal animate-pulse'
                        : isCompleted
                        ? 'bg-slate-950/80 border-emerald-500/40 opacity-90'
                        : 'bg-dark-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                    }`}
                  >
                    {/* Top line indicator for flow */}
                    <div className="flex items-center justify-between mb-3 w-full">
                      <span className="font-mono text-xs font-bold text-slate-500">{st.step}</span>
                      <span className={`w-2 h-2 rounded-full ${
                        isRunning ? 'bg-neon-teal animate-ping' : isCompleted ? 'bg-emerald-400' : isSelected ? 'bg-neon-cyan' : 'bg-slate-700'
                      }`} />
                    </div>

                    <div>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                        isSelected 
                          ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30' 
                          : 'bg-slate-800/80 text-slate-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>

                      <h4 className="text-xs font-bold text-white mb-1 font-sans">{st.title}</h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">{st.summary}</p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-neon-cyan truncate">{st.badge}</span>
                      {isSelected && <ChevronRight className="w-3 h-3 text-neon-cyan shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Simulation Terminal Output Box */}
            {simLogs.length > 0 && (
              <div className="mb-8 rounded-xl bg-dark-950 border border-neon-teal/30 p-4 font-mono text-xs shadow-xl">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-neon-teal" />
                    <span>Pipeline Execution Telemetry</span>
                  </span>
                  <span className="text-[11px] text-neon-teal">{simLogs.length}/6 Events Finished</span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  {simLogs.map((log, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✔</span>
                      <span className={i === simLogs.length - 1 ? "text-neon-cyan font-semibold" : "text-slate-400"}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Stage Inspector Panel */}
            <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Detail & Checklist */}
                <div className="lg:col-span-5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-1 rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 text-xs font-mono font-bold">
                        Stage {currentStep.step} / 06
                      </span>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        {currentStep.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {currentStep.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {currentStep.details}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-neon-teal" />
                        <span>Quality & Security Gates Enforced</span>
                      </h4>
                      {currentStep.checklist.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Engineering Owner: Vitthal Khedekar</span>
                    <span className="text-neon-cyan">{currentStep.badge}</span>
                  </div>
                </div>

                {/* Right Code / Config View */}
                <div className="lg:col-span-7 bg-dark-950/90 flex flex-col">
                  <div className="flex items-center justify-between px-5 py-3 bg-dark-900 border-b border-slate-800">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-neon-cyan" />
                      <span>Configuration / Implementation Spec ({currentStep.snippetLang})</span>
                    </span>

                    <button
                      onClick={() => handleCopy(currentStep.snippet)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-slate-800 transition-colors"
                      title="Copy code snippet"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="p-5 font-mono text-xs text-slate-300 overflow-x-auto max-h-[380px] leading-relaxed scrollbar-thin">
                    <pre>
                      <code>{currentStep.snippet}</code>
                    </pre>
                  </div>
                </div>

              </div>
            </div>

          </div>
        ) : (
          /* AWS VPC Architecture Blueprint Visualization */
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-amber-400" />
                  <span>Production AWS Cloud VPC Topology</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Region: ap-south-1 (Mumbai) • Multi-AZ High Availability • Zero Direct Public Database Access
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                Isolated Network Blueprint
              </span>
            </div>

            {/* Visual VPC Blueprint Diagram */}
            <div className="space-y-4">
              
              {/* Outer Layer: AWS VPC 10.0.0.0/16 */}
              <div className="border-2 border-dashed border-cyan-500/40 rounded-2xl p-5 bg-slate-950/80">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Amazon VPC [CIDR: 10.0.0.0/16]</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Internet Gateway (IGW) attached</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Layer 1: Public Subnets (DMZ) */}
                  <div className="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-emerald-400 font-mono">Public Subnet (DMZ)</span>
                      <span className="text-[10px] text-slate-500 font-mono">10.0.1.0/24</span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-2 mt-3 font-mono">
                      <li className="p-2 rounded bg-slate-950/70 border border-slate-800">
                        <strong className="text-white block font-sans">Application Load Balancer (ALB)</strong>
                        <span className="text-[11px] text-slate-400">SSL Termination (ACM), Health Checks</span>
                      </li>
                      <li className="p-2 rounded bg-slate-950/70 border border-slate-800">
                        <strong className="text-white block font-sans">Nginx Reverse Proxy</strong>
                        <span className="text-[11px] text-slate-400">Gzip, Rate Limiting, Port 80/443</span>
                      </li>
                      <li className="p-2 rounded bg-slate-950/70 border border-slate-800">
                        <strong className="text-white block font-sans">NAT Gateway</strong>
                        <span className="text-[11px] text-slate-400">Outbound egress for private EC2</span>
                      </li>
                    </ul>
                  </div>

                  {/* Layer 2: Private Application Subnets */}
                  <div className="bg-slate-900/90 border border-neon-cyan/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-neon-cyan font-mono">Private Compute Subnet</span>
                      <span className="text-[10px] text-slate-500 font-mono">10.0.2.0/24</span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-2 mt-3 font-mono">
                      <li className="p-2 rounded bg-slate-950/70 border border-slate-800">
                        <strong className="text-white block font-sans">Amazon EC2 (t3.medium)</strong>
                        <span className="text-[11px] text-slate-400">Dockerized Node.js Microservices</span>
                      </li>
                      <li className="p-2 rounded bg-slate-950/70 border border-slate-800">
                        <strong className="text-white block font-sans">Auto Scaling Group (ASG)</strong>
                        <span className="text-[11px] text-slate-400">Min: 2, Max: 6 nodes on CPU &gt; 70%</span>
                      </li>
                      <li className="p-2 rounded bg-slate-950/70 border border-slate-800">
                        <strong className="text-white block font-sans">Security Groups</strong>
                        <span className="text-[11px] text-slate-400">Inbound allowed ONLY from ALB</span>
                      </li>
                    </ul>
                  </div>

                  {/* Layer 3: Isolated Database Subnet */}
                  <div className="bg-slate-900/90 border border-purple-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-purple-400 font-mono">Database Subnet (Isolated)</span>
                      <span className="text-[10px] text-slate-500 font-mono">10.0.3.0/24</span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-2 mt-3 font-mono">
                      <li className="p-2 rounded bg-slate-950/70 border border-slate-800">
                        <strong className="text-white block font-sans">Amazon RDS (MySQL)</strong>
                        <span className="text-[11px] text-slate-400">Multi-AZ Standby, Automated Backups</span>
                      </li>
                      <li className="p-2 rounded bg-slate-950/70 border border-slate-800">
                        <strong className="text-white block font-sans">MongoDB Atlas Replica</strong>
                        <span className="text-[11px] text-slate-400">VPC Peering, Encrypted at Rest</span>
                      </li>
                      <li className="p-2 rounded bg-slate-950/70 border border-slate-800">
                        <strong className="text-white block font-sans">Amazon S3 + CloudFront</strong>
                        <span className="text-[11px] text-slate-400">Asset storage & CDN edge delivery</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Security & Observability Footer Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-neon-teal shrink-0" />
                  <div className="text-xs">
                    <strong className="text-white block">Security Principle: Least Privilege</strong>
                    <span className="text-slate-400">IAM EC2 instance roles, no hardcoded API credentials.</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <Activity className="w-5 h-5 text-neon-cyan shrink-0" />
                  <div className="text-xs">
                    <strong className="text-white block">AWS CloudWatch Observability</strong>
                    <span className="text-slate-400">SNS alerts, automated memory logging & zero-loss recovery.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
