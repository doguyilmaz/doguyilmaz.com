import { motion } from 'framer-motion';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'GraphQL',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Git',
];

export default function About() {
  return (
    <div className='space-y-8'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
      >
        About Me
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className='space-y-4 bg-zinc-900/90 p-6 rounded-lg border border-purple-500/20 backdrop-blur-xl'
        >
          <h3 className='text-xl font-semibold text-purple-400'>My Journey</h3>
          <p className='text-zinc-300 leading-relaxed'>
            I'm a full-stack developer with a passion for building elegant solutions to complex
            problems. With over 5 years of experience in web development, I specialize in creating
            performant and scalable applications.
          </p>
          <p className='text-zinc-300 leading-relaxed'>
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open-source projects, or sharing knowledge with the developer community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className='space-y-4 bg-zinc-900/90 p-6 rounded-lg border border-purple-500/20 backdrop-blur-xl'
        >
          <h3 className='text-xl font-semibold text-purple-400'>Skills</h3>
          <div className='flex flex-wrap gap-2'>
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className='px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm backdrop-blur-sm'
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
