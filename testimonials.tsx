import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="bg-zinc-900 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-bold text-white">What Our Happy Clients Say About Us</h2>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
                "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
                "https://images.unsplash.com/photo-1628191081676-8f40d4ce6c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Athlete ${i + 1}`}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-zinc-900"
                />
              ))}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-sm text-white">
                +2
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-white">4.9</span>
              <span className="text-zinc-400">(450 Reviews)</span>
            </div>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-zinc-800/50 border-zinc-700">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                  alt="Farhan Rio"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="mb-2">
                    <p className="font-medium text-white">Farhan Rio</p>
                    <p className="text-sm text-zinc-400">Happy Customer</p>
                  </div>
                  <div className="mb-4 flex gap-1">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>
                  <p className="text-zinc-400">
                    I've been coming to this gym for 3 years now and I've never been in better shape. The trainers are
                    amazing and they always push me to be my best. I'm so glad I found this gym!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 flex justify-center">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Trustpilot_logo.svg/2560px-Trustpilot_logo.svg.png" 
            alt="Trustpilot" 
            width={120} 
            height={30} 
          />
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-zinc-500">
        Athlete photos from <a href="https://unsplash.com/" className="underline">Unsplash</a>. Trustpilot logo from <a href="https://en.wikipedia.org/wiki/File:Trustpilot_logo.svg" className="underline">Wikimedia Commons</a>.
      </div>
    </section>
  )
}

