import { ReactNode } from 'react'

type HeroShowcaseProps = {
	title: ReactNode
	subtitle: string
	description: string
	primaryCta: { label: string; href: string }
	secondaryCta?: { label: string; href: string }
	ctaNote?: string
	media?: ReactNode
}

export default function HeroShowcase({
	title,
	subtitle,
	description,
	primaryCta,
	secondaryCta,
	ctaNote,
	media
}: HeroShowcaseProps) {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-black via-black to-[#050505] text-offwhite">
			<div
				className="absolute -inset-x-48 top-[-220px] h-[520px] rounded-full bg-appleBlue/10 blur-3xl opacity-70"
				aria-hidden
			/>
			<div className="relative container-xl flex flex-col md:flex-row items-center justify-between gap-12 py-24 md:py-32">
				<div className="space-y-8 max-w-xl text-balance">
					<p className="text-sm uppercase tracking-[0.4em] text-white/70">{subtitle}</p>
					<h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">{title}</h1>
					<p className="text-lg md:text-xl text-white/70">{description}</p>
					<div className="flex flex-col sm:flex-row sm:items-center gap-4">
						<a
							className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-3 text-sm font-medium hover:bg-white/80 transition"
							href={primaryCta.href}
						>
							{primaryCta.label}
						</a>
						{secondaryCta && (
							<a className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-medium hover:border-white/60 transition" href={secondaryCta.href}>
								{secondaryCta.label}
							</a>
						)}
					</div>
					{ctaNote && <p className="text-xs text-white/50">{ctaNote}</p>}
				</div>
				<div className="relative w-full md:w-auto md:flex-1 flex justify-center">
					<div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl max-w-2xl w-full">
						{media ?? (
							<div className="aspect-[3/2] bg-gradient-to-br from-white/10 via-white/5 to-transparent flex items-center justify-center text-white/60 text-sm uppercase tracking-[0.35em]">
								Visuel Burundi Space
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}


