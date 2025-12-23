import { useEffect, useMemo, useRef, useState } from 'react'

type Highlight = {
	id: string
	title: string
	description: string
	image?: string
	tag?: string
	cta?: { label: string; href: string }
}

type Props = {
	highlights: Highlight[]
	title?: string
	subtitle?: string
	autoplay?: boolean
}

const AUTOPLAY_INTERVAL = 6000

export default function HighlightCarousel({
	highlights,
	title = 'À la une sur Burundi Space',
	subtitle = 'Interviews, visites immersives et sélections curatoriales.',
	autoplay = true
}: Props) {
	const [activeIndex, setActiveIndex] = useState(0)
	const scrollRef = useRef<HTMLDivElement>(null)

	const hasMultiple = useMemo(() => highlights.length > 1, [highlights.length])

	const scrollToIndex = (index: number, behavior: ScrollBehavior = 'smooth') => {
		const container = scrollRef.current
		if (!container) return
		const item = container.children[index] as HTMLElement | undefined
		if (!item) return
		const offset = item.offsetLeft - (container.clientWidth - item.clientWidth) / 2
		container.scrollTo({ left: offset, behavior })
	}

	const goToIndex = (index: number) => {
		setActiveIndex(index)
		scrollToIndex(index)
	}

	useEffect(() => {
		scrollToIndex(activeIndex, 'auto')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (!autoplay || !hasMultiple) return
		const timer = window.setInterval(() => {
			setActiveIndex(prev => {
				const next = (prev + 1) % highlights.length
				scrollToIndex(next)
				return next
			})
		}, AUTOPLAY_INTERVAL)
		return () => window.clearInterval(timer)
	}, [autoplay, hasMultiple, highlights.length])

	const handleWheel: React.WheelEventHandler<HTMLDivElement> = event => {
		const container = scrollRef.current
		if (!container) return
		if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
			event.preventDefault()
			container.scrollBy({ left: event.deltaY, behavior: 'smooth' })
		}
	}

	const handleScroll: React.UIEventHandler<HTMLDivElement> = event => {
		const container = event.currentTarget
		const children = Array.from(container.children) as HTMLElement[]
		let closestIndex = 0
		let minDistance = Infinity
		children.forEach((child, index) => {
			const childCenter = child.offsetLeft + child.clientWidth / 2
			const containerCenter = container.scrollLeft + container.clientWidth / 2
			const distance = Math.abs(containerCenter - childCenter)
			if (distance < minDistance) {
				minDistance = distance
				closestIndex = index
			}
		})
		setActiveIndex(closestIndex)
	}

	const next = () => {
		const nextIndex = (activeIndex + 1) % highlights.length
		goToIndex(nextIndex)
	}

	const prev = () => {
		const prevIndex = (activeIndex - 1 + highlights.length) % highlights.length
		goToIndex(prevIndex)
	}

	return (
		<section className="rounded-[36px] bg-[#111114] text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)] px-6 md:px-10 py-12">
			<header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div>
					<p className="text-xs uppercase tracking-[0.4em] text-white/50">Highlights</p>
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
					<p className="mt-2 text-white/60 text-sm md:text-base">{subtitle}</p>
				</div>
				<div className="flex items-center gap-3">
					<button
						type="button"
						onClick={prev}
						aria-label="Précédent"
						className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition disabled:opacity-40"
						disabled={!hasMultiple}
					>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path d="M14 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
					<button
						type="button"
						onClick={next}
						aria-label="Suivant"
						className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/80 transition disabled:opacity-40"
						disabled={!hasMultiple}
					>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path d="M10 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				</div>
			</header>

			<div className="mt-8 relative">
				<div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#111114] to-transparent" aria-hidden />
				<div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#111114] to-transparent" aria-hidden />

				<div
					ref={scrollRef}
					className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-4"
					onWheel={handleWheel}
					onScroll={handleScroll}
					role="listbox"
					aria-label="Contenu en vedette"
				>
					{highlights.map((item, index) => (
						<article
							key={item.id}
							role="option"
							aria-selected={index === activeIndex}
							className={`group relative flex-shrink-0 w-[280px] md:w-[360px] snap-center rounded-[28px] overflow-hidden border border-white/10 transition duration-300 ${
								index === activeIndex ? 'ring-4 ring-white/15 scale-[1.01]' : 'opacity-80 hover:opacity-100'
							}`}
							onClick={() => goToIndex(index)}
						>
							<div
								className="h-[220px] bg-cover bg-center"
								style={{
									backgroundImage: `url(${item.image ?? 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?auto=format&fit=crop&w=1600&q=80'})`
								}}
								aria-hidden
							/>
							<div className="p-6 space-y-3 bg-[#1b1b1f]">
								{item.tag && (
									<span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
										{item.tag}
									</span>
								)}
								<h3 className="text-lg font-semibold leading-snug text-white">{item.title}</h3>
								<p className="text-sm text-white/70">{item.description}</p>
								{item.cta && (
									<a
										className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition"
										href={item.cta.href}
									>
										{item.cta.label}
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
											<path d="M8 12h8M13 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</a>
								)}
							</div>
						</article>
					))}
				</div>
			</div>

			{hasMultiple && (
				<div className="mt-6 flex items-center justify-center gap-2">
					{highlights.map((item, index) => (
						<button
							key={item.id}
							type="button"
							className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'}`}
							onClick={() => goToIndex(index)}
							aria-label={`Voir ${item.title}`}
							aria-current={index === activeIndex}
						/>
					))}
				</div>
			)}
		</section>
	)
}


