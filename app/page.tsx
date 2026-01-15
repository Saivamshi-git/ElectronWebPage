"use client";

import React, { useState } from 'react';
// IMPORT YOUR SUPABASE CLIENT
import { supabase } from './lib/supabaseClient'; 
import { Download, Shield, Cpu, Terminal, Github, Zap, Code, Layout, Sparkles, X, CheckCircle, Mail, ShieldCheck, Loader2, ArrowRight, FileText, AlertTriangle, Check, Gavel, Banknote, ServerCrash, Linkedin } from 'lucide-react';

export default function Website() {
  
  // STATE MANAGEMENT
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  // YOUR ACTUAL LINKS
  const DOWNLOAD_LINK = "https://github.com/Saivamshi-git/ElectronWebPage/releases/download/v1.0.0/Electron_beta.zip";
  const GITHUB_PROFILE = "https://github.com/Saivamshi-git";
  const LINKEDIN_PROFILE = "https://www.linkedin.com/in/saivamshi6220";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-200 font-sans selection:bg-sky-500/30 overflow-x-hidden relative">
      
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
          
          {/* --- TOP RIGHT CONTENT ADDED HERE --- */}
          <div className="flex gap-5 items-center">
             <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
               <Github className="w-5 h-5" />
             </a>
             <a href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
               <Linkedin className="w-5 h-5" />
             </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative z-10 pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
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
          The desktop bridge for LLMs. Automate workflows, inspect native UI elements, and let AI drive your computer using the Windows Accessibility API.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setIsDownloadOpen(true)}
            className="group h-12 px-8 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:scale-105 flex items-center gap-2"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Beta
          </button>
        </div>
        
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-500 font-mono">
          <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Local Execution</span>
          <span>•</span>
          <span>Windows 10/11</span>
          <span>•</span>
          <span>.NET 8</span>
        </div>
      </header>

      {/* --- MOCKUP SECTION --- */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-5xl mx-auto rounded-xl border border-white/10 shadow-2xl bg-[#0f1115] overflow-hidden backdrop-blur-sm relative group">
          <div className="h-10 bg-[#161b22] border-b border-white/5 flex items-center px-4 justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/30" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
            </div>
            <div className="text-xs text-slate-500 font-mono">Electron.exe — Agentic Flow</div>
            <div className="w-12" /> 
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-[#0d1117] to-[#05070a] flex relative">
            <div className="hidden md:flex w-64 border-r border-white/5 flex-col p-4 gap-3">
              <div className="h-8 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-white/5 rounded opacity-50" />
              <div className="h-4 w-1/2 bg-white/5 rounded opacity-50" />
              <div className="mt-auto h-12 w-full bg-sky-900/20 border border-sky-500/20 rounded flex items-center justify-center text-sky-400 text-xs font-mono">Running Local LLM</div>
            </div>
            <div className="flex-1 p-6 font-mono text-sm overflow-hidden">
               <TypewriterEffect />
            </div>
          </div>
          <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" />
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={<Layout className="text-sky-400" />} title="Native UI Inspection" desc="Built on FlaUI. The agent can 'see' buttons, inputs, and grids exactly how Windows renders them." />
          <Feature icon={<Cpu className="text-amber-400" />} title="Model Agnostic" desc="Bring your own keys. Supports Nvidia NIM, Groq, Gemini, Perplexity, Open router and Cohere." />
          <Feature icon={<Shield className="text-emerald-400" />} title="Privacy by Design" desc="Your API keys are stored locally. We process Accessibility Trees, not pixel screenshots." />
          <Feature icon={<Terminal className="text-purple-400" />} title="Console Control" desc="Watch the agent's thought process in real-time via the built-in terminal stream." />
          
          {/* SEMANTIC AUTOMATION FEATURE */}
          <Feature icon={<Code className="text-pink-400" />} title="Semantic Automation" desc="Parses UI trees into context. The AI intelligently invokes, selects, and manipulates apps to perform complex tasks." />
          
          <Feature icon={<Sparkles className="text-yellow-200" />} title="Human-in-the-loop" desc="Pause, resume, or take over control at any moment. You are always the pilot." />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 border-t border-white/5 py-12 text-center bg-[#050505]">
        <div className="flex items-center justify-center gap-2 mb-4 text-white font-bold">
            <Zap className="w-5 h-5 text-sky-500 fill-current" /> ELECTRON
        </div>
        <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} Electron. Automated Intelligence.</p>
        
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-slate-500">
            <button onClick={() => setIsTermsOpen(true)} className="hover:text-slate-300 underline">Terms & Conditions</button>
            
            <span className="hidden md:inline">•</span>
            
            <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
               <Github className="w-4 h-4" /> GitHub
            </a>

            <span className="hidden md:inline">•</span>

            <a href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
               <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
        </div>
      </footer>

      {/* --- MODALS --- */}
      
      {isDownloadOpen && (
        <DownloadModal 
          onClose={() => setIsDownloadOpen(false)} 
          onOpenTerms={() => setIsTermsOpen(true)}
          downloadLink={DOWNLOAD_LINK} 
        />
      )}

      {isTermsOpen && (
        <TermsModal onClose={() => setIsTermsOpen(false)} />
      )}

    </div>
  );
}

// --- SUBCOMPONENTS ---

function Feature({ icon, title, desc }) {
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
      <div className="text-sky-400">► Action: Click</div>
      <div className="text-slate-400 ml-4">Moving cursor to (450, 120)...</div>
      <div className="flex gap-2 items-center text-amber-400 mt-4">
        <span className="animate-pulse">●</span>
        <span>Awaiting next command...</span>
      </div>
    </div>
  );
}

// --- TERMS COMPONENT ---
function TermsModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      {/* CSS FOR CUSTOM SCROLLBAR */}
      <style>{`
        .terms-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .terms-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .terms-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }
        .terms-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        /* Firefox fallback */
        .terms-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
        }
      `}</style>

      <div className="relative w-full max-w-2xl bg-[#0f1115] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#161b22]">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Gavel className="w-5 h-5 text-sky-400" />
            End User License Agreement
          </h2>
          <button onClick={onClose} className="text-slate-500 hover:text-white"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-8 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed font-sans terms-scrollbar pr-4">
            
            <div className="bg-amber-950/30 border border-amber-500/20 p-5 rounded-xl flex gap-4">
                <AlertTriangle className="w-8 h-8 text-amber-500 shrink-0" />
                <div>
                    <h4 className="text-amber-500 font-bold text-base mb-1">AUTOMATION RISK WARNING</h4>
                    <p className="text-amber-200/70 text-xs leading-5">
                        This software grants Artificial Intelligence (AI) non-deterministic control over your computer's input devices (Mouse, Keyboard). The AI may perform actions you did not intend, including deleting files, sending messages, or closing applications.
                    </p>
                </div>
            </div>

            <section>
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-slate-500" /> 1. Acceptance & "Beta" Status
                </h3>
                <p>By downloading or using "Electron" (the "Software"), you acknowledge that this is <strong>experimental Beta software</strong>. It is not feature-complete and may contain significant bugs. The Software is provided "AS IS" without warranty of any kind.</p>
            </section>

            <section>
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                    <ServerCrash className="w-4 h-4 text-slate-500" /> 2. AI Hallucinations & Unpredictability
                </h3>
                <p>The Software relies on Large Language Models (LLMs) to interpret screen data (FlaUI semantic trees) and execute actions. LLMs are stochastic and known to "hallucinate."</p>
                <p className="mt-2 text-slate-400 text-xs p-3 bg-white/5 rounded border border-white/5">
                    <strong>YOU AGREE THAT THE DEVELOPERS ARE NOT LIABLE FOR:</strong><br/>
                    (A) Data loss, corruption, or unintended modifications.<br/>
                    (B) Actions taken by the Agent on third-party platforms (e.g., accidental posts on social media).<br/>
                    (C) Financial loss resulting from the Agent's interactions with banking or payment interfaces.
                </p>
            </section>

            <section>
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Banknote className="w-4 h-4 text-slate-500" /> 3. Third-Party API Costs & Keys
                </h3>
                <p>The Software requires you to provide your own API keys (e.g., OpenAI, Anthropic, Groq). You are solely responsible for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400 text-xs">
                    <li>Securing your API keys on your local machine.</li>
                    <li>Monitoring your usage limits and quotas.</li>
                    <li>Paying any fees incurred by the AI Agent during its operation. The Developers are not responsible for "runaway" loops that consume API credits.</li>
                </ul>
            </section>

            <section>
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-slate-500" /> 4. Prohibited Use & Compliance
                </h3>
                <p>You agree NOT to use the Software for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400 text-xs">
                    <li>Interacting with Critical Infrastructure (medical, nuclear, power systems).</li>
                    <li>Circumventing CAPTCHAs or security measures of other applications.</li>
                    <li>Violating the Terms of Service of target applications (e.g., mass-messaging on WhatsApp, unauthorized scraping of LinkedIn).</li>
                    <li>Any illegal activity, harassment, or malware distribution.</li>
                </ul>
            </section>

            <section>
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-slate-500" /> 5. Indemnification
                </h3>
                <p>You agree to indemnify and hold the Developers harmless from any claims, damages, or expenses arising from your use of the Software or your violation of these Terms.</p>
            </section>
        </div>

        <div className="p-6 border-t border-white/5 bg-[#0a0c10]">
          <button onClick={onClose} className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-sky-900/20">
            I Acknowledge & Accept Risks
          </button>
        </div>
      </div>
    </div>
  );
}

// --- DOWNLOAD MODAL ---
function DownloadModal({ onClose, onOpenTerms, downloadLink }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [agreed, setAgreed] = useState(false);

  const DISPOSABLE_DOMAINS = ["tempmail.com", "10minutemail.com", "guerrillamail.com", "yopmail.com", "mailinator.com"];

  const sendOtp = async () => {
    setError("");
    if (!agreed) { setError("Please accept the terms to proceed."); return; }
    if (!email || !email.includes("@")) { setError("Please enter a valid email."); return; }

    try {
      const domain = email.split('@')[1].toLowerCase();
      if (DISPOSABLE_DOMAINS.includes(domain)) { setError("Please use a permanent work or personal email."); return; }
    } catch(e) { setError("Invalid email."); return; }

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email: email });
    setLoading(false);

    if (error) {
      if (error.message.includes("Rate limit")) setError("Too many attempts. Wait a moment.");
      else setError(error.message);
    } else {
      setStep(2);
    }
  };

  const verifyOtp = async () => {
    setError("");
    if (otp.length !== 6) { setError("Code must be 6 digits."); return; }
    setLoading(true);

    const { error } = await supabase.auth.verifyOtp({ email, token: otp, type: 'email' });
    setLoading(false);

    if (error) {
      setError("Invalid code.");
    } else {
      setStep(3);
      setTimeout(() => { window.location.href = downloadLink; setTimeout(() => onClose(), 3500); }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-[#0f1115] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#161b22]">
          <h2 className="text-lg font-bold text-white flex items-center gap-2"><Download className="w-5 h-5 text-sky-400" /> Download Beta</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-white"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4"><Mail className="w-6 h-6 text-sky-400" /></div>
                <h3 className="text-white font-semibold">Verify to Download</h3>
                <p className="text-slate-400 text-sm">We'll send a 6-digit access code to your email.</p>
              </div>
              <div className="space-y-4">
                <input type="email" placeholder="developer@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-sky-500 focus:outline-none transition-colors" />
                
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center pt-1">
                    <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="peer sr-only" />
                    <div className={`w-4 h-4 border rounded flex items-center justify-center transition-all ${agreed ? 'bg-sky-500 border-sky-500' : 'border-slate-600'}`}>
                      {agreed && <Check className="w-3 h-3 text-black" strokeWidth={3.5} />}
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 select-none">
                    I agree to the <button onClick={(e) => { e.preventDefault(); onOpenTerms(); }} className="text-sky-400 hover:underline">Terms & Liability Policy</button>.
                  </span>
                </label>

                {error && <p className="text-red-400 text-xs text-center animate-pulse">{error}</p>}
                <button onClick={sendOtp} disabled={loading} className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Send Code <ArrowRight className="w-4 h-4" /></>}
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4"><ShieldCheck className="w-6 h-6 text-purple-400" /></div>
                <h3 className="text-white font-semibold">Check your Inbox</h3>
                <p className="text-slate-400 text-sm">Enter the code sent to <span className="text-sky-400">{email}</span></p>
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="123456" maxLength={6} value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-center text-2xl tracking-[0.5em] text-white focus:border-purple-500 focus:outline-none font-mono transition-colors" />
                {error && <p className="text-red-400 text-xs text-center animate-pulse">{error}</p>}
                <button onClick={verifyOtp} disabled={loading} className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify & Download"}
                </button>
                <button onClick={() => setStep(1)} className="w-full text-xs text-slate-500 hover:text-slate-300">Wrong email? Go back</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-4 py-8">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto animate-bounce"><CheckCircle className="w-8 h-8 text-emerald-400" /></div>
              <div><h3 className="text-xl font-bold text-white">Verification Complete</h3><p className="text-emerald-400 text-sm mt-2 font-mono">Download starting...</p></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}