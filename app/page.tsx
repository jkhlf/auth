// [app/page.tsx]
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">MySaaS</h1>
          </div>
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                  Sign In
                </button>
              </SignInButton>
              <Link 
                href="/sign-up" 
                className="bg-white text-black px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50"
              >
                Sign Up
              </Link>
            </SignedOut>
            <SignedIn>
              <Link 
                href="/dashboard"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Dashboard
              </Link>
            </SignedIn>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
                Welcome to MySaaS Platform
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                The all-in-one solution for your business needs. Get started today and transform your workflow.
              </p>
              <div className="mt-10">
                <SignedOut>
                  <Link
                    href="/sign-up"
                    className="bg-black text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800"
                  >
                    Get Started
                  </Link>
                </SignedOut>
                <SignedIn>
                  <Link
                    href="/dashboard"
                    className="bg-black text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800"
                  >
                    Go to Dashboard
                  </Link>
                </SignedIn>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 MySaaS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Easy Integration",
    description: "Seamlessly integrate our platform with your existing tools and workflows."
  },
  {
    title: "Real-time Analytics",
    description: "Get instant insights with our powerful analytics dashboard."
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee."
  }
]

export default Page