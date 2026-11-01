import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles, Trash2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AwsConsoleModal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: "AWS CloudShell Environment v2.4 (ap-south-1: Mumbai)" },
    { type: 'system', text: "Logged in as: iam/vitthal-khedekar [arn:aws:iam::123456789012:user/vitthal]" },
    { type: 'system', text: "Type 'help' to see available commands, or click any command chip below." }
  ]);
  const [inputVal, setInputVal] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (cmdText) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    const newHistory = [...history, { type: 'user', text: `$ ${raw}` }];

    if (lower === 'clear' || lower === 'cls') {
      setHistory([
        { type: 'system', text: "Terminal cleared. Type 'help' for commands." }
      ]);
      setInputVal('');
      return;
    }

    if (lower === 'help') {
      newHistory.push({
        type: 'response',
        text: `Available Commands:
  • whoami               - View Vitthal's profile and credentials
  • skills               - List technical competencies
  • projects             - View featured production projects
  • aws ec2 describe     - Inspect simulated AWS EC2 cloud cluster
  • docker ps            - Inspect active container workloads
  • contact              - Display direct communication channels
  • clear                - Clear the terminal screen`
      });
    } else if (lower === 'whoami') {
      newHistory.push({
        type: 'response',
        text: `Vitthal Khedekar
Role: Full Stack Node.js Developer & AWS Cloud Specialist
Experience: 2+ Years at Visionary World Infotech Pvt. Ltd. (Pune, India)
Specialty: High-throughput Node.js microservices, JWT/RBAC security, automated Docker/Jenkins CI/CD, AWS VPC/EC2 infrastructure.`
      });
    } else if (lower === 'skills') {
      newHistory.push({
        type: 'response',
        text: `[Full Stack]   Node.js, Express.js, React.js, Redux, REST APIs, JWT, RBAC, HTML5/CSS3
[Databases]    MongoDB Atlas, MySQL, Amazon RDS
[AWS Cloud]    EC2, VPC, S3, RDS, CloudWatch, ALB, Auto Scaling, IAM, Route 53
[DevOps]       Docker, Jenkins CI/CD, Nginx, Linux (Ubuntu), Git/GitHub`
      });
    } else if (lower === 'projects') {
      newHistory.push({
        type: 'response',
        text: `1. Digital Banking Transaction Monitoring Platform (React, Node, Express, MongoDB, AWS EC2, Docker, Jenkins)
2. Cloud-Native Scalable E-Commerce Platform (MERN, Amazon RDS, AWS ALB, Auto Scaling, Docker, Jenkins)
3. Microservices CI/CD Pipeline & CloudWatch Telemetry Engine (Node.js, Docker, Jenkins, CloudWatch, Nginx)`
      });
    } else if (lower.includes('aws') || lower.includes('ec2')) {
      newHistory.push({
        type: 'response',
        text: `{
  "Reservations": [
    {
      "InstanceId": "i-09f87b65c43d21a",
      "InstanceType": "t3.medium",
      "State": { "Code": 16, "Name": "running" },
      "PrivateIpAddress": "10.0.2.45",
      "SubnetId": "subnet-private-ap-south-1a",
      "Tags": [{ "Key": "Environment", "Value": "Production" }, { "Key": "Owner", "Value": "Vitthal" }]
    }
  ]
}`
      });
    } else if (lower.includes('docker')) {
      newHistory.push({
        type: 'response',
        text: `CONTAINER ID   IMAGE                               COMMAND                  CREATED         STATUS         PORTS
a1b2c3d4e5f6   vitthalkhedekar/banking-api:v2.4    "node server.js"         2 hours ago     Up 2 hours     127.0.0.1:5000->5000/tcp
9z8y7x6w5v4u   nginx:alpine                        "/docker-entrypoint…"   2 hours ago     Up 2 hours     0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp`
      });
    } else if (lower === 'contact') {
      newHistory.push({
        type: 'response',
        text: `Email:    vittalkhedekardev77@gmail.com
Phone:    +91-7796240277
Location: Pune, Maharashtra, India
GitHub:   https://github.com/vitthalkhedekaraws77-oss`
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `bash: command not found: ${raw}. Type 'help' for supported commands.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="bg-dark-950 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden font-mono text-xs">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-dark-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-slate-300 font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-neon-teal" />
              AWS CloudShell — vitthal@aws-cloud-vpc: ~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCommand('clear')}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Clear terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-slate-950 border-b border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="text-slate-500 font-semibold mr-1">Quick Run:</span>
          {['whoami', 'skills', 'projects', 'aws ec2 describe', 'docker ps', 'contact'].map(cmd => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-slate-900 hover:bg-neon-cyan/20 text-slate-300 hover:text-neon-cyan border border-slate-800 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Scroll Content */}
        <div className="flex-1 p-5 overflow-y-auto space-y-3 leading-relaxed text-slate-300 scrollbar-thin max-h-[50vh]">
          {history.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {line.type === 'user' && (
                <span className="text-neon-cyan font-bold">{line.text}</span>
              )}
              {line.type === 'response' && (
                <span className="text-slate-300">{line.text}</span>
              )}
              {line.type === 'system' && (
                <span className="text-emerald-400/90">{line.text}</span>
              )}
              {line.type === 'error' && (
                <span className="text-rose-400">{line.text}</span>
              )}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Command Input Form */}
        <form onSubmit={handleSubmit} className="p-3 bg-dark-900 border-t border-slate-800 flex items-center gap-2">
          <span className="text-neon-teal font-bold">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'skills', 'projects', 'contact'..."
            autoFocus
            className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder-slate-600 font-mono text-xs"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-neon-cyan transition-colors"
            title="Execute command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
}
