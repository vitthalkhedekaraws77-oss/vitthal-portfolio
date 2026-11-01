import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Server, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  ChevronRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  const exp = portfolioData.experience[0];

  const accomplishments = [
    {
      metric: "Sub-5 Min",
      title: "Automated Deployments",
      desc: "Replaced manual server scripts with Jenkins & Docker CI/CD pipelines."
    },
    {
      metric: "99.9%",
      title: "Infrastructure Uptime",
      desc: "High availability provisioned via AWS VPC, EC2, and Nginx reverse proxies."
    },
    {
      metric: "100%",
      title: "Role-Based Security",
      desc: "Implemented strict JWT token authentication and RBAC authorization."
    },
    {
      metric: "35% Faster",
      title: "Frontend Interaction",
      desc: "Optimized React & Redux state rendering and Axios API interceptor logic."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-dark-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-neon-cyan border border-neon-cyan/20 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-gradient">Production Impact</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl text-base">
            Delivering scalable full-stack applications, microservices, and automated cloud deployments in high-stakes engineering environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
            
            {/* Pulsing Timeline Node */}
            <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-dark-950 border-2 border-neon-cyan flex items-center justify-center shadow-lg shadow-neon-cyan/50">
              <span className="w-2 h-2 rounded-full bg-neon-teal animate-ping" />
            </div>

            {/* Experience Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative group">
              
              {/* Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-semibold mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    <span>Current Role • Full-Time</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sans">
                    {exp.role}
                  </h3>
                  <p className="text-base font-medium text-neon-cyan font-mono mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neon-teal" />
                    <span className="text-slate-200 font-semibold">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed my-6 font-normal">
                {exp.description}
              </p>

              {/* Key Deliverables Bullet Points */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-neon-teal" />
                  <span>Key Deliverables & Responsibilities</span>
                </h4>

                {exp.highlights.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-neon-teal shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Impact Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 my-6 border-y border-slate-800/80 bg-slate-950/40 rounded-xl p-3">
                {accomplishments.map((item, idx) => (
                  <div key={idx} className="text-center p-2">
                    <div className="text-base sm:text-lg font-bold font-mono text-neon-cyan">
                      {item.metric}
                    </div>
                    <div className="text-xs font-semibold text-white mt-0.5">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Technologies Utilized
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-950 text-slate-300 border border-slate-800 hover:border-neon-cyan/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
