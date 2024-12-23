import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/75">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/placeholder.svg?height=32&width=32" alt="Fitnessxia" width={32} height={32} className="text-red-500" />
          <span className="text-xl font-bold text-white">FITNESSXIA</span>
        </Link>
        <div className="hidden gap-8 md:flex">
          <Link href="/" className="text-sm text-white hover:text-red-500">
            Home
          </Link>
          <Link href="/about" className="text-sm text-zinc-400 hover:text-white">
            About Us
          </Link>
          <Link href="/program" className="text-sm text-zinc-400 hover:text-white">
            Program
          </Link>
          <Link href="/membership" className="text-sm text-zinc-400 hover:text-white">
            Membership
          </Link>
          <Link href="/testimonials" className="text-sm text-zinc-400 hover:text-white">
            Testimonials
          </Link>
        </div>
        <Button size="sm" className="bg-red-500 hover:bg-red-600">
          Sign Up
        </Button>
      </nav>
    </header>
  )
}

