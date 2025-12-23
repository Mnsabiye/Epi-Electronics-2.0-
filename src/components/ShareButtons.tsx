type Props = {
	url?: string
	title?: string
}

export default function ShareButtons({ url, title = 'Burundi Space' }: Props) {
	const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
	const shareText = `Découvrez ${title} sur Burundi Space`

	const shareToTwitter = () => {
		if (typeof window !== 'undefined') {
			window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`, '_blank')
		}
	}

	const shareToFacebook = () => {
		if (typeof window !== 'undefined') {
			window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank')
		}
	}

	const shareToLinkedIn = () => {
		if (typeof window !== 'undefined') {
			window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank')
		}
	}

	const copyLink = async () => {
		try {
			if (typeof navigator !== 'undefined' && navigator.clipboard) {
				await navigator.clipboard.writeText(currentUrl)
				alert('Lien copié dans le presse-papiers !')
			}
		} catch (err) {
			console.error('Erreur lors de la copie:', err)
		}
	}

	return (
		<div className="flex items-center gap-3">
			<span className="text-sm text-ink/70 mr-2">Partager:</span>
			<button
				onClick={shareToTwitter}
				className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition"
				aria-label="Partager sur Twitter"
			>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
					<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
				</svg>
			</button>
			<button
				onClick={shareToFacebook}
				className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
				aria-label="Partager sur Facebook"
			>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
					<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
				</svg>
			</button>
			<button
				onClick={shareToLinkedIn}
				className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition"
				aria-label="Partager sur LinkedIn"
			>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
					<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
					<circle cx="4" cy="4" r="2" />
				</svg>
			</button>
			<button
				onClick={copyLink}
				className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-700 transition"
				aria-label="Copier le lien"
			>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
					<path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
				</svg>
			</button>
		</div>
	)
}

