import Link from "next/link";

export default function Home() {
  return (
    <div className="px-2 space-y-4">
      <h1 className="text-center text-2xl font-semibold">
        Welcome to Home!
      </h1>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/about" className="my-link">
          About
        </Link>

        <Link href="/profile" className="my-link">
          Profile
        </Link>

        <Link href="/blogs" className="my-link">
          Blog
        </Link>

        <Link href="/products/2" className="my-link">
          Product
        </Link>

        <Link href="/docs" className="my-link">
          Document
        </Link>

        <Link href="/docs/routes/catch-all segment" className="my-link">
          Catch-all Segment
        </Link>
      </div>
      <hr />
      <div className="flex flex-wrap gap-2">
        <Link href="/auth/singin" className="my-link">
          Sing In
        </Link>
        <Link href="/auth/singup" className="my-link">
          Sing Up
        </Link>
        <Link href="/auth/forgot-password" className="my-link">
          Forgot Password
        </Link>
      </div>
    </div>
  );
}