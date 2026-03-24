import { useState } from 'react';
import { Screen } from './types';
import { TopBar, BottomNav } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { Analysis } from './components/Analysis';
import { Roadmap } from './components/Roadmap';
import { Profile } from './components/Profile';
import { Messages } from './components/Messages';
import { SubjectDetail } from './components/SubjectDetail';
import { ImageEditor } from './components/ImageEditor';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentScreen} />;
      case 'analysis':
        return <Analysis />;
      case 'roadmap':
        return <Roadmap />;
      case 'profile':
        return <Profile />;
      case 'messages':
        return <Messages />;
      case 'subject':
        return <SubjectDetail />;
      case 'editor':
        return <ImageEditor onBack={() => setCurrentScreen('dashboard')} />;
      default:
        return <Dashboard onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <TopBar screen={currentScreen} onNavigate={setCurrentScreen} />
      
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-32">
        <AnimatePresence mode="wait">
          <div key={currentScreen}>
            {renderScreen()}
          </div>
        </AnimatePresence>
      </main>

      <BottomNav activeScreen={currentScreen} onNavigate={setCurrentScreen} />
    </div>
  );
}
