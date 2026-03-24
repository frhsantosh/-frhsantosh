import { motion } from 'motion/react';
import { FlaskConical, TrendingUp, Compass, GraduationCap, Globe, Rocket, Download } from 'lucide-react';

export function Roadmap() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-12 pb-10"
    >
      <section>
        <p className="text-secondary font-bold text-[10px] tracking-wider uppercase mb-2">Personalized Journey</p>
        <h2 className="text-4xl font-extrabold font-headline leading-tight tracking-tight">Academic Roadmap</h2>
        <p className="mt-4 text-on-surface-variant text-base max-w-lg leading-relaxed">
          Based on recent performance in Physics and Literature, we've curated a supportive path for the upcoming academic cycles.
        </p>
      </section>

      <div className="relative">
        {/* Central Track */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-outline-variant/20 rounded-full overflow-hidden">
          <div className="w-full h-1/3 timeline-gradient"></div>
        </div>

        {/* Milestone 1 */}
        <div className="relative pl-16 mb-16">
          <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-primary border-4 border-surface ring-4 ring-primary/10"></div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold">CURRENT FOCUS</span>
            <span className="text-on-surface-variant text-[10px] font-bold">Q3 2023</span>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 editorial-shadow">
            <h3 className="text-xl font-bold font-headline mb-2">Mastery of Kinetics</h3>
            <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">Strengthening fundamental mechanics and vector analysis. Focusing on lab-based practical applications.</p>
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-container text-secondary text-[10px] font-bold">
                Physics
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-bold">
                <TrendingUp size={12} /> 88% Progress
              </span>
            </div>
          </div>
        </div>

        {/* Milestone 2 */}
        <div className="relative pl-16 mb-16">
          <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-secondary border-4 border-surface"></div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase">Next Milestone</span>
            <span className="text-on-surface-variant text-[10px] font-bold">Spring 2024</span>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 editorial-shadow relative overflow-hidden group">
            <GraduationCap className="absolute top-0 right-0 p-4 text-on-surface opacity-5 group-hover:opacity-10 transition-opacity" size={100} />
            <h3 className="text-xl font-bold font-headline mb-2">Advanced STEM Workshop</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">An immersive 4-week program at the Regional Science Hub focusing on robotics and sustainable energy systems.</p>
            <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <Compass size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-secondary uppercase">ENCOURAGED SUGGESTION</p>
                  <p className="text-[10px] text-on-surface-variant">Matches 94% of interest profile</p>
                </div>
              </div>
              <button className="bg-primary text-white rounded-full px-4 py-2 text-[10px] font-bold hover:scale-105 transition-transform active:scale-95">Enroll</button>
            </div>
          </div>
        </div>

        {/* Future Aspirations */}
        <div className="relative pl-16">
          <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-tertiary border-4 border-surface"></div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold uppercase">Future Aspiration</span>
            <span className="text-on-surface-variant text-[10px] font-bold">2025 & Beyond</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest rounded-2xl p-6 editorial-shadow border border-transparent hover:border-tertiary/20 transition-colors">
              <div className="w-8 h-8 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mb-4">
                <Globe size={16} />
              </div>
              <h4 className="font-bold font-headline mb-2">Language Immersion</h4>
              <p className="text-[10px] text-on-surface-variant leading-relaxed">Preparation for international baccalaureate with French immersion programs.</p>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-6 editorial-shadow border border-transparent hover:border-tertiary/20 transition-colors">
              <div className="w-8 h-8 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mb-4">
                <Rocket size={16} />
              </div>
              <h4 className="font-bold font-headline mb-2">Space Tech Camp</h4>
              <p className="text-[10px] text-on-surface-variant leading-relaxed">Early interest mapping toward aerospace engineering and astrophysics.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Card */}
      <div className="bg-primary text-white rounded-3xl p-8 relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h3 className="text-2xl font-bold font-headline mb-2">Educational Vision</h3>
            <p className="text-on-primary/70 text-sm leading-relaxed">"Focusing on interdisciplinary studies now will bridge the gap between creative writing and technical documentation—two areas where they excel."</p>
          </div>
          <div className="w-full md:w-auto">
            <button className="w-full bg-white text-primary rounded-full px-8 py-3 font-bold text-sm shadow-lg hover:bg-slate-50 active:scale-95 transition-all flex items-center justify-center gap-2">
              <Download size={18} />
              Download Plan
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
