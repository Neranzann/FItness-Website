import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, SpaceIcon as Yoga, Activity, MonitorIcon as Running } from 'lucide-react'

const programs = [
  {
    title: "Strength Training",
    description: "Our trainers will design that a progressive workout plans that proper achieve gains strength.",
    icon: Dumbbell,
  },
  {
    title: "Basic Yoga",
    description: "This program combines yoga with cardio strength training to help lose weight & fitness.",
    icon: Yoga,
  },
  {
    title: "Body Building",
    description: "For those looking to increase strength build lean muscle, our strength & muscle.",
    icon: Activity,
    featured: true,
  },
  {
    title: "Weight Loss",
    description: "Our weight loss programs are designed to help you make sustainable lifestyle changes.",
    icon: Running,
  },
]

export default function Programs() {
  return (
    <section className="bg-zinc-900 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-bold text-white">The Best Programs We Offers For You</h2>
          <p className="text-zinc-400">
            We offer a wide range of comprehensive fitness programs designed to cater to individuals of all fitness levels.
            Our aim to help your achieve specific goals & maximize results.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <Card
              key={program.title}
              className={`border-zinc-800 ${
                program.featured ? "bg-red-500" : "bg-zinc-800/50"
              } transition-transform hover:scale-105`}
            >
              <CardHeader>
                <program.icon className={`h-12 w-12 ${program.featured ? "text-white" : "text-red-500"}`} />
                <CardTitle className={program.featured ? "text-white" : "text-zinc-100"}>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={program.featured ? "text-white/90" : "text-zinc-400"}>{program.description}</p>
                <a
                  href="#"
                  className={`mt-4 inline-flex items-center ${
                    program.featured ? "text-white" : "text-red-500"
                  } hover:underline`}
                >
                  Learn More →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

