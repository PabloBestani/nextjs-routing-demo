import { notFound } from "next/navigation";

export default function Docs ({ params } : {
    params: {
        slug: string[];
    }
}) {
    const { slug } = params; // Slug tiene el formato equivalente a url.split("/")
    let output = "Docs home page";

    if (!slug) return <h1>{output}</h1>

    switch(slug.length) {
        case 1:
            output = `Viewing docs for feature ${slug[0]}`;
            break;
        case 2:
            output = `Viewing docs for feature ${slug[0]}, concept ${slug[1]}`;
            break;
        case 3:
            output = `Viewing docs for feature ${slug[0]}, concept ${slug[1]}, example ${slug[2]}`;
            break;
        default:
            throw notFound();
    }
    
    return <h1>{output}</h1>
}