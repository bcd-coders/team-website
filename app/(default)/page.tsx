export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Pricing from "@/components/Pricing"
import Team from '@/components/Team'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Team />
      <Newsletter />
    </>
  )
}
