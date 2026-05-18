import { useMemo } from 'react'

function useReveal(delay = 0) {
  return useMemo(
    () => ({
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.45, delay, ease: 'easeOut' },
    }),
    [delay],
  )
}

export default useReveal
