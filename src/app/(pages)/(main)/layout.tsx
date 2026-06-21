import Link from "next/link";
import "../../globals.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
        <div className="mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Next.js
          </Link>

          <nav className="flex gap-2">
            <Link href="/" className="px-3 py-2 hover:bg-slate-100 rounded-md">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 hover:bg-slate-100 rounded-md">
              About
            </Link>
            <Link href="/blogs" className="px-3 py-2 hover:bg-slate-100 rounded-md">
              Blogs
            </Link>
            <Link href="/docs" className="px-3 py-2 hover:bg-slate-100 rounded-md">
              Docs
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto w-full flex-1 px-4 py-8 bg-gray-100">
        <div className="rounded-xl bg-white p-6 shadow-md">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md">
        <div className="mx-auto px-4 py-4 text-center text-sm text-slate-500">
          © 2026 Next.js Learning Project
        </div>
      </footer>
    </>
  );
}