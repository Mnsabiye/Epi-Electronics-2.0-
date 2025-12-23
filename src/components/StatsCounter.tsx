import { useEffect, useState } from 'react'

type Stat = {
	value: number
	label: string
	suffix?: string
}

type Props = {
	stats: Stat[]
}

export default function StatsCounter({ stats }: Props) {
	const [counts, setCounts] = useState(stats.map(() => 0))
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
				}
			},
			{ threshold: 0.5 }
		)

		const element = document.getElementById('stats-section')
		if (element) observer.observe(element)

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		if (!isVisible) return

		const duration = 2000
		const steps = 60
		const stepDuration = duration / steps

		stats.forEach((stat, index) => {
			let currentStep = 0
			const increment = stat.value / steps

			const interval = setInterval(() => {
				currentStep++
				setCounts(prev => {
					const newCounts = [...prev]
					newCounts[index] = Math.min(Math.round(increment * currentStep), stat.value)
					return newCounts
				})

				if (currentStep >= steps) {
					clearInterval(interval)
				}
			}, stepDuration)
		})
	}, [isVisible, stats])

	return (
		<section id="stats-section" className="bg-gradient-to-br from-appleBlue/10 to-appleBlue/5 py-16 md:py-24">
			<div className="container-xl">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{stats.map((stat, index) => (
						<div key={index} className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur">
							<div className="text-4xl md:text-5xl font-bold text-appleBlue mb-2">
								{counts[index].toLocaleString()}{stat.suffix}
							</div>
							<div className="text-sm md:text-base text-ink/70">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}


