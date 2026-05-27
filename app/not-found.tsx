import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r w-full">
      <div className="text-center p-8 bg-[var(--card-bg)] rounded-lg shadow-xl">
        <h1 className="text-9xl font-bold site-heading mb-4">404</h1>
        <h2 className="text-2xl font-semibold site-text mb-4">Page Not Found</h2>
        <p className="site-muted mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-[var(--accent-line)] text-[var(--primary-text)] rounded-lg hover:opacity-95 transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
