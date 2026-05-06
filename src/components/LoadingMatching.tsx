import { motion } from 'motion/react';

export default function LoadingMatching() {
  const steps = [
    "Analyzing your unique vibe...",
    "Consulting the club directory...",
    "Asking Gemini for directions...",
    "Calibrating the Social Compass..."
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="md:col-span-1 aspect-square bg-slate-900 border-2 border-slate-800 rounded-[2rem] flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-6xl"
          >
            🧭
          </motion.div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="md:col-span-3 bg-purple-700/80 backdrop-blur-xl rounded-[2rem] p-8 text-white flex flex-col justify-center text-left border border-purple-500/30"
        >
          <span className="text-[10px] font-black uppercase tracking-widest text-purple-200 mb-2">Step 2: Processing</span>
          <h2 className="text-3xl font-black tracking-tight uppercase italic leading-none">
            Querying the <br /> Neural Network...
          </h2>
        </motion.div>

        <div className="md:col-span-4 bg-slate-900/40 border-2 border-slate-800 rounded-[2rem] p-8">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.4 }}
                  className="flex items-center gap-4 text-slate-400 font-bold text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-900/50 border border-purple-500/20 flex items-center justify-center text-purple-400 font-black">
                    {i + 1}
                  </div>
                  {step}
                </motion.div>
             ))}
           </div>
           
           <div className="mt-12 w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
             <motion.div
                animate={{ x: [-400, 400] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1/3 h-full bg-purple-600 shadow-[0_0_15px_rgba(139,92,246,0.6)]"
             />
           </div>
        </div>
      </div>
    </div>
  );
}
