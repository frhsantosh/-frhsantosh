import { motion } from 'motion/react';
import { Activity, AlertTriangle, HelpCircle, FileText, Play, ArrowRight } from 'lucide-react';

export function SubjectDetail() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12 pb-10"
    >
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-secondary text-[10px] font-bold tracking-wide uppercase">
            Core Curriculum
          </span>
          <h2 className="font-headline text-5xl font-extrabold tracking-tight text-primary">Mathematics</h2>
          <p className="text-on-surface-variant max-w-md text-sm leading-relaxed">
            Currently exploring Advanced Algebra and Geometric Proofs with a focus on logical deduction.
          </p>
        </div>
        
        <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-3xl shadow-sm border border-outline-variant/10">
          <div className="relative w-20 h-20">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle className="stroke-surface-container" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
              <motion.circle 
                initial={{ strokeDasharray: "0, 100" }}
                animate={{ strokeDasharray: "82, 100" }}
                transition={{ duration: 1.5 }}
                className="stroke-secondary" cx="18" cy="18" fill="none" r="16" strokeWidth="3"
              ></motion.circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-headline text-lg font-bold">82%</span>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Yearly Goal</p>
            <p className="font-headline text-xl font-bold">On Track</p>
          </div>
        </div>
      </section>

      {/* Analytics & Progress */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-surface-container-low rounded-3xl p-8 space-y-6 editorial-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline text-2xl font-bold">Current Objective</h3>
              <p className="text-on-surface-variant text-sm">Mastery of Quadratic Functions</p>
            </div>
            <Activity className="text-primary" size={32} />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-xs font-bold">
              <span>Curriculum Progress</span>
              <span className="text-primary">12/15 Modules</span>
            </div>
            <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 1 }}
                className="h-full bg-primary rounded-full"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-1 bg-secondary rounded-full"></div>
              <div className="h-1 bg-secondary rounded-full"></div>
              <div className="h-1 bg-outline-variant/30 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-tertiary/5 rounded-3xl p-8 border border-tertiary/10">
          <div className="flex items-center gap-2 mb-6 text-tertiary">
            <AlertTriangle size={20} />
            <h3 className="font-headline text-lg font-bold">Focus Areas</h3>
          </div>
          <ul className="space-y-4">
            {[
              { title: 'Quadratic Equations', sub: 'Review factoring methods', active: true },
              { title: 'Parabola Vertex', sub: 'Coordinate calculation', active: false },
            ].map((area) => (
              <li key={area.title} className="flex items-start gap-3">
                <div className={`mt-1.5 w-2 h-2 rounded-full ${area.active ? 'bg-tertiary' : 'bg-tertiary/30'}`}></div>
                <div>
                  <p className="font-bold text-sm">{area.title}</p>
                  <p className="text-[10px] text-on-surface-variant">{area.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recent Assessments */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="font-headline text-2xl font-bold">Recent Assessments</h3>
          <button className="text-primary font-bold text-xs hover:underline">View All History</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Polynomial Basics', type: 'Homework', date: 'Oct 24', grade: 'A-', score: '92%', color: 'text-secondary' },
            { title: 'Mid-Term Quiz', type: 'In-Class', date: 'Oct 18', grade: 'B', score: '84%', color: 'text-tertiary' },
          ].map((a) => (
            <div key={a.title} className="group bg-surface-container-lowest p-5 rounded-2xl flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer border border-outline-variant/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <FileText size={24} />
                </div>
                <div>
                  <p className="font-bold text-sm">{a.title}</p>
                  <p className="text-[10px] text-on-surface-variant">{a.type} • {a.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-headline text-xl font-bold ${a.color}`}>{a.grade}</p>
                <p className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">{a.score}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendation Card */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-on-surface text-surface py-12 px-8 md:px-16 flex flex-col md:flex-row items-center gap-12 editorial-shadow">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-20 -mt-20"></div>
        <div className="relative z-10 space-y-6 md:w-1/2">
          <h3 className="font-headline text-3xl font-extrabold leading-tight">Recommended for your child: "The Parabola Lab"</h3>
          <p className="text-surface-variant/80 text-lg leading-relaxed">An interactive 3D simulation specifically designed to help students visualize Quadratic Equations through real-world physics puzzles.</p>
          <button className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-3 active:scale-95 shadow-lg shadow-primary/20">
            Start Interactive Tutorial
            <ArrowRight size={20} />
          </button>
        </div>
        <div className="relative z-10 md:w-1/2 h-64 w-full rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBPwDykc1HkTYJNdzVPezlpwbLqIRwEvhm3JCbwZ1Kqgblpier4muoGUKIM38xh_wvYo-N_OecCOSp1gW-ZrC3BjWNKUTnPfP_5-EqA75UlDY4xIruZU_UDGamkV4oLCqlFhO0VlFXG6PyhhA2U9ALq_XC7giQWiKEkd8NCJb74sKWX65ZXIsYK9lnSwR8qk9QhtnjC9yzzWEMjyOftvBFv98LirwNjySnzvuryLdJP3II6w3aUDeR8rGcFsW_MNpLfZvjf9Ql63w" 
            alt="Tutorial"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
              <Play size={32} fill="currentColor" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
