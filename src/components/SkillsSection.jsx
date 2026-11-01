import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Search, 
  Sparkles,
  Layers,
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    fullstack: Code,
    cloud: Cloud,
    devops: Cpu,
    databases: Database,
    networking: ShieldCheck
  };

  // Flatten all skills for "all" or filtered view
  const allSkills = portfolioData.skillsCategories.flatMap(cat => 
    cat.skills.map(skill => ({ ...skill, categoryId: cat.id, categoryTitle: cat.title }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.categoryId === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative cyber-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-neon-teal border border-neon-teal/20 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Skills & <span className="text-gradient">Production Tech Stack</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl text-base">
            Categorized technical capabilities honed through 2+ years of architecting web services, managing AWS infrastructure, and automating deployment pipelines.
          </p>
        </div>

        {/* Controls: Category Filter Tabs & Live Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-neon-teal/20 text-neon-teal border border-neon-teal/40 shadow-sm shadow-neon-teal/20'
                  : 'bg-dark-950/70 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            {portfolioData.skillsCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Code;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40 shadow-sm shadow-neon-cyan/20'
                      : 'bg-dark-950/70 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by skill, e.g. EC2, JWT, Docker..."
              className="w-full pl-9 pr-3 py-1.5 bg-dark-950/80 border border-slate-800 focus:border-neon-cyan/60 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none font-mono transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-mono"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-xl p-5 border border-slate-800/80 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-white group-hover:text-neon-cyan transition-colors font-sans">
                    {skill.name}
                  </h4>
                  <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${
                    skill.badge === 'Expert' 
                      ? 'text-neon-teal bg-neon-teal/10 border-neon-teal/30'
                      : skill.badge === 'Advanced'
                      ? 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/30'
                      : 'text-amber-400 bg-amber-500/10 border-amber-500/30'
                  }`}>
                    {skill.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.desc}
                </p>
              </div>

              <div>
                {/* Progress Meter */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">{skill.categoryTitle.split(' ')[0]}</span>
                  <span className="text-neon-cyan">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-800">
                  <div 
                    className="bg-gradient-to-r from-neon-teal to-neon-cyan h-1.5 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800">
            <p className="text-slate-400 text-sm font-mono">No skills matched "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs font-mono text-neon-cyan hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* AWS Ecosystem Special Highlights Strip */}
        <div className="mt-12 glass-panel rounded-2xl p-6 border border-amber-500/20 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-dark-950">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">AWS Cloud Architecture Capabilities</h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Full hands-on lifecycle experience: VPC design, EC2 scaling, RDS Multi-AZ, S3 asset delivery, ALB traffic routing & CloudWatch proactive telemetry.
                </p>
              </div>
            </div>
            <a
              href="#architecture"
              className="px-4 py-2 text-xs font-mono font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shadow-md shadow-amber-400/20"
            >
              See Cloud Workflow →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
