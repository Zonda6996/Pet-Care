import { AboutSection } from './components/AboutSection'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'

function HomePage() {
	return (
		<>
			<HeroSection />
			<ServicesSection />
			<AboutSection />
		</>
	)
}

export const Component = HomePage
