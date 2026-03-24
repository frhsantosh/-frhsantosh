import { motion } from 'motion/react';
import { School, User, Mail, ShieldCheck, Calculator, FlaskConical, Palette, Download, CheckCircle2, Star } from 'lucide-react';

export function Profile() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-10"
    >
      <section className="relative">
        <div className="bg-surface-container-low rounded-[2.5rem] p-8 flex flex-col items-center text-center gap-4">
          <div className="relative">
            <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden rotate-3 shadow-xl transform transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCraVwpgQJbPC8z-3T-CcPOHCylqbzRHW7KHsucEHbbxehNQQ-EkYR9-GG6RfQurkIGiqCAERh-I0gimi7YJF8bhocGPmiHaBeGGAsog__wFswGwyMlqUvJmVhrB_sZqFYxGsm5yl4dQKSZ4rc8HiIpg562o7TnjeaZC6Ttoo9ylVU1Os_zrkNPNZ1CVWvU2dPvfiB4CWcAxehJLo4erX1h7RUcYOXRu33osXcOl_AmGuz-rJellEgPBsr8FLbkUi1dcxvyKpglJOM" 
                alt="Leo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-secondary text-white p-1.5 rounded-full shadow-lg">
              <CheckCircle2 size={16} fill="currentColor" />
            </div>
          </div>
          <div>
            <h2 className="font-headline font-extrabold text-3xl tracking-tight">Leo Thompson</h2>
            <p className="text-on-surface-variant font-medium mt-1">Grade 10 • Academic Year 2024</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-surface-container-lowest rounded-2xl p-6 editorial-shadow flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <School size={20} />
            </div>
            <h3 className="font-bold">School Information</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">School Name</label>
              <p className="font-semibold text-sm">Evergreen High School</p>
            </div>
            <div>
              <label className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Student ID</label>
              <p className="font-semibold text-sm">EHS-2024-8842</p>
            </div>
            <div>
              <label className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Principal</label>
              <p className="font-semibold text-sm">Dr. Sarah Jenkins</p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-2xl p-6 editorial-shadow flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-tertiary/10 rounded-lg text-tertiary">
              <Star size={20} />
            </div>
            <h3 className="font-bold">Academic Interests</h3>
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
            {[
              { name: 'Mathematics', icon: Calculator },
              { name: 'Physics', icon: FlaskConical },
              { name: 'Art History', icon: Palette },
            ].map((interest) => (
              <span key={interest.name} className="px-4 py-2 bg-secondary-container text-secondary rounded-full text-xs font-bold flex items-center gap-2">
                <interest.icon size={14} />
                {interest.name}
              </span>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-surface-container-lowest rounded-2xl p-8 editorial-shadow">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
            <ShieldCheck size={20} />
          </div>
          <h3 className="font-bold">Parental Settings</h3>
        </div>
        <div className="space-y-6">
          {[
            { title: 'Academic Notifications', desc: 'Real-time grade updates and exam alerts', active: true },
            { title: 'Weekly Summary Reports', desc: 'Detailed performance breakdown every Sunday', active: true },
            { title: 'Teacher Messaging Alerts', desc: 'Notify when teachers send direct feedback', active: false },
          ].map((setting) => (
            <div key={setting.title} className="flex items-center justify-between group">
              <div className="flex flex-col">
                <span className="font-bold text-sm">{setting.title}</span>
                <span className="text-[10px] text-on-surface-variant">{setting.desc}</span>
              </div>
              <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${setting.active ? 'bg-primary' : 'bg-outline-variant'}`}>
                <div className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${setting.active ? 'translate-x-6' : 'translate-x-1'}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="pt-4">
        <button className="w-full py-4 px-6 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all transform active:scale-95 flex items-center justify-center gap-3">
          <Download size={20} />
          Export Full Academic Report
        </button>
        <p className="text-center text-[10px] text-on-surface-variant mt-4 font-medium">Last exported: 12 Oct 2023</p>
      </div>
    </motion.div>
  );
}
