import React from 'react';
import { 
  Server, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Layers, 
  CheckCircle, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  ArrowRight,
  Terminal,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Server,
      title: "Full Stack Node.js & Microservices",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description: "Building resilient RESTful APIs with Node.js and Express.js, protected by JSON Web Tokens (JWT) and granular Role-Based Access Control (RBAC). Paired with responsive React & Redux user interfaces."
    },
    {
      icon: Cloud,
      title: "AWS Cloud Engineering & VPC",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      description: "Architecting cloud environments on AWS with strict network security boundaries: custom VPCs, public DMZ subnets, private compute subnets, NAT gateways, ALB load balancers, and EC2 scaling."
    },
    {
      icon: Cpu,
      title: "Automated CI/CD & Containerization",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      description: "Automating the software delivery lifecycle with Jenkins pipelines and multi-stage Docker images. Implementing zero-downtime rolling deployments, Nginx reverse proxying, and automated rollbacks."
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security & Observability",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      description: "Hardening production Linux environments with SSL/TLS encryption, Security Groups, IAM least-privilege policies, and configuring 24/7 AWS CloudWatch monitoring with threshold alarms."
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-neon-cyan border border-neon-cyan/20 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>ABOUT THE ENGINEER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Scalable <span className="text-gradient">Backend Code</span> with Resilient <span className="text-neon-cyan">Cloud Infrastructure</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl text-base sm:text-lg">
            A developer-focused approach to building modern web applications that don't just run locally—they deploy reliably, scale under load, and stay secure.
          </p>
        </div>

        {/* Grid: Profile Summary & Key Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Engineering Bio & Fact Sheet */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-neon-teal to-neon-cyan p-0.5 shadow-lg shadow-neon-cyan/20">
                  <div className="w-full h-full rounded-2xl bg-dark-950 flex items-center justify-center font-mono font-bold text-2xl text-white">
                    VK
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">{portfolioData.personal.name}</h3>
                  <p className="text-sm text-neon-teal font-mono">Full Stack Node.js & AWS Engineer</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{portfolioData.personal.location}</span>
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {portfolioData.personal.bio}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-neon-cyan" /> Current Role:
                  </span>
                  <span className="text-slate-200 font-semibold">Visionary World Infotech Pvt. Ltd.</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-neon-teal" /> Location:
                  </span>
                  <span className="text-slate-200 font-semibold">Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-purple-400" /> Degree:
                  </span>
                  <span className="text-slate-200 font-semibold">{portfolioData.resumeData.education.degree}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-amber-400" /> Cloud Focus:
                  </span>
                  <span className="text-slate-200 font-semibold">AWS VPC, EC2, RDS, S3, ALB</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href="#skills"
                className="text-xs font-mono text-neon-cyan hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>View Tech Stack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#architecture"
                className="text-xs font-mono text-slate-400 hover:text-neon-teal flex items-center gap-1.5 transition-colors"
              >
                <span>Deployment Flow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: 4 Engineering Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800/90 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 ${pillar.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{pillar.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center text-[11px] font-mono text-slate-400 gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-neon-teal" />
                    <span>Production Battle-Tested</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
