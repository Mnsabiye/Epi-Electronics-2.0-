import { useState } from 'react'

type Testimonial = {
	name: string
	role: string
	image: string
	text: string
}

const testimonials: Testimonial[] = [
	{
		name: 'Marie Nkurunziza',
		role: 'Historienne',
		image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
		text: 'Une ressource exceptionnelle pour comprendre notre patrimoine. L\'interface est intuitive et les archives sont remarquablement bien organisées.'
	},
	{
		name: 'Jean-Claude Barakamfitiye',
		role: 'Artiste',
		image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
		text: 'En tant qu\'artiste, je trouve cette plateforme inspirante. Elle me permet de découvrir des œuvres anciennes et de comprendre l\'évolution de l\'art burundais.'
	},
	{
		name: 'Amina Uwimana',
		role: 'Étudiante',
		image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
		text: 'Le guide IA est incroyable ! Il répond à toutes mes questions sur l\'histoire et m\'aide dans mes recherches académiques.'
	}
]

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0)

	const next = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length)
	}

	const prev = () => {
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
	}

	return (
		<section className="bg-white py-16 md:py-24">
			<div className="container-xl">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ink">Ce qu'ils en disent</h2>
				<div className="relative max-w-4xl mx-auto">
					<div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg">
						<div className="flex items-start gap-6">
							<img
								src={testimonials[currentIndex].image}
								alt={testimonials[currentIndex].name}
								className="w-16 h-16 rounded-full object-cover flex-shrink-0"
							/>
							<div className="flex-1">
								<p className="text-lg text-ink/80 mb-6 italic">
									"{testimonials[currentIndex].text}"
								</p>
								<div>
									<div className="font-semibold text-ink">{testimonials[currentIndex].name}</div>
									<div className="text-sm text-ink/60">{testimonials[currentIndex].role}</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center gap-2 mt-6">
						{testimonials.map((_, i) => (
							<button
								key={i}
								onClick={() => setCurrentIndex(i)}
								className={`h-2 rounded-full transition-all ${
									i === currentIndex ? 'w-8 bg-appleBlue' : 'w-2 bg-gray-300'
								}`}
								aria-label={`Go to testimonial ${i + 1}`}
							/>
						))}
					</div>
					<button
						onClick={prev}
						className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
						aria-label="Previous"
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
							<path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
					<button
						onClick={next}
						className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
						aria-label="Next"
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
							<path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				</div>
			</div>
		</section>
	)
}


