import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, X, ChevronDown, Activity, Info, Save, Wind } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface AddTreeProps {
  onClose: () => void;
  onSave: () => void;
}

export const AddTree: React.FC<AddTreeProps> = ({ onClose, onSave }) => {
  const [health, setHealth] = useState('healthy');
  const [species, setSpecies] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);

  const speciesOptions = ['Neem (Bevu)', 'Honge', 'Peepal (Arali)', 'Gulmohar', 'Mango'];

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[60] bg-natural-card flex flex-col"
    >
      <header className="p-8 pb-4 flex items-center justify-between border-b border-natural-border">
        <button onClick={onClose} className="p-3 -ml-3 text-natural-dark/60 hover:bg-natural-highlight rounded-2xl transition-colors">
          <X size={28} />
        </button>
        <h2 className="text-2xl font-black text-natural-dark tracking-tight">Add New Tag</h2>
        <div className="w-10"></div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 space-y-10">
        {/* Photo Upload Section */}
        <section>
          <div 
            className={cn(
              "w-full aspect-video rounded-[32px] border-[3px] border-dashed flex flex-col items-center justify-center gap-4 transition-all duration-500 overflow-hidden",
              photo ? "border-natural-green bg-natural-highlight" : "border-natural-border bg-slate-50"
            )}
            onClick={() => setPhoto('captured')}
          >
            {photo ? (
              <div className="relative w-full h-full p-4 group">
                 <div className="w-full h-full bg-natural-green/10 rounded-2xl flex items-center justify-center flex-col text-natural-green border border-natural-green/20">
                    <Activity size={48} className="mb-3 animate-pulse opacity-60" />
                    <p className="font-black text-sm tracking-widest uppercase text-center px-4">Deep Learning scan incoming...</p>
                 </div>
                 <div className="absolute top-6 left-6 right-6 bg-white/90 backdrop-blur-xl p-5 rounded-[24px] shadow-2xl border-2 border-natural-border">
                    <div className="flex items-center gap-3">
                        <div className="bg-natural-green text-white text-[9px] px-2.5 py-1 rounded-full font-black tracking-widest">AI MATCH 98%</div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Species Identified</p>
                    </div>
                    <p className="text-xl font-black text-natural-dark mt-2 tracking-tight">Azadirachta indica <span className="italic font-bold text-natural-green opacity-70">(Neem)</span></p>
                 </div>
              </div>
            ) : (
              <>
                <div className="p-5 bg-white rounded-[24px] shadow-xl border-2 border-natural-border">
                  <Camera size={36} className="text-natural-green" />
                </div>
                <div className="text-center">
                  <p className="font-black text-natural-dark tracking-tight">Capture Evidence</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Vision AI will classify leaves</p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Form Inputs */}
        <div className="space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Species Reference</label>
            <div className="relative group">
              <select 
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
                className="w-full bg-white border-2 border-natural-border rounded-[24px] p-5 appearance-none font-bold text-natural-dark focus:outline-none focus:ring-4 focus:ring-natural-green/10 focus:border-natural-green transition-all shadow-sm"
              >
                <option value="">Select or verify species</option>
                {speciesOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 p-2 bg-natural-highlight rounded-xl text-natural-green pointer-events-none group-focus-within:rotate-180 transition-transform">
                <ChevronDown size={20} />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Physiological Health</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'healthy', label: 'Healthy', color: 'bg-natural-green' },
                { id: 'moderate', label: 'Moderate', color: 'bg-[#EAB308]' },
                { id: 'critical', label: 'Critical', color: 'bg-natural-accent' },
              ].map((h) => (
                <button
                  key={h.id}
                  onClick={() => setHealth(h.id)}
                  className={cn(
                    "flex flex-col items-center gap-3 p-4 rounded-[24px] border-2 transition-all duration-300",
                    health === h.id 
                      ? "bg-white border-natural-green shadow-xl ring-4 ring-natural-green/5" 
                      : "bg-slate-50 border-natural-border opacity-40 hover:opacity-100"
                  )}
                >
                  <div className={cn("w-4 h-4 rounded-full border-2 border-white shadow-sm", h.color)} />
                  <span className="text-[10px] font-black uppercase tracking-widest tracking-tight">{h.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-natural-green text-white rounded-[32px] p-8 flex items-center justify-between shadow-2xl shadow-natural-green/30 border-4 border-natural-highlight/20">
             <div>
                <p className="text-[10px] font-black text-natural-highlight opacity-60 uppercase tracking-[0.2em] mb-2">Ecological Impact</p>
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-white/20 rounded-xl">
                      <Wind size={24} strokeWidth={2.5} />
                   </div>
                   <p className="text-2xl font-black italic">+12 kg O₂/yr</p>
                </div>
             </div>
             <div className="bg-white text-natural-green p-4 rounded-[20px] shadow-inner text-center min-w-[100px]">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-60 mb-0.5">SCORE</p>
                <p className="text-2xl font-black tracking-tight">+15xp</p>
             </div>
          </div>
        </div>
      </div>

      <footer className="p-8 bg-white border-t-2 border-natural-border">
        <button 
          onClick={onSave}
          className="w-full bg-natural-green text-white font-black py-6 rounded-[24px] flex items-center justify-center gap-4 shadow-2xl active:scale-95 transition-all text-xl tracking-tight"
        >
          <Save size={24} strokeWidth={2.5} />
          Save Ecological Data
        </button>
      </footer>
    </motion.div>
  );
};
