import React from 'react';
import { motion } from 'motion/react';
import { TreeDeciduous, LocateFixed, Activity, Target, ArrowRight } from 'lucide-react';

interface HomeProps {
  onStartMapping: () => void;
}

export const HomeView: React.FC<HomeProps> = ({ onStartMapping }) => {
  return (
    <div className="flex-1 flex flex-col gap-6 p-6 pb-24 overflow-y-auto bg-natural-bg">
      <header className="flex flex-col gap-1 mt-4">
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-natural-green font-bold text-xs tracking-[0.2em] uppercase"
        >
          Namma Bengaluru
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-black text-natural-dark tracking-tight"
        >
          Hasiru-Usiru
        </motion.h1>
      </header>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-natural-card rounded-[32px] p-6 shadow-xl border-4 border-natural-border flex flex-col gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="bg-natural-highlight p-2 rounded-xl border border-natural-green/10">
            <Activity className="text-natural-green" size={20} />
          </div>
          <div>
            <h3 className="font-bold text-natural-dark text-lg">City Health</h3>
            <p className="text-xs text-slate-500 font-medium italic">Bengaluru District • Live</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-natural-highlight p-4 rounded-2xl border-2 border-natural-border/50">
            <p className="text-[10px] text-natural-green font-black uppercase tracking-widest opacity-60">Oxygen</p>
            <p className="text-2xl font-black text-natural-dark">84%</p>
            <div className="w-full bg-white h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-natural-green h-full rounded-full w-[84%] transition-all duration-1000"></div>
            </div>
          </div>
          <div className="bg-[#FEF9E7] p-4 rounded-2xl border-2 border-[#F9E79F]/50">
            <p className="text-[10px] text-[#9A7D0A] font-black uppercase tracking-widest opacity-60">Heat</p>
            <p className="text-2xl font-black text-[#1A3317]">32°C</p>
            <p className="text-[9px] font-bold text-[#9A7D0A] mt-1 bg-[#F9E79F]/40 inline-block px-1.5 py-0.5 rounded-md">HIGH INTENSITY</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-natural-card rounded-[32px] p-6 shadow-lg border-2 border-natural-border flex flex-col justify-between h-44"
        >
          <div className="w-12 h-12 bg-natural-highlight rounded-2xl flex items-center justify-center border border-natural-green/10">
            <TreeDeciduous className="text-natural-green" size={24} />
          </div>
          <div>
            <p className="text-3xl font-black text-natural-dark">1,284</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">Trees Tagged</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-natural-card rounded-[32px] p-6 shadow-lg border-2 border-natural-border flex flex-col justify-between h-44"
        >
          <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center border border-natural-accent/10">
            <LocateFixed className="text-natural-accent" size={24} />
          </div>
          <div>
            <p className="text-3xl font-black text-natural-dark">452</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">Empty Pits</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        id="start-mapping-btn"
        onClick={onStartMapping}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 bg-natural-green text-white rounded-2xl py-5 px-6 flex items-center justify-between shadow-2xl shadow-natural-green/20"
      >
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/20">
            <Target size={22} strokeWidth={2.5} />
          </div>
          <span className="font-black text-xl tracking-tight">Start Mapping</span>
        </div>
        <ArrowRight size={28} strokeWidth={2.5} />
      </motion.button>

      <div className="mt-4">
        <h3 className="font-black text-natural-dark mb-4 ml-1 tracking-tight">Recent Contributions</h3>
        <div className="flex flex-col gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="bg-natural-card rounded-[28px] p-4 flex gap-4 items-center border-2 border-natural-border shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-natural-highlight flex items-center justify-center border border-natural-green/10">
                <TreeDeciduous className="text-natural-green" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-black text-natural-dark tracking-tight">Honge Tree Tagged</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Indiranagar • 2h ago</p>
              </div>
              <div className="bg-natural-highlight px-3 py-1.5 rounded-full border border-natural-green/10">
                <span className="text-natural-green font-black text-[10px] tracking-widest">+15XP</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
