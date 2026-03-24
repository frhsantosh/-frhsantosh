export type Screen = 'dashboard' | 'analysis' | 'roadmap' | 'profile' | 'messages' | 'subject' | 'editor';

export interface Subject {
  name: string;
  score: number;
  status?: string;
  color: string;
}

export interface Milestone {
  title: string;
  date: string;
  daysLeft: number;
  status: 'upcoming' | 'completed' | 'current';
}

export interface Test {
  title: string;
  date: string;
  grade: string;
  icon: string;
  color: string;
}

export interface Message {
  id: string;
  sender: string;
  role: string;
  text: string;
  time: string;
  isMe: boolean;
  avatar: string;
  attachment?: {
    name: string;
    size: string;
    type: string;
  };
}

export interface Conversation {
  id: string;
  name: string;
  subject: string;
  lastMessage: string;
  time: string;
  avatar: string;
  unread?: boolean;
  online?: boolean;
}
