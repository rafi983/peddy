"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { LayoutGrid, Calendar, CircleUser, DollarSign, Syringe, X } from "lucide-react"

interface PetDetailModalProps {
  isOpen: boolean
  onClose: () => void
  pet: {
    imageSrc: string
    name: string
    breed: string
    birthYear: number
    gender: string
    price: number
    vaccinatedStatus: string
  }
}

export default function PetDetailModal({ isOpen, onClose, pet }: PetDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", handleEscape)
    } else {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleEscape)
    }

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto">
      <div
        ref={modalRef}
        className="relative w-[650px] h-[752px] max-w-[90vw] max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-lg"
      >
        <div className="relative">
          <Image
            src={"/modalImg.png"}
            width={650}
            height={350}
            alt={pet.name}
            className="w-full h-[350px] object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <h2 className="text-3xl font-bold">{pet.name}</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <LayoutGrid className="h-5 w-5 text-primary" />
              <span>Breed: {pet.breed}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Birth: {pet.birthYear}</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleUser className="h-5 w-5 text-primary" />
              <span>Gender: {pet.gender}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <span>Price: {pet.price}$</span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <Syringe className="h-5 w-5 text-primary" />
              <span>Vaccinated status: {pet.vaccinatedStatus}</span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Details Information</h3>
            <p className="text-gray-600">
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                The point of using is that it has a more-or-less normal distribution of letters, as opposed to using.
              </li>
            </ul>
          </div>
        </div>
        <div className="p-6 border-t flex justify-center">
          <button
            onClick={onClose}
            className="border border-primary text-primary hover:bg-primary hover:text-white bg-primary/10 px-8 py-3 rounded-md w-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
