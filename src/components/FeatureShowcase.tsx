import { useState } from 'react'

const features = [
    {
        id: 'exhibitions',
        label: 'Exhibitions',
        title: 'Curated Exhibitions',
        description: 'Explore our rotating selection of solo and group shows featuring diverse artistic mediums.',
        hasVisual: true
    },
    {
        id: 'workshops',
        label: 'Workshops',
        title: 'Creative Workshops',
        description: 'Participate in hands-on sessions led by professional artists to refine your skills.',
        hasVisual: false
    },
    {
        id: 'collections',
        label: 'Collections',
        title: 'Permanent Collection',
        description: 'Discover our growing collection of significant works preserving Burundi\'s artistic heritage.',
        hasVisual: false
    }
]

export default function FeatureShowcase() {
    const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null)

    const handlePrev = () => {
        const currentIndex = features.findIndex(f => f.id === activeFeatureId)
        if (currentIndex === -1) {
            setActiveFeatureId(features[features.length - 1].id)
        } else {
            const prevIndex = (currentIndex - 1 + features.length) % features.length
            setActiveFeatureId(features[prevIndex].id)
        }
    }

    const handleNext = () => {
        const currentIndex = features.findIndex(f => f.id === activeFeatureId)
        if (currentIndex === -1) {
            setActiveFeatureId(features[0].id)
        } else {
            const nextIndex = (currentIndex + 1) % features.length
            setActiveFeatureId(features[nextIndex].id)
        }
    }

    return (
        <section className="bg-[#1d1d1f] py-20 flex justify-center items-center min-h-screen">
            <div className="container-xl relative bg-black rounded-[3rem] p-8 md:p-16 overflow-hidden max-w-7xl w-full aspect-[16/10] flex items-center shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={() => setActiveFeatureId(null)}
                    className="absolute top-8 right-8 w-10 h-10 bg-[#333] rounded-full flex items-center justify-center hover:bg-[#444] transition text-white z-20"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 1l12 12M13 1l-12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Left Sidebar Controls */}
                <div className="flex flex-col gap-4 z-10 w-full md:w-[400px] h-full overflow-y-auto pr-4 scrollbar-hide justify-center">
                    {features.map((feature) => (
                        <div key={feature.id} className="transition-all duration-500 ease-in-out">
                            {activeFeatureId === feature.id ? (
                                // Active Expanded Card
                                <div className="bg-[#2a2a2b] p-8 rounded-[2rem] animate-fade-in">
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        <span className="font-bold text-white">{feature.title}</span> {feature.description}
                                    </p>
                                    {feature.hasVisual && (
                                        <div className="flex gap-4 mt-6">
                                            <div className="w-8 h-8 rounded-full border-2 border-white bg-[#2e2e2e]" />
                                            <div className="w-8 h-8 rounded-full bg-[#e3e3e4]" />
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // Inactive Button
                                <button
                                    onClick={() => setActiveFeatureId(feature.id)}
                                    className="flex items-center gap-4 px-6 py-4 rounded-full bg-[#333] hover:bg-[#444] transition-all w-max text-left group"
                                >
                                    <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                            <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-white text-lg">{feature.label}</span>
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows (Floating Left) */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center hover:bg-[#444] transition text-white"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center hover:bg-[#444] transition text-white"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Main Visual Area */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Art Frame Visual */}
                    <div className="relative w-[60%] aspect-[4/3] translate-x-32 bg-[#111] rounded-sm border-[12px] border-[#222] shadow-2xl flex items-center justify-center overflow-hidden">
                        {/* Inner Matte */}
                        <div className="absolute inset-0 border-[20px] border-[#e5e5e5] opacity-10"></div>

                        {/* Content Placeholder */}
                        <div className="relative z-10 text-center p-8">
                            <div className="w-24 h-24 mx-auto border-2 border-white/10 rounded-full flex items-center justify-center mb-4">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-white/30 text-xl font-medium block">
                                {activeFeatureId ? features.find(f => f.id === activeFeatureId)?.title : 'Select a feature'}
                            </span>
                        </div>

                        {/* Lighting Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
