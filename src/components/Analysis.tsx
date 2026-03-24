import { motion } from 'motion/react';
import { Star, TrendingUp, HelpCircle, AlertCircle, Lightbulb, Download } from 'lucide-react';

export function Analysis() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-10 pb-10"
    >
      <section className="space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-secondary text-[10px] font-bold tracking-wide">
          QUARTERLY OVERVIEW
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight leading-tight font-headline">
          Academic Performance <br/> <span className="text-primary">In-Depth Analysis</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl text-base leading-relaxed">
          An editorial look at current progress. We focus on identifying key strengths to build confidence, and specific growth areas to direct focused support.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Core Strengths */}
        <div className="md:col-span-7 bg-surface-container-lowest rounded-3xl p-8 space-y-6 flex flex-col justify-between editorial-shadow">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold flex items-center gap-2 text-secondary font-headline">
                <Star size={24} fill="currentColor" />
                Core Strengths
              </h3>
              <HelpCircle className="text-outline-variant cursor-help" size={20} />
            </div>
            <div className="space-y-8 mt-8">
              {[
                { name: 'Logical Reasoning', score: 94, desc: 'Consistently applies abstract concepts to solve complex problem sets.' },
                { name: 'Creative Writing', score: 88, desc: 'Exceptional narrative structure and sophisticated vocabulary usage.' },
              ].map((s) => (
                <div key={s.name} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-bold text-lg">{s.name}</span>
                    <span className="text-secondary font-bold">{s.score}%</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${s.score}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-secondary rounded-full"
                    />
                  </div>
                  <p className="mt-2 text-xs text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-300">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 p-4 bg-secondary/5 rounded-2xl border border-secondary/10">
            <p className="text-secondary text-sm font-medium leading-relaxed italic">
              "Demonstrates high resilience when faced with unfamiliar mathematical patterns."
            </p>
          </div>
        </div>

        {/* Growth Areas */}
        <div className="md:col-span-5 bg-surface-container-lowest rounded-3xl p-8 space-y-6 editorial-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold flex items-center gap-2 text-tertiary font-headline">
              <TrendingUp size={24} />
              Growth Areas
            </h3>
            <AlertCircle className="text-outline-variant cursor-help" size={20} />
          </div>
          <div className="space-y-8 mt-8">
            {[
              { name: 'Time Management', score: 62, desc: 'Struggles with allocating sufficient time for multi-part exam questions.' },
              { name: 'Scientific Inquiry', score: 51, desc: 'Developing confidence in experimental methodology and data recording.' },
            ].map((s) => (
              <div key={s.name} className="relative pl-6 border-l-2 border-tertiary/20">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-tertiary"></div>
                <h4 className="font-bold text-sm">{s.name}</h4>
                <p className="text-[10px] text-on-surface-variant mt-1">{s.desc}</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-1.5 flex-1 bg-surface-container rounded-full">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${s.score}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-tertiary rounded-full"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-tertiary">{s.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Holistic Development */}
        <div className="md:col-span-12 lg:col-span-8 bg-surface-container-low rounded-3xl p-8 relative overflow-hidden h-[400px]">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-2xl font-bold font-headline">Holistic Development</h3>
              <p className="text-on-surface-variant text-sm">Balancing academic rigor with social-emotional milestones.</p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <svg className="w-64 h-64 opacity-80" viewBox="0 0 200 200">
                <polygon className="text-outline-variant" fill="none" points="100,10 185,60 185,140 100,190 15,140 15,60" stroke="currentColor" strokeWidth="0.5"></polygon>
                <polygon className="text-outline-variant" fill="none" points="100,40 155,75 155,125 100,160 45,125 45,75" stroke="currentColor" strokeWidth="0.5"></polygon>
                <polygon className="text-outline-variant" fill="none" points="100,70 125,85 125,115 100,130 75,115 75,85" stroke="currentColor" strokeWidth="0.5"></polygon>
                <motion.polygon 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  fill="rgba(0, 93, 167, 0.2)" 
                  points="100,30 170,70 160,130 100,160 50,110 30,60" 
                  stroke="#005da7" 
                  strokeWidth="2"
                ></motion.polygon>
                {[
                  {x: 100, y: 30}, {x: 170, y: 70}, {x: 160, y: 130}, {x: 100, y: 160}, {x: 50, y: 110}, {x: 30, y: 60}
                ].map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} fill="#005da7" r="3"></circle>
                ))}
              </svg>
            </div>
            <div className="flex justify-around text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              <span>Cognitive</span>
              <span>Social</span>
              <span>Motor</span>
              <span>Adaptive</span>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        </div>

        {/* Predicted Grade */}
        <div className="md:col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/10 shadow-sm">
            <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter mb-4">Subject Focus</h4>
            <div className="flex flex-wrap gap-2">
              {['Mathematics', 'English Lit', 'Biology', 'Art History'].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-bold">{t}</span>
              ))}
            </div>
          </div>
          <div className="bg-primary rounded-3xl p-6 text-on-primary shadow-xl shadow-primary/20 relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-xs opacity-80 font-medium">Predicted Term Grade</p>
              <div className="text-5xl font-extrabold mt-1">A-</div>
              <div className="mt-4 flex items-center gap-2 bg-white/10 w-fit px-3 py-1 rounded-full text-[10px] font-bold">
                <TrendingUp size={12} />
                +4% from last month
              </div>
            </div>
            <Star className="absolute -right-4 -bottom-4 text-white opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500" size={120} />
          </div>
        </div>
      </div>

      {/* Growth Strategy */}
      <section className="bg-white/40 border border-white/60 backdrop-blur-sm rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-20 h-20 rounded-2xl bg-tertiary/10 flex items-center justify-center flex-shrink-0">
          <Lightbulb className="text-tertiary" size={32} />
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-bold font-headline">Curated Growth Strategy</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed italic">
            "Consider introducing timed reading sessions at home to build the pacing required for exam success. The current mastery of complex logic suggests the student is ready for advanced geometry modules."
          </p>
        </div>
        <button className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
          <Download size={18} />
          Download PDF
        </button>
      </section>
    </motion.div>
  );
}
