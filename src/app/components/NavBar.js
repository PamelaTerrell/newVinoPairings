import Link from 'next/link';

export default function NavBar({ fontHeading }) {
  return (
    <nav className="bg-burgundy text-cream p-6 flex flex-wrap items-center justify-between shadow-md">
      <div className={`text-3xl font-bold ${fontHeading}`}>
        <Link href="/">Vino Pairings</Link>
      </div>
      <div className="flex gap-6 mt-4 sm:mt-0 text-lg">
        <Link href="/" className="hover:text-gold transition-colors duration-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gold transition-colors duration-300">
          About
        </Link>
        <Link href="/history" className="hover:text-gold transition-colors duration-300">
          History
        </Link>
        <Link href="/contact" className="hover:text-gold transition-colors duration-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}
