import { HeroSection } from "@/components/hero-section"
import { BettingSitesList } from "@/components/betting-sites-list"
import { SelectionCriteria } from "@/components/selection-criteria"
import { InfoSections } from "@/components/info-sections"
import { TopSitesModal } from "@/components/top-sites-modal"
import { OurChoice } from "@/components/our-choice"

export default function HomePage() {
  return (
    <div className="min-h-screen page-bg">
      <div className="max-w-6xl mx-auto px-2 space-y-4 py-0">
        <HeroSection />
        <BettingSitesList />
        <SelectionCriteria />
        <InfoSections />
      </div>
      <OurChoice />
      <TopSitesModal />
    </div>
  )
}
