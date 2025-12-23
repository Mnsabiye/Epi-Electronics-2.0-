import { Link } from 'react-router-dom'

const artists = [
	{
		id: 'ines-ndayizeye',
		name: 'Inès Ndayizeye',
		specialty: 'Peinture contemporaine',
		description: 'Textures abstraites, inspiration urbaine et musicale.',
		highlight: 'Reflets de Bujumbura'
	},
	{
		id: 'alexis-bizimana',
		name: 'Alexis Bizimana',
		specialty: 'Sculpture métal',
		description: 'Fusions métalliques représentant les rythmes du tambour.',
		highlight: 'Tambours chromatiques'
	},
	{
		id: 'claudine-shaka',
		name: 'Claudine Shaka',
		specialty: 'Art moderne',
		description: 'Études de silhouettes royales dans des tons monochromes.',
		highlight: 'Contours royaux'
	},
	{
		id: 'mwana-mashariki',
		name: 'Mwana Mashariki',
		specialty: 'Photographie documentaire',
		description: 'Archives visuelles des communautés lacustres.',
		highlight: 'Échos du Tanganyika'
	},
	{
		id: 'louis-niyonzima',
		name: 'Louis Niyonzima',
		specialty: 'Peinture moderne',
		description: 'Paysages expressifs et couleurs pastel des collines.',
		highlight: 'Sérénité du lac'
	}
]

export default function Artists() {
	return (
		<section className="container-xl py-16 md:py-24 space-y-12">
			<header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
				<div className="max-w-2xl space-y-4">
					<h1 className="text-4xl md:text-5xl font-semibold">Annuaire des artistes</h1>
					<p className="text-ink/70 text-lg">
						Découvrez les profils, styles et œuvres des talents Burundais. Chaque fiche vous guide vers une galerie dédiée.
					</p>
				</div>
				<Link to="/artist-portal" className="btn-primary bg-appleBlue text-white hover:bg-appleBlue/90">
					Soumettre une œuvre
				</Link>
			</header>

			<div className="space-y-4" role="list">
				{artists.map(artist => (
					<Link
						role="listitem"
						key={artist.id}
						to={`/artistes/${artist.id}`}
						className="group flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-3xl bg-white ring-1 ring-black/5 p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
					>
						<div className="flex items-start gap-6">
							<div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center font-semibold text-ink/60">
								{artist.name
									.split(' ')
									.map(part => part[0])
									.join('')
									.slice(0, 2)}
							</div>
							<div className="space-y-2">
								<h2 className="text-xl font-semibold group-hover:text-appleBlue transition">{artist.name}</h2>
								<p className="text-sm text-ink/50 uppercase tracking-widest">{artist.specialty}</p>
								<p className="text-sm text-ink/70">{artist.description}</p>
							</div>
						</div>
						<div className="text-sm text-appleBlue md:text-right">
							Œuvre phare&nbsp;: <span className="font-medium">{artist.highlight}</span>
						</div>
					</Link>
				))}
			</div>
		</section>
	)
}


