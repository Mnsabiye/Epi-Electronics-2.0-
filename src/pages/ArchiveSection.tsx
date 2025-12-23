import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

const archivesContent = {
	dirigeants: {
		title: 'Rois & Présidents',
		description: 'Les figures majeures qui ont façonné les institutions politiques du Burundi.',
		items: [
			{ name: 'Mwami Ntare V', dates: '1966-1972', focus: 'Modernisation culturelle et diplomatie régionale.' },
			{ name: 'Jean-Baptiste Bagaza', dates: '1976-1987', focus: 'Réformes éducatives et patrimoine national.' },
			{ name: 'Sylvie Ndayikengurukiye', dates: '2018-Présent', focus: 'Programme numérique de conservation.' }
		]
	},
	ecrits: {
		title: 'Livres & Écritures',
		description: 'Bibliothèque numérique des auteurs, poètes et chroniqueurs burundais.',
		items: [
			{ name: 'Chroniques de Gitega', dates: 'Compilation 1954', focus: 'Traditions orales transcrites.' },
			{ name: 'Voix des Collines', dates: 'Anthologie 1978', focus: 'Poésie moderne et témoignages.' },
			{ name: 'Mémoire du Lac Tanganyika', dates: 'Monographie 2005', focus: 'Histoire environnementale et récits de pêcheurs.' }
		]
	},
	objets: {
		title: 'Objets Traditionnels',
		description: 'Collection dʼartefacts préservés par les communautés et ethnologues.',
		items: [
			{ name: 'Tambour Karyenda', dates: 'XIXe siècle', focus: 'Symbole de royauté et cérémonies.' },
			{ name: 'Panier Agaseke', dates: 'Début XXe', focus: 'Art du tressage et transmission matrilinéaire.' },
			{ name: 'Lance Inkinyuguti', dates: 'Période royale', focus: 'Protection et rites guerriers.' }
		]
	}
}

export default function ArchiveSection() {
	const params = useParams()
	const key = params.section as keyof typeof archivesContent | undefined
	const archive = useMemo(() => (key && archivesContent[key]) || archivesContent.dirigeants, [key])

	return (
		<section className="container-xl py-16 md:py-24 space-y-12">
			<header className="max-w-3xl space-y-4">
				<h1 className="text-4xl md:text-5xl font-semibold">{archive.title}</h1>
				<p className="text-ink/70 text-lg">{archive.description}</p>
			</header>

			<div className="grid md:grid-cols-3 gap-6">
				{archive.items.map(item => (
					<article key={item.name} className="rounded-3xl bg-white ring-1 ring-black/5 p-8 shadow-sm">
						<h2 className="text-xl font-semibold">{item.name}</h2>
						<p className="mt-2 text-xs uppercase tracking-widest text-ink/40">{item.dates}</p>
						<p className="mt-4 text-sm text-ink/70">{item.focus}</p>
					</article>
				))}
			</div>
		</section>
	)
}


