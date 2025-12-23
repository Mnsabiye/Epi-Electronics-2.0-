export default function ArtistPortal() {
	return (
		<section className="container-xl py-16 md:py-24 space-y-8">
			<header className="max-w-3xl space-y-4">
				<h1 className="text-4xl md:text-5xl font-semibold">Portail Artiste</h1>
				<p className="text-ink/70 text-lg">
					Soumettez une œuvre, mettez à jour votre biographie et demandez une mise en avant dans la galerie.
				</p>
			</header>

			<div className="rounded-3xl bg-white ring-1 ring-black/5 p-8 space-y-4 shadow-sm">
				<p className="text-sm text-ink/70">
					Le formulaire interactif arrive bientôt. En attendant, contactez-nous à{' '}
					<a className="text-appleBlue font-medium" href="mailto:curation@burundi-space.org">
						curation@burundi-space.org
					</a>
					.
				</p>
				<p className="text-sm text-ink/70">
					Préparez une biographie courte, 5 visuels HD et un texte décrivant votre démarche artistique.
				</p>
			</div>
		</section>
	)
}


