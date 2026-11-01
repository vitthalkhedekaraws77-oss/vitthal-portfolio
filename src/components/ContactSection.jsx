import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  Sparkles, 
  Clock, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#38bdf8', '#10b981', '#ffffff']
      });

      // Prepare mailto link as direct fallback
      const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry - ' + formData.name
      )}&body=${encodeURIComponent(
        `Hi Vitthal,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open mailto quietly or offer direct send
      window.location.href = mailtoLink;
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative cyber-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-neon-teal border border-neon-teal/20 text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Build? <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl text-base">
            Whether you have an enterprise Node.js microservice to scale, AWS infrastructure to provision, or a full-time engineering opportunity in Pune or remote.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards & Quick Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Status Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Currently open for Full Stack Developer (MERN), Node.js Backend, and AWS Cloud Engineer positions. Ready for technical interviews and architecture discussions.
              </p>
            </div>

            {/* Email Card */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Primary Email</span>
                  <a 
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-xs sm:text-sm font-mono text-white font-semibold hover:text-neon-cyan transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(portfolioData.personal.email, 'email')}
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neon-teal/10 border border-neon-teal/20 flex items-center justify-center text-neon-teal">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Direct Phone / WhatsApp</span>
                  <a 
                    href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-xs sm:text-sm font-mono text-white font-semibold hover:text-neon-teal transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <a
                  href={`https://wa.me/917796240277?text=Hi%20Vitthal,%20saw%20your%20developer%20portfolio!`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-semibold hover:bg-emerald-500/20 transition-colors"
                >
                  WhatsApp
                </a>
                <button
                  onClick={() => handleCopy(portfolioData.personal.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Based In</span>
                <span className="text-xs sm:text-sm font-semibold text-white font-sans">
                  {portfolioData.personal.location}
                </span>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">GitHub Repositories</span>
                  <span className="text-xs sm:text-sm font-mono text-white font-semibold">
                    {portfolioData.personal.githubUsername}
                  </span>
                </div>
              </div>
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2 font-sans flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-neon-cyan" />
              <span>Send Direct Message</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              Fill out the form below to initiate an email directly to Vitthal Khedekar.
            </p>

            {isSubmitted ? (
              <div className="p-8 text-center bg-dark-950/80 rounded-xl border border-emerald-500/30 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Prepared & Forwarded!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name || 'there'}. Your email client should now have the draft ready, and Vitthal will respond promptly!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 text-xs font-mono text-neon-teal bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-neon-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 bg-dark-950/80 border border-slate-800 focus:border-neon-cyan rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-neon-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 bg-dark-950/80 border border-slate-800 focus:border-neon-cyan rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none font-mono transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full Stack Developer Role / AWS Project Consultation"
                    className="w-full px-3.5 py-2.5 bg-dark-950/80 border border-slate-800 focus:border-neon-cyan rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-neon-cyan">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, team requirements, or role specifications..."
                    className="w-full px-3.5 py-2.5 bg-dark-950/80 border border-slate-800 focus:border-neon-cyan rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none font-mono transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs font-mono uppercase tracking-wider text-slate-950 bg-gradient-to-r from-neon-teal via-neon-cyan to-sky-400 hover:from-white hover:to-neon-cyan transition-all duration-200 shadow-lg shadow-neon-cyan/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Dispatching Request...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500 pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-neon-teal" />
                  <span>Direct communication to vittalkhedekardev77@gmail.com</span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
