import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Mail, 
  FileText, 
  Menu, 
  X, 
  ExternalLink,
  ChevronRight,
  Cloud
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume, onOpenTerminal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'architecture', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Architecture', href: '#architecture', id: 'architecture' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-900/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a 
            href="#hero" 
            className="group flex items-center gap-3 text-slate-100 hover:text-neon-cyan transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-teal/20 via-slate-800 to-neon-cyan/20 border border-neon-cyan/40 flex items-center justify-center shadow-lg shadow-neon-cyan/10 group-hover:border-neon-teal group-hover:scale-105 transition-all">
              <Cloud className="w-5 h-5 text-neon-cyan group-hover:text-neon-teal transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-tight flex items-center gap-1.5">
                <span>Vitthal Khedekar</span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                  AWS • Node
                </span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-wide">
                Full Stack & Cloud Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-950/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-neon-teal/20 to-neon-cyan/20 text-neon-teal border border-neon-cyan/30 shadow-sm shadow-neon-cyan/20' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Socials */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Interactive Terminal Launcher */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-neon-cyan bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all"
              title="Open Interactive CloudShell / Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-neon-teal" />
              <span>CloudShell</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-900 bg-gradient-to-r from-neon-teal to-neon-cyan hover:from-white hover:to-neon-cyan rounded-lg font-semibold shadow-md shadow-neon-cyan/20 hover:shadow-neon-cyan/40 transition-all hover:scale-[1.02]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 border-l border-slate-800 pl-3">
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="GitHub: vitthalkhedekaraws77-oss"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:bg-slate-800 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-medium text-slate-900 bg-neon-cyan rounded-md"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-dark-950/95 border-b border-slate-800 backdrop-blur-xl p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}

            <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-neon-teal to-neon-cyan text-slate-950 font-bold text-sm rounded-xl"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenTerminal(); }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-slate-200 border border-slate-700 font-mono text-sm rounded-xl"
              >
                <Terminal className="w-4 h-4 text-neon-teal" />
                <span>Open CloudShell Terminal</span>
              </button>

              <div className="flex items-center justify-center gap-4 mt-2">
                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-neon-cyan border border-slate-800"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
