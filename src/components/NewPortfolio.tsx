import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Terminal,
  Cpu,
  Database,
  Layers,
  ArrowLeft,
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Play,
  Check,
  Send,
  Download,
  AlertTriangle
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NewPortfolioProps {
  onViewClassic: () => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

// Concrete data mirroring the portfolio contents
const SYSTEM_SPECS = [
  { label: 'GPA INDEX', value: '3.88 / 4.00', status: 'HONORS' },
  { label: 'COMPILED MODULES', value: '71+ PROJECTS', status: 'ACTIVE' },
  { label: 'RUN TIME EXP', value: '3+ YEARS', status: 'OPTIMIZED' },
  { label: 'SYSTEM CORES', value: 'REACT / TS / AI', status: 'STABLE' }
];

const SKILL_PACKAGES = [
  {
    category: 'core/frontend',
    status: 'ACTIVE',
    skills: [
      { name: 'React 19', level: '■■■■■■■■■□ 90%' },
      { name: 'TypeScript', level: '■■■■■■■■□□ 80%' },
      { name: 'Tailwind CSS v4', level: '■■■■■■■■■□ 90%' },
      { name: 'TanStack Start', level: '■■■■■■■□□□ 70%' },
      { name: 'Recharts', level: '■■■■■■■■□□ 80%' }
    ]
  },
  {
    category: 'core/backend',
    status: 'STABLE',
    skills: [
      { name: 'Node.js', level: '■■■■■■■■□□ 80%' },
      { name: 'Express', level: '■■■■■■■■□□ 80%' },
      { name: 'REST APIs', level: '■■■■■■■■■□ 90%' },
      { name: 'Supabase', level: '■■■■■■■□□□ 70%' }
    ]
  },
  {
    category: 'data/persistence',
    status: 'OPTIMIZED',
    skills: [
      { name: 'PostgreSQL', level: '■■■■■■■□□□ 70%' },
      { name: 'MongoDB', level: '■■■■■■■■□□ 80%' },
      { name: 'SQL/NoSQL', level: '■■■■■■■■□□ 80%' }
    ]
  },
  {
    category: 'infrastructure/ops',
    status: 'DEPLOYED',
    skills: [
      { name: 'Git & GitHub', level: '■■■■■■■■■□ 90%' },
      { name: 'Docker', level: '■■■■■■□□□□ 60%' },
      { name: 'Cloudflare Workers', level: '■■■■■■■□□□ 70%' },
      { name: 'Vite', level: '■■■■■■■■□□ 80%' }
    ]
  }
];

const PROJECT_MANIFESTS = [
  {
    id: 'p1',
    name: 'Pomodoro Timer Extension',
    tag: 'EXTENSION',
    build: 'BUILD: SUCCESSFUL',
    tech: ['HTML5', 'JavaScript', 'CSS', 'Chrome API', 'Service Workers'],
    description: 'A minimalist Pomodoro timer Chrome Extension running reliably in the background using service workers, with notifications and stats.',
    url: 'https://github.com/dominhduy09/pomodoro-extension'
  },
  {
    id: 'p2',
    name: 'Advanced Cookie Manager',
    tag: 'EXTENSION',
    build: 'BUILD: OPTIMIZED',
    tech: ['HTML5', 'JavaScript', 'CSS', 'SHA-256', 'Chrome API'],
    description: 'Manifest V3 Chrome extension that enables developers to securely inspect, edit, and manage browser cookies with encrypted import/export.',
    url: 'https://github.com/dominhduy09/advanced-cookie-manager'
  },
  {
    id: 'p3',
    name: 'UVita Sensor Network',
    tag: 'IOT/HARDWARE',
    build: 'BUILD: READY',
    tech: ['HTML5', 'JavaScript', 'CSS', 'C++', 'Arduino', 'IoT'],
    description: 'Real-time UV monitoring application integrating sensor-enabled phone cases with a mobile app to provide accurate UV index alerts.',
    url: 'https://github.com/Phong12HexDockwork/UVita/tree/main'
  },
  {
    id: 'p4',
    name: 'GymFi Blockchain Platform',
    tag: 'WEB3/LEDGER',
    build: 'BUILD: DEPLOYED',
    tech: ['Solana', 'GameFi', 'DeFi', 'React', 'Java'],
    description: 'A blockchain-enabled fitness platform transforming verified workout achievements into digital rewards on the Solana network.',
    url: 'https://github.com/dominhduy09/GymFi-Rewarding-Fitness-with-Blockchain'
  },
  {
    id: 'p5',
    name: 'EXOFOREST Kepler Classifier',
    tag: 'AI/ML_MODEL',
    build: 'BUILD: COMPILED',
    tech: ['Python', 'FastAPI', 'Pandas', 'NumPy', 'Scikit-Learn'],
    description: 'Machine learning system classifying exoplanet candidates from NASA Kepler and TESS data using a Random Forest model.',
    url: 'https://github.com/hieupt810/nasa_exoplanets_classification'
  },
  {
    id: 'p6',
    name: 'Systems Lab Studio V2',
    tag: 'INTERFACE',
    build: 'BUILD: VERSION_2',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    description: 'High-fidelity, responsive developer portfolio showing dark/light mode toggle with custom system telemetry theme.',
    url: 'https://github.com/dominhduy09/portfolio'
  },
  {
    id: 'p7',
    name: 'PulseCheck Assistant',
    tag: 'HEALTH/AI',
    build: 'BUILD: SUCCESSFUL',
    tech: ['React 19', 'TanStack Start', 'Vite 7', 'Tailwind v4', 'Cloudflare'],
    description: 'Turns raw Granola meeting notes into structured patient briefings and follow-up emails via the Lovable AI Gateway.',
    url: 'https://github.com/dominhduy09/doctor-notes-play'
  },
  {
    id: 'p8',
    name: 'California Housing Insights',
    tag: 'GEOSPATIAL/AI',
    build: 'BUILD: PRODUCTION',
    tech: ['React 19', 'Tailwind v4', 'Wouter', 'Recharts', 'Google Maps', 'TypeScript', 'Vite'],
    description: 'Interactive analytics dashboard visualizing geographic price distributions and predictive housing values.',
    url: 'https://github.com/dominhduy09/housing-dashboard'
  },
  {
    id: 'p9',
    name: 'ChainScope Explorer',
    tag: 'BLOCKCHAIN',
    build: 'BUILD: SUCCESSFUL',
    tech: ['React 19', 'TanStack Start', 'Vite 7', 'Tailwind v4', 'Cloudflare', 'Supabase'],
    description: 'Multi-chain block explorer and analytics hub pulling real-time statistics across 17+ blockchains.',
    url: 'https://github.com/dominhduy09/blockchair-explorer-hub'
  }
];

const SYSTEM_LOGS_DB = [
  {
    stage: 'STAGE 03: COMPUTER SCIENCE CANDIDATE',
    period: '2023 - PRESENT',
    company: 'University Program',
    status: 'ACTIVE_RUNNING',
    metrics: ['GPA 3.88', 'Focus: Software Architecture', 'AI Electives']
  },
  {
    stage: 'STAGE 02: WEB DEVELOPMENT INTERN',
    period: 'SUMMER 2025',
    company: 'Tech Solutions Studio',
    status: 'COMPLETED_SUCCESS',
    metrics: ['Built 12 responsive dashboards', 'Integrated REST services', 'TypeScript Migration']
  },
  {
    stage: 'STAGE 01: OPEN SOURCE CONTRIBUTOR',
    period: '2024 - PRESENT',
    company: 'GitHub Repositories',
    status: 'CONTINUOUS_INTEGRATION',
    metrics: ['71+ repos initialized', '1200+ commits', 'Vercel Deployment Specialist']
  }
];

// Interactive blueprint nodes for the schema explorer
const SCHEMA_NODES = [
  {
    id: 'web-engine',
    name: 'WEB_ENGINE (UI/UX)',
    x: 150,
    y: 80,
    type: 'core-react',
    stats: 'Status: ONLINE | Stack: React, Framer Motion, Tailwind',
    details: 'Compiles rich interactive visual layers and handles state lifecycle actions.'
  },
  {
    id: 'ai-models',
    name: 'AI_INTELLIGENCE (API)',
    x: 450,
    y: 80,
    type: 'openai-vector',
    stats: 'Status: IDLE | Stack: OpenAI Embeddings, Semantic Search',
    details: 'Injects LLM assistant logic, text vectorization, and automated questionnaire synthesis.'
  },
  {
    id: 'db-persistence',
    name: 'PERSISTENCE_DB (DATA)',
    x: 300,
    y: 200,
    type: 'sql-nosql',
    stats: 'Status: CONNECTED | Stack: MongoDB, PostgreSQL, Redis',
    details: 'Manages user sessions, cache queues, system logs, and project metadata.'
  },
  {
    id: 'ops-deploy',
    name: 'CI_OPS (DEPLOYMENT)',
    x: 300,
    y: 320,
    type: 'vercel-git',
    stats: 'Status: DEPLOYED | Stack: Git, Vercel, Netlify',
    details: 'Auto-deploys staging versions, tests bundle size constraints, and serves assets.'
  }
];

export const NewPortfolio: React.FC<NewPortfolioProps> = ({
  onViewClassic,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const { isDark, toggleTheme } = useTheme();

  // Interactive nodes state
  const [selectedNode, setSelectedNode] = useState(SCHEMA_NODES[0]);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'Initializing V2 System Terminal...',
    'Loading telemetry profiles...',
    'System status: OPTIMIZED',
    'GPA 3.88 validated successfully.',
    'Click on any blueprint node below to inspect architecture details.'
  ]);
  const [commandInput, setCommandInput] = useState('');
  const consoleContainerRef = useRef<HTMLDivElement>(null);

  // Terminal compiler typing effect simulation
  const [compileProgress, setCompileProgress] = useState(0);
  const [isCompiling, setIsCompiling] = useState(false);

  // Auto scroll terminal to bottom
  useEffect(() => {
    if (consoleContainerRef.current) {
      consoleContainerRef.current.scrollTop = consoleContainerRef.current.scrollHeight;
    }
  }, [terminalLogs, isCompiling]);

  // Contact Form State
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [formLogs, setFormLogs] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  useEffect(() => {
    // Add periodic system heartbeat log
    const logInterval = setInterval(() => {
      const liveMetrics = [
        `System heartbeat [${new Date().toLocaleTimeString()}] - OK`,
        `Memory usage: stable`,
        `API gateway status: listening on port 5173`,
        `Viewport size matched to layout grid`,
        `Aesthetic blueprint constraints enforced`
      ];
      const randomLog = liveMetrics[Math.floor(Math.random() * liveMetrics.length)];
      setTerminalLogs(prev => [...prev.slice(-4), randomLog]);
    }, 8000);

    return () => clearInterval(logInterval);
  }, []);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = commandInput.trim().toLowerCase();
    if (!cleanCmd) return;

    setTerminalLogs(prev => [...prev, `guest@duy:~$ ${commandInput}`]);
    setCommandInput('');

    switch (cleanCmd) {
      case 'help':
        setTerminalLogs(prev => [
          ...prev,
          'Available commands:',
          '  help        - Display this suggestions guide',
          '  about       - Read short developer profile overview',
          '  skills      - Retrieve core expertise matrices',
          '  projects    - Show featured systems build details',
          '  diagnostic  - Run diagnostic compiler health check',
          '  clear       - Clear terminal console records',
          '  exit        - Return to Classic V1 layout version'
        ]);
        break;
      case 'clear':
        setTerminalLogs([]);
        break;
      case 'about':
        setTerminalLogs(prev => [
          ...prev,
          '>> IDENTITY: MINH DUY DO | SYSTEMS LAB TELEMETRY v2.0',
          '>> ROLE: Software Engineer & Computer Science Student',
          '>> INSTITUTION: University of Alabama at Birmingham (GPA: 3.88)',
          '>> DOMAIN: Full-Stack Web Development, System Architecture, AI/ML'
        ]);
        break;
      case 'skills':
        setTerminalLogs(prev => [
          ...prev,
          '>> MATRICES DATA DECODED:',
          '  - languages   :: C++, Java, Python, JavaScript, TypeScript, SQL',
          '  - frontend    :: React 19, Tailwind CSS v4, TanStack, HTML5/CSS3',
          '  - system/infra:: Node.js, Express, Supabase, Docker, Linux, AWS'
        ]);
        break;
      case 'projects':
        setTerminalLogs(prev => [
          ...prev,
          '>> RUNNING PROJECTS REGISTRIES:',
          '  - PulseCheck  :: Clinical Note Assistant (Lovable, React 19, Cloudflare)',
          '  - California  :: California Housing Market Price Analytics (Google Maps)',
          '  - ChainScope  :: Multichain Explorer Explorer (Blockchair APIs, Supabase)',
          '  - extensions  :: Pomodoro MV3 Timer & Advanced Cookie Managers'
        ]);
        break;
      case 'diagnostic':
        runCompilerDiagnostic();
        break;
      case 'exit':
        setTerminalLogs(prev => [...prev, '>> Executing exit sequence...']);
        setTimeout(() => {
          onViewClassic();
        }, 1000);
        break;
      default:
        setTerminalLogs(prev => [
          ...prev,
          `>> unknown CLI instruction: '${cleanCmd}'`,
          `>> Type 'help' to query directory commands.`
        ]);
    }
  };

  const handleNodeClick = (node: typeof SCHEMA_NODES[0]) => {
    setSelectedNode(node);
    setTerminalLogs(prev => [
      ...prev.slice(-3),
      `>> QUERY NODE: ${node.id.toUpperCase()}`,
      `>> ${node.stats}`,
      `>> ${node.details}`
    ]);
  };

  const runCompilerDiagnostic = () => {
    if (isCompiling) return;
    setIsCompiling(true);
    setCompileProgress(0);
    setTerminalLogs(prev => [...prev, '>> Running diagnostic compiler...']);

    const interval = setInterval(() => {
      setCompileProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsCompiling(false);
          setTerminalLogs(last => [
            ...last,
            '>> Compilation complete.',
            '>> 0 errors | 0 warnings | Bundle Size: 93KB gzipped.',
            '>> All system assets validated successfully.'
          ]);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 5;
        const next = Math.min(prev + step, 100);
        return next;
      });
    }, 150);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !messageInput || isSending) return;

    setIsSending(true);
    setFormLogs([
      '>> guest@duy-lab:~$ submit_message',
      '>> Connecting to EmailJS mailer service...',
      '>> Validating environment variables...'
    ]);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback: simulate sending logs, then trigger mailto redirection
      setTimeout(() => {
        setFormLogs(prev => [
          ...prev,
          '>> WARNING: EmailJS configuration keys are un-configured.',
          '>> Fallback: Redirecting client mailer...'
        ]);
        
        setTimeout(() => {
          const mailtoUrl = `mailto:dominhduy09@gmail.com?subject=${encodeURIComponent(
            'Message from V2 Systems Lab Portfolio'
          )}&body=${encodeURIComponent(
            `From: ${emailInput}\n\nMessage:\n${messageInput}`
          )}`;
          
          window.location.href = mailtoUrl;
          setFormLogs(prev => [
            ...prev,
            '>> Connection closed. Fallback active.'
          ]);
          setIsSending(false);
          setSendSuccess(true);
          setEmailInput('');
          setMessageInput('');
        }, 1200);
      }, 800);
      return;
    }

    try {
      setFormLogs(prev => [...prev, '>> Handshaking mail gateway...']);
      
      const templateParams = {
        from_name: 'V2 Telemetry Guest',
        reply_to: emailInput,
        subject: 'Message from V2 Systems Lab Portfolio',
        message: messageInput,
        time: new Date().toLocaleString()
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setFormLogs(prev => [
        ...prev,
        '>> Dispatch payload compiled.',
        `>> Service ID: ${serviceId.substring(0, 8)}... (Linked)`,
        '>> Transmitting payload...',
        '>> SUCCESS: Message dispatched successfully!'
      ]);
      setIsSending(false);
      setSendSuccess(true);
      setEmailInput('');
      setMessageInput('');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormLogs(prev => [
        ...prev,
        '>> ERROR: Failed to dispatch mail gateway.',
        '>> Redirecting to local mail client fallback...'
      ]);
      
      setTimeout(() => {
        const mailtoUrl = `mailto:dominhduy09@gmail.com?subject=${encodeURIComponent(
          'Message from V2 Systems Lab'
        )}&body=${encodeURIComponent(
          `From: ${emailInput}\n\nMessage:\n${messageInput}`
        )}`;
        window.location.href = mailtoUrl;
        setIsSending(false);
        setSendSuccess(true);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-mono transition-colors duration-300 blueprint-grid relative">

      {/* V2 Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-display font-bold text-sm tracking-wider text-gray-900 dark:text-white uppercase">
              Duy_Do_Minh.sys [v2.0.0]
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onViewClassic}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 transition-all active:scale-95"
            >
              <ArrowLeft size={14} />
              <span>Return to Classic</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 transition-all active:scale-95"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">

        {/* HERO SECTION: The System Thesis */}
        <section className="grid lg:grid-cols-12 gap-8 items-start py-6">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/40 text-xs font-bold uppercase tracking-widest">
              <Terminal size={12} />
              <span>SYSTEM ARCHITECT & BUILDER</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-gray-900 dark:text-white leading-tight uppercase tracking-tight">
              Compiling Ideas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500">
                Into Architecture
              </span>
            </h1>

            <p className="font-sans text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-xl">
              I view coding not just as typing code, but as building logical pipelines, structural schemas, and responsive interfaces. Highly disciplined academic record paired with massive project throughput.
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-4">
              {SYSTEM_SPECS.map((spec, index) => (
                <div
                  key={index}
                  className="p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded relative overflow-hidden group hover:border-indigo-500 dark:hover:border-indigo-500 transition-all"
                >
                  <div className="absolute top-0 right-0 h-1.5 w-1.5 bg-indigo-500"></div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">{spec.label}</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white font-display mt-1">{spec.value}</div>
                  <div className="text-[9px] font-bold mt-1 inline-block text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-1 rounded">
                    {spec.status}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="#manifest"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded text-sm transition-all shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/30 active:scale-95"
              >
                <span>Browse Manifest [Projects]</span>
                <ChevronRight size={16} />
              </a>

              <a
                href="/cv/Minh_Duy_Do_Resume.pdf"
                download
                className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white font-semibold rounded text-sm transition-all active:scale-95"
              >
                <Download size={16} />
                <span>Download Specs [CV]</span>
              </a>
            </div>
          </div>

          {/* TELEMETRY & SVG DIAGRAM: The Aesthetic Risk */}
          <div className="lg:col-span-6 space-y-4">

            {/* The Live Console Panel */}
            <div className="bg-gray-900 dark:bg-gray-950 text-emerald-400 border border-gray-800 rounded overflow-hidden shadow-2xl flex flex-col h-[200px]">
              <div className="bg-gray-850 dark:bg-gray-900/50 px-4 py-2 border-b border-gray-800 flex items-center justify-between text-xs text-gray-400 font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  <span className="ml-1 text-[10px]">guest@duy-compiler:~$</span>
                </div>
                <div>SYSTEM LOGS</div>
              </div>
              <div 
                ref={consoleContainerRef}
                className="p-4 flex-1 text-xs space-y-1.5 overflow-y-auto font-mono scrollbar-thin scrollbar-thumb-gray-800"
              >
                {terminalLogs.map((log, idx) => (
                  <div key={idx} className="leading-relaxed whitespace-pre-wrap">
                    {log}
                  </div>
                ))}
                {isCompiling && (
                  <div className="w-full bg-gray-800 h-2 rounded mt-2 overflow-hidden border border-gray-700">
                    <div
                      className="bg-emerald-500 h-full transition-all duration-150"
                      style={{ width: `${compileProgress}%` }}
                    ></div>
                  </div>
                )}
                
                {/* Interactive Prompt Input */}
                <form onSubmit={handleCommandSubmit} className="flex items-center gap-1.5 pt-1.5 border-t border-gray-800/40 text-[11px]">
                  <span className="text-indigo-400 font-bold shrink-0">guest@duy:~$</span>
                  <input
                    type="text"
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    disabled={isCompiling}
                    className="flex-1 bg-transparent border-none outline-none focus:ring-0 p-0 text-[11px] text-emerald-400 font-mono"
                    placeholder="type 'help'..."
                  />
                </form>
              </div>
            </div>

            {/* Interactive SVG Career Schema Explorer */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-2 right-2 text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">
                SCHEMA_EXPLORER.svg
              </div>
              <h3 className="text-xs font-bold text-gray-800 dark:text-gray-300 mb-4 flex items-center gap-1.5 uppercase">
                <Cpu size={14} className="text-indigo-500" />
                <span>Interactive Architecture Blueprint</span>
              </h3>

              {/* Dynamic SVG Drawing */}
              <div className="w-full overflow-x-auto flex justify-center py-2 bg-gray-50 dark:bg-gray-950/40 rounded border border-gray-250 dark:border-gray-850">
                <svg width="600" height="380" viewBox="0 0 600 380" className="max-w-full">
                  {/* Connection Lines */}
                  <line x1="300" y1="200" x2="150" y2="80" stroke="#4F46E5" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="300" y1="200" x2="450" y2="80" stroke="#4F46E5" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="300" y1="200" x2="300" y2="320" stroke="#4F46E5" strokeWidth="2" />
                  <line x1="150" y1="80" x2="450" y2="80" stroke="#D946EF" strokeWidth="1.5" strokeDasharray="4,4" />

                  {/* Schema Nodes */}
                  {SCHEMA_NODES.map((node) => {
                    const isSelected = selectedNode.id === node.id;
                    return (
                      <g
                        key={node.id}
                        className="cursor-pointer group"
                        onClick={() => handleNodeClick(node)}
                      >
                        {/* Pulse effect for selected node */}
                        {isSelected && (
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r="32"
                            fill="none"
                            stroke="#FF6B35"
                            strokeWidth="1.5"
                            className="animate-ping opacity-45"
                            style={{
                              transformOrigin: `${node.x}px ${node.y}px`,
                              animationDuration: '2.5s',
                            }}
                          />
                        )}

                        {/* Glowing core background aura */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="16"
                          className={`transition-all duration-300 blur-[4px] opacity-70 ${
                            isSelected ? 'fill-orange-400 animate-pulse' : 'fill-transparent group-hover:fill-indigo-400/30'
                          }`}
                        />

                        {/* Outer border ring */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isSelected ? 26 : 22}
                          fill="transparent"
                          stroke={isSelected ? '#FF6B35' : '#4F46E5'}
                          strokeWidth="2"
                          className="transition-all duration-300 group-hover:scale-105"
                          style={{
                            transformOrigin: `${node.x}px ${node.y}px`,
                          }}
                        />

                        {/* Center core */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="14"
                          className={`transition-colors duration-300 ${
                            isSelected 
                              ? 'fill-orange-500' 
                              : 'fill-indigo-600 dark:fill-indigo-950 group-hover:fill-indigo-500'
                          }`}
                          stroke={isSelected ? '#FFFFFF' : '#4F46E5'}
                          strokeWidth="2"
                        />

                        {/* Node Label Text */}
                        <text
                          x={node.x}
                          y={node.y + (isSelected ? 45 : 38)}
                          textAnchor="middle"
                          className={`text-[9px] font-mono font-bold tracking-wide uppercase transition-colors ${
                            isSelected 
                              ? 'fill-orange-500' 
                              : 'fill-gray-600 dark:fill-gray-400 group-hover:fill-gray-900 dark:group-hover:fill-white'
                          }`}
                        >
                          {node.name.split(' ')[0]}
                        </text>
                      </g>
                    );
                  })}

                  {/* Central Node labels inside bubbles */}
                  <rect x="250" y="180" width="100" height="40" rx="4" fill="#0A0E17" stroke="#FF6B35" strokeWidth="1.5" />
                  <text x="300" y="205" textAnchor="middle" fill="#FFFFFF" className="text-[10px] font-bold">CORE_ENGINE</text>
                </svg>
              </div>

              {/* Node Inspector Details Box */}
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-4 p-3 bg-gray-50 dark:bg-gray-950/70 border border-gray-200 dark:border-gray-800/80 rounded"
              >
                <div className="flex items-center justify-between text-xs font-bold text-gray-800 dark:text-gray-300 mb-1 border-b border-gray-200 dark:border-gray-800 pb-1">
                  <span>SPEC INSPECTOR: {selectedNode.name}</span>
                  <span className="text-[10px] text-orange-500">ACTIVE</span>
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed font-sans mt-2">
                  {selectedNode.details}
                </div>
                <div className="text-[10px] text-indigo-600 dark:text-indigo-400 mt-2 font-mono font-semibold">
                  {selectedNode.stats}
                </div>
              </motion.div>

              <div className="mt-3 flex justify-between items-center text-xs">
                <span className="text-gray-400 dark:text-gray-500">Telemetry diagnosis tools:</span>
                <button
                  onClick={runCompilerDiagnostic}
                  disabled={isCompiling}
                  className="flex items-center gap-1.5 px-3 py-1 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/30 dark:hover:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded font-bold transition-all disabled:opacity-50"
                >
                  <Play size={10} className={isCompiling ? 'animate-spin' : ''} />
                  <span>Run Compiler Diagnostic</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* COMPILER CONFIG & SKILL SETS */}
        <section id="skills" className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded shadow-sm relative">
          <div className="absolute top-4 right-4 text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">
            skills_compiler.conf
          </div>

          <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
              <Layers size={20} className="text-indigo-500" />
              <span>Technology Core Packages</span>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Validating compilation profile modules and libraries active in this environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className="border border-gray-250 dark:border-gray-800/80 bg-gray-50/50 dark:bg-gray-950/20 rounded p-4 flex flex-col justify-between hover:border-indigo-500 dark:hover:border-indigo-900 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold tracking-wider uppercase border-b border-gray-250 dark:border-gray-800 pb-2 mb-3">
                    <span className="text-indigo-600 dark:text-indigo-400">{pkg.category}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-1 rounded text-[9px]">{pkg.status}</span>
                  </div>

                  <ul className="space-y-3 font-mono text-xs">
                    {pkg.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="space-y-1">
                        <div className="flex justify-between text-gray-800 dark:text-gray-300">
                          <span className="font-semibold">{skill.name}</span>
                        </div>
                        <div className="text-[10px] text-gray-400 dark:text-gray-500 leading-none tracking-tighter">
                          {skill.level}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORKSPACE PROJECTS MANIFEST */}
        <section id="manifest" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
                <Database size={20} className="text-indigo-500" />
                <span>Workspace Manifest [Projects]</span>
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Inventory audit of compiled source codes, browser scripts, and software tools.
              </p>
            </div>

            <div className="mt-3 sm:mt-0 text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider font-mono">
              INVENTORY_COUNT: 71_REPOS
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECT_MANIFESTS.map((project, idx) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 rounded p-5 flex flex-col justify-between shadow-sm relative overflow-hidden group transition-all duration-300 hover:shadow-md"
              >
                {/* Visual grid blueprint detail in card */}
                <div className="absolute top-0 right-0 h-8 w-8 bg-indigo-500/10 dark:bg-indigo-500/5 flex items-center justify-center font-bold text-[9px] text-indigo-600 dark:text-indigo-400 border-l border-b border-gray-200 dark:border-gray-850">
                  #{idx + 1}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 uppercase">
                      {project.tag}
                    </span>
                    <span className="text-[9px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-tighter">
                      {project.build}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 dark:text-white font-display group-hover:text-indigo-500 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 mt-4 pt-3 border-t border-gray-150 dark:border-gray-850">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono font-bold text-gray-500 dark:text-gray-500"
                      >
                        [{t}]
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      <span>ACTIVE_RUNNING</span>
                    </span>

                    <a
                      href={project.url}
                      className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <span>inspect_src</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CAREER PIPELINE LOGS */}
        <section id="experience" className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded shadow-sm relative">
          <div className="absolute top-4 right-4 text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">
            execution_pipeline.log
          </div>

          <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
              <Terminal size={20} className="text-indigo-500" />
              <span>Execution Pipeline Logs [Experience]</span>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Historical career operations running in sequential execution threads.
            </p>
          </div>

          <div className="relative border-l border-gray-250 dark:border-gray-800 ml-4 space-y-8 py-2">
            {SYSTEM_LOGS_DB.map((log, index) => (
              <div key={index} className="relative pl-6 group">
                {/* Log pipeline pointer indicator */}
                <div className="absolute left-0 top-1.5 -translate-x-1.5 h-3 w-3 rounded-full border-2 border-indigo-500 bg-white dark:bg-gray-900 group-hover:bg-indigo-500 transition-colors"></div>

                <div className="p-4 bg-gray-50 dark:bg-gray-950/40 border border-gray-200 dark:border-gray-800 rounded hover:border-indigo-500 dark:hover:border-indigo-900 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 dark:border-gray-800 pb-2 mb-3">
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white font-mono">
                        {log.stage}
                      </h3>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400 font-sans font-semibold">
                        {log.company}
                      </div>
                    </div>

                    <div className="mt-1 sm:mt-0 text-right space-y-1">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 uppercase">
                        {log.period}
                      </span>
                      <div className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase mt-1">
                        [{log.status}]
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-400 font-sans">
                    {log.metrics.map((metric, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-indigo-500 font-bold font-mono mt-0.5">»</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SYSTEM INBOUND MAIL GATEWAY [CONTACT] */}
        <section id="contact" className="grid lg:grid-cols-12 gap-8 items-start">

          {/* Instructions */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
              <Mail size={20} className="text-indigo-500" />
              <span>Inbound Gateway</span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
              Open a request thread or direct message pipeline to communicate. Initiating submission transmits form payload details directly.
            </p>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900/40 rounded text-xs text-yellow-800 dark:text-yellow-400 font-sans leading-relaxed">
              <div className="flex gap-2 items-start">
                <AlertTriangle size={16} className="shrink-0 mt-0.5 text-yellow-600 dark:text-yellow-400" />
                <div>
                  <strong className="font-bold">SYSTEM NOTICE:</strong> Spams, scrapers, and malicious scripts are automatically blacklisted at the packet layer. Send legitimate queries only.
                </div>
              </div>
            </div>

            <div className="space-y-2.5 text-xs font-mono">
              <div className="text-gray-400 dark:text-gray-500 uppercase font-bold text-[10px]">DIRECT GATEWAY CREDENTIALS:</div>
              <div className="flex items-center gap-2 text-gray-800 dark:text-gray-300">
                <Mail size={12} className="text-indigo-500" />
                <span>dominhduy09@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800 dark:text-gray-300">
                <Linkedin size={12} className="text-indigo-500" />
                <a href="https://www.linkedin.com/in/duy-do-minh-0b37501a9/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/duy-do-minh-0b37501a9</a>
              </div>
              <div className="flex items-center gap-2 text-gray-800 dark:text-gray-300">
                <Github size={12} className="text-indigo-500" />
                <a href="https://github.com/dominhduy09" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/dominhduy09</a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-6 shadow-sm">
            <div className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider mb-4 font-mono">
              guest_mailer_stream.py
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4 font-mono">
              <div>
                <label className="block text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">
                  guest@duy-lab:~$ enter_email
                </label>
                <input
                  type="email"
                  required
                  disabled={isSending || sendSuccess}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="e.g. recruit@studio.io"
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-250 dark:border-gray-850 px-3 py-2 text-xs rounded outline-none focus:border-indigo-500 text-gray-900 dark:text-white placeholder-gray-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">
                  guest@duy-lab:~$ enter_message
                </label>
                <textarea
                  rows={4}
                  required
                  disabled={isSending || sendSuccess}
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type message content here..."
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-250 dark:border-gray-850 px-3 py-2 text-xs rounded outline-none focus:border-indigo-500 text-gray-900 dark:text-white placeholder-gray-500 font-mono resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSending || sendSuccess || !emailInput || !messageInput}
                  className="flex items-center justify-center gap-1.5 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded text-xs transition-all disabled:opacity-50 active:scale-95"
                >
                  <Send size={12} />
                  <span>Execute Send</span>
                </button>

                {sendSuccess && (
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-bold">
                    <Check size={14} />
                    <span>Payload sent. Connection closed.</span>
                  </span>
                )}
              </div>
            </form>

            {/* Form activity log output console */}
            {formLogs.length > 0 && (
              <div className="mt-5 p-3 bg-gray-950 text-emerald-500 text-[10px] font-mono space-y-1 rounded border border-gray-850 overflow-x-auto">
                {formLogs.map((log, idx) => (
                  <div key={idx} className="leading-tight">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

      </main>

      {/* Blueprint Footer */}
      <footer className="border-t border-gray-250 dark:border-gray-850 bg-white dark:bg-gray-950 mt-16 font-mono text-[10px] text-gray-500 dark:text-gray-500">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Minh Duy Do. All log records archived.
          </div>
          <div className="flex items-center gap-6">
            <span>Lat: 37.7749 / Lng: -122.4194</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer bg-transparent border-none font-bold"
            >
              [Privacy]
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer bg-transparent border-none font-bold"
            >
              [Terms]
            </button>
            <button
              onClick={onViewClassic}
              className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline bg-transparent border-none cursor-pointer"
            >
              [Return to Classic Version]
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
