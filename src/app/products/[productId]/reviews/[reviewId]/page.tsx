import { notFound } from "next/navigation";

export default function ReviewDetail ({ params }: {
    params: {
        productId: string;
        reviewId: string;
    }
}) {
    const { productId, reviewId } = params;
    const parsedRevId = parseInt(reviewId);
    if (!parsedRevId || parsedRevId > 1000) notFound();
    return <h3>This is review {reviewId} for product {productId}</h3>
}