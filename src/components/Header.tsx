import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm'
    >
      <nav className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className='text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'
        >
          John Doe
        </motion.div>

        <div className='flex items-center gap-6'>
          <a href='#about' className='hover:text-purple-600 transition-colors'>
            About
          </a>
          <a href='#projects' className='hover:text-purple-600 transition-colors'>
            Projects
          </a>
          <a href='#skills' className='hover:text-purple-600 transition-colors'>
            Skills
          </a>
          <a href='#contact' className='hover:text-purple-600 transition-colors'>
            Contact
          </a>
        </div>

        <div className='flex items-center gap-4'>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-purple-600 transition-colors'
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-purple-600 transition-colors'
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href='mailto:your.email@example.com'
            className='text-gray-600 hover:text-purple-600 transition-colors'
          >
            <Mail size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href='/resume.pdf'
            className='text-gray-600 hover:text-purple-600 transition-colors'
          >
            <FileText size={20} />
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
