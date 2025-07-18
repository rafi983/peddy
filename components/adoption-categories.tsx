"use client"

import Image from "next/image"
import CustomDropdown, { CustomDropdownItem } from "./custom-dropdown"

export default function AdoptionCategories() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 pb-8 bg-white text-black">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Adopt Your Best Friend</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mb-12">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="flex items-center gap-2 rounded-full px-6 py-3 text-lg border border-gray-300 text-black hover:bg-gray-100 bg-transparent">
            <Image src="/dog.jpg" width={32} height={32} alt="Dogs icon" />
            Dogs
          </button>
          <button className="flex items-center gap-2 rounded-full px-6 py-3 text-lg bg-primary text-white hover:bg-primary/90">
            <Image src="/cat.jpg" width={32} height={32} alt="Cats icon" />
            Cats
          </button>
          <button className="flex items-center gap-2 rounded-full px-6 py-3 text-lg border border-gray-300 text-black hover:bg-gray-100 bg-transparent">
            <Image src="/rabbit.jpg" width={32} height={32} alt="Rabbits icon" />
            Rabbits
          </button>
          <button className="flex items-center gap-2 rounded-full px-6 py-3 text-lg border border-gray-300 text-black hover:bg-gray-100 bg-transparent">
            <Image src="/bird.jpg" width={32} height={32} alt="Birds icon" />
            Birds
          </button>
        </div>
      </div>
      <div className="container px-4 md:px-6 flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Best Deal For you</h2>
        <CustomDropdown trigger={<span>Sort by Price</span>}>
          <CustomDropdownItem onClick={() => console.log("Sort Low to High")}>Price: Low to High</CustomDropdownItem>
          <CustomDropdownItem onClick={() => console.log("Sort High to Low")}>Price: High to Low</CustomDropdownItem>
        </CustomDropdown>
      </div>
    </section>
  )
}
