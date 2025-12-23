import { useEffect, useState } from 'react'

const slides = [
    {
        id: 1,
        title: 'Experience Burundian Art',
        subtitle: 'Immerse yourself in the vibrant colors and stories of our local artists.',
        image: null
    },
    {
        id: 2,
        title: 'Contemporary Exhibitions',
        subtitle: 'Discover the latest works from emerging and established talents.',
        image: null
    },
    {
        id: 3,
        title: 'Creative Workshops',
        subtitle: 'Join us to learn, create, and express your own artistic vision.',
        image: null
    }
]

export default function HeroCarousel() {
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
        <section className="relative bg-[#f2f2f2] min-h-screen flex items-center justify-center overflow-hidden text-black">
            <div className="container-xl flex flex-col items-center text-center z-10 relative mt-20">

                {/* Content */}
                <div className="max-w-3xl mb-12 flex flex-col items-center">
                    <p className="text-xl md:text-2xl font-medium text-black/60 mb-4">{slides[activeIndex].subtitle}</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight leading-tight">
                        {slides[activeIndex].title}
                    </h1>

                    {/* Pill Button */}
                    <button className="px-8 py-4 bg-[#d9d9d9] hover:bg-[#c0c0c0] rounded-full transition-colors duration-300 w-48 h-16" aria-label="Learn more" />
                </div>

                {/* Controls */}
                <div className="flex items-center gap-6 mt-12">
                    {/* Indicators */}
                    <div className="flex items-center gap-3 bg-[#d9d9d9] px-6 py-3 rounded-full">
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
                            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-black/5 transition text-black"
                            aria-label="Previous slide"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-black/5 transition text-black"
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
