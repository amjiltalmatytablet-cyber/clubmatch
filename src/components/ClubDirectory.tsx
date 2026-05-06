import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLUBS } from '../constants';
import { Club } from '../types';
import { Search, MapPin, Clock, ArrowLeft, Terminal } from 'lucide-react';

interface ClubDirectoryProps {
  onBack: () => void;
}

export default function ClubDirectory({ onBack }: ClubDirectoryProps) {
  const [search, setSearch] = useState('');
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);

  const filteredClubs = CLUBS.filter(club => 
    club.name.toLowerCase().includes(search.toLowerCase()) || 
    club.category.toLowerCase().includes(search.toLowerCase()) ||
    club.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-purple-400 transition-colors mb-4 group font-black text-xs uppercase tracking-widest"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Matrix
          </button>
          <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter leading-none">
            Club Directory
          </h2>
          <p className="text-slate-500 mt-2 font-medium">Accessing Amjilt Cyber School full database record.</p>
        </div>

        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input 
            type="text"
            placeholder="Search by name, tag, or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border-2 border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-purple-500 outline-none transition-all placeholder:text-slate-600 font-bold"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredClubs.map((club, i) => (
            <motion.div
              key={club.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedClub(club)}
              className="bg-slate-900/40 border border-slate-800 rounded-[2rem] p-6 cursor-pointer hover:border-purple-500/50 transition-all group hover:bg-slate-900/60"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-500 bg-purple-900/30 px-2 py-1 rounded border border-purple-500/20">
                  {club.category}
                </span>
                <Clock size={16} className="text-slate-700" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none mb-3 group-hover:text-purple-400 transition-colors">
                {club.name}
              </h3>
              <p className="text-slate-500 text-sm font-medium line-clamp-2 italic mb-6">
                {club.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {club.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase text-slate-600 border border-slate-800 px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-800/50 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span className="flex items-center gap-1"><MapPin size={12} /> {club.roomNumber}</span>
                <span className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">View Details →</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredClubs.length === 0 && (
        <div className="py-20 text-center border-2 border-dashed border-slate-800 rounded-[3rem]">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-2xl font-black text-white uppercase italic">No records found</h3>
          <p className="text-slate-500">Try a different search query in the school database.</p>
        </div>
      )}

      {/* Detail Modal Placeholder */}
      <AnimatePresence>
        {selectedClub && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0A0A0F]/90 backdrop-blur-sm"
            onClick={() => setSelectedClub(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border-2 border-purple-500/30 rounded-[3rem] p-10 max-w-2xl w-full shadow-2xl shadow-purple-900/40 relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400 mb-6 block">Club Profile Registry</span>
                <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter leading-none mb-4">
                  {selectedClub.name}
                </h2>
                <div className="flex gap-4 mb-8">
                  <span className="bg-purple-900/50 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-black uppercase">
                    {selectedClub.category}
                  </span>
                  <span className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase">
                    <MapPin size={14} className="text-purple-500" /> {selectedClub.roomNumber}
                  </span>
                </div>
                
                <p className="text-xl text-slate-300 font-medium leading-relaxed italic border-l-4 border-purple-600 pl-6 mb-8">
                  "{selectedClub.description}"
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                      <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Meeting Time</p>
                      <p className="font-black text-white">{selectedClub.meetingTime}</p>
                   </div>
                   <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                      <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Status</p>
                      <p className="font-black text-emerald-400 uppercase">Recruiting</p>
                   </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      alert(`Initiating RSVP process for ${selectedClub.name}... Request sent to Maulenova 92 Terminal.`);
                      setSelectedClub(null);
                    }}
                    className="flex-1 bg-purple-600 text-white font-black py-4 rounded-2xl hover:bg-purple-500 transition-all uppercase tracking-widest text-sm shadow-xl"
                  >
                    Send Enrollment Request
                  </button>
                  <button 
                    onClick={() => setSelectedClub(null)}
                    className="px-8 py-4 border-2 border-slate-700 text-slate-400 font-black rounded-2xl hover:bg-slate-800 transition-all uppercase tracking-widest text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-5">
                <Terminal size={300} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
