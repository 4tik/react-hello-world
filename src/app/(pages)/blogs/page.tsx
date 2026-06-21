import Link from "next/link";

export default function Blog() {
    const blogs = [
        { id: 1, title: "Getting Started with Next.js" },
        { id: 2, title: "Understanding Dynamic Routes" },
        { id: 3, title: "Server vs Client Components" },
    ];

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Blog List <hr /></h1>

            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id} className="mb-3">
                        <Link className="px-2 py-1 bg-amber-600 rounded-2xl" href={`/blogs/${blog.id}`}>
                            {blog.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}