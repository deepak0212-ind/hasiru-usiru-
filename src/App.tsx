/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './screens/Home';
import { MapView } from './screens/Map';
import { SpeciesGuide } from './screens/SpeciesGuide';
import { Analytics } from './screens/Analytics';
import { AddTree } from './screens/AddTree';
import { AddPit } from './screens/AddPit';
import { User } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showAddTree, setShowAddTree] = useState(false);
  const [showAddPit, setShowAddPit] = useState(false);

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView key="home" onStartMapping={() => setActiveTab('map')} />;
      case 'map':
        return (
          <MapView 
            key="map"
            onAddTree={() => setShowAddTree(true)}
            onAddPit={() => setShowAddPit(true)}
          />
        );
      case 'species':
        return <SpeciesGuide key="species" />;
      case 'analytics':
        return <Analytics key="analytics" />;
      case 'profile':
        return (
          <div key="profile" className="flex-1 flex flex-col items-center justify-center p-8 bg-natural-bg pb-24 text-center">
            <div className="w-24 h-24 rounded-[32px] bg-natural-highlight flex items-center justify-center mb-6 border-2 border-natural-border">
               <User size={48} className="text-natural-green" />
            </div>
            <h2 className="text-2xl font-bold text-natural-dark mb-2">Priya Sharma</h2>
            <p className="text-slate-500 mb-8 font-medium">Bengaluru Tree Guardian • Level 12</p>
            
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
               <div className="bg-natural-card p-4 rounded-2xl shadow-sm border-2 border-natural-border">
                  <p className="text-2xl font-black text-natural-green">124</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trees Tagged</p>
               </div>
               <div className="bg-natural-card p-4 rounded-2xl shadow-sm border-2 border-natural-border">
                  <p className="text-2xl font-black text-natural-accent">42</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pits Marked</p>
               </div>
            </div>

            <button className="mt-12 w-full max-w-xs py-4 rounded-2xl border-[3px] border-natural-green text-natural-green font-bold hover:bg-natural-green hover:text-white transition-colors">
               Edit Profile
            </button>
          </div>
        );
      default:
        return <HomeView key="home" onStartMapping={() => setActiveTab('map')} />;
    }
  };

  return (
    <div className="bg-[#1A3317] flex items-center justify-center min-h-screen font-sans">
      {/* Mobile Frame Container */}
      <div className="relative w-full max-w-[440px] h-[900px] max-h-[95vh] bg-natural-card rounded-[48px] shadow-2xl overflow-hidden flex flex-col border-[12px] border-natural-border">
        
        {/* Notch / Status Bar Mock */}
        <div className="absolute top-0 left-0 right-0 h-10 z-[70] flex items-center justify-between px-10 pt-2 bg-transparent">
           <span className="text-xs font-bold text-natural-dark">9:41</span>
           <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-natural-dark/20"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-natural-dark/20"></div>
              <div className="w-4 h-1.5 rounded-full bg-natural-dark/20"></div>
           </div>
        </div>

        <main className="flex-1 flex flex-col relative overflow-hidden bg-natural-bg">
          <AnimatePresence mode="wait">
            {renderScreen()}
          </AnimatePresence>
        </main>

        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

        <AnimatePresence>
          {showAddTree && (
            <AddTree 
              onClose={() => setShowAddTree(false)} 
              onSave={() => {
                setShowAddTree(false);
                setActiveTab('home');
              }} 
            />
          )}
          {showAddPit && (
            <AddPit 
              onClose={() => setShowAddPit(false)} 
              onSubmit={() => {
                setShowAddPit(false);
                setActiveTab('map');
              }} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
