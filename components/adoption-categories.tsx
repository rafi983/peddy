"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import BestDealsSection from "./best-deals-section"

interface Pet {
  id: string
  image: string | null
  name: string | null
  breed: string | null
  birth_year: number | null
  gender: string | null
  price: number | null
  vaccinated: string | null
}

export default function AdoptionCategories() {
  const [categories, setCategories] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("")
  const [pets, setPets] = useState<Pet[]>([])
  const [filteredPets, setFilteredPets] = useState<Pet[]>([])
  const [likedPets, setLikedPets] = useState<Pet[]>([])
  const [loading, setLoading] = useState(true)
  const [sortDesc, setSortDesc] = useState(false)
  const [error, setError] = useState("")

  // Fetch categories
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
      .then(res => res.json())
      .then(data => {
        if (data.data && data.data.length > 0) {
          setCategories(data.data)
          setActiveCategory(data.data[0])
        } else {
          // fallback to static categories
          setCategories(["Dog", "Cat", "Rabbit", "Bird"])
          setActiveCategory("Dog")
        }
      })
      .catch(() => {
        setCategories(["Dog", "Cat", "Rabbit", "Bird"])
        setActiveCategory("Dog")
        setError("Failed to load categories, using default.")
      })
  }, [])

  // Fetch pets (all or by category)
  useEffect(() => {
    setLoading(true)
    setError("")
    const url = activeCategory
      ? `https://openapi.programming-hero.com/api/peddy/category/${activeCategory}`
      : "https://openapi.programming-hero.com/api/peddy/pets"
    const timer = setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setPets(data.data || [])
          setFilteredPets(data.data || [])
          setLoading(false)
        })
        .catch(() => {
          setError("Failed to load pets")
          setLoading(false)
        })
    }, 2000) // 2s spinner
    return () => clearTimeout(timer)
  }, [activeCategory])

  // Sort pets by price
  const handleSort = (order: "asc" | "desc") => {
    const sorted = [...filteredPets].sort((a, b) => order === "asc" ? (a.price || 0) - (b.price || 0) : (b.price || 0) - (a.price || 0))
    setFilteredPets(sorted)
    setSortDesc(order === "desc")
  }

  // Like pet (additive, no toggle)
  const handleLike = (pet: any) => {
    // Use pet.petId as unique identifier, not pet.id
    if (!likedPets.find((p: any) => p.petId === pet.petId)) {
      setLikedPets(prev => [...prev, pet])
    }
  }

  // Filter pets by category
  useEffect(() => {
    if (activeCategory) {
      setFilteredPets(pets)
    } else {
      setFilteredPets(pets)
    }
  }, [pets, activeCategory])

  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 pb-8 bg-white text-black">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Adopt Your Best Friend</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mb-12">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-lg border ${activeCategory === category ? "bg-primary text-white" : "border-gray-300 text-black hover:bg-gray-100 bg-transparent"}`}
              onClick={() => setActiveCategory(category)}
            >
              <Image src={`/${category.toLowerCase()}.jpg`} width={32} height={32} alt={`${category} icon`} />
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="container px-4 md:px-6 flex justify-between items-center mb-8">
        {/* Removed sort dropdown from here, now handled in BestDealsSection */}
      </div>
      <BestDealsSection
        pets={filteredPets}
        likedPets={likedPets}
        loading={loading}
        error={error}
        onLike={handleLike}
        handleSort={handleSort}
      />
    </section>
  )
}
