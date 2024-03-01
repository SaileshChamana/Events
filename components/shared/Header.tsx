import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { SignedOut } from '@clerk/nextjs'
import { SignedIn } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import Navitems from './Navitems'
import Mobilenav from './Mobilenav'
const Header = () => {
  return (
    <header className="w-full border-b bg-white">
        <div className='wrapper flex items-center justify-between h-[10vh]' >
        <Link href="/" className='w-36'>
          <Image src="/assets/images/connectUpLogo.jpeg" width={128} height={38} alt="logo"/>
        </Link>
        <SignedIn>
          <nav className='md:flex-between hidden w-full max-w-xs'>
            <Navitems />
          </nav>
        </SignedIn>
        <div className='flex w-32 justify-end gap-3'> </div>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <Mobilenav />
          </SignedIn>
          <SignedOut>
            <Button asChild className='rounded-full' size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
    </header>
  )
}

export default Header