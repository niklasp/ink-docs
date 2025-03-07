import React from 'react'
import Link from '@docusaurus/Link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-gradient-to-b dark:from-purple-900 dark:via-black dark:to-purple-400">
      <h1 className="text-4xl font-bold">Hello ink!</h1>
      <p className="text-sm text-gray-500">(This will be the revamped ink! landing page)</p>
      <div className="flex flex-row gap-4">
        <Link to="/docs" className="text-purple-300 underline hover:text-purple-400">
          docs →
        </Link>
        <Link to="/ubator" className="text-purple-300 underline hover:text-purple-400">
          ink!ubator →
        </Link>
      </div>
    </div>
  )
}
