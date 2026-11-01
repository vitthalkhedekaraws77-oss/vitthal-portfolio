import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  Server, 
  Database, 
  Activity, 
  Sparkles, 
  Play, 
  X, 
  AlertTriangle, 
  CheckCircle2, 
  ShoppingCart, 
  RefreshCw,
  Terminal,
  Cpu
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  
  // Banking Demo State
  const [bankingTransactions, setBankingTransactions] = useState([
    { id: "TX-9841", user: "Acme Corp Ltd", amount: "$45,200.00", type: "Wire Transfer", status: "FLAGGED_RISK", time: "Just now", score: "94/100" },
    { id: "TX-9840", user: "Rahul Sharma", amount: "$1,250.00", type: "Merchant Pay", status: "CLEARED", time: "2 mins ago", score: "12/100" },
    { id: "TX-9839", user: "Sarah Jenkins", amount: "$8,900.00", type: "ACH Withdrawal", status: "CLEARED", time: "5 mins ago", score: "18/100" },
    { id: "TX-9838", user: "CryptoGateway Ltd", amount: "$120,000.00", type: "Cross-Border", status: "FLAGGED_RISK", time: "11 mins ago", score: "98/100" }
  ]);
  const [bankFilter, setBankFilter] = useState('ALL');

  // E-commerce Demo State
  const [asgInstances, setAsgInstances] = useState(2);
  const [trafficRps, setTrafficRps] = useState(450);
  const [isSpikeActive, setIsSpikeActive] = useState(false);

  const triggerSpike = () => {
    setIsSpikeActive(true);
    setTrafficRps(3850);
    setAsgInstances(6);
    setTimeout(() => {
      setIsSpikeActive(false);
      setTrafficRps(520);
      setAsgInstances(2);
    }, 4000);
  };

  const addMockTransaction = () => {
    const newTx = {
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      user: "Global Logistics AG",
      amount: `$${(Math.random() * 85000 + 5000).toFixed(2)}`,
      type: "SWIFT / High-Value",
      status: Math.random() > 0.4 ? "FLAGGED_RISK" : "CLEARED",
      time: "Just now",
      score: `${Math.floor(Math.random() * 30 + 70)}/100`
    };
    setBankingTransactions(prev => [newTx, ...prev.slice(0, 5)]);
  };

  const filteredTx = bankingTransactions.filter(tx => {
    if (bankFilter === 'ALL') return true;
    return tx.status === bankFilter;
  });

  return (
    <section id="projects" className="py-24 relative cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-neon-teal border border-neon-teal/20 text-xs font-mono font-medium mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>PRODUCTION ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Production Projects</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl text-base">
            High-scale distributed systems, banking transaction surveillance platforms, and cloud-native e-commerce infrastructures built for resilience and security.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-10">
          {portfolioData.projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="glass-panel glass-panel-hover rounded-2xl border border-slate-800 overflow-hidden shadow-2xl transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Overview Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Category & Status */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 text-xs font-mono font-semibold">
                        {proj.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        Production Architecture
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 hover:text-neon-cyan transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-2 mb-6">
                      {proj.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-neon-teal shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-950/80 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(proj)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold font-mono bg-gradient-to-r from-neon-teal to-neon-cyan text-slate-950 hover:from-white hover:to-neon-cyan transition-all shadow-md shadow-neon-cyan/20"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Launch Interactive Simulation</span>
                    </button>

                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Right Architectural Metrics & Visual Summary */}
                <div className="lg:col-span-5 bg-dark-950/70 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4 flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-neon-cyan" />
                      <span>Engineered Operational Metrics</span>
                    </h4>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {proj.metrics.map((m, i) => (
                        <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 text-center">
                          <div className="text-lg font-bold font-mono text-white text-gradient">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Architecture Highlights Box */}
                    <div className="rounded-xl bg-dark-900/90 border border-slate-800 p-4">
                      <div className="text-xs font-mono text-neon-teal font-semibold mb-2 flex items-center gap-1.5">
                        <Server className="w-3.5 h-3.5" />
                        <span>Cloud Delivery Spec</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Continuous deployment managed with Dockerized Node.js runtime, zero-downtime rolling reload behind Nginx reverse proxy, and AWS VPC network isolation with CloudWatch alarms.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Verified: vitthal-khedekar-oss</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      Active Repository
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Interactive Simulation Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-dark-950 border border-slate-700 rounded-2xl max-w-3xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neon-teal animate-ping" />
                  <h3 className="text-lg font-bold text-white font-sans">
                    Simulation: {activeModalProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body for Digital Banking Simulation */}
              {activeModalProject.id === 'digital-banking' && (
                <div className="py-5 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Authenticated Role:</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                        COMPLIANCE_ADMIN (JWT Verified)
                      </span>
                    </div>
                    <button
                      onClick={addMockTransaction}
                      className="px-3 py-1.5 rounded-lg bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40 hover:bg-neon-cyan/30 transition-all font-semibold flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Inject High-Risk Transfer</span>
                    </button>
                  </div>

                  {/* Filter Tabs */}
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-slate-400">Filter Ledger:</span>
                    {['ALL', 'FLAGGED_RISK', 'CLEARED'].map(f => (
                      <button
                        key={f}
                        onClick={() => setBankFilter(f)}
                        className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                          bankFilter === f 
                            ? 'bg-neon-teal/20 text-neon-teal border border-neon-teal/30' 
                            : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>

                  {/* Live Transaction Ledger Table */}
                  <div className="rounded-xl border border-slate-800 overflow-hidden bg-dark-900">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                        <tr>
                          <th className="p-3">Tx ID</th>
                          <th className="p-3">Beneficiary</th>
                          <th className="p-3">Amount</th>
                          <th className="p-3">Channel</th>
                          <th className="p-3">Risk Status</th>
                          <th className="p-3">Score</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        {filteredTx.map(tx => (
                          <tr key={tx.id} className="hover:bg-slate-800/40 transition-colors">
                            <td className="p-3 text-neon-cyan font-bold">{tx.id}</td>
                            <td className="p-3 text-slate-200">{tx.user}</td>
                            <td className="p-3 text-white font-bold">{tx.amount}</td>
                            <td className="p-3 text-slate-400">{tx.type}</td>
                            <td className="p-3">
                              {tx.status === 'FLAGGED_RISK' ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30">
                                  <AlertTriangle className="w-3 h-3" /> Flagged
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                                  <CheckCircle2 className="w-3 h-3" /> Cleared
                                </span>
                              )}
                            </td>
                            <td className="p-3 text-slate-300">{tx.score}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-slate-400">
                    💡 This simulation demonstrates Vitthal's role-based access control (RBAC), real-time state filtration, and transaction anomaly alerting backed by MongoDB & Express.
                  </p>
                </div>
              )}

              {/* Modal Body for E-Commerce Auto-Scaling Simulation */}
              {activeModalProject.id === 'cloud-ecommerce' && (
                <div className="py-5 space-y-5">
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <Activity className="w-4 h-4 text-neon-teal" />
                          <span>AWS Auto Scaling & ALB Load Tester</span>
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Click to simulate flash sale demand spike and observe compute scale-out.
                        </p>
                      </div>

                      <button
                        onClick={triggerSpike}
                        disabled={isSpikeActive}
                        className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                          isSpikeActive 
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 animate-pulse' 
                            : 'bg-gradient-to-r from-neon-teal to-neon-cyan text-slate-950 hover:from-white'
                        }`}
                      >
                        {isSpikeActive ? "Traffic Surge Active!" : "Simulate Flash Sale (Traffic Spike)"}
                      </button>
                    </div>

                    {/* Metrics Display */}
                    <div className="grid grid-cols-3 gap-3 mt-4 text-center font-mono">
                      <div className="p-3 rounded-lg bg-dark-950 border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">HTTP Request Rate</span>
                        <span className="text-lg font-bold text-neon-cyan">{trafficRps} req/sec</span>
                      </div>
                      <div className="p-3 rounded-lg bg-dark-950 border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">Active EC2 Pods</span>
                        <span className="text-lg font-bold text-emerald-400">{asgInstances} Nodes</span>
                      </div>
                      <div className="p-3 rounded-lg bg-dark-950 border border-slate-800">
                        <span className="text-[10px] text-slate-400 block">ALB Response Latency</span>
                        <span className="text-lg font-bold text-white">{isSpikeActive ? "38ms" : "19ms"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Nodes Visual Grid */}
                  <div>
                    <h5 className="text-xs font-mono text-slate-400 mb-2">Dynamic Compute Topology (AWS Target Group):</h5>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {Array.from({ length: asgInstances }).map((_, i) => (
                        <div key={i} className="p-3 rounded-xl bg-dark-900 border border-emerald-500/30 flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <div className="text-xs font-mono">
                            <span className="text-white block font-semibold">EC2-Node-0{i + 1}</span>
                            <span className="text-[10px] text-slate-400">Health: 200 OK • Multi-AZ</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400">
                    💡 Demonstrates Vitthal's AWS Auto Scaling Groups (ASG) policy configured to expand EC2 compute capacity dynamically when request throughput breaches CloudWatch thresholds.
                  </p>
                </div>
              )}

              {/* Modal Body for DevOps Telemetry Simulation */}
              {activeModalProject.id === 'devops-telemetry' && (
                <div className="py-5 space-y-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-2">
                    <div className="text-neon-cyan font-bold flex items-center gap-2">
                      <Terminal className="w-4 h-4" />
                      <span>AWS CloudWatch Metric Alarm Thresholds</span>
                    </div>
                    <p className="text-slate-300 text-xs font-sans">
                      Automated telemetry triggers SNS alert when CPU breaches 80% or 5xx error rate exceeds 1% over a 3-minute window.
                    </p>
                    <div className="p-3 bg-black/60 rounded-lg text-emerald-400 text-xs">
                      [OK] Heartbeat received from EC2 instances (i-0a8b9c2d1e)<br />
                      [OK] Nginx access log streaming to CloudWatch log-group /aws/ec2/vitthal-nginx<br />
                      [OK] Zero downtime verified across last 14 consecutive releases.
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Role: Full Stack Node.js & AWS Specialist</span>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                >
                  Close Simulation
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
