import { motion } from 'motion/react';
import { TrendingUp, Calculator, BookOpen, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import { Screen } from '../types';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-10"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-primary text-on-primary p-8 editorial-shadow">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold tracking-wide uppercase">Term Progress</span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight">Overall Average</h2>
            <p className="text-on-primary/80 max-w-xs text-sm">Leo is showing exceptional focus in STEM subjects this month.</p>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-36 h-36">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle className="opacity-20" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="8"></circle>
                <motion.circle 
                  initial={{ strokeDashoffset: 282.7 }}
                  animate={{ strokeDashoffset: 28.27 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray="282.7" strokeLinecap="round" strokeWidth="8"
                ></motion.circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline text-4xl font-bold">92%</span>
                <span className="text-[10px] font-bold uppercase opacity-80">Distinction</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl"></div>
      </section>

      {/* Academic Strengths */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          className="md:col-span-2 bg-surface-container-lowest rounded-3xl p-8 editorial-shadow space-y-6 cursor-pointer"
          onClick={() => onNavigate('subject')}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-xl font-bold">Academic Strengths</h3>
            <TrendingUp className="text-secondary" size={24} />
          </div>
          
          <div className="space-y-5">
            {[
              { name: 'Mathematics', score: 96, color: 'bg-secondary' },
              { name: 'Natural Sciences', score: 89, color: 'bg-secondary' },
              { name: 'Literature', score: 74, color: 'bg-tertiary', tag: 'Focus Area' },
            ].map((subject) => (
              <div key={subject.name} className="space-y-2">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{subject.name}</span>
                    {subject.tag && (
                      <span className="px-2 py-0.5 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded-full uppercase">{subject.tag}</span>
                    )}
                  </div>
                  <span className={`font-headline font-bold ${subject.score > 80 ? 'text-secondary' : 'text-tertiary'}`}>{subject.score}%</span>
                </div>
                <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${subject.score}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full ${subject.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Tests */}
        <div className="bg-surface-container-low rounded-3xl p-6 flex flex-col justify-between border border-outline-variant/15">
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Recent Tests</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-secondary">
                  <Calculator size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">Calculus Quiz</p>
                  <p className="text-[10px] text-on-surface-variant mt-1">Yesterday • A+</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <BookOpen size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">History Essay</p>
                  <p className="text-[10px] text-on-surface-variant mt-1">2 days ago • B</p>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-6 text-primary font-bold text-xs flex items-center gap-1 group">
            View Full Transcript 
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Roadmap & Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          className="relative group cursor-pointer overflow-hidden rounded-3xl bg-surface-container-lowest p-8 editorial-shadow border border-primary/5"
          onClick={() => onNavigate('roadmap')}
        >
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase w-fit">Next Step</div>
              <h3 className="font-headline text-2xl font-bold leading-tight">Prepare for the Science Olympiad</h3>
              <p className="text-on-surface-variant text-xs leading-relaxed">Leo is 3 topics away from the qualifier level. Start the mock exam today.</p>
              <button className="rounded-full px-6 py-3 bg-primary text-on-primary text-xs font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
                Open Roadmap
              </button>
            </div>
            <Sparkles className="text-primary opacity-20 group-hover:opacity-100 transition-opacity" size={40} />
          </div>
        </div>

        <div className="bg-surface-container-low rounded-3xl p-8 space-y-6">
          <h3 className="font-headline text-xl font-bold">Upcoming Milestones</h3>
          <div className="space-y-0 relative">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-outline-variant opacity-20"></div>
            {[
              { title: 'Physics Midterm', date: 'October 14', sub: 'In 3 days', active: true },
              { title: 'Project Proposal Due', date: 'October 18', sub: 'In 7 days', active: false },
              { title: 'Parent-Teacher Meeting', date: 'October 22', sub: 'In 11 days', active: false },
            ].map((m, i) => (
              <div key={i} className="relative flex gap-6 pb-6 last:pb-0">
                <div className={`w-6 h-6 rounded-full ${m.active ? 'bg-tertiary' : 'bg-outline-variant'} flex items-center justify-center shrink-0 z-10 mt-1`}>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div>
                  <p className="font-bold text-sm">{m.title}</p>
                  <p className="text-[10px] text-on-surface-variant font-medium">{m.date} • {m.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
