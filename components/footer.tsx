import Link from "next/link"
import { PawPrint, Facebook, Twitter, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Link className="flex items-center gap-2 text-2xl font-semibold text-white" href="#">
            <PawPrint className="h-7 w-7 text-primary" />
            <span className="sr-only">Peddy</span>
            Peddy
          </Link>
          <p className="text-sm">Location: av. Washington 165, NY CA 54003</p>
          <p className="text-sm">Phone: +31 85 964 47 25</p>
          <p className="text-sm">Email: info@yourdomain.com</p>
          <p className="text-sm">Openings hours: 9.00 AM - 5.00 PM</p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-gray-300 hover:text-white">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">X (Twitter)</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Useful Links</h3>
          <nav className="grid gap-2 text-sm">
            <Link className="hover:underline underline-offset-4" href="#">
              Home
            </Link>
            <Link className="hover:underline underline-offset-4" href="#">
              About Us
            </Link>
            <Link className="hover:underline underline-offset-4" href="#">
              Animals
            </Link>
            <Link className="hover:underline underline-offset-4" href="#">
              Foundation
            </Link>
            <Link className="hover:underline underline-offset-4" href="#">
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Drop a Message</h3>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
            <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}
