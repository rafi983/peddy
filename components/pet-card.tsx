"use client"

import Image from "next/image"
import { PawPrint, Calendar, CircleUser, DollarSign, ThumbsUp } from "lucide-react"
import { useState } from "react"
import PetDetailModal from "./pet-detail-modal"

interface PetCardProps {
  imageSrc: string
  name: string
  breed: string
  birthYear: number
  gender: string
  price: number
  vaccinatedStatus: string
  id?: string // id should be string or undefined
  onLike?: () => void
}

export default function PetCard({ imageSrc, name, breed, birthYear, gender, price, vaccinatedStatus, id, onLike }: PetCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [adopted, setAdopted] = useState(false)
  const [countdown, setCountdown] = useState<number | null>(null)

  const petData = { imageSrc, name, breed, birthYear, gender, price, vaccinatedStatus, id }

  const handleAdopt = () => {
    if (adopted || countdown !== null) return
    setCountdown(3)
    let count = 3
    const interval = setInterval(() => {
      count--
      if (count > 0) {
        setCountdown(count)
      } else {
        clearInterval(interval)
        setCountdown(null)
        setAdopted(true)
      }
    }, 1000)
  }

  return (
    <>
      <div className="w-full max-w-[312px] h-[432px] rounded-xl overflow-hidden shadow-lg bg-white text-black">
        <Image
          src={imageSrc || "/placeholder.svg"}
          width={312}
          height={200}
          alt={name}
          className="w-full h-[200px] object-cover"
        />
        <div className="p-4 flex flex-col justify-between h-[calc(100%-200px)]">
          <div>
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <div className="grid gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <PawPrint className="h-4 w-4 text-primary" />
                <span>Breed: {breed}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Birth: {birthYear || "Unknown"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleUser className="h-4 w-4 text-primary" />
                <span>Gender: {gender}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-primary" />
                <span>Price: {price}$</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              className="p-2 border border-primary text-primary hover:bg-primary hover:text-white bg-transparent rounded-md"
              aria-label="Like"
              onClick={onLike}
            >
              <ThumbsUp className="h-4 w-4" />
            </button>
            <button
              className="flex-1 border border-primary text-primary hover:bg-primary hover:text-white bg-transparent px-4 py-2 rounded-md"
              onClick={handleAdopt}
              disabled={adopted || countdown !== null}
            >
              {adopted ? "Adopted" : countdown !== null ? countdown : "Adopt"}
            </button>
            <button
              className="flex-1 bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-md"
              onClick={() => setIsModalOpen(true)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
      <PetDetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} pet={petData} />
    </>
  )
}
