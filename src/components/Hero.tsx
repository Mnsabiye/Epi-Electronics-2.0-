type HeroProps = {
	title: string
	subtitle?: string
	ctaPrimary?: { label: string; href: string }
	ctaSecondary?: { label: string; href: string }
	backgroundUrl?: string
}

export default function Hero({
	title,
	subtitle,
	ctaPrimary,
	ctaSecondary,
	backgroundUrl
}: HeroProps) {
	return (
		<section className="relative overflow-hidden">
			<div
				className="absolute inset-0 bg-radial-soft pointer-events-none"
				aria-hidden="true"
			/>
			{backgroundUrl && (
				<div
					aria-hidden="true"
					className="absolute inset-0"
					style={{
						backgroundImage: `url(${backgroundUrl})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						opacity: 0.25,
						filter: 'saturate(0.9) contrast(1.05)'
					}}
				/>
			)}
			<div className="relative container-xl py-20 md:py-28">
				<div className="max-w-3xl">
					<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink">
						{title}
					</h1>
					{subtitle && (
						<p className="mt-4 md:mt-6 text-lg md:text-xl text-ink/70">
							{subtitle}
						</p>
					)}
					<div className="mt-8 flex gap-4">
						{ctaPrimary && (
							<a className="btn-primary" href={ctaPrimary.href}>
								{ctaPrimary.label}
							</a>
						)}
						{ctaSecondary && (
							<a className="btn-outline" href={ctaSecondary.href}>
								{ctaSecondary.label}
							</a>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}


