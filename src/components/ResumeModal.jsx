import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const { resumeData } = portfolioData;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
=====================================================
VITTHAL KHEDEKAR - RESUME
Full Stack Node.js Developer & AWS Cloud Specialist
Email: ${resumeData.contact.email}
Phone: ${resumeData.contact.phone}
Location: ${resumeData.contact.location}
GitHub: https://${resumeData.contact.github}
=====================================================

PROFESSIONAL SUMMARY:
${resumeData.summary}

CORE SKILLS:
${resumeData.skillsSummary.map(s => `• ${s}`).join('\n')}

PROFESSIONAL EXPERIENCE:
Role: ${resumeData.experience[0].role}
Company: ${resumeData.experience[0].company} (${resumeData.experience[0].period})
Location: ${resumeData.experience[0].location}
Key Responsibilities & Achievements:
${resumeData.experience[0].points.map(p => `• ${p}`).join('\n')}

FEATURED PROJECTS:
1. Digital Banking Transaction Monitoring Platform
   - Stack: React.js, Node.js, Express.js, MongoDB, AWS EC2/S3/VPC, Docker, Jenkins, Nginx
   - Role-based admin/support dashboards, live transaction monitoring, full CI/CD deployment on AWS.

2. Cloud-Native E-Commerce Platform
   - Stack: MERN Stack, Amazon RDS, AWS ALB, Auto Scaling Groups, Docker, Jenkins
   - High-availability architecture, cart/order management, product search & filtering, load balancing.

EDUCATION:
${resumeData.education.degree} - ${resumeData.education.institution} (${resumeData.education.status})
`;
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Vitthal_Khedekar_FullStack_AWS_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(resumeData.summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="bg-dark-950 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-dark-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-neon-cyan" />
            <span className="font-mono text-sm font-bold text-white">
              Vitthal_Khedekar_Resume.pdf
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ATS Optimized
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-neon-teal" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-neon-teal to-neon-cyan text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 hover:opacity-90 transition-opacity"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-900/60 font-sans text-slate-200 leading-relaxed space-y-8 print:bg-white print:text-black">
          
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                {resumeData.name}
              </h1>
              <p className="text-sm font-semibold text-neon-cyan font-mono mt-1">
                {resumeData.title}
              </p>
            </div>

            <div className="text-xs font-mono text-slate-300 space-y-1 sm:text-right">
              <div>{resumeData.contact.location}</div>
              <div>
                <a href={`mailto:${resumeData.contact.email}`} className="text-neon-teal hover:underline">
                  {resumeData.contact.email}
                </a>
              </div>
              <div>{resumeData.contact.phone}</div>
              <div>
                <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                  {resumeData.contact.github}
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-neon-cyan font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {resumeData.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-neon-cyan font-bold mb-3">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
              {resumeData.skillsSummary.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-dark-950/80 border border-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-neon-cyan font-bold mb-4">
              Professional Experience
            </h2>

            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-dark-950/90 border border-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-white font-sans">{exp.role}</h3>
                    <p className="text-xs text-neon-teal font-mono">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-semibold">{exp.period}</span>
                </div>

                <ul className="space-y-1.5 pt-2">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects Highlight */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-neon-cyan font-bold mb-3">
              Key Engineering Projects
            </h2>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-dark-950/90 border border-slate-800 text-xs">
                <strong className="text-white block font-sans text-sm">Digital Banking Transaction Monitoring Platform</strong>
                <p className="text-slate-400 font-mono text-[11px] mt-0.5">Stack: React.js, Node.js, Express.js, MongoDB, AWS EC2/S3/VPC, Docker, Jenkins, Nginx</p>
                <p className="text-slate-300 mt-1.5">Architected transaction monitoring with JWT/RBAC security, audit statement storage in Amazon S3, and continuous Docker deployment.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-dark-950/90 border border-slate-800 text-xs">
                <strong className="text-white block font-sans text-sm">Cloud-Native Scalable E-Commerce Platform</strong>
                <p className="text-slate-400 font-mono text-[11px] mt-0.5">Stack: MERN Stack, Amazon RDS, AWS ALB, Auto Scaling Groups, Docker, Jenkins</p>
                <p className="text-slate-300 mt-1.5">Engineered high-availability e-commerce system with Application Load Balancing, dynamic Auto Scaling, and Amazon RDS MySQL persistence.</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span>{resumeData.education.degree} — {resumeData.education.institution}</span>
            </span>
            <span className="text-emerald-400">{resumeData.education.status}</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-dark-900 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">Vitthal Khedekar • Full Stack & AWS</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
