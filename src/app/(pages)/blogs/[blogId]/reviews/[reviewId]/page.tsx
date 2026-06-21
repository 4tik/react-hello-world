export default async function BlogDetails(
    { params, }: { params: Promise<{ blogId: string; reviewId: string }> }
) {
    const { blogId, reviewId } = await params
    return (
        <>
            <div className="text-2xl font-bold">
                <h1>Blog ID : {blogId}</h1>
                <h1>Review ID : {reviewId}</h1>
            </div>
        </>
    )
}