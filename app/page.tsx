"use client";

import React from 'react';
import { Download, Shield, Cpu, Terminal, Github, Zap, Code, Layout, Sparkles } from 'lucide-react';

export default function Website() {
  
  // YOUR ACTUAL LINKS
  const DOWNLOAD_LINK = "https://github.com/Saivamshi-git/ElectronWebPage/releases/download/v1.0.0/electron.zip";
  const GITHUB_REPO = "https://github.com/Saivamshi-git/ElectronWebPage";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-200 font-sans selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* --- BACKGROUND GLOWS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px]" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span>ELECTRON <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-sky-400 ml-2">BETA</span></span>
          </div>
          <div className="flex gap-4">
            <a href={GITHUB_REPO} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">Star on GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative z-10 pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-sky-300 bg-sky-950/30 border border-sky-500/20 rounded-full animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          Public Beta v1.0 Available
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Giving AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 animate-gradient">Hands & Eyes</span>
          <br /> on Windows.
        </h1>
        
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          The open-source desktop bridge for LLMs. Automate workflows, inspect native UI elements, and let AI drive your computer using the Windows Accessibility API.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={DOWNLOAD_LINK}
            className="group h-12 px-8 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:scale-105 flex items-center gap-2"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Beta
          </a>
          <a 
            href={GITHUB_REPO}
            className="h-12 px-8 rounded-full bg-[#1a1f2e] border border-white/10 hover:border-white/20 text-slate-200 font-medium transition-all hover:bg-[#232936] flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View Source
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-500 font-mono">
          <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Local Execution</span>
          <span>•</span>
          <span>Windows 10/11</span>
          <span>•</span>
          <span>.NET 8</span>
        </div>
      </header>

      {/* --- MOCKUP / DEMO SECTION --- */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-5xl mx-auto rounded-xl border border-white/10 shadow-2xl bg-[#0f1115] overflow-hidden backdrop-blur-sm relative group">
          
          {/* Window Header */}
          <div className="h-10 bg-[#161b22] border-b border-white/5 flex items-center px-4 justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/30" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
            </div>
            <div className="text-xs text-slate-500 font-mono">Electron.exe — Agentic Flow</div>
            <div className="w-12" /> 
          </div>

          {/* SIMULATED INTERFACE */}
          <div className="aspect-[16/9] bg-gradient-to-br from-[#0d1117] to-[#05070a] flex relative">
            
            {/* Sidebar Simulation */}
            <div className="hidden md:flex w-64 border-r border-white/5 flex-col p-4 gap-3">
              <div className="h-8 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-white/5 rounded opacity-50" />
              <div className="h-4 w-1/2 bg-white/5 rounded opacity-50" />
              <div className="mt-auto h-12 w-full bg-sky-900/20 border border-sky-500/20 rounded flex items-center justify-center text-sky-400 text-xs font-mono">
                Running Local LLM
              </div>
            </div>

            {/* Main Content / Terminal Simulation */}
            <div className="flex-1 p-6 font-mono text-sm overflow-hidden">
               <TypewriterEffect />
            </div>
          </div>
          
          {/* Glow Effect behind borders */}
          <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" />
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature 
            icon={<Layout className="text-sky-400" />} 
            title="Native UI Inspection" 
            desc="Built on FlaUI. The agent can 'see' buttons, inputs, and grids exactly how Windows renders them." 
          />
          <Feature 
            icon={<Cpu className="text-amber-400" />} 
            title="Model Agnostic" 
            desc="Bring your own keys. Supports Nvidia NIM, Groq, Gemini, and Local LLMs (Ollama)." 
          />
          <Feature 
            icon={<Shield className="text-emerald-400" />} 
            title="Privacy by Design" 
            desc="Your API keys are stored locally. We process Accessibility Trees, not pixel screenshots." 
          />
          <Feature 
            icon={<Terminal className="text-purple-400" />} 
            title="Console Control" 
            desc="Watch the agent's thought process in real-time via the built-in terminal stream." 
          />
          <Feature 
            icon={<Code className="text-pink-400" />} 
            title="Open Source" 
            desc="Modify the agent's behavior. The entire codebase is available on GitHub." 
          />
          <Feature 
            icon={<Sparkles className="text-yellow-200" />} 
            title="Human-in-the-loop" 
            desc="Pause, resume, or take over control at any moment. You are always the pilot." 
          />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 border-t border-white/5 py-12 text-center bg-[#050505]">
        <div className="flex items-center justify-center gap-2 mb-4 text-white font-bold">
           <Zap className="w-5 h-5 text-sky-500 fill-current" /> ELECTRON
        </div>
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Electron. Built for the Open Source Community.
        </p>
      </footer>
    </div>
  );
}

// --- SUBCOMPONENTS ---

// FIXED: Added TypeScript Types here
function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group p-6 rounded-2xl bg-[#11161d] border border-white/5 hover:border-sky-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-900/10 hover:-translate-y-1">
      <div className="mb-4 bg-[#1a212a] w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

// Simulated Terminal for the Screenshot Area
function TypewriterEffect() {
  return (
    <div className="space-y-2">
      <div className="flex gap-2 text-slate-500">
        <span>$</span>
        <span className="text-slate-300">electron start --agent="browser-navigator"</span>
      </div>
      <div className="text-emerald-400 font-bold mt-4">✓ Agent Initialized</div>
      <div className="text-sky-400 mt-2">► Identifying active window...</div>
      <div className="text-slate-400 ml-4">Found: "Chrome" (ProcessID: 1240)</div>
      <div className="text-sky-400">► Analyzing UI Tree...</div>
      <div className="text-slate-400 ml-4">Found element: &lt;Button Name="Search" /&gt;</div>
      <div className="text-sky-400">► Action: Click</div>
      <div className="text-slate-400 ml-4">Moving cursor to (450, 120)...</div>
      <div className="flex gap-2 items-center text-amber-400 mt-4">
        <span className="animate-pulse">●</span>
        <span>Awaiting next command...</span>
      </div>
    </div>
  );
}