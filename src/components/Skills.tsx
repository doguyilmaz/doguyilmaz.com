import { motion } from 'framer-motion';

const skills = {
  Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
  Backend: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL'],
  Database: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
  DevOps: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
  Tools: ['Git', 'VS Code', 'Postman', 'Figma', 'Jest'],
};

export default function Skills() {
  return (
    <div className='max-w-6xl mx-auto px-4'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
      >
        Technical Skills
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className='bg-zinc-900/90 p-6 rounded-xl border border-purple-500/20 backdrop-blur-xl shadow-lg'
          >
            <h3 className='text-xl font-bold mb-4 text-purple-400'>{category}</h3>
            <div className='flex flex-wrap gap-2'>
              {items.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className='bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm backdrop-blur-sm'
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
