import { motion } from 'motion/react';

interface IntroProps {
  onStart: () => void;
  onOpenDirectory: () => void;
}

export default function Intro({ onStart, onOpenDirectory }: IntroProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min mt-4">
      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="col-span-full md:col-span-8 bg-purple-700/80 backdrop-blur-xl border border-purple-500/30 rounded-[2.5rem] p-12 text-white flex flex-col justify-center min-h-[400px] relative overflow-hidden group shadow-2xl shadow-purple-900/40"
      >
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            Cyber Campus • 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6 uppercase italic">
            Your Tech <br />
            Odyssey Begins.
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 font-medium max-w-md mb-8 leading-tight opacity-80">
            Amjilt Cyber School's AI compass identifies the perfect tech and artistic circles for your digital future.
          </p>
          <button
            onClick={onStart}
            className="group px-10 py-5 bg-white text-purple-700 font-black text-xl rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-purple-50"
          >
            Start Digital Calibration
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500 rounded-full opacity-30 blur-3xl group-hover:opacity-50 transition-opacity" />
        <div className="absolute top-10 right-20 w-12 h-12 border-4 border-white/10 rounded-full animate-bounce" />
        <div className="absolute top-40 right-10 w-24 h-24 border border-white/10 rounded-full" />
      </motion.div>

      {/* Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="col-span-full md:col-span-4 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 flex flex-col justify-center text-center backdrop-blur-sm"
      >
        <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Cyber Growth</span>
        <div className="text-7xl font-black text-purple-500 tracking-tighter mb-2 italic">+142</div>
        <p className="text-slate-400 font-bold uppercase tracking-tight leading-none px-4">
          Tech enthusiasts <br /> connected this term
        </p>
        <div className="mt-8 flex justify-center -space-x-4">
          {[1,2,3,4].map(i => (
            <div key={i} className={`w-12 h-12 rounded-full border-4 border-[#0A0A0F] bg-slate-800 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=cyber${i}')] bg-cover shadow-lg`} />
          ))}
          <div className="w-12 h-12 rounded-full border-4 border-[#0A0A0F] bg-purple-600 flex items-center justify-center text-white text-xs font-black">
            +39
          </div>
        </div>
      </motion.div>

      {/* Feature Card 1 - Core Engine */}
      <div className="col-span-full md:col-span-4 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-8 hover:border-purple-500/50 transition-colors">
        <div className="w-12 h-12 bg-purple-900/50 rounded-2xl flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
          <span className="text-2xl">⚡</span>
        </div>
        <h3 className="text-2xl font-black text-slate-200 tracking-tight mb-2 uppercase">Core Engine</h3>
        <p className="text-slate-500 font-medium leading-tight">Gemini AI parses your neuro-profile to find optimal cyber communities.</p>
      </div>

      {/* Feature Card 2 - Next Sync */}
      <div 
        onClick={onOpenDirectory}
        className="col-span-full md:col-span-4 bg-purple-600 rounded-[2.5rem] p-8 flex items-center justify-between group cursor-pointer hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/20"
      >
        <div>
          <h3 className="text-2xl font-black text-white tracking-tight leading-none mb-1 uppercase italic">Next Sync</h3>
          <p className="text-purple-100/60 text-[10px] font-black uppercase tracking-widest">Maulenova 92 • Fri 15:30</p>
          <div className="mt-4 text-[10px] font-black uppercase text-white border border-white/20 inline-block px-2 py-1 rounded">View Schedule</div>
        </div>
        <div className="text-4xl group-hover:translate-x-2 transition-transform">🚀</div>
      </div>

      {/* Feature Card 3 - Explore Clubs */}
      <div 
        onClick={onOpenDirectory}
        className="col-span-full md:col-span-4 bg-slate-950 border border-slate-800 rounded-[2.5rem] p-8 text-white relative overflow-hidden cursor-pointer hover:border-purple-500/50 transition-colors group"
      >
        <h3 className="text-2xl font-black tracking-tight mb-2 uppercase relative z-10 transition-colors group-hover:text-purple-400">Matrix-45</h3>
        <p className="text-slate-500 font-medium leading-tight relative z-10">Dozens of specialized cyber circles awaiting your initiation.</p>
        <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <span className="text-6xl font-black italic tracking-tighter">INITIATE</span>
        </div>
      </div>
    </div>
  );
}
