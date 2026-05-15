import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Info, Check, X, Camera, Wind, Zap } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface SpeciesGuideProps {}

export const SpeciesGuide: React.FC<SpeciesGuideProps> = () => {
  const species = [
    {
      name: 'Neem',
      kannadaName: 'Bevu (ಬೇವು)',
      scientific: 'Azadirachta indica',
      desc: 'Known for its medical properties. ಆರೋಗ್ಯಕ್ಕೆ ಬಹಳ ಉತ್ತಮವಾದ ಮರ.',
      water: 'Low',
      shade: 'High',
      season: 'Summer',
      image: 'https://images.unsplash.com/photo-1542368940-4fe7946f0473?auto=format&fit=crop&w=400&q=80',
      color: 'bg-natural-green'
    },
    {
      name: 'Honge',
      kannadaName: 'Honge (ಹೊಂಗೆ)',
      scientific: 'Pongamia pinnata',
      desc: 'Waxy leaves reduce water loss. ನೆರಳು ನೀಡುವ ಅತ್ಯುತ್ತಮ ಮರಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.',
      water: 'Medium',
      shade: 'Very High',
      season: 'Monsoon',
      image: 'https://images.unsplash.com/photo-1598335514171-581e89450c93?auto=format&fit=crop&w=400&q=80',
      color: 'bg-emerald-700'
    },
    {
      name: 'Peepal',
      kannadaName: 'Arali (ಅರಳಿ)',
      scientific: 'Ficus religiosa',
      desc: 'Release oxygen even at night. ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಆರೋಗ್ಯಕ್ಕೆ ಪೂರಕವಾದ ಮರ.',
      water: 'Medium',
      shade: 'Extreme',
      season: 'Spring',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80',
      color: 'bg-lime-700'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-natural-bg pb-24">
      <header className="p-10 bg-natural-card pb-8 rounded-b-[48px] shadow-sm border-b-[6px] border-natural-border">
        <h1 className="text-3xl font-black text-natural-dark mb-2 tracking-tight">Species Guide</h1>
        <p className="text-slate-500 text-sm font-medium italic">Discover and learn about trees native to Karnataka and their urban benefits.</p>
      </header>

      <div className="p-6 space-y-8 mt-4">
        {species.map((s, idx) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-natural-card rounded-[40px] overflow-hidden shadow-xl border-4 border-natural-border flex flex-col"
          >
            <div className="relative h-56 overflow-hidden">
               <img 
                 src={s.image} 
                 alt={s.name} 
                 className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-natural-dark/80 via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-natural-highlight opacity-80 mb-1">{s.scientific}</p>
                  <h3 className="text-3xl font-black tracking-tight">{s.name}</h3>
               </div>
            </div>
            
            <div className="p-8 bg-natural-card">
               <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                       <p className="text-natural-green font-black text-xl tracking-tight">{s.kannadaName}</p>
                    </div>
                    <p className="text-xs font-medium text-slate-500 leading-relaxed italic">{s.desc}</p>
                  </div>
               </div>

               <div className="grid grid-cols-3 gap-3">
                  <div className="bg-natural-highlight p-4 rounded-[20px] flex flex-col items-center border border-natural-green/10">
                    <Wind size={20} className="text-natural-green mb-2" />
                    <span className="text-[9px] font-black text-natural-green uppercase tracking-widest opacity-60">Water</span>
                    <span className="text-xs font-black text-natural-dark">{s.water}</span>
                  </div>
                  <div className="bg-[#FEF9E7] p-4 rounded-[20px] flex flex-col items-center border border-[#F9E79F]/50">
                    <Zap size={20} className="text-[#9A7D0A] mb-2" />
                    <span className="text-[9px] font-black text-[#9A7D0A] uppercase tracking-widest opacity-60">Shade</span>
                    <span className="text-xs font-black text-natural-dark">{s.shade}</span>
                  </div>
                  <div className="bg-natural-highlight p-4 rounded-[20px] flex flex-col items-center border border-natural-green/10">
                    <Check size={20} className="text-natural-green mb-2" />
                    <span className="text-[9px] font-black text-natural-green uppercase tracking-widest opacity-60">Plant In</span>
                    <span className="text-xs font-black text-natural-dark">{s.season}</span>
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
