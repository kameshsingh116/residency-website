import { motion } from 'framer-motion'

export const fadeInUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accentSoft">{eyebrow}</p>
      <h2 className="text-balance text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight">{title}</h2>
      {description ? <p className="mt-4 text-sm text-slate-300 sm:text-base">{description}</p> : null}
    </motion.div>
  )
}

export default SectionHeading
