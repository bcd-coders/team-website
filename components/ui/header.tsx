import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
<Link href="/" className="block" aria-label="Cruip">
  <div>
    <img src="/images/logo.png" alt="Cruip Logo" width="100" />
  </div>
</Link>
</div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
