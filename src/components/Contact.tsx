import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, X } from 'lucide-react';

export default function Contact() {
  const socials = [
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: X, href: 'https://x.com', label: 'X' },
  ];

  return (
    <div className='max-w-2xl mx-auto text-center space-y-8'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
      >
        Let's Connect
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-zinc-900/90 p-8 rounded-lg border border-purple-500/20 backdrop-blur-xl'
      >
        <p className='text-zinc-300 mb-8 text-lg'>
          I'm always interested in hearing about new projects and opportunities. Let's create
          something amazing together!
        </p>

        <div className='flex justify-center gap-6'>
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='p-4 rounded-full bg-purple-500/20 text-purple-300 hover:text-purple-400 transition-colors backdrop-blur-sm'
            >
              <Icon className='w-6 h-6' />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
