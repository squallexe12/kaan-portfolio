import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    key: 'subtrack',
    tags: ['TypeScript', 'Firebase', 'Tailwind'],
    url: 'https://github.com/squallexe12/SubTrack-App',
  },
  {
    key: 'cvmaster',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/squallexe12/cv-master',
  },
  {
    key: 'devteam',
    tags: ['CSS', 'HTML'],
    url: 'https://github.com/squallexe12/developer-team-website',
  },
  {
    key: 'ctextui',
    tags: ['CSS'],
    url: 'https://github.com/squallexe12/c-textui',
  },
  {
    key: 'cgivecar',
    tags: ['Lua'],
    url: 'https://github.com/squallexe12/c-givecar',
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

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {t('projects.title')}
          </h2>
          <p className="text-[#999]">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.a
              key={project.key}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-6 transition-colors hover:border-[#3a3a3a]"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="font-mono text-base font-semibold text-white">
                  {t(`projects.items.${project.key}.title`)}
                </h3>
                <ExternalLink
                  size={16}
                  className="shrink-0 text-[#999] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </div>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-[#999]">
                {t(`projects.items.${project.key}.description`)}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-1 font-mono text-xs text-[#999]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
