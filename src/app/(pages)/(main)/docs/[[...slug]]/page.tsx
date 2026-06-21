export default async function Docs(
    { params }: { params: { slug?: string[] } }
) {
    const { slug } = await params;

    if (!slug?.length) {
        return <h1>Welcome to Docs</h1>;
    }

    return (
        <div>
            <h1>Catch-all Segment</h1>

            <h2>
                A catch-all segment captures multiple URL parts as an array.
            </h2>

            <p>Path: {slug?.join("/") || "Home"}</p>
            <pre>{JSON.stringify(slug, null, 2)}</pre>
        </div>
    );
}