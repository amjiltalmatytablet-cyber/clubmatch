/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import MatchResults from './components/MatchResults';
import LoadingMatching from './components/LoadingMatching';
import ClubDirectory from './components/ClubDirectory';
import { QuizAnswer, MatchResult } from './types';
import { getClubMatches } from './services/geminiService';
import { Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

enum AppState {
  INTRO = 'INTRO',
  QUIZ = 'QUIZ',
  LOADING = 'LOADING',
  RESULTS = 'RESULTS',
  DIRECTORY = 'DIRECTORY'
}

export default function App() {
  const [state, setState] = useState<AppState>(AppState.INTRO);
  const [matches, setMatches] = useState<MatchResult[]>([]);

  const handleStartQuiz = () => setState(AppState.QUIZ);
  const handleOpenDirectory = () => setState(AppState.DIRECTORY);

  const handleQuizComplete = async (answers: QuizAnswer[]) => {
    setState(AppState.LOADING);
    try {
      const results = await getClubMatches(answers);
      setMatches(results);
      setState(AppState.RESULTS);
    } catch (error) {
      console.error("Failed to get matches:", error);
      setState(AppState.INTRO);
    }
  };

  const handleReset = () => {
    setMatches([]);
    setState(AppState.INTRO);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-slate-200 font-sans selection:bg-purple-500/30 selection:text-purple-200">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex justify-between items-end">
        <div>
          <h1 
            onClick={handleReset}
            className="text-4xl font-black tracking-tighter text-purple-500 cursor-pointer uppercase italic flex items-center gap-3 transition-transform hover:scale-[1.02]"
          >
            <div className="p-2 bg-purple-600 text-white rounded-xl shadow-lg shadow-purple-900/40">
              <Compass size={24} />
            </div>
            AMJILT CYBER SCHOOL
          </h1>
          <p className="text-slate-500 font-medium tracking-tight mt-1 ml-11">The Social Compass • Student Club Hub</p>
        </div>
        <div className="text-right hidden sm:block">
          <span className="block text-xs font-bold uppercase tracking-widest text-slate-600 font-mono">Terminal Location</span>
          <span className="text-xl font-bold text-slate-300">Maulenova 92</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <AnimatePresence mode="wait">
          {state === AppState.INTRO && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Intro onStart={handleStartQuiz} onOpenDirectory={handleOpenDirectory} />
            </motion.div>
          )}

          {state === AppState.DIRECTORY && (
            <motion.div
              key="directory"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <ClubDirectory onBack={handleReset} />
            </motion.div>
          )}

          {state === AppState.QUIZ && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Quiz onComplete={handleQuizComplete} />
            </motion.div>
          )}

          {state === AppState.LOADING && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingMatching />
            </motion.div>
          )}

          {state === AppState.RESULTS && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MatchResults matches={matches} onReset={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 mt-20 text-center">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
          Amjilt Cyber School &copy; 2026 • Maulenova 92, Almaty • Powered by Gemini AI
        </p>
      </footer>
    </div>
  );
}
