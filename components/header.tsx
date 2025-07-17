import Link from "next/link"
import { PawPrint, User } from "lucide-react"

export default function Header() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center justify-between px-4 md:px-6">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
        <PawPrint className="h-6 w-6 text-primary" />
        <span className="sr-only">Peddy</span>
        Peddy
      </Link>
      <nav className="flex-1 flex justify-center gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Shop
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Contact
        </Link>
      </nav>
      <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center">
        <User className="h-5 w-5 text-gray-600" />
      </div>
    </header>
  )
}
