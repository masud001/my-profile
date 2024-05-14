import { notFound } from "next/navigation";

export default function BlogReview({ params }: { params: { blogId: string; reviewsId: string } }) {
    if ( parseInt(params.reviewsId ) > 10) {
        return notFound();
    }
    return (
        <div>
            <h1>this is blog review { params.reviewsId}</h1>
            <h1>this is blog blog { params.blogId}</h1>
        </div>
    );
}

