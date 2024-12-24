import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Goals() {
  return (
    <section className="bg-zinc-900 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/6456211/pexels-photo-6456211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Professional Trainer in the gym"
              width={500}
              height={600}
              className="rounded-2xl object-cover"
            />
            <div className="absolute right-4 top-4 rounded-lg bg-white p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-red-500" />
                <p className="font-medium">Professional Trainer</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-4xl font-bold text-white">Get Ready To Reach Your Fitness Goals</h2>
            <p className="mb-4 text-zinc-400">
              We are a gym that is committed to helping people reach their fitness goals. We offer a variety of fitness
              programs and services to fit your needs, whether you are a experienced athlete.
            </p>
            <p className="mb-8 text-zinc-400">
              We believe that everyone should have access to the benefits of exercise make it happen.
            </p>
            <Button size="lg" className="w-fit bg-red-500 hover:bg-red-600">
              Free Trial Today
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-zinc-500">
        Photo by <a href="https://www.pexels.com/@tima-miroshnichenko/" className="underline">Tima Miroshnichenko</a> from <a href="https://www.pexels.com/photo/man-in-gray-shirt-holding-black-dumbbell-6456211/" className="underline">Pexels</a>
      </div>
    </section>
  )
}

