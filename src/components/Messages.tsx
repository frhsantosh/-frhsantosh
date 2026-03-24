import { motion } from 'motion/react';
import { Search, Send, PlusCircle, Image as ImageIcon, Video, Info, Download, FileText, CheckCheck } from 'lucide-react';
import { useState } from 'react';

export function Messages() {
  const [activeTab, setActiveTab] = useState('jenkins');

  const conversations = [
    { 
      id: 'jenkins', 
      name: 'Dr. Sarah Jenkins', 
      subject: 'Mathematics', 
      last: 'The calculus quiz results are now available for review.', 
      time: '10:45 AM', 
      online: true,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEJiioJ7pVx14iSBrW-6iH70KWfn45AwM9V36WoxbLSPC7tM6wC7YIWT8ue-nvkMMrHHCUYrAu-9HqQehw0LH5R0K8ZToelFUdC4M7AfNk-uFB-Dn19jV4oBvDxe7bhhkMVkM-Ju3mDQsZJQFWJWiE83_evLZOKC7PAKwevjvdpmSmzrZp9FQI1nYOFfAJCs9Kd8DOoiSwoPsLOrCO7xOibxlBK_On51t0u4tm8mqYhqciyidcqFnMhJkzFuXej1nWKz0qzNGvsyg'
    },
    { 
      id: 'chen', 
      name: 'Prof. Marcus Chen', 
      subject: 'Physics', 
      last: "Don't forget the optics lab report is due Friday.", 
      time: 'Yesterday', 
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFJVCuwS10AmtZMU8Kn3rECpwImDCoumIgDEAJv43ActeKCOip6Hly0rL37Hv_-hObQof7ttofaD5xonOHiGqrv38dOIvQAU5bcKbRR3l1qO1zd8IM9lDXITIYd39P3btmfBgHoTvnef0e2iO9ng6xjp67cdnROQOiBvPY5xWiZZnXEiT8-ZUj3-j2aC58M2U-qLmV0zc2c5yuiiEbG7lVoIGMEhaqUlZJCa3txabsgd-ulr80BPBmo-DvLakpmiDVFfl-Nast9FU'
    },
    { 
      id: 'rodriguez', 
      name: 'Elena Rodriguez', 
      subject: 'Art History', 
      last: 'The museum trip permission slip is attached below.', 
      time: 'Mon', 
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsh3RHKHhyWDkQvI4Oi1pJQde7dzuN5RBarUDn6L3onx4VG2Gc5e0zjIgdeUKJ9SckWLQ_8TXn1xH88Q-Qj8CSsE6X25NhNZOhYzETJ7AQOEBF9b7rplrSHYbRa4SWF9WHgxiAxMJ4b7TSdCZ63jqNhIy-n2wV7apy3eHopGtlcRum4EsUqrmy_HqBrBIR4EvNmOPHSvvuf1qRtuz2BCEiu1s2DuRfjxNGmbs2_EePTzH6-W5SxDZVVbhqp-TQOR80P0_Bj0IWz6Y'
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 h-[calc(100vh-180px)]"
    >
      {/* Sidebar */}
      <aside className="hidden md:flex md:col-span-4 lg:col-span-3 bg-surface-container-low rounded-3xl overflow-hidden flex-col editorial-shadow">
        <div className="p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant" size={18} />
            <input 
              className="w-full bg-surface-container-highest border-none rounded-2xl py-3 pl-12 pr-4 text-xs focus:ring-2 focus:ring-primary transition-all" 
              placeholder="Search teachers..." 
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-3 space-y-2 pb-6">
          {conversations.map((c) => (
            <button 
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`w-full text-left p-4 rounded-2xl transition-all duration-200 group ${
                activeTab === c.id 
                  ? 'bg-surface-container-lowest shadow-sm border-l-4 border-primary' 
                  : 'hover:bg-surface-container-high'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  {c.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-white"></span>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-sm truncate">{c.name}</h3>
                    <span className="text-[10px] font-medium text-on-surface-variant shrink-0">{c.time}</span>
                  </div>
                  <p className={`text-[10px] font-bold mb-1 ${c.id === 'jenkins' ? 'text-secondary' : c.id === 'chen' ? 'text-primary' : 'text-tertiary'}`}>
                    {c.subject}
                  </p>
                  <p className="text-[10px] text-on-surface-variant truncate">{c.last}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Chat View */}
      <section className="md:col-span-8 lg:col-span-9 bg-surface-container-lowest md:rounded-3xl shadow-sm flex flex-col overflow-hidden editorial-shadow">
        {/* Header */}
        <div className="px-6 py-4 flex items-center justify-between bg-white/50 backdrop-blur-sm border-b border-outline-variant/10">
          <div className="flex items-center gap-4">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEJiioJ7pVx14iSBrW-6iH70KWfn45AwM9V36WoxbLSPC7tM6wC7YIWT8ue-nvkMMrHHCUYrAu-9HqQehw0LH5R0K8ZToelFUdC4M7AfNk-uFB-Dn19jV4oBvDxe7bhhkMVkM-Ju3mDQsZJQFWJWiE83_evLZOKC7PAKwevjvdpmSmzrZp9FQI1nYOFfAJCs9Kd8DOoiSwoPsLOrCO7xOibxlBK_On51t0u4tm8mqYhqciyidcqFnMhJkzFuXej1nWKz0qzNGvsyg" 
              alt="Sarah" 
              className="w-10 h-10 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <h2 className="font-bold text-sm">Dr. Sarah Jenkins</h2>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span className="text-[10px] font-medium text-on-surface-variant">Active now • Mathematics Department</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><Video size={20} /></button>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><Info size={20} /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-surface-container-low/20">
          <div className="flex justify-center">
            <span className="px-4 py-1 rounded-full bg-surface-container text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Today</span>
          </div>

          <div className="flex items-end gap-3 max-w-[85%]">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEJiioJ7pVx14iSBrW-6iH70KWfn45AwM9V36WoxbLSPC7tM6wC7YIWT8ue-nvkMMrHHCUYrAu-9HqQehw0LH5R0K8ZToelFUdC4M7AfNk-uFB-Dn19jV4oBvDxe7bhhkMVkM-Ju3mDQsZJQFWJWiE83_evLZOKC7PAKwevjvdpmSmzrZp9FQI1nYOFfAJCs9Kd8DOoiSwoPsLOrCO7xOibxlBK_On51t0u4tm8mqYhqciyidcqFnMhJkzFuXej1nWKz0qzNGvsyg" className="w-8 h-8 rounded-full mb-1 object-cover" referrerPolicy="no-referrer" />
            <div>
              <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-outline-variant/10">
                <p className="text-xs text-on-surface leading-relaxed">Good morning! I wanted to check in regarding Leo's progress in the Advanced Algebra unit. He's showing great improvement in quadratic equations.</p>
              </div>
              <span className="text-[10px] font-medium text-on-surface-variant mt-1 ml-1">09:12 AM</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 ml-auto max-w-[85%]">
            <div className="bg-primary text-white p-4 rounded-2xl rounded-br-none shadow-md">
              <p className="text-xs leading-relaxed">That's wonderful to hear, Dr. Jenkins. He's been spending extra time on the practice modules this week.</p>
            </div>
            <div className="flex items-center gap-1 mt-1 mr-1">
              <span className="text-[10px] font-medium text-on-surface-variant">09:45 AM</span>
              <CheckCheck size={14} className="text-primary" />
            </div>
          </div>

          <div className="flex items-end gap-3 max-w-[85%]">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEJiioJ7pVx14iSBrW-6iH70KWfn45AwM9V36WoxbLSPC7tM6wC7YIWT8ue-nvkMMrHHCUYrAu-9HqQehw0LH5R0K8ZToelFUdC4M7AfNk-uFB-Dn19jV4oBvDxe7bhhkMVkM-Ju3mDQsZJQFWJWiE83_evLZOKC7PAKwevjvdpmSmzrZp9FQI1nYOFfAJCs9Kd8DOoiSwoPsLOrCO7xOibxlBK_On51t0u4tm8mqYhqciyidcqFnMhJkzFuXej1nWKz0qzNGvsyg" className="w-8 h-8 rounded-full mb-1 object-cover" referrerPolicy="no-referrer" />
            <div className="space-y-2">
              <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-outline-variant/10">
                <p className="text-xs text-on-surface leading-relaxed">I've attached a supplementary worksheet that could help him prepare for next Wednesday's mid-term. Please have him take a look at it before our next session.</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary-container/20 rounded-xl border border-secondary/20 max-w-sm">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                  <FileText size={20} fill="currentColor" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-on-surface truncate">Midterm_Prep_Advanced.pdf</p>
                  <p className="text-[8px] text-on-surface-variant font-medium">1.2 MB • PDF Document</p>
                </div>
                <button className="text-secondary hover:bg-secondary/10 p-1 rounded-full transition-colors">
                  <Download size={16} />
                </button>
              </div>
              <span className="text-[10px] font-medium text-on-surface-variant mt-1 ml-1">10:45 AM</span>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="p-6 bg-white border-t border-outline-variant/10">
          <div className="flex items-end gap-3 max-w-5xl mx-auto">
            <div className="flex items-center gap-1 mb-2">
              <button className="p-2 text-on-surface-variant hover:text-primary rounded-full transition-all"><PlusCircle size={20} /></button>
              <button className="p-2 text-on-surface-variant hover:text-primary rounded-full transition-all"><ImageIcon size={20} /></button>
            </div>
            <div className="flex-1 relative">
              <textarea 
                className="w-full bg-surface-container-highest border-none rounded-2xl py-3 px-5 text-xs focus:ring-2 focus:ring-primary resize-none min-h-[48px] max-h-32 transition-all" 
                placeholder="Type your message..." 
                rows={1}
              />
            </div>
            <button className="mb-1 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              <Send size={20} className="-rotate-12" />
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
