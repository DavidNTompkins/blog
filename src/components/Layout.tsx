import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <nav className="border-dark-border border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link 
              href="/" 
              className="text-xl font-bold hover:text-dark-link transition-colors"
            >
              David Tompkins
            </Link>
            <div className="flex items-center space-x-6">
              <Link 
                href="https://david.tompkins.computer" 
                className="hover:text-dark-link transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Personal Website
              </Link>
              <Link 
                href="https://twitter.com/davidntompkins" 
                className="hover:text-dark-link transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter/X
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}