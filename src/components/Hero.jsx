import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Terminal, 
  CheckCircle2, 
  ShieldCheck, 
  Server, 
  Database, 
  Cpu, 
  Cloud, 
  Box, 
  Activity, 
  Layers, 
  Sparkles,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume, onOpenTerminal }) {
  const [activeTab, setActiveTab] = useState('telemetry');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const copyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const codeSnippets = {
    telemetry: `{
  "engineer": "Vitthal Khedekar",
  "role": "Full Stack & AWS Specialist",
  "experience": "2+ Years (Visionary World Infotech)",
  "aws_infrastructure": {
    "primary_region": "ap-south-1 (Mumbai)",
    "vpc_cidr": "10.0.0.0/16 (Public/Private Subnets)",
    "compute": ["EC2 t3.medium", "Docker Swarm/ECS"],
    "database": ["MongoDB Atlas ReplicaSet", "Amazon RDS MySQL"],
    "networking": ["ALB", "CloudFront CDN", "Route 53", "Nginx"],
    "telemetry": "AWS CloudWatch Realtime Alarms"
  },
  "pipeline_health": "99.98% OK [Zero-Downtime CI/CD]"
}`,
    deploy: `#!/bin/bash
# automated-deploy.sh - Vitthal Khedekar Cloud Pipeline
set -e
echo ">> [1/4] Authenticating with AWS ECR & Secrets Manager..."
aws sts get-caller-identity --output text
echo ">> [2/4] Pulling Docker Image tagged with build SHA..."
docker pull 123456789012.dkr.ecr.ap-south-1.amazonaws.com/api:latest
echo ">> [3/4] Running healthcheck & rolling container replacement..."
docker stop api-old && docker rm api-old
docker run -d --name api-live -p 5000:5000 --restart always api:latest
echo ">> [4/4] Nginx reverse proxy reload & CloudWatch heartbeat sent: 200 OK"`,
    architecture: `version: "3.8"
services:
  nginx-proxy:
    image: nginx:alpine
    ports: ["80:80", "443:443"]
    volumes: ["./ssl:/etc/letsencrypt"]
    restart: always

  node-backend-api:
    image: vitthalkhedekar/banking-api:v2.1
    environment:
      NODE_ENV: production
      PORT: 5000
      JWT_SECRET: "\${AWS_SECRETS_JWT}"
      MONGO_URI: "\${AWS_SECRETS_MONGO}"
    depends_on: ["nginx-proxy"]
    restart: unless-stopped`
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center cyber-grid overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[30rem] h-[30rem] bg-neon-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines, Bio, Badges, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-6 shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Full-Time Roles & High-Impact Cloud Projects</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Full Stack <span className="text-gradient">Node.js</span> Developer & <span className="text-neon-cyan">AWS Cloud</span> Specialist
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {portfolioData.personal.tagline} Engineered for high-throughput, bank-grade security with JWT & RBAC, and automated zero-downtime microservices delivery.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-neon-teal via-neon-cyan to-sky-400 hover:from-white hover:to-neon-cyan transition-all duration-200 shadow-lg shadow-neon-cyan/25 hover:shadow-neon-cyan/40 hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-neon-cyan/50 transition-all duration-200 shadow-md hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4 text-neon-teal" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Tech Stack Badges */}
            <div className="w-full pt-6 border-t border-slate-800/80">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
                <span>Core Production Stack & Competencies</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {portfolioData.badges.map((badge) => (
                  <span
                    key={badge.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium border ${badge.color} backdrop-blur-sm transition-transform hover:-translate-y-0.5`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Interactive Terminal / Telemetry Console */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group">
              {/* Glow border ring */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-teal/40 via-neon-cyan/30 to-purple-600/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative rounded-2xl bg-dark-950/90 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-dark-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600 inline-block" />
                    <span className="ml-2 font-mono text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-neon-teal" />
                      aws-cloud-telemetry ~ zsh
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => copyCode(codeSnippets[activeTab])}
                      className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
                      title="Copy snippet"
                    >
                      {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={onOpenTerminal}
                      className="text-[11px] font-mono text-neon-cyan hover:underline px-2 py-0.5 rounded bg-neon-cyan/10"
                    >
                      CLI Shell
                    </button>
                  </div>
                </div>

                {/* Sub-header Tab Bar */}
                <div className="flex items-center border-b border-slate-800/80 bg-slate-950/50 px-2 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('telemetry')}
                    className={`px-3 py-2 border-b-2 font-medium transition-colors ${
                      activeTab === 'telemetry' 
                        ? 'border-neon-teal text-neon-teal bg-slate-900/60' 
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    status.json
                  </button>
                  <button
                    onClick={() => setActiveTab('deploy')}
                    className={`px-3 py-2 border-b-2 font-medium transition-colors ${
                      activeTab === 'deploy' 
                        ? 'border-neon-teal text-neon-teal bg-slate-900/60' 
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    deploy.sh
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-3 py-2 border-b-2 font-medium transition-colors ${
                      activeTab === 'architecture' 
                        ? 'border-neon-teal text-neon-teal bg-slate-900/60' 
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    docker-compose.yml
                  </button>
                </div>

                {/* Terminal Body */}
                <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 overflow-x-auto max-h-80 leading-relaxed scrollbar-thin">
                  <pre className="text-slate-300">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                </div>

                {/* Live Status Footer Strip */}
                <div className="px-4 py-2.5 bg-dark-900/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                    </span>
                    <span>Status: Production Healthy</span>
                  </div>
                  <span className="text-slate-500">Region: ap-south-1</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid under Hero right card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {portfolioData.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-3 text-center backdrop-blur-sm hover:border-neon-cyan/40 transition-colors"
                >
                  <div className="text-xl font-extrabold text-white font-mono tracking-tight text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-slate-300 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
