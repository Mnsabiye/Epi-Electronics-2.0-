import HeroCarousel from '../components/HeroCarousel'
import AboutCarousel from '../components/AboutCarousel'
import FeatureShowcase from '../components/FeatureShowcase'
import GuideTeaser from '../components/GuideTeaser'
import LeadersCarousel from '../components/LeadersCarousel'

export default function Home() {
	return (
		<main>
			<HeroCarousel />
			<AboutCarousel />
			<FeatureShowcase />
			<LeadersCarousel />
			<GuideTeaser />
		</main>
	)
}
