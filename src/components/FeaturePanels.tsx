import { Link } from 'react-router-dom'

const topPanels = [
	{
		id: 'gallery',
		title: 'Galeries immersives',
		subtitle: 'Explorer',
		description: 'Plongez dans des collections curatoriales avec transitions fluides et éclairage cinématique.',
		image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80',
		href: '/galerie/contemporain',
		variant: 'dark'
	},
	{
		id: 'archives',
		title: 'Archives vivantes',
		subtitle: 'Consulter',
		description: 'Accédez à nos manuscrits et bandes restaurées grâce à des outils de recherche augmentés.',
		image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
		href: '/archives',
		variant: 'dark'
	}
]

const bottomPanels = [
	{
		id: 'trade',
		title: 'Programme de dépôt',
		description: 'Soumettez vos œuvres ou archives pour enrichir la collection nationale.',
		ctaPrimary: { label: 'Soumettre', to: '/artist-portal' },
		ctaSecondary: { label: 'En savoir plus', to: '/archives' }
	},
	{
		id: 'card',
		title: 'Carte Mécène',
		description: 'Accédez à des avant-premières et soutenez la préservation du patrimoine.',
		ctaPrimary: { label: 'Rejoindre', to: '#' },
		ctaSecondary: { label: 'Avantages', to: '#' }
	}
]

export default function FeaturePanels() {
	return (
		<section className="container-xl space-y-10 pb-16 md:pb-24">
			<div className="grid md:grid-cols-2 gap-6">
				{topPanels.map(panel => (
					<Link
						key={panel.id}
						to={panel.href}
						className="relative overflow-hidden rounded-[36px] bg-black text-white shadow-[0_25px_80px_rgba(0,0,0,0.55)] transition hover:-translate-y-1"
					>
						<div
							className="absolute inset-0 bg-cover bg-center opacity-70"
							style={{ backgroundImage: `url(${panel.image})` }}
							aria-hidden
						/>
						<div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/30 to-black/80" aria-hidden />
						<div className="relative flex flex-col gap-4 p-10 h-full justify-end">
							<p className="text-sm uppercase tracking-[0.35em] text-white/60">{panel.subtitle}</p>
							<h3 className="text-3xl font-semibold">{panel.title}</h3>
							<p className="text-white/70 text-sm md:text-base max-w-sm">{panel.description}</p>
						</div>
					</Link>
				))}
			</div>

			<div className="grid md:grid-cols-2 gap-6">
				{bottomPanels.map(panel => (
					<div key={panel.id} className="rounded-[32px] bg-white text-ink shadow-[0_12px_40px_rgba(15,23,42,0.08)] border border-black/5 p-10 space-y-6">
						<div>
							<h3 className="text-2xl font-semibold">{panel.title}</h3>
							<p className="mt-3 text-ink/70 text-sm md:text-base max-w-md">{panel.description}</p>
						</div>
						<div className="flex flex-wrap gap-3">
							<Link to={panel.ctaPrimary.to} className="rounded-full bg-appleBlue text-white px-6 py-3 text-sm font-medium hover:bg-appleBlue/90">
								{panel.ctaPrimary.label}
							</Link>
							<Link to={panel.ctaSecondary.to} className="rounded-full border border-ink/10 px-6 py-3 text-sm font-medium text-ink/80 hover:text-ink hover:border-ink/40">
								{panel.ctaSecondary.label}
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}


