import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
    {
        id: 1,
        title: 'Burundi Space',
        subtitle: "Bienvenue dans l'espace culture et Art du burundi.",
        image: null // Placeholder for now
    },
    {
        id: 2,
        title: 'Histoire Riche',
        subtitle: 'Découvrez les racines profondes et les traditions ancestrales.',
        image: null
    },
    {
        id: 3,
        title: 'Art Vivant',
        subtitle: "L'expression artistique contemporaine en pleine effervescence.",
        image: null
    }
]

export default function BurundiSpaceHeader() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)

    useEffect(() => {
        if (!isPlaying) return
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [isPlaying])

    const next = () => setActiveIndex(prev => (prev + 1) % slides.length)
    const prev = () => setActiveIndex(prev => (prev - 1 + slides.length) % slides.length)

    return (
        <section className="relative bg-[#f2f2f2] h-[70vh] flex items-center justify-center overflow-hidden text-black">
            {/* Background Image Placeholder (would be dynamic based on slide) */}
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />

            <div className="container-xl flex flex-col items-center text-center z-10 relative">
                {/* Content */}
                <div className="max-w-4xl mb-12 flex flex-col items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tight leading-tight">
                                {slides[activeIndex].title}
                            </h1>
                            <p className="text-xl md:text-3xl font-medium text-black/70 max-w-2xl mx-auto">
                                {slides[activeIndex].subtitle}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-6 mt-8">
                    {/* Indicators */}
                    <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-black' : 'w-2.5 bg-black/20 hover:bg-black/40'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Play/Pause */}
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                        {isPlaying ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5 3l14 9-14 9V3z" />
                            </svg>
                        )}
                    </button>

                    {/* Arrows */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={prev}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80 transition text-black"
                            aria-label="Previous slide"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80 transition text-black"
                            aria-label="Next slide"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
