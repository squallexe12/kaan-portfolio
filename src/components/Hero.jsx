import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FallingPattern } from './ui/FallingPattern'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0">
        <FallingPattern
          color="rgba(255, 255, 255, 0.4)"
          backgroundColor="#0a0a0a"
          duration={120}
          blurIntensity="1.2em"
          density={1}
          className="h-full w-full"
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 font-mono text-sm tracking-widest text-[#999] uppercase"
        >
          {t('hero.greeting')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
          style={{ letterSpacing: '-0.03em' }}
        >
          {t('hero.name')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-[#999] md:text-lg"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
          >
            {t('hero.cta_projects')}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] px-7 py-3 text-sm font-semibold text-white transition-all hover:border-[#888] hover:bg-white/5 active:scale-95"
          >
            {t('hero.cta_contact')}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-[#999] transition-colors hover:text-white">
          <span className="text-xs tracking-widest uppercase">{t('hero.scroll')}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
