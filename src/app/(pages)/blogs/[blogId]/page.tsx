import Link from "next/link"

export default async function BlogDetails(
    { params, }: { params: Promise<{ blogId: string }> }
) {
    const { blogId } = await params
    return (
        <>
            <div className="text-2xl font-bold">
                <h1>Blog ID : {blogId}</h1>
                <Link
                    href={`/blogs/${blogId}/reviews`}
                    className="my-link"
                >
                    Review
                </Link>
            </div>
        </>
    )
}