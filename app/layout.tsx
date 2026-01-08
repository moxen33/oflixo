import './globals.css'

export const metadata = {
  title: 'Oflixo',
  description: 'Your streaming platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <header className="flex items-center justify-between p-4 bg-gray-800">
          <h1 className="text-2xl font-bold">Oflixo</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">Movies</a>
            <a href="#" className="hover:text-gray-400">TV Shows</a>
            <a href="#" className="hover:text-gray-400">My List</a>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  )
}
