import React from 'react'
import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

export default function Header() {
  return (
    <header className='sticky top-0 inset-x-0 pt-10 pb-10'>
      <div className="container">
        <nav className='flex items-center justify-between gap-4'>
          <Link href='/' className='text-2xl'>The Internet&#39;s own Kiddo</Link>
          <ul className='flex items-center gap-10 text-sm font-light text-muted-foreground'>
            <li className="transition-colors hover:text-foreground">
              <Link href='/blog'>Blog</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href='/projects'>Projects</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}