import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Code2, Send } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'terminal', icon: Terminal, label: 'Terminal' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: Code2, label: 'Projects' },
    { id: 'contact', icon: Send, label: 'Contact' },
    { id: 'skills', icon: Code2, label: 'Skills' },
  ];

  return (
    <nav className='fixed bottom-4 left-1/2 -translate-x-1/2 bg-zinc-800/50 backdrop-blur-lg px-6 py-4 rounded-full border border-zinc-700/50 shadow-lg z-50'>
      <ul className='flex space-x-8'>
        {navItems.map(({ id, icon: Icon, label }) => (
          <li key={id}>
            <button
              onClick={() => onNavigate(id)}
              className={`relative group ${
                activeSection === id ? 'text-purple-400' : 'text-zinc-400'
              }`}
            >
              <Icon className='w-6 h-6' />
              <motion.span
                className='absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 px-2 py-1 rounded text-xs opacity-0 md:group-hover:opacity-100'
                initial={{ y: 10 }}
                animate={{ y: 0 }}
              >
                {label}
              </motion.span>
              {activeSection === id && (
                <motion.div
                  layoutId='active-indicator'
                  className='absolute -bottom-2 left-1/2 w-1 h-1 -translate-x-1/2 bg-purple-400 rounded-full'
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
