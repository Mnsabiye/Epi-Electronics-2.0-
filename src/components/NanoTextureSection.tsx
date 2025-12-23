import { useState } from 'react'

export default function NanoTextureSection() {
    return (
        <section className="py-20 bg-[#f2f2f2]">
            <div className="relative overflow-hidden">
                <div className="flex justify-center gap-6 px-4">
                    {/* Left Card (Partial) */}
                    <div className="hidden md:block w-[300px] bg-white rounded-3xl p-8 opacity-40 transform scale-95">
                        <div className="h-40 bg-[#f2f2f2] rounded-xl mb-6" />
                        <h3 className="font-semibold text-ink mb-2">ions. More</h3>
                        <p className="text-sm text-ink/60">aces — whether ces reflections to an excellent</p>
                    </div>

                    {/* Center Card (Active) */}
                    <div className="w-full md:w-[600px] bg-white rounded-3xl p-8 md:p-12 shadow-lg z-10">
                        <div className="h-64 bg-[#f2f2f2] rounded-2xl mb-8" />
                        <h3 className="text-xl md:text-2xl font-semibold text-ink text-center mb-4">
                            Every Detail Matters.
                        </h3>
                        <p className="text-sm md:text-base text-ink/70 text-center max-w-lg mx-auto leading-relaxed">
                            Experience art as it was meant to be seen. Our gallery lighting and display design ensure that every brushstroke, texture, and color nuance is preserved for an immersive viewing experience.
                        </p>
                    </div>

                    {/* Right Card (Partial) */}
                    <div className="hidden md:block w-[300px] bg-white rounded-3xl p-8 opacity-40 transform scale-95">
                        <div className="h-40 bg-[#f2f2f2] rounded-xl mb-6" />
                        <h3 className="font-semibold text-ink mb-2">Nano-text</h3>
                        <p className="text-sm text-ink/60">For those who inside or out — eliminate</p>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-12">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition text-ink">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition text-ink">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Search/Guide Bar */}
                <div className="flex justify-center mt-16">
                    <div className="flex items-center gap-3 bg-black text-white pl-6 pr-2 py-2 rounded-full shadow-xl">
                        <span className="text-sm font-medium">Ask the guide</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
