import { useState, useEffect, useRef } from 'react'

const leaders = [1, 2, 3, 4, 5]

export default function LeadersCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [bottomIndex, setBottomIndex] = useState(0)
    const bottomItems = [1, 2, 3, 4, 5, 6]
    const bottomScrollRef = useRef<HTMLDivElement>(null)

    // Auto-play for bottom slideshow (faster speed: 2000ms)
    useEffect(() => {
        const interval = setInterval(() => {
            setBottomIndex(prev => (prev + 1) % bottomItems.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    // Scroll effect for bottom slideshow
    useEffect(() => {
        const container = bottomScrollRef.current
        if (!container) return
        const child = container.children[bottomIndex] as HTMLElement
        if (!child) return

        const offset = child.offsetLeft - (container.clientWidth - child.clientWidth) / 2
        container.scrollTo({ left: offset, behavior: 'smooth' })
    }, [bottomIndex])

    return (
        <section className="py-12 bg-[#b3b3b3]">
            <div className="container-xl mb-8 px-4 md:px-8">
                <h2 className="text-4xl font-bold text-black">About Us Example</h2>
            </div>

            {/* Main Vertical Carousel */}
            <div className="relative overflow-hidden mb-10">
                <div className="flex justify-center items-center gap-4 md:gap-8 px-4 h-[450px]">
                    {/* Previous Card */}
                    <div className="hidden md:block w-[250px] h-[350px] bg-white border border-gray-200 rounded-none shadow-sm opacity-100" />

                    {/* Active Card */}
                    <div className="w-[250px] md:w-[300px] h-[400px] bg-white border border-gray-200 rounded-none shadow-xl z-10" />

                    {/* Next Card */}
                    <div className="hidden md:block w-[250px] h-[350px] bg-white border border-gray-200 rounded-none shadow-sm opacity-100" />
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => setActiveIndex(prev => (prev - 1 + leaders.length) % leaders.length)}
                    className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition text-black"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button
                    onClick={() => setActiveIndex(prev => (prev + 1) % leaders.length)}
                    className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition text-black"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                    {leaders.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-black scale-125' : 'bg-black/20 hover:bg-black/40'
                                }`}
                            aria-label={`Go to leader ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Independent Slideshow */}
            <div className="border-t border-gray-100 pt-8">
                <div className="container-xl px-4 md:px-8">
                    <div
                        ref={bottomScrollRef}
                        className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {bottomItems.map((item, idx) => (
                            <div
                                key={item}
                                className={`flex-shrink-0 w-[200px] h-[120px] bg-[#f2f2f2] rounded-xl snap-center transition-opacity duration-300 ${idx === bottomIndex ? 'opacity-100 ring-2 ring-black/5' : 'opacity-60'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
