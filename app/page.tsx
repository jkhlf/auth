import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Link href="/dashboard">
          Dashboard
        </Link>
      </SignedIn>
    </>
  )
}

export default page;
