import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { ArrowUpRight, Wind, TreeDeciduous, LocateFixed, MapPin, AlertCircle, BarChart2, Activity } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Analytics: React.FC = () => {
  const barData = [
    { name: 'Mon', count: 12 },
    { name: 'Tue', count: 18 },
    { name: 'Wed', count: 45 },
    { name: 'Thu', count: 32 },
    { name: 'Fri', count: 28 },
    { name: 'Sat', count: 54 },
    { name: 'Sun', count: 40 },
  ];

  const pieData = [
    { name: 'Healthy', value: 720, color: '#2D5A27' },
    { name: 'Moderate', value: 410, color: '#eab308' },
    { name: 'Critical', value: 154, color: '#D27D2D' },
  ];

  const priorities = [
    { area: 'Indiranagar 100ft Road', pits: 24, priority: 'High', color: 'text-red-700 bg-red-50 border-red-100' },
    { area: 'Koramangala 4th Block', pits: 18, priority: 'Medium', color: 'text-[#9A7D0A] bg-[#FEF9E7] border-[#F9E79F]' },
    { area: 'Nagawara Flyover Under', pits: 42, priority: 'Critical', color: 'text-red-800 bg-red-100 border-red-200' },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-natural-bg pb-24">
      <header className="p-10 bg-natural-dark text-white pb-14 rounded-b-[48px] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-natural-green rounded-full -translate-y-1/2 translate-x-1/2 opacity-30 blur-3xl" />
        <div className="relative z-10">
          <p className="text-natural-highlight text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">Impact Analytics</p>
          <h1 className="text-4xl font-black mb-8 leading-[1.1] tracking-tight">Your Street <br/>Oxygen Score</h1>
          
          <div className="flex items-end gap-3">
            <span className="text-7xl font-black tracking-tighter">84</span>
            <div className="mb-3">
               <div className="flex items-center text-natural-highlight font-black text-sm">
                  <ArrowUpRight size={20} strokeWidth={3} />
                  <span>+4%</span>
               </div>
               <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Growth trend</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6 -mt-10 space-y-8 relative z-20">
        {/* Core Stats */}
        <div className="grid grid-cols-2 gap-4">
           <div className="bg-natural-card p-6 rounded-[32px] shadow-xl border-2 border-natural-border">
              <div className="w-10 h-10 bg-natural-highlight rounded-xl flex items-center justify-center mb-4 border border-natural-green/10">
                <TreeDeciduous className="text-natural-green" size={24} />
              </div>
              <p className="text-3xl font-black text-natural-dark">1,284</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Living Trees</p>
           </div>
           <div className="bg-natural-card p-6 rounded-[32px] shadow-xl border-2 border-natural-border">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-4 border border-natural-accent/10">
                <LocateFixed className="text-natural-accent" size={24} />
              </div>
              <p className="text-3xl font-black text-natural-dark">452</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Empty Pits</p>
           </div>
        </div>

        {/* Health Distribution Chart */}
        <section className="bg-natural-card p-8 rounded-[40px] shadow-xl border-4 border-natural-border">
           <h3 className="font-black text-natural-dark text-lg mb-8 flex items-center gap-3 tracking-tight">
              <div className="w-8 h-8 bg-natural-highlight rounded-lg flex items-center justify-center">
                <Activity size={18} className="text-natural-green" />
              </div>
              Tree Health Status
           </h3>
           <div className="h-56 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-3 ml-6">
                 {pieData.map(d => (
                    <div key={d.name} className="flex items-center gap-2.5 text-[11px] font-black text-slate-500 tracking-tight">
                       <div className="w-3 h-3 rounded-full border-2 border-white shadow-sm" style={{ background: d.color }} />
                       {d.name.toUpperCase()}
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Weekly Activity */}
        <section className="bg-natural-card p-8 rounded-[40px] shadow-xl border-4 border-natural-border">
           <div className="flex justify-between items-center mb-8">
              <h3 className="font-black text-natural-dark text-lg flex items-center gap-3 tracking-tight">
                <div className="w-8 h-8 bg-natural-highlight rounded-lg flex items-center justify-center text-natural-green">
                  <BarChart2 size={18} />
                </div>
                Participation
              </h3>
              <span className="text-[10px] font-black text-natural-green bg-natural-highlight px-3 py-1 rounded-full uppercase tracking-widest border border-natural-green/10">+22%</span>
           </div>
           <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                     {barData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 5 ? '#2D5A27' : '#D1D9CD'} />
                     ))}
                  </Bar>
                  <Tooltip cursor={{fill: 'transparent'}} />
                </BarChart>
              </ResponsiveContainer>
           </div>
           <p className="text-[10px] text-center text-slate-400 mt-6 font-black uppercase tracking-[0.3em]">Day-wise contributions</p>
        </section>

        {/* Plantation Priority */}
        <section className="space-y-4">
           <div className="flex items-center justify-between ml-1 pb-2 border-b border-natural-border">
              <h3 className="font-black text-natural-dark tracking-tight">Plantation Priorities</h3>
              <span className="text-[10px] font-black text-slate-400">MAY 2026</span>
           </div>
           <div className="space-y-4">
              {priorities.map((p) => (
                 <div key={p.area} className="bg-natural-card p-5 rounded-[32px] flex items-center gap-5 border-2 border-natural-border shadow-md">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-natural-border/30">
                       <MapPin className="text-slate-300" size={24} />
                    </div>
                    <div className="flex-1">
                       <p className="text-base font-black text-natural-dark tracking-tight">{p.area}</p>
                       <p className="text-xs font-medium text-slate-500 italic mt-0.5">{p.pits} empty pits detected</p>
                    </div>
                    <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2", p.color)}>
                       {p.priority}
                    </span>
                 </div>
              ))}
           </div>
        </section>

        <div className="bg-[#FEF9E7] border-2 border-[#F9E79F] p-6 rounded-[32px] shadow-lg flex gap-5">
           <div className="w-12 h-12 bg-[#F9E79F] rounded-2xl flex items-center justify-center shrink-0">
              <AlertCircle className="text-[#9A7D0A]" size={28} />
           </div>
           <div>
              <p className="text-base font-black text-[#1A3317] tracking-tight">Heat Island Alert</p>
              <p className="text-xs text-[#9A7D0A] font-medium leading-[1.6] mt-2 italic">Nagawara has 40% less canopy than city average. Urgent tree-pits need attention before monsoon arrival.</p>
           </div>
        </div>
      </div>
    </div>
  );
};
