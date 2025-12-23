import { useEffect } from 'react'

type Props = {
	image: string
	isOpen: boolean
	onClose: () => void
	title?: string
}

export default function ImageLightbox({ image, isOpen, onClose, title }: Props) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	if (!isOpen) return null

	return (
		<div
			className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
			onClick={onClose}
		>
			<button
				onClick={onClose}
				className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
				aria-label="Fermer"
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M18 6L6 18M6 6l12 12" />
				</svg>
			</button>
			<div className="max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
				<img
					src={image}
					alt={title || 'Image'}
					className="max-w-full max-h-[90vh] object-contain rounded-lg"
				/>
				{title && (
					<div className="mt-4 text-center text-white">
						<h3 className="text-xl font-semibold">{title}</h3>
					</div>
				)}
			</div>
		</div>
	)
}


