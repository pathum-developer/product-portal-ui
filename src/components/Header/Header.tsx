import { useEffect, useState } from 'react'

import { Bars } from '@primeicons/react/bars'
import { Box } from '@primeicons/react/box'
import { Times } from '@primeicons/react/times'
import { User } from '@primeicons/react/user'
import { Button } from '@primereact/ui/button'

interface NavigationItem {
  readonly label: string
  readonly href: string
}

const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', closeMenuOnEscape)

    return () => document.removeEventListener('keydown', closeMenuOnEscape)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-surface bg-surface-0/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <a
          className="flex items-center gap-3 text-color no-underline focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          href="/"
          aria-label="Product Portal home"
        >
          <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-contrast">
            <Box size={20} aria-hidden="true" />
          </span>
          <span className="text-base font-semibold">Product Portal</span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-color no-underline transition-colors hover:bg-emphasis hover:text-color focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          as="a"
          className="ml-4 hidden gap-2 no-underline md:inline-flex"
          href="/login"
          size="small"
        >
          <User size={16} aria-hidden="true" />
          <span>Log in</span>
        </Button>

        <button
          type="button"
          className="ml-auto grid size-10 place-items-center rounded-md text-color transition-colors hover:bg-emphasis focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <Times size={20} aria-hidden="true" /> : <Bars size={20} aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-surface bg-surface-0 px-4 py-3 shadow-lg md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-color no-underline transition-colors hover:bg-emphasis focus-visible:outline-2 focus-visible:outline-primary"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <Button
              as="a"
              className="mt-2 flex w-full justify-center gap-2 no-underline"
              href="/login"
              onClick={closeMenu}
            >
              <User size={16} aria-hidden="true" />
              <span>Log in</span>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
