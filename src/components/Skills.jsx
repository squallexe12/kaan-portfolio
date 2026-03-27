import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    key: 'languages',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/white' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/white' },
      { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/white' },
      { name: 'CSS', icon: 'https://cdn.simpleicons.org/css/white' },
      { name: 'Lua', icon: 'https://cdn.simpleicons.org/lua/white' },
    ],
  },
  {
    key: 'frameworks',
    items: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/white' },
      { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/white' },
      { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/white' },
    ],
  },
  {
    key: 'tools',
    items: [
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git/white' },
      { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/white' },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[#111111]/50" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {t('skills.title')}
          </h2>
          <p className="text-[#999]">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.key}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={catIdx + 1}
              className="rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a]/80 p-6 backdrop-blur-sm transition-colors hover:border-[#3a3a3a]"
            >
              <h3 className="mb-5 font-mono text-xs font-semibold tracking-widest text-[#999] uppercase">
                {t(`skills.${category.key}`)}
              </h3>
              <div className="space-y-3">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIdx + 1) * 0.1 + i * 0.05 }}
                    className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 transition-all hover:border-[#2a2a2a] hover:bg-[#0a0a0a]"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-5 w-5 opacity-60 transition-opacity group-hover:opacity-100"
                      loading="lazy"
                    />
                    <span className="text-sm text-[#999] transition-colors group-hover:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
