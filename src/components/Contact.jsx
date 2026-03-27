import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xlgogdzl', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[#111111]/50" />
      <div className="relative mx-auto max-w-2xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="text-[#999]">{t('contact.subtitle')}</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#999]">
                {t('contact.name_label')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t('contact.name_placeholder')}
                className="w-full rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3 text-sm text-white placeholder-[#555] outline-none transition-colors focus:border-[#888]"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#999]">
                {t('contact.email_label')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t('contact.email_placeholder')}
                className="w-full rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3 text-sm text-white placeholder-[#555] outline-none transition-colors focus:border-[#888]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#999]">
              {t('contact.message_label')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder={t('contact.message_placeholder')}
              className="w-full resize-none rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3 text-sm text-white placeholder-[#555] outline-none transition-colors focus:border-[#888]"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 sm:w-auto"
          >
            {status === 'sending' ? (
              t('contact.sending')
            ) : (
              <>
                {t('contact.send')}
                <Send size={14} />
              </>
            )}
          </button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-green-400"
            >
              <CheckCircle size={16} />
              {t('contact.success')}
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-red-400"
            >
              <AlertCircle size={16} />
              {t('contact.error')}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
