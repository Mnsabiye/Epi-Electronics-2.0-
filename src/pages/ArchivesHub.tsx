import { Link } from 'react-router-dom'

const sections = [
	{
		key: 'dirigeants',
		title: 'Rois & Présidents',
		description: 'Lignées royales et chefs d’état, avec portraits et chroniques.',
		color: 'bg-gradient-to-br from-appleBlue/15 via-appleBlue/5 to-transparent'
	},
	{
		key: 'ecrits',
		title: 'Livres & Écritures',
		description: 'Manuscrits, recueils et témoignages écrits numérisés.',
		color: 'bg-gradient-to-br from-ink/10 via-ink/5 to-transparent'
	},
	{
		key: 'objets',
		title: 'Objets Traditionnels',
		description: 'Artefacts et outils rituels conservés par les communautés.',
		color: 'bg-gradient-to-br from-amber-200/40 via-amber-100/30 to-transparent'
	}
]

export default function ArchivesHub() {
	return (
		<section className="container-xl py-16 md:py-24 space-y-12">
			<header className="max-w-3xl space-y-4">
				<h1 className="text-4xl md:text-5xl font-semibold">Archives du Burundi</h1>
				<p className="text-ink/70 text-lg">
					Accédez aux documents fondateurs, catalogues et collections numérisées qui relatent l&apos;histoire politique et culturelle du pays.
				</p>
			</header>

			<div className="grid md:grid-cols-3 gap-6">
				{sections.map(section => (
					<Link
						key={section.key}
						to={`/archives/${section.key}`}
						className={`group rounded-3xl ring-1 ring-black/5 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${section.color}`}
					>
						<div className="p-8 space-y-4">
							<h2 className="text-2xl font-semibold">{section.title}</h2>
							<p className="text-sm text-ink/70">{section.description}</p>
							<span className="text-appleBlue text-sm font-medium group-hover:underline">Consulter →</span>
						</div>
					</Link>
				))}
			</div>
		</section>
	)
}


