export default async function BlogReviews(
    { params }: { params: Promise<{ blogId: string }> }
) {
    const { blogId } = (await params)
    const reviews = [
        {
            id: 1,
            author: "John Doe",
            rating: 5,
            comment: "Excellent product! Highly recommended.",
        },
        {
            id: 2,
            author: "Sarah Smith",
            rating: 4,
            comment: "Good quality and fast delivery.",
        },
        {
            id: 3,
            author: "Michael Brown",
            rating: 3,
            comment: "Average experience, could be improved.",
        },
        {
            id: 4,
            author: "Emily Johnson",
            rating: 5,
            comment: "Amazing service and great support.",
        },
        {
            id: 5,
            author: "David Wilson",
            rating: 4,
            comment: "Worth the price. Satisfied overall.",
        },
    ];
    return (
        <div className="space-y-4">
            <h1>Blog ID : {blogId}</h1>
            <ul className="space-y-4">
                {reviews.map((review) => (
                    <li
                        key={review.id}
                        className="border rounded-lg p-4"
                    >
                        <div className="font-semibold flex gap-x-3">
                            <p>{review.author}</p> <span className="bg-blue-200 px-2 rounded-2xl">⭐ {review.rating}/5</span>
                        </div>

                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}