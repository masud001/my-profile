export default function Page({ params }: { params: { slug: string[] } }) {
    if (params.slug?.length === 2) {
        return <div>
            <h1>view doc for {params.slug[0]} and concept  {params.slug[1] }</h1>
        </div>;
    } else if (params.slug?.length === 1) {
        return <div>
            <h1>view doc janina {params.slug[0]} </h1>
        </div>;
    }
    return (
        <div>
            <h1>docs page </h1>
        </div>
    );
}