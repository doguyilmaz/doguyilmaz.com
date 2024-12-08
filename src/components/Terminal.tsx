import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function Terminal() {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<Array<{ text: string; type: 'input' | 'output' }>>([]);
  const [isTyping, setIsTyping] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const initialText = `> const developer = {
  name: "Dogu Yilmaz",
  role: "Computer Engineer & Software Developer",
  location: "Istanbul",
  skills: ["TypeScript", "React", "React Native", "JavaScript"],
};

> developer.greeting();
"I am a Software Developer at Togg | Trugo.
Currently working with Vue, React and React Native.

Describe myself as a highly motivated software developer and dedicated team player. Enthusiastic about exploring new technologies and optimizing systems. Enjoys developing web and mobile applications.
Passionate about JavaScript & TypeScript."

> developer.currentStatus();
"Building elegant solutions to complex problems...
Recently exploring Swift and Kotlin."

Type 'help' for available commands.`;

  const commands = {
    help: `Available commands:
  - help: Show this help message 
  - skills: List my technical skills 
  - contact: Display contact information
  - clear: Clear the terminal
  - github: Open my GitHub profile`,
    skills: `> const skills = {
  languages: ["JavaScript", "TypeScript", "Go", "HTML", "CSS"],
  frontend: ["React", "Next.js", "React Native", "Vue", "Astro"],
  backend: ["Node.js", "Go", "Elixir", "Elysia"],
  cloud: ["AWS", "Docker", "Kubernetes", "Cloudflare", "Oracle Cloud", "Digital Ocean", "Vercel", "Heroku", "Supabase"],
};`,
    contact: `> const contact = {
  email: "info@doguyilmaz.com",
  github: "github.com/doguyilmaz",
  linkedin: "linkedin.com/in/doguyilmaz",
  twitter: "@dogukyilmaz"
};`,
    github: 'Opening GitHub profile...',
    clear: '',
  };
  //   const commands = {
  //     help: `Available commands:
  //   - help: Show this help message
  //   - about: Display information about me
  //   - skills: List my technical skills
  //   - projects: Show my featured projects
  //   - contact: Display contact information
  //   - clear: Clear the terminal
  //   - github: Open my GitHub profile`,
  //     about: `> const aboutMe = {
  //   name: "John Doe",
  //   role: "Full Stack Developer",
  //   location: "San Francisco, CA",
  //   experience: "5+ years",
  //   interests: ["AI/ML", "Cloud Architecture", "Open Source"]
  // };`,
  //     skills: `> const skills = {
  //   languages: ["JavaScript", "TypeScript", "Go", "HTML", "CSS"],
  //   frontend: ["React", "Next.js", "React Native", "Vue", "Astro"],
  //   backend: ["Node.js", "Go", "Elixir", "Elysia"],
  //   cloud: ["AWS", "Docker", "Kubernetes", "Cloudflare", "Oracle Cloud", "Digital Ocean", "Vercel", "Heroku", "Supabase"],
  // };`,
  //     projects: `Featured Projects:
  // 1. Neural Canvas - AI Art Platform
  // 2. DevFlow - Developer Toolkit
  // 3. CloudScale - Infrastructure Manager
  // 4. CodeMentor - Learning Platform`,
  //     contact: `> const contact = {
  //   email: "info@doguyilmaz.com",
  //   github: "github.com/doguyilmaz",
  //   linkedin: "linkedin.com/in/doguyilmaz",
  //   twitter: "@dogukyilmaz"
  // };`,
  //     github: 'Opening GitHub profile...',
  //     clear: '',
  //   };

  const typeInitialText = async () => {
    let currentText = '';
    const lines = initialText.split('\n');

    for (const line of lines) {
      for (const char of line) {
        currentText += char;
        setHistory([{ text: currentText, type: 'output' }]);
        await new Promise((resolve) => setTimeout(resolve, 20));
      }
      currentText += '\n';
    }
    setIsTyping(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleCommand = (cmd: string) => {
    const normalizedCmd = cmd.toLowerCase().trim();
    setHistory((prev) => [...prev, { text: `> ${cmd}`, type: 'input' }]);

    if (normalizedCmd === 'github') {
      window.open('https://github.com', '_blank');
    }
    if (normalizedCmd === 'clear') {
      setHistory([]);
      return;
    }

    const output =
      commands[normalizedCmd as keyof typeof commands] ||
      "Command not found. Type 'help' for available commands.";
    setHistory((prev) => [...prev, { text: output, type: 'output' }]);
    setCommand('');

    if (terminalRef.current) {
      setTimeout(() => {
        terminalRef.current?.scrollTo({
          top: terminalRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }, 100);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isTyping) {
      handleCommand(command);
    }
  };

  useEffect(() => {
    typeInitialText();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='font-mono'
    >
      <div className='grid'>
        <div className='lg:col-span-2 bg-zinc-900/90 rounded-lg border border-purple-500/20 p-6 shadow-xl backdrop-blur-xl'>
          <div className='flex items-center justify-between mb-4'>
            <div className='flex space-x-2'>
              <div className='w-3 h-3 rounded-full bg-red-500' />
              <div className='w-3 h-3 rounded-full bg-yellow-500' />
              <div className='w-3 h-3 rounded-full bg-green-500' />
            </div>
            <div className='flex items-center space-x-2 text-zinc-400'>
              <TerminalIcon size={14} />
              <span className='text-xs'>zsh</span>
            </div>
          </div>

          <div
            ref={terminalRef}
            className='h-[75vh] overflow-y-auto space-y-2 mb-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900'
          >
            <AnimatePresence mode='popLayout'>
              {history.map((entry, i) => (
                <motion.pre
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className='text-sm whitespace-pre-wrap'
                >
                  <span className={entry.type === 'input' ? 'text-purple-400' : 'text-green-400'}>
                    {entry.text}
                  </span>
                </motion.pre>
              ))}
            </AnimatePresence>
            {isTyping && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className='inline-block w-2 h-4 bg-green-400 ml-1'
              />
            )}
          </div>

          <div className='flex items-center space-x-2'>
            <span className='text-purple-400'>❯</span>
            <input
              ref={inputRef}
              type='text'
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleKeyPress}
              className='flex-1 bg-transparent border-none outline-none text-green-400 text-sm'
              placeholder={
                isTyping ? 'Wait for initialization...' : "Type 'help' for available commands..."
              }
              spellCheck='false'
              disabled={isTyping}
            />
          </div>
        </div>

        {/* <div className='space-y-4'>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className='bg-zinc-900/90 rounded-lg border border-purple-500/20 p-4 backdrop-blur-xl'
          >
            <div className='flex items-center space-x-2 mb-2'>
              <Coffee className='text-purple-400' size={20} />
              <h3 className='text-purple-400 font-semibold'>Quick Stats</h3>
            </div>
            <div className='space-y-2 text-sm text-zinc-300'>
              <p>⚡ 500+ Contributions</p>
              <p>📦 20+ Open Source Projects</p>
              <p>🚀 50+ Production Deployments</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className='bg-zinc-900/90 rounded-lg border border-purple-500/20 p-4 backdrop-blur-xl'
          >
            <div className='flex items-center space-x-2 mb-2'>
              <Code2 className='text-purple-400' size={20} />
              <h3 className='text-purple-400 font-semibold'>Latest Activity</h3>
            </div>
            <div className='space-y-2 text-sm text-zinc-300'>
              <p>🔥 Contributed to React</p>
              <p>✨ Released DevFlow v2.0</p>
              <p>📝 Published Tech Blog</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className='bg-zinc-900/90 rounded-lg border border-purple-500/20 p-4 backdrop-blur-xl'
          >
            <div className='flex items-center space-x-2 mb-2'>
              <Sparkles className='text-purple-400' size={20} />
              <h3 className='text-purple-400 font-semibold'>Achievements</h3>
            </div>
            <div className='space-y-2 text-sm text-zinc-300'>
              <p>🏆 Top Contributor 2023</p>
              <p>🌟 Featured Developer</p>
              <p>🎯 100% Project Success</p>
            </div>
          </motion.div>
        </div> */}
      </div>
    </motion.div>
  );
}
