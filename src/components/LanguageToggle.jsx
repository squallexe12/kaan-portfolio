import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const isEN = i18n.language === 'en'

  const toggle = () => {
    const next = isEN ? 'tr' : 'en'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  return (
    <button
      onClick={toggle}
      className="relative flex h-8 w-16 items-center rounded-full border border-[#2a2a2a] bg-[#1a1a1a] px-1 transition-colors hover:border-[#3a3a3a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label="Toggle language"
    >
      <motion.div
        className="absolute h-6 w-6 rounded-full bg-white"
        animate={{ x: isEN ? 30 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      <span className={`relative z-10 w-7 text-center text-xs font-semibold transition-colors ${!isEN ? 'text-black' : 'text-[#999]'}`}>
        TR
      </span>
      <span className={`relative z-10 w-7 text-center text-xs font-semibold transition-colors ${isEN ? 'text-black' : 'text-[#999]'}`}>
        EN
      </span>
    </button>
  )
}
