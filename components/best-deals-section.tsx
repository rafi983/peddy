import Image from "next/image"
import PetCard from "./pet-card"
import { Loader2 } from "lucide-react"
import CustomDropdown, { CustomDropdownItem } from "./custom-dropdown"

interface BestDealsSectionProps {
  pets: any[];
  likedPets: any[];
  loading: boolean;
  error: string;
  onLike: (pet: any) => void;
  handleSort?: (order: "asc" | "desc") => void;
}

export default function BestDealsSection({ pets, likedPets, loading, error, onLike, handleSort }: BestDealsSectionProps) {
  return (
    <section className="w-full pt-0 pb-12 md:pb-24 lg:pb-32 bg-white text-black">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Best Deal For you</h2>
          {handleSort && (
            <CustomDropdown trigger={<span>Sort by Price</span>}>
              <CustomDropdownItem onClick={() => handleSort("asc")}>Price: Low to High</CustomDropdownItem>
              <CustomDropdownItem onClick={() => handleSort("desc")}>Price: High to Low</CustomDropdownItem>
            </CustomDropdown>
          )}
        </div>
        <div className="grid lg:grid-cols-[3fr_1fr] gap-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {loading ? (
              <div className="col-span-full flex justify-center items-center h-64">
                <Loader2 className="animate-spin h-12 w-12 text-primary" />
              </div>
            ) : error ? (
              <div className="col-span-full text-red-500 text-center">{error}</div>
            ) : pets.length === 0 ? (
              <div className="col-span-full text-gray-500 text-center">No pets available for this category.</div>
            ) : (
              pets.map(pet => (
                <PetCard
                  key={pet.petId}
                  imageSrc={pet.image || "/placeholder.svg"}
                  name={pet.pet_name || "Unknown"}
                  breed={pet.breed || "Unknown"}
                  birthYear={pet.date_of_birth || "Unknown"}
                  gender={pet.gender || "Unknown"}
                  price={pet.price || 0}
                  vaccinatedStatus={pet.vaccinated_status || "Unknown"}
                  onLike={() => onLike(pet)}
                  id={pet.petId}
                />
              ))
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 auto-rows-[150px]">
            {likedPets.length === 0 ? (
              <span className="text-gray-400 col-span-2">No liked pets yet.</span>
            ) : (
              likedPets.map((pet, index) => (
                <Image
                  key={pet.petId || index}
                  src={pet.image || "/placeholder.svg"}
                  width={150}
                  height={150}
                  alt={pet.pet_name || "Pet"}
                  className="w-full h-full object-cover rounded-lg"
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
