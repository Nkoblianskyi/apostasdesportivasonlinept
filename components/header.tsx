import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black h-8 md:h-16 flex items-center justify-center">
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Image src="/favicon.ico" alt="Logo" width={16} height={16} className="md:w-7 md:h-7" />
        <span className="text-white font-bold text-sm md:text-lg">
          <span className="text-green-700">APOSTAS</span> <span className="text-red-600">DESPORTIVAS</span>{" "}
          <span className="text-yellow-600">ONLINE</span> <span className="">PT</span>
        </span>
      </Link>
    </header>
  )
}

export default Header
