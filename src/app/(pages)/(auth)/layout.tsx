// src/app/layout.tsx
import "../../globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo / Brand */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-blue-600">
              Next.js
            </h1>
            <p className="mt-2 text-slate-500">
              Welcome to the authentication portal
            </p>
          </div>

          {/* Auth Card */}
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            {children}
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-slate-500">
            © 2026 Next.js Learning Project
          </p>
        </div>
      </div>
    </div>
  );
}