import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-purple-800 text-white">
      <div className="text-xl font-bold">
        <Link href="/">Vino Pairings</Link>
      </div>
      <div className="flex gap-4 mt-2 sm:mt-0">
        <Link href="/" className="hover:text-purple-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-purple-300">
          About
        </Link>
        <Link href="/history" className="hover:text-purple-300">
          History
        </Link>
        <Link href="/contact" className="hover:text-purple-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}
