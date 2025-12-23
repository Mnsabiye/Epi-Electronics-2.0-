import { useState } from 'react'

export default function AIGuide() {
	const [question, setQuestion] = useState('')
	const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
		{ role: 'assistant', content: 'Bonjour, je suis votre guide IA sur l’art et l’histoire du Burundi. Que souhaitez-vous savoir ?' }
	])

	function handleSend() {
		if (!question.trim()) return
		setMessages(prev => [...prev, { role: 'user', content: question }, { role: 'assistant', content: 'Merci pour votre question. (Réponse simulée)' }])
		setQuestion('')
	}

	return (
		<section className="container-xl py-16 md:py-24">
			<h1 className="text-4xl md:text-5xl font-semibold">Guide IA</h1>
			<p className="mt-4 text-ink/70 max-w-2xl">Posez vos questions et obtenez des réponses sur l’art et l’histoire.</p>

			<div className="mt-10 grid md:grid-cols-3 gap-8">
				<div className="md:col-span-2 p-6 rounded-xl bg-white ring-1 ring-black/5">
					<div className="space-y-4 max-h-[420px] overflow-auto pr-2" role="log" aria-live="polite">
						{messages.map((m, i) => (
							<div key={i} className={m.role === 'assistant' ? 'text-ink' : 'text-ink/80'}>
								<strong className="mr-2">{m.role === 'assistant' ? 'Guide' : 'Vous'}:</strong>
								<span>{m.content}</span>
							</div>
						))}
					</div>
					<div className="mt-6 flex gap-3">
						<label htmlFor="ai-input" className="sr-only">Votre question</label>
						<input
							id="ai-input"
							className="flex-1 rounded-lg border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-appleBlue/40"
							placeholder="Ex: Résume l’histoire de l’art au Burundi"
							value={question}
							onChange={e => setQuestion(e.target.value)}
							onKeyDown={(e) => e.key === 'Enter' ? handleSend() : undefined}
						/>
						<button className="btn-primary" onClick={handleSend}>Envoyer</button>
					</div>
				</div>
				<aside className="p-6 rounded-xl bg-white ring-1 ring-black/5">
					<h3 className="font-semibold">Suggestions</h3>
					<ul className="mt-3 space-y-2 text-appleBlue">
						<li>
							<button className="hover:underline" onClick={() => setQuestion('Explique le style artistique traditionnel du Burundi')}>
								Style artistique traditionnel
							</button>
						</li>
						<li>
							<button className="hover:underline" onClick={() => setQuestion('Donne un résumé historique du Burundi en 5 points')}>
								Résumé historique (5 points)
							</button>
						</li>
						<li>
							<button className="hover:underline" onClick={() => setQuestion('Suggère des œuvres à voir par période')}>
								Œuvres à voir par période
							</button>
						</li>
					</ul>
				</aside>
			</div>
		</section>
	)
}


