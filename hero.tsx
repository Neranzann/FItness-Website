import { Button } from "@/components/ui/button"
import { Play } from 'lucide-react'
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-900 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 pt-12 md:grid-cols-2 md:gap-12 md:pt-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              GET HEALTHY BODY WITH THE PERFECT EXERCISES
            </h1>
            <p className="text-lg text-zinc-400">
              We are always there to help you to make a healthy body and mind through the power of fitness.
            </p>
            <div className="flex items-center gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" /> Watch Video
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 border-t border-zinc-800 pt-8">
              <div>
                <h3 className="text-2xl font-bold text-white">105+</h3>
                <p className="text-sm text-zinc-400">Expert Trainers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">970+</h3>
                <p className="text-sm text-zinc-400">Member Joined</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">135+</h3>
                <p className="text-sm text-zinc-400">Fitness Programs</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  alt="Athlete checking sports watch"
  width={600}
  height={600}
  className="rounded-2xl object-cover"
  priority
/>
            <div className="absolute bottom-4 right-4 rounded-lg bg-white p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-md bg-red-500" />
                <div>
                  <p className="font-medium">Today's Calories</p>
                  <p className="text-2xl font-bold">150 Cal</p>
                </div>
              </div>
              <div className="mt-2 flex gap-1">
                {[40, 60, 80, 100].map((height, i) => (
                  <div
                    key={i}
                    className="h-16 w-3 rounded-full bg-red-100"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        Photo by <a href="https://unsplash.com/@gentritbsylejmani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline">Gentrit Sylejmani</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline">Unsplash</a>
      </div>
    </section>
  )
}

