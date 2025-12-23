import { useState } from 'react'

const listItems = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
    { id: 6, title: 'Item 6' },
]

export default function AboutListSection() {
    return (
        <section className="py-24 bg-[#b3b3b3]">
            <div className="container-xl px-4 md:px-8">
                <h2 className="text-4xl font-bold text-black mb-12">About Us Example</h2>

                <div className="bg-white rounded-[3rem] p-8 md:p-12 min-h-[600px] flex flex-col justify-center">
                    <div className="space-y-4 max-w-md">
                        {listItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-8 h-8 flex items-center justify-center rounded bg-[#d9d9d9] text-black transition-colors group-hover:bg-black group-hover:text-white">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="h-10 w-48 bg-[#d9d9d9] rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
