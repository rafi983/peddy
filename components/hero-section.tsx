import Image from "next/image"
import { Heart } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-4 md:py-8 lg:py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-500 flex items-center justify-center gap-2">
              Bringing Families Together <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </h2>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Your Path to Adoption <br /> Starts Here
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a.
            </p>
          </div>
          <button className="mt-4 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md text-lg">
            View More
          </button>
        </div>
        <div className="mt-12 flex justify-center">
          <Image
            src="/banner.jpg"
            width={800}
            height={400}
            alt="Dog and Cat"
            className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
