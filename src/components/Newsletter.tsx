import { useState } from 'react'

export default function Newsletter() {
	const [email, setEmail] = useState('')
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (email) {
			setSubmitted(true)
			setEmail('')
			setTimeout(() => setSubmitted(false), 3000)
		}
	}

	return (
		<section className="bg-gradient-to-br from-ink to-gray-800 text-white py-16 md:py-24">
			<div className="container-xl">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Restez informé</h2>
					<p className="text-white/80 mb-8">
						Recevez les dernières actualités sur nos collections, nouvelles expositions et événements culturels.
					</p>
					<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Votre adresse email"
							className="flex-1 rounded-full px-6 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-appleBlue"
							required
						/>
						<button
							type="submit"
							className="rounded-full bg-appleBlue text-white px-8 py-3 font-medium hover:bg-appleBlue/90 transition whitespace-nowrap"
						>
							{submitted ? 'Merci !' : 'S\'abonner'}
						</button>
					</form>
					{submitted && (
						<p className="mt-4 text-sm text-green-400">✓ Vous êtes maintenant abonné à notre newsletter</p>
					)}
				</div>
			</div>
		</section>
	)
}


