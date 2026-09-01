import { createFileRoute } from '@tanstack/react-router'
import { PasswordGate } from '@/components/PasswordGate'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Story } from '@/components/Story'
import { Photos } from '@/components/Photos'
import { Songs } from '@/components/Songs'
import { Videos } from '@/components/Videos'
import { Letters } from '@/components/Letters'
import { Ending } from '@/components/Ending'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <PasswordGate>
      <Hero />
      <Nav />
      <Story />
      <Photos />
      <Songs />
      <Videos />
      <Letters />
      <Ending />
    </PasswordGate>
  )
}
