import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import Image from "next/image"

const benefits = [
  {
    title: "Personal Training",
    description: "Our personal trainers can help you create a personalized fitness plan and track your progress.",
  },
  {
    title: "Expert Trainer",
    description: "Our gym is proud to offer a team of highly skilled and certified trainer help achieve your health & fitness goals.",
  },
  {
    title: "Flexible Time",
    description: "There are many fitness classes that are offered during off-peak hours, such as early morning or late evening.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-900 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-8 text-4xl font-bold text-white">Why Should People Choose Fitnessxia Services</h2>
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{benefit.title}</h3>
                    <p className="text-zinc-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-8 bg-red-500 hover:bg-red-600">Join Today</Button>
          </div>
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-full bg-red-500/20">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Fitness Trainer"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="absolute right-4 top-4 rounded-lg bg-white p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="text-red-500">❤️</div>
                <div>
                  <p className="font-medium">70 bpm</p>
                  <p className="text-sm text-zinc-600">Heart Rate</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 rounded-lg bg-white p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="text-red-500">🔥</div>
                <div>
                  <p className="font-medium">24%</p>
                  <p className="text-sm text-zinc-600">Fat Burning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

