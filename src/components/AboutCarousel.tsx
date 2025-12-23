import { useEffect, useRef, useState } from 'react'

const items = [1, 2, 3, 4, 5]

export default function AboutCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isPlaying) return
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % items.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [isPlaying])

    useEffect(() => {
        const container = scrollRef.current
        if (!container) return
        const child = container.children[activeIndex] as HTMLElement
        if (!child) return

        const offset = child.offsetLeft - (container.clientWidth - child.clientWidth) / 2
        container.scrollTo({ left: offset, behavior: 'smooth' })
    }, [activeIndex])

    return (
        <section className="py-24 bg-white">
            <div className="container-xl mb-12 px-4 md:px-8">
                <h2 className="text-4xl font-bold text-black">About Us Example</h2>
            </div>

            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto px-4 md:px-[max(1rem,calc((100vw-1280px)/2))] pb-12 hide-scrollbar snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {items.map((item, idx) => (
                        <div
                            key={item}
                            className={`flex-shrink-0 w-[90vw] md:w-[900px] h-[400px] md:h-[500px] rounded-[2rem] bg-[#d9d9d9] snap-center transition-opacity duration-500 ${idx === activeIndex ? 'opacity-100' : 'opacity-40'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-4">
                {/* Indicators */}
                <div className="flex items-center gap-3 bg-[#e5e5e5] px-6 py-3 rounded-full">
                    {items.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-black' : 'w-2.5 bg-black/20 hover:bg-black/40'
                                }`}
                            aria-label={`Go to item ${idx + 1}`}
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
            </div>

        </section>
    )
}
