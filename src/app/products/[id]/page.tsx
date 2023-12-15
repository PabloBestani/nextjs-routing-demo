import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function ProductDetail ({ params }: {params: { id: string } }) {
    const { id } = params;
    return <h2>Detail for prod n{id}</h2>
}