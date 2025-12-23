import { Link, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'

export default function Navbar() {
	const location = useLocation()
	const [open, setOpen] = useState(false)
	const [elevated, setElevated] = useState(false)
	const [hidden, setHidden] = useState(false)
	const lastScrollY = useRef(0)
	const [reduceMotion] = useState(
		typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
	)

	const navLinks = useMemo(
		() => [
			{
				to: '/',
				label: 'Home',
				isActive: location.pathname === '/'
			},
			{
				to: '/burundispace',
				label: 'Burundi Space',
				isActive: ['/histoire', '/galerie', '/archives'].some(path => location.pathname.startsWith(path))
			},
			{
				to: '/artistes',
				label: 'Artiste',
				isActive: location.pathname.startsWith('/artistes')
			}
		],
		[location.pathname]
	)

	useEffect(() => {
		const handleScroll = () => {
			const y = window.scrollY || 0
			setElevated(y > 8)
			// hide on scroll down, show on scroll up
			if (y > 80 && y > lastScrollY.current) {
				setHidden(true)
			} else {
				setHidden(false)
			}
			lastScrollY.current = y
		}
		handleScroll()
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header className={`sticky top-0 z-50 bg-[#1c1c1e] text-white transition-transform ${reduceMotion ? '' : 'duration-300'} ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
			<div className={`relative transition-all ${reduceMotion ? '' : 'duration-300'} ${elevated ? 'shadow-md' : ''}`}>
				<nav className="relative w-full h-16 flex items-center justify-between px-4 md:px-8">
					<Link to="/" className="text-sm font-bold tracking-widest uppercase text-white/90 hover:text-white transition">
						Logo
					</Link>

					{/* Mobile Menu Button */}
					<button
						aria-label="Menu"
						className="md:hidden p-2 text-white/80 hover:text-white transition"
						onClick={() => setOpen(v => !v)}
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
						</svg>
					</button>

					{/* Desktop Links */}
					<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
						{navLinks.map(link => (
							<Link
								key={link.to}
								to={link.to}
								className={`text-xs font-medium tracking-wide transition ${link.isActive ? 'text-white' : 'text-white/60 hover:text-white'}`}
								aria-current={link.isActive ? 'page' : undefined}
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Right Actions */}
					<div className="hidden md:flex items-center gap-6">
						<button aria-label="Search" className="text-white/90 hover:text-white transition">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<circle cx="11" cy="11" r="8" />
								<path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
						<Link
							to="/ai"
							className="text-xs font-bold text-white/90 hover:text-white transition uppercase tracking-wider"
						>
							AI
						</Link>
					</div>
				</nav>
			</div>

			{/* Mobile Menu */}
			{open && (
				<div className="md:hidden bg-[#1c1c1e] border-t border-white/10">
					<div className="container-xl py-4 flex flex-col gap-4 px-4">
						{navLinks.map(link => (
							<Link
								key={link.to}
								to={link.to}
								onClick={() => setOpen(false)}
								className={`text-sm font-medium ${link.isActive ? 'text-white' : 'text-white/70'}`}
								aria-current={link.isActive ? 'page' : undefined}
							>
								{link.label}
							</Link>
						))}
						<Link
							to="/ai"
							onClick={() => setOpen(false)}
							className="text-sm font-bold text-white/90"
						>
							AI
						</Link>
					</div>
				</div>
			)}
		</header>
	)
}


