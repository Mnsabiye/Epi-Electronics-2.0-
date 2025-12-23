import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const historySlides = [
    { id: 1, title: 'Origines', description: 'Les racines profondes du Burundi ancien.', image: null },
    { id: 2, title: 'Royaume', description: "L'ère des rois et l'organisation sociale.", image: null },
    { id: 3, title: 'Indépendance', description: 'La lutte pour la liberté et la souveraineté.', image: null },
    { id: 4, title: 'Modernité', description: 'Le Burundi contemporain et son avenir.', image: null }
]

const thumbnails = [1, 2, 3, 4, 5]

export default function HistoryContent() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)

    // Auto-play
    useEffect(() => {
        if (!isPlaying) return
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % historySlides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [isPlaying])

    return (
        <div className="min-h-screen bg-[#f9f9f9] pt-12 pb-24">
            <div className="container-xl px-4 md:px-8">

                {/* Header */}
                <div className="mb-8 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
                        History & Origines
                    </h1>
                </div>

                {/* Main Content Area */}
                <div className="relative w-full aspect-video md:aspect-[21/9] bg-[#d9d9d9] rounded-[2rem] md:rounded-[3rem] shadow-xl overflow-hidden mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {/* Placeholder for content/image */}
                            <div className="text-center p-8">
                                <h2 className="text-3xl md:text-5xl font-bold text-black/20 mb-4">
                                    {historySlides[activeIndex].title}
                                </h2>
                                <p className="text-xl text-black/40">
                                    {historySlides[activeIndex].description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-6 mb-16">
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition"
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

                    <div className="flex items-center gap-3 bg-[#e5e5e5] px-6 py-3 rounded-full">
                        {historySlides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-black' : 'w-2.5 bg-black/20 hover:bg-black/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Thumbnails Row */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {thumbnails.map((item) => (
                        <div
                            key={item}
                            className="aspect-square bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer"
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}
