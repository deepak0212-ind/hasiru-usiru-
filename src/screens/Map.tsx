import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Filter, Navigation, Info, TreeDeciduous, CircleDot } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';

interface MapViewProps {
  onAddTree: () => void;
  onAddPit: () => void;
}

export const MapView: React.FC<MapViewProps> = ({ onAddTree, onAddPit }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAddMenu, setShowAddMenu] = useState(false);

  // Mock data for trees and pits
  const markers = [
    { id: 1, type: 'tree', lat: 12.9716, lng: 77.5946, species: 'Neem' },
    { id: 2, type: 'tree', lat: 12.9722, lng: 77.5955, species: 'Honge' },
    { id: 3, type: 'pit', lat: 12.9710, lng: 77.5938, condition: 'Empty' },
    { id: 4, type: 'pit', lat: 12.9728, lng: 77.5962, condition: 'Debris' },
  ];

  const filteredMarkers = activeFilter === 'all' 
    ? markers 
    : markers.filter(m => m.type === activeFilter);

  const MapFallback = () => (
    <div className="h-full w-full bg-[#DEE5DC] flex items-center justify-center relative overflow-hidden">
      {/* Mock Map Background with Pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8DAA81 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="text-center z-10 px-8">
        <div className="bg-white/40 backdrop-blur-xl p-8 rounded-[40px] shadow-2xl border-2 border-white/50">
          <div className="w-16 h-16 bg-natural-green rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-lg">
            <Navigation className="text-white animate-pulse" size={32} />
          </div>
          <h2 className="text-2xl font-black text-natural-dark mb-3">Live Map</h2>
          <p className="text-sm text-natural-dark/60 mb-6 font-medium leading-relaxed italic">Point your device to a tree pit to begin mapping your neighborhood.</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-xs font-bold text-natural-green bg-natural-highlight py-2.5 px-4 rounded-2xl border border-natural-green/10">
              <div className="w-2.5 h-2.5 rounded-full bg-natural-green" />
              <span>EXISTING URBAN CANOPY</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-natural-accent bg-orange-50 py-2.5 px-4 rounded-2xl border border-natural-accent/10">
              <div className="w-2.5 h-2.5 rounded-full bg-natural-accent" />
              <span>IDENTIFIED EMPTY PITS</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Absolute Markers on Mock Map */}
      <div className="absolute top-[20%] left-[30%]">
         <div className="bg-natural-green p-2.5 rounded-full shadow-2xl border-2 border-white ring-4 ring-natural-green/20"><TreeDeciduous size={18} className="text-white" /></div>
      </div>
      <div className="absolute top-[55%] left-[65%] scale-125">
         <div className="bg-natural-accent p-2.5 rounded-full shadow-2xl border-2 border-white ring-4 ring-natural-accent/20"><CircleDot size={18} className="text-white" /></div>
      </div>
      <div className="absolute top-[75%] left-[25%] opacity-80">
         <div className="bg-natural-green p-2.5 rounded-full shadow-2xl border-2 border-white ring-4 ring-natural-green/20"><TreeDeciduous size={18} className="text-white" /></div>
      </div>
    </div>
  );

  return (
    <div className="flex-1 relative flex flex-col bg-natural-bg">
      {/* Header Chips */}
      <div className="absolute top-8 left-0 right-0 z-20 px-6 flex gap-3 overflow-x-auto no-scrollbar">
        {['all', 'tree', 'pit'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-2xl text-[11px] font-black tracking-widest uppercase backdrop-blur-2xl transition-all shadow-xl border-2 ${
              activeFilter === filter 
                ? 'bg-natural-green text-white border-natural-green' 
                : 'bg-white/80 text-natural-dark border-white/50'
            }`}
          >
            {filter}s
          </button>
        ))}
      </div>

      <div className="flex-1 relative">
        {API_KEY && API_KEY !== 'MY_GOOGLE_MAPS_KEY' ? (
           <APIProvider apiKey={API_KEY} version="weekly">
             <Map
               defaultCenter={{lat: 12.9716, lng: 77.5946}}
               defaultZoom={15}
               mapId="HASIRU_USIRU_MAP"
               disableDefaultUI={true}
               style={{ width: '100%', height: '100%' }}
             >
               {filteredMarkers.map(m => (
                 <AdvancedMarker key={m.id} position={{lat: m.lat, lng: m.lng}}>
                    <Pin 
                        background={m.type === 'tree' ? '#2D5A27' : '#D27D2D'} 
                        borderColor="#ffffff" 
                        glyphColor="#ffffff"
                    />
                 </AdvancedMarker>
               ))}
             </Map>
           </APIProvider>
        ) : (
          <MapFallback />
        )}
      </div>

      {/* FAB and Tooltip */}
      <div className="absolute bottom-28 right-6 flex flex-col items-end gap-5">
        {showAddMenu && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="flex flex-col gap-3"
          >
            <button 
              onClick={onAddTree}
              className="bg-natural-green text-white px-7 py-4 rounded-[20px] shadow-2xl flex items-center gap-3 font-black text-sm tracking-tight border border-white/10"
            >
              <TreeDeciduous size={20} />
              TAG TREE
            </button>
            <button 
              onClick={onAddPit}
              className="bg-natural-accent text-white px-7 py-4 rounded-[20px] shadow-2xl flex items-center gap-3 font-black text-sm tracking-tight border border-white/10"
            >
              <CircleDot size={20} />
              MARK PIT
            </button>
          </motion.div>
        )}
        
        <motion.button
          onClick={() => setShowAddMenu(!showAddMenu)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className={`w-16 h-16 rounded-[24px] shadow-2xl transition-all duration-300 flex items-center justify-center ${
            showAddMenu ? 'bg-natural-dark rotate-135' : 'bg-natural-green'
          } text-white border-2 border-white/10`}
        >
          <Plus size={36} strokeWidth={3} />
        </motion.button>
      </div>

      <div className="absolute bottom-28 left-6">
        <button className="w-14 h-14 bg-white rounded-[20px] shadow-2xl text-natural-green border-2 border-white/50 flex items-center justify-center active:scale-95 transition-all">
          <Navigation size={28} />
        </button>
      </div>
    </div>
  );
};
