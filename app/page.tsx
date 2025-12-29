import React from 'react';
import { Download, Shield, Cpu, Terminal, Github } from 'lucide-react';

export default function Website() {
  
  // REPLACE THIS LINK with your actual download link (Dropbox, Google Drive, GitHub Release)
  const DOWNLOAD_LINK = "https://github.com/YOUR_USERNAME/YOUR_REPO/releases/download/v1.0/AgenticFlow-Setup.exe";

  return (
    <div className="min-h-screen bg-[#0f1218] text-slate-200 font-sans selection:bg-sky-500/30">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f1218]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-white tracking-tight">
            <span className="text-sky-500">ELECTRON</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-sky-400 bg-sky-900/20 border border-sky-700/30 rounded-full">
          v1.0 Now Available for Windows
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Giving AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Hands & Eyes</span> on Windows.
        </h1>
        
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          The desktop bridge for LLMs. Automate your workflow, inspect UI elements, and let AI drive your computer using the Windows Accessibility API.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={DOWNLOAD_LINK}
            className="h-12 px-8 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-lg shadow-sky-900/20 transition-all hover:scale-105 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download for Windows
          </a>
        </div>
        <p className="mt-4 text-xs text-slate-500">Requires Windows 10/11 • .NET 8 Runtime</p>
      </header>

      {/* --- SCREENSHOT SECTION --- */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-[#1a212a]">
          <div className="h-8 bg-[#232d3b] border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20" />
            <div className="w-3 h-3 rounded-full bg-amber-500/20" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
          </div>
          {/* REPLACE WITH YOUR ACTUAL APP SCREENSHOT */}
          <div className="aspect-video bg-gradient-to-br from-[#151b22] to-[#0d1117] flex items-center justify-center text-slate-600">
             <span className="text-sm">App Screenshot Goes Here</span>
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <Feature 
          icon={<Terminal className="text-sky-400" />} 
          title="Native Automation" 
          desc="Built on FlaUI for pixel-perfect control of Windows applications." 
        />
        <Feature 
          icon={<Cpu className="text-amber-400" />} 
          title="Model Agnostic" 
          desc="Bring your own keys. Supports Nvidia, Groq, Gemini, and Local LLMs." 
        />
        <Feature 
          icon={<Shield className="text-emerald-400" />} 
          title="Privacy First" 
          desc="Your API keys are stored locally. We send accessibility text, not screenshots." 
        />
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 py-8 text-center text-slate-600 text-sm mt-12 bg-[#0f1218]">
        &copy; 2025 Electron. All rights reserved.
      </footer>
    </div>
  );
}

// Simple Helper Component for Features
function Feature({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-[#1a212a] border border-white/5 hover:border-sky-500/30 transition-colors">
      <div className="mb-4 bg-[#232d3b] w-12 h-12 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}