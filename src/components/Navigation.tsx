import { 
  LayoutDashboard, 
  BarChart3, 
  Milestone, 
  User, 
  Bell, 
  Settings,
  MessageSquare,
  Image,
  Calendar
} from 'lucide-react';
import { Screen } from '../types';
import { motion } from 'motion/react';

interface TopBarProps {
  screen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function TopBar({ screen, onNavigate }: TopBarProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm h-16 flex items-center justify-between px-6 max-w-5xl left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-3">
        <div 
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10 cursor-pointer"
          onClick={() => onNavigate('profile')}
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD01lQxeekvvrxN-f4c82n6BNhBwYFHc0E_gFEK49OQ9SYCv2Q1U9ATV_EerobetxLLRHQ__uwqzoVEZ7z-CBl_5g67dsDv7pkNbh-50hMqUwxeRpVRi9qUOyTL3j1bMTbaG9MluJz0_aEI9protMEsw2B5mzdDeB6AmcKQJh4qjr0PG7Mi3uiGgiCV6B6a0Cb-iyr20bnVGaZCIbowH5E9aY006nFft3d3OE7gBeUn9pO8qHIQuGteaoT1QlDj46-4GH1zFiIFTpQ" 
            alt="Leo"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h1 className="text-lg font-bold text-primary font-headline leading-tight">
            {screen === 'messages' ? 'Messages' : screen === 'editor' ? 'Image Editor' : 'Student Profile'}
          </h1>
          {screen !== 'messages' && (
            <p className="text-[10px] font-medium text-on-surface-variant uppercase tracking-wider">Academic Year 2024</p>
          )}
        </div>
      </div>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
        {screen === 'profile' ? <Settings size={20} /> : <Bell size={20} />}
      </button>
    </header>
  );
}

interface BottomNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analysis', label: 'Analysis', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Milestone },
    { id: 'editor', label: 'Editor', icon: Image },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User },
  ] as const;

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-white/80 backdrop-blur-md rounded-t-3xl shadow-[0_-8px_24px_rgba(25,28,30,0.06)] px-4 pb-6 pt-3 max-w-5xl left-1/2 -translate-x-1/2">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = activeScreen === item.id || (activeScreen === 'subject' && item.id === 'analysis');
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all duration-300 ${
                isActive 
                  ? 'bg-primary/10 text-primary scale-110' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <item.icon size={20} fill={isActive ? "currentColor" : "none"} />
              <span className="text-[10px] font-bold tracking-wide mt-1">{item.label}</span>
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
