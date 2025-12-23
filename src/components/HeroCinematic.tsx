import { useEffect, useMemo, useState } from 'react'

type Slide = {
	image: string
	title: string
	eyebrow?: string
	cta?: { label: string; href: string }
}

type Props = {
	slides: Slide[]
	autoplay?: boolean
	intervalMs?: number
}

export default function HeroCinematic({ slides, autoplay = true, intervalMs = 6000 }: Props) {
	const [index, setIndex] = useState(0)
	const hasMultiple = useMemo(() => slides.length > 1, [slides.length])
	const next = () => setIndex(i => (i + 1) % slides.length)
	const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length)
	const [paused, setPaused] = useState(false)

	useEffect(() => {
		if (!autoplay || !hasMultiple || paused) return
		const t = window.setInterval(next, intervalMs)
		return () => window.clearInterval(t)
	}, [autoplay, hasMultiple, paused, intervalMs])

	return (
		<section className="relative h-full w-full overflow-hidden bg-[#dfe1e4] text-ink flex items-center justify-center">
			{slides.map((s, i) => (
				<div
					key={s.title + i}
					className={`absolute inset-0 transition-opacity duration-[900ms] ${i === index ? 'opacity-100' : 'opacity-0'}`}
					aria-hidden={i !== index}
				>
					<div
						className="absolute inset-0 bg-cover bg-center opacity-30"
						style={{ backgroundImage: `url(${s.image})` }}
					/>
				</div>
			))}

			<div className="relative z-10 h-full flex items-center justify-center px-6">
				<div className="text-center max-w-4xl">
					{slides[index]?.eyebrow && (
						<p className="text-sm md:text-base font-normal text-ink/70 mb-2">
							{slides[index].eyebrow}
						</p>
					)}
					<h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight text-ink">
						{slides[index].title}
					</h1>
					<div className="mt-6 flex justify-center">
						<div className="w-40 h-12 rounded-full bg-white/60" aria-hidden />
					</div>
					{slides[index]?.cta && (
						<div className="mt-8">
							<a
								className="inline-flex items-center justify-center rounded-full bg-ink/90 text-offwhite px-12 py-3 text-sm font-medium hover:bg-ink transition"
								href={slides[index].cta.href}
							>
								{slides[index].cta.label}
							</a>
						</div>
					)}
				</div>
			</div>

			{/* Controls */}
			<div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
				<div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
					{slides.map((_, i) => (
						<button
							key={i}
							aria-label={`Aller au slide ${i + 1}`}
							onClick={() => setIndex(i)}
							className={`h-2 w-2 rounded-full transition-colors ${i === index ? 'bg-ink' : 'bg-ink/30'}`}
						/>
					))}
				</div>
				{slides.map((_, i) => (
					<span key={`ghost-${i}`} className="sr-only">{i}</span>
				))}
				<button
					aria-label={paused ? 'Lire le diaporama' : 'Mettre en pause'}
					onClick={() => setPaused(p => !p)}
					className="pointer-events-auto h-6 w-6 text-ink"
				>
					{paused ? (
						<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path d="M8 5l12 7-12 7V5z" fill="currentColor" />
						</svg>
					) : (
						<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" />
						</svg>
					)}
				</button>
				<button
					aria-label="Précédent"
					onClick={prev}
					className="pointer-events-auto ml-1 h-6 w-6 text-ink/80 hover:text-ink flex items-center justify-center"
				>
					<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
				<button
					aria-label="Suivant"
					onClick={next}
					className="pointer-events-auto h-6 w-6 text-ink/80 hover:text-ink flex items-center justify-center"
				>
					<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
			</div>
		</section>
	)
}


