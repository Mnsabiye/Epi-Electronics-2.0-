import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

const galleryData = {
	contemporain: {
		title: 'Art Contemporain',
		description: 'Œuvres récentes des artistes émergents du Burundi.',
		items: [
			{ id: 'c1', title: 'Reflets de Bujumbura', artist: 'Inès Ndayizeye', year: 2023 },
			{ id: 'c2', title: 'Tambours chromatiques', artist: 'Alexis Bizimana', year: 2022 },
			{ id: 'c3', title: 'Lignes d’horizon', artist: 'Mwana Mashariki', year: 2021 }
		]
	},
	moderne: {
		title: 'Art Moderne',
		description: 'Les pièces qui ont marqué la seconde moitié du XXe siècle.',
		items: [
			{ id: 'm1', title: 'Échos de Kirundo', artist: 'Jean Tambwe', year: 1984 },
			{ id: 'm2', title: 'Contours royaux', artist: 'Claudine Shaka', year: 1976 },
			{ id: 'm3', title: 'Sérénité du lac', artist: 'Louis Niyonzima', year: 1968 }
		]
	},
	traditionnel: {
		title: 'Art Traditionnel',
		description: 'Sculptures, textiles et objets rituels ancestraux.',
		items: [
			{ id: 't1', title: 'Intore', artist: 'Collectif royal', year: 1890 },
			{ id: 't2', title: 'Tambour Karyenda', artist: 'Maîtres batteurs', year: 1905 },
			{ id: 't3', title: 'Tissage Imigongo', artist: 'Atelier Gishora', year: 1912 }
		]
	}
}

const filters = [
	{ key: 'contemporain', label: 'Contemporain' },
	{ key: 'moderne', label: 'Moderne' },
	{ key: 'traditionnel', label: 'Traditionnel' }
]

export default function Gallery() {
	const params = useParams()
	const currentKey = params.category as keyof typeof galleryData | undefined
	const gallery = useMemo(() => {
		if (!currentKey || !galleryData[currentKey]) {
			return galleryData.contemporain
		}
		return galleryData[currentKey]
	}, [currentKey])

	return (
		<section className="container-xl py-16 md:py-24 space-y-12">
			<header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
				<div>
					<h1 className="text-4xl md:text-5xl font-semibold">{gallery.title}</h1>
					<p className="mt-4 text-ink/70 max-w-2xl">{gallery.description}</p>
				</div>
				<div className="flex gap-2 bg-black/5 rounded-full p-1">
					{filters.map(filter => (
						<Link
							key={filter.key}
							to={`/galerie/${filter.key}`}
							className={`rounded-full px-4 py-2 text-sm md:text-base ${
								currentKey === filter.key || (!currentKey && filter.key === 'contemporain')
									? 'bg-ink text-offwhite'
									: 'text-ink/70 hover:text-ink'
							}`}
							aria-current={currentKey === filter.key ? 'page' : undefined}
						>
							{filter.label}
						</Link>
					))}
				</div>
			</header>

			<div className="grid md:grid-cols-3 gap-6">
				{gallery.items.map(item => (
					<article key={item.id} className="group rounded-3xl bg-white ring-1 ring-black/5 overflow-hidden shadow-sm">
						<div className="aspect-[4/3] bg-black/10" aria-hidden />
						<div className="p-6 space-y-2">
							<h2 className="text-lg font-semibold group-hover:text-appleBlue transition">{item.title}</h2>
							<p className="text-sm text-ink/70">{item.artist}</p>
							<p className="text-xs uppercase tracking-widest text-ink/50">Année {item.year}</p>
						</div>
					</article>
				))}
			</div>

			<section className="rounded-3xl bg-appleBlue/10 border border-appleBlue/30 p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
				<div>
					<h3 className="text-xl font-semibold text-ink">Favoris et mode plein écran</h3>
					<p className="text-sm text-ink/80 mt-3">
						La prochaine mise à jour permettra d’enregistrer des œuvres favorites et de les explorer en plein écran avec zoom.
					</p>
				</div>
				<Link to="/ai" className="btn-primary bg-appleBlue text-white hover:bg-appleBlue/90">
					Demander une recommandation IA
				</Link>
			</section>
		</section>
	)
}


