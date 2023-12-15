import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function ProductDetail ({ params }: {params: { productId: string } }) {
    const { productId } = params;
    return <h2>Detail for prod n{productId}</h2>
}