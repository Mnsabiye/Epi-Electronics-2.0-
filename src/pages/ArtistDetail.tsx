import { Link, useParams } from 'react-router-dom'

const artistDetails = {
	'ines-ndayizeye': {
		name: 'Inès Ndayizeye',
		bio: 'Peintre contemporaine basée à Bujumbura, explorant les textures urbaines et les rythmes musicaux.',
		works: [
			{ id: 'c1', title: 'Reflets de Bujumbura', year: 2023 },
			{ id: 'c1b', title: 'Lignes nocturnes', year: 2022 }
		]
	},
	'alexis-bizimana': {
		name: 'Alexis Bizimana',
		bio: 'Sculpteur métal mettant en lumière la puissance des tambours à travers des formes fluides.',
		works: [
			{ id: 'c2', title: 'Tambours chromatiques', year: 2022 },
			{ id: 'c2b', title: 'Pulse', year: 2021 }
		]
	}
} as const

export default function ArtistDetail() {
	const params = useParams()
	const artist = params.id ? artistDetails[params.id as keyof typeof artistDetails] : undefined

	if (!artist) {
		return (
			<section className="container-xl py-20 space-y-6">
				<h1 className="text-3xl font-semibold">Artiste introuvable</h1>
				<Link to="/artistes" className="text-appleBlue font-medium hover:underline">
					Retour à l’annuaire
				</Link>
			</section>
		)
	}

	return (
		<section className="container-xl py-16 md:py-24 space-y-12">
			<header className="space-y-4">
				<Link to="/artistes" className="text-sm text-ink/60 hover:text-ink">
					← Retour à l’annuaire
				</Link>
				<h1 className="text-4xl md:text-5xl font-semibold">{artist.name}</h1>
				<p className="text-lg text-ink/70 max-w-2xl">{artist.bio}</p>
			</header>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Œuvres en vedette</h2>
				<div className="grid md:grid-cols-2 gap-6">
					{artist.works.map(work => (
						<article key={work.id} className="rounded-3xl bg-white ring-1 ring-black/5 overflow-hidden shadow-sm">
							<div className="aspect-[4/3] bg-black/10" aria-hidden />
							<div className="p-6">
								<h3 className="text-lg font-semibold">{work.title}</h3>
								<p className="text-sm text-ink/60">Année {work.year}</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</section>
	)
}


