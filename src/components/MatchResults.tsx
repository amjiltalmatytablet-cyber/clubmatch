import { useState } from 'react';
import { Club, MatchResult } from '../types';
import { CLUBS } from '../constants';
import { motion } from 'motion/react';
import { MapPin, Clock, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface MatchResultsProps {
  matches: MatchResult[];
  onReset: () => void;
}

export default function MatchResults({ matches, onReset }: MatchResultsProps) {
  const [rsvpSent, setRsvpSent] = useState(false);
  const topMatch = matches[0];
  const otherMatches = matches.slice(1);
  const featuredClub = CLUBS.find(c => c.id === topMatch?.clubId);

  const handleRSVP = () => {
    setRsvpSent(true);
    setTimeout(() => setRsvpSent(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {/* Results Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <span className="inline-block px-3 py-1 bg-purple-900/50 text-purple-400 text-[10px] font-black rounded-full uppercase tracking-widest mb-4 border border-purple-500/20">
          Sync Complete: Results Manifest
        </span>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
          The Compass <br /> Has Calibrated.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Main Featured Match */}
        {featuredClub && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-8 bg-purple-700/80 backdrop-blur-xl border border-purple-500/30 rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-between min-h-[500px]"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Primary Protocol Match
                  </span>
                  <h3 className="text-5xl md:text-7xl font-black tracking-tight leading-none mt-6 uppercase italic">
                    {featuredClub.name}
                  </h3>
                </div>
                <div className="bg-white text-purple-700 p-4 rounded-2xl transform rotate-6 shadow-2xl hidden sm:block shrink-0">
                  <span className="text-[10px] font-black uppercase tracking-tighter block mb-1 opacity-50">Match Score</span>
                  <span className="text-4xl font-black italic tracking-tighter">98%</span>
                </div>
              </div>

              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-3">
                   <Sparkles size={18} className="text-purple-300" />
                   <span className="text-xs font-black uppercase tracking-widest text-purple-200">AI Synapse Insight</span>
                </div>
                <p className="text-xl md:text-3xl font-medium leading-[1.1] text-white italic opacity-90">
                  "{topMatch.explanation}"
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-12 mt-auto">
               <div className="flex flex-wrap gap-2">
                 {featuredClub.tags.map(tag => (
                   <span key={tag} className="bg-white/10 border border-white/10 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">#{tag}</span>
                 ))}
               </div>
            </div>

            {/* Decorative BG elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500 rounded-full opacity-30 blur-3xl animate-pulse" />
          </motion.div>
        )}

        {/* Meeting Action Card */}
        {featuredClub && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-purple-600 rounded-[2.5rem] p-8 flex flex-col justify-between border border-purple-400/30"
          >
            <div>
              <span className="bg-black/10 text-white/40 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Initialization Info</span>
              <div className="text-4xl font-black text-white mt-4 leading-none italic uppercase">
                {featuredClub.meetingTime}
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/40 uppercase">Location</p>
                    <p className="font-black text-white uppercase">{featuredClub.roomNumber}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/40 uppercase">Mode</p>
                    <p className="font-black text-white uppercase">After School</p>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={handleRSVP}
              disabled={rsvpSent}
              className={`w-full font-black py-5 rounded-3xl mt-8 transition-all shadow-xl text-sm tracking-widest uppercase flex items-center justify-center gap-2 ${
                rsvpSent ? 'bg-emerald-500 text-white cursor-default' : 'bg-white text-purple-700 hover:scale-105 active:scale-95'
              }`}
            >
              {rsvpSent ? (
                <>
                  <CheckCircle2 size={18} />
                  Request Sent
                </>
              ) : (
                'Initiate Sync (RSVP)'
              )}
            </button>
          </motion.div>
        )}

        {/* Secondary Matches Section */}
        <div className="col-span-full mt-4">
          <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4 ml-4">Alternative Clusters</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {otherMatches.map((match, i) => {
              const club = CLUBS.find(c => c.id === match.clubId);
              if (!club) return null;
              return (
                <motion.div
                  key={club.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="bg-slate-900/50 border border-slate-800 rounded-[2rem] p-6 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-900/10"
                >
                  <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-1">{club.category}</p>
                  <h5 className="text-xl font-black text-white leading-tight mb-3 uppercase tracking-tighter italic">{club.name}</h5>
                  <p className="text-slate-500 text-sm font-medium leading-tight mb-4 line-clamp-2 italic">
                    {match.explanation}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase tracking-widest border-t border-slate-800 pt-4">
                    <MapPin size={10} /> {club.roomNumber}
                    <span className="mx-1">•</span>
                    <Clock size={10} /> {club.meetingTime.split(' ').pop()}
                  </div>
                </motion.div>
              );
            })}
            
            {/* Reset Button as a Card */}
            <motion.button
              onClick={onReset}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white text-purple-700 rounded-[2rem] p-6 flex flex-col items-center justify-center group hover:bg-purple-50 transition-colors cursor-pointer border-2 border-transparent hover:border-purple-500 shadow-xl"
            >
              <div className="text-3xl mb-2 group-hover:rotate-180 transition-transform duration-700">🌀</div>
              <span className="text-[10px] font-black uppercase tracking-widest">Restart Analysis</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
