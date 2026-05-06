import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS } from '../constants';
import { QuizAnswer } from '../types';
import * as Icons from 'lucide-react';

interface QuizProps {
  onComplete: (answers: QuizAnswer[]) => void;
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleSelect = (optionId: string) => {
    const newAnswers = [...answers, { questionId: QUIZ_QUESTIONS[currentStep].id, answer: optionId }];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-12">
        <span className="inline-block px-3 py-1 bg-purple-900/50 text-purple-400 text-[10px] font-black rounded-full uppercase tracking-widest mb-4 border border-purple-500/20">
          Core Step {currentStep + 1}: The Analysis
        </span>
        <div className="flex justify-between items-end gap-8">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
            {currentQuestion.question}
          </h2>
          <div className="text-right hidden sm:block shrink-0">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Neural Link</span>
            <div className="text-3xl font-black italic tracking-tighter text-purple-500 leading-none">
              {Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}%
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {currentQuestion.options.map((option) => {
            const IconComponent = (Icons as any)[option.icon.split('-').map((s: string) => s.charAt(0).toUpperCase() + s.slice(1)).join('')] || Icons.HelpCircle;

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className="group flex flex-col items-start p-8 bg-slate-900/40 border-2 border-slate-800 rounded-[2rem] text-left transition-all hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-900/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-purple-900 group-hover:text-purple-400 transition-colors mb-6 shadow-sm border border-slate-700 group-hover:border-purple-500/30">
                  <IconComponent size={32} strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-black text-slate-200 tracking-tight leading-tight group-hover:text-purple-100 transition-colors uppercase">
                  {option.label}
                </span>
                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="h-0.5 w-6 bg-purple-500" />
                   <span className="text-[10px] font-black uppercase text-purple-500 tracking-widest">Execute Input</span>
                </div>
              </button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <div className="mt-16 pt-8 border-t border-slate-900 flex justify-center">
        <div className="w-64 bg-slate-900 h-2 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-purple-600 shadow-[0_0_20px_rgba(139,92,246,0.6)]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
