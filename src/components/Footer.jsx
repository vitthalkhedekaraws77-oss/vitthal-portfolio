import React from 'react';
import { 
  ArrowUp, 
  Cloud, 
  Mail, 
  Phone, 
  Heart,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenResume, onOpenTerminal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neon-cyan/15 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-base font-bold text-white block">
                  Vitthal Khedekar
                </span>
                <span className="text-xs font-mono text-neon-teal">
                  Full Stack Node.js & AWS Specialist
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Engineering enterprise-grade MERN stack applications, robust RESTful microservices, and automated zero-downtime AWS CI/CD pipelines.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-400">
                AWS Infrastructure: 99.98% Operational (ap-south-1)
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li><a href="#hero" className="hover:text-neon-cyan transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-neon-cyan transition-colors">About Engineer</a></li>
              <li><a href="#skills" className="hover:text-neon-cyan transition-colors">Technical Skills</a></li>
              <li><a href="#experience" className="hover:text-neon-cyan transition-colors">Work Experience</a></li>
              <li><a href="#projects" className="hover:text-neon-cyan transition-colors">Featured Projects</a></li>
              <li><a href="#architecture" className="hover:text-neon-cyan transition-colors">CI/CD Pipeline Workflow</a></li>
              <li><a href="#contact" className="hover:text-neon-cyan transition-colors">Contact Form</a></li>
            </ul>
          </div>

          {/* Developer Tools & Direct Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Developer Actions & Social
            </h4>

            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto text-left px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white border border-slate-800 flex items-center justify-between transition-colors"
              >
                <span>View & Print Resume</span>
                <span className="text-neon-teal">PDF</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="w-full sm:w-auto text-left px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white border border-slate-800 flex items-center justify-between transition-colors"
              >
                <span>Open AWS CloudShell Terminal</span>
                <Terminal className="w-3.5 h-3.5 text-neon-cyan" />
              </button>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-slate-700 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-neon-teal hover:border-slate-700 transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Vitthal Khedekar. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">
              Pune, Maharashtra, India
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-neon-cyan border border-slate-800 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
