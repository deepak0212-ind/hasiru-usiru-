import React from 'react';
import { motion } from 'motion/react';
import { MapPin, X, Check, Camera, Navigation, AlertCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface AddPitProps {
  onClose: () => void;
  onSubmit: () => void;
}

export const AddPit: React.FC<AddPitProps> = ({ onClose, onSubmit }) => {
  const [condition, setCondition] = React.useState('clean');

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[60] bg-natural-bg flex flex-col"
    >
      <header className="p-8 pb-4 flex items-center justify-between border-b-2 border-natural-border bg-natural-card">
        <button onClick={onClose} className="p-3 -ml-3 text-slate-400 hover:bg-natural-highlight rounded-2xl transition-colors">
          <X size={28} />
        </button>
        <h2 className="text-2xl font-black text-natural-dark tracking-tight">Empty Pit</h2>
        <div className="w-10"></div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 space-y-10">
        {/* GPS Confirmation */}
        <section className="bg-natural-card p-6 rounded-[32px] shadow-xl border-4 border-natural-border">
           <div className="flex items-center gap-5 mb-6">
              <div className="bg-natural-highlight p-4 rounded-2xl border border-natural-green/10">
                 <Navigation className="text-natural-accent" size={24} />
              </div>
              <div>
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-1">Live Coordinates</p>
                 <p className="text-sm font-black text-natural-dark leading-tight tracking-tight">12th Main Rd, Indiranagar, Bengaluru</p>
              </div>
           </div>
           <div className="h-40 bg-natural-highlight/40 rounded-[24px] border-2 border-dashed border-natural-border flex flex-col items-center justify-center gap-2">
              <div className="p-2 bg-white rounded-full shadow-sm">
                <div className="w-2 h-2 rounded-full bg-natural-accent animate-ping" />
              </div>
              <p className="text-[10px] font-black text-natural-accent uppercase tracking-[0.3em] mt-2">Pin locked from GPS</p>
           </div>
        </section>

        {/* Condition Selector */}
        <div className="space-y-4">
           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Ecosystem Check</label>
           <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'clean', label: 'Clean & Ready', desc: 'Prime for planting' },
                { id: 'debris', label: 'Has Debris', desc: 'Needs manual cleaning' },
                { id: 'concrete', label: 'Blocked', desc: 'Concrete obstruction' },
                { id: 'small', label: 'Too Small', desc: 'Needs pit widening' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCondition(c.id)}
                  className={cn(
                    "p-5 rounded-[32px] border-2 flex flex-col text-left transition-all duration-300 h-32 justify-center shadow-md",
                    condition === c.id 
                      ? "bg-natural-accent border-natural-accent text-white shadow-orange-200 scale-[1.02]" 
                      : "bg-white border-natural-border text-natural-dark hover:border-orange-200"
                  )}
                >
                  <p className="font-black text-sm mb-1 uppercase tracking-tight">{c.label}</p>
                  <p className={cn("text-[10px] font-medium leading-relaxed italic", condition === c.id ? "text-orange-100" : "text-slate-400")}>{c.desc}</p>
                </button>
              ))}
           </div>
        </div>

        {/* Photo Capture */}
        <div className="space-y-4">
           <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Visual Proof</label>
           <button className="w-full h-24 bg-white border-2 border-dashed border-natural-border rounded-[32px] flex items-center justify-center gap-4 text-slate-300 hover:text-natural-accent hover:border-natural-accent transition-all group">
              <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-orange-50 transition-colors">
                <Camera size={28} />
              </div>
              <span className="font-black text-sm tracking-tight uppercase">Upload Proof</span>
           </button>
        </div>

        <div className="bg-[#FEF9E7] p-6 rounded-[32px] flex gap-5 border-2 border-[#F9E79F] shadow-sm">
           <AlertCircle className="text-[#9A7D0A] shrink-0" size={24} />
           <p className="text-[11px] font-medium text-[#1A3317] leading-relaxed italic">Marking an empty pit enables city planners to deploy saplings during the next planting cycle.</p>
        </div>
      </div>

      <footer className="p-8 bg-natural-card border-t-2 border-natural-border">
        <button 
          onClick={onSubmit}
          className="w-full bg-natural-accent text-white font-black py-6 rounded-[24px] flex items-center justify-center gap-4 shadow-2xl active:scale-95 transition-all text-xl tracking-tight"
        >
          <Check size={24} strokeWidth={2.5} />
          Confirm Location
        </button>
      </footer>
    </motion.div>
  );
};
