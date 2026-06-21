import { notFound } from "next/navigation";

export default async function ProductDetails({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const { id } = await params;
    if (isNaN(Number(id))) {
        notFound();
    }

    return <div className="m-10 text-3xl">
        <h1>Product details of: {id}</h1>
    </div>
}