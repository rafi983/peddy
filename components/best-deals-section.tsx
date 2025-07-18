import PetCard from "./pet-card"
import Image from "next/image"

export default function BestDealsSection() {
  const pets = [
    {
      imageSrc: "/dealImg1.png",
      name: "Mister Tartosh",
      breed: "Golden retriever",
      birthYear: 2024,
      gender: "Female",
      price: 199,
      vaccinatedStatus: "Partially",
    },
    {
      imageSrc: "/dealImg2.png",
      name: "Charlie",
      breed: "Golden retriever",
      birthYear: 2024,
      gender: "Female",
      price: 199,
      vaccinatedStatus: "Fully",
    },
    {
      imageSrc: "/dealImg3.png",
      name: "Alessia Max",
      breed: "Golden retriever",
      birthYear: 2024,
      gender: "Female",
      price: 199,
      vaccinatedStatus: "Not Vaccinated",
    },
  ]

  const smallImages = [
    "/gridImg1.png",
    "/gridImg2.png",
    "/gridImg3.png",
    "/gridImg4.png",
    "/gridImg5.png",
    "/gridImg6.png",
  ]

  return (
    <section className="w-full pt-0 pb-12 md:pb-24 lg:pb-32 bg-white text-black">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-[3fr_1fr] gap-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {pets.map((pet, index) => (
              <PetCard key={index} {...pet} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {smallImages.map((src, index) => (
              <Image
                key={index}
                src={src || "/placeholder.svg"}
                width={150}
                height={150}
                alt={`Pet image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
