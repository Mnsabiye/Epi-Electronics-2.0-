import { Link } from 'react-router-dom'

export default function GuideTeaser() {
    return (
        <section className="py-24 bg-[#b3b3b3] flex justify-center">
            <Link to="/ai" className="group relative inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300">
                <span>Ask the guide</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
        </section>
    )
}
