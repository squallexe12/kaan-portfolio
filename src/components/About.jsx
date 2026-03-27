import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Code, Layers, User } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const { t } = useTranslation()

  const stats = [
    { icon: Code, value: t('about.stats.projects') },
    { icon: Layers, value: t('about.stats.technologies') },
    { icon: User, value: t('about.stats.age') },
  ]

  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-16 text-center text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          {t('about.title')}
        </motion.h2>

        <div className="grid items-center gap-12 md:grid-cols-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="flex justify-center md:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent blur-sm" />
              <img
                src="/kaan.jpg"
                alt="Kaan Kapsız"
                className="relative h-72 w-72 rounded-2xl border border-[#2a2a2a] object-cover shadow-2xl md:h-80 md:w-80"
              />
            </div>
          </motion.div>

          <div className="space-y-6 md:col-span-3">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="text-base leading-relaxed text-[#999] md:text-lg"
            >
              {t('about.bio')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2 text-sm text-[#999]">
                <MapPin size={14} />
                {t('about.location')}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2 text-sm text-[#999]">
                <GraduationCap size={14} />
                {t('about.school')}
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {stats.map(({ icon: Icon, value }, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-4 text-center transition-colors hover:border-[#3a3a3a]"
                >
                  <Icon size={18} className="mx-auto mb-2 text-[#999]" />
                  <span className="text-sm font-semibold text-white">{value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
