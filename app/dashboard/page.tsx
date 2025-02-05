import { useAuth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const { userId } = useAuth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">Total Users</h3>
            <p className="text-3xl font-bold mt-2">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">Revenue</h3>
            <p className="text-3xl font-bold mt-2">$5,678</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">Active Projects</h3>
            <p className="text-3xl font-bold mt-2">25</p>
          </div>
        </div>
      </div>
    </div>
  )
}