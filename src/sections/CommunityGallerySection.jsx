import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { communityGallery } from '../data/siteData'

function CommunityGallerySection() {
  const firstRow = communityGallery.slice(0, 2)
  const secondRow = communityGallery.slice(2, 4)
  const lastImage = communityGallery[4]

  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <SectionHeading
          eyebrow="Community"
          title="Built With Real Teams, Real Events, Real Energy"
          description="A residency culture inspired by active hackathon communities and collaborative builders."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {firstRow.map((image, i) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-glow"
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="h-56 w-full object-cover sm:h-72"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35 }}
              />
            </motion.figure>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {secondRow.map((image, i) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-glow"
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="h-56 w-full object-cover sm:h-72"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
              />
            </motion.figure>
          ))}
        </div>

        {lastImage ? (
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-glow"
          >
            <motion.img
              src={lastImage.src}
              alt={lastImage.alt}
              className="h-64 w-full object-cover sm:h-80"
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.figure>
        ) : null}
      </Container>
    </section>
  )
}

export default CommunityGallerySection
