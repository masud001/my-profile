import { Metadata } from "next";



type props = { params:{ blogId: string }};

export const generateMetadata = ({params}:props):Metadata => {
    return {
        title: `Blog title ${params.blogId}`,
        description: `Blog description ${params.blogId}`,
    };
}

export default function BlogDetails({ params }:props ) {
    return (
        <div>
            <h1>Blog details page -- {params.blogId}</h1>
        </div>
    );
}