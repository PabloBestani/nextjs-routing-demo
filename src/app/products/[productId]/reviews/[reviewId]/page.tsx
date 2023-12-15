export default function ReviewDetail ({ params }: {
    params: {
        productId: string;
        reviewId: string;
    }
}) {
    const { productId, reviewId } = params;
    return <h3>This is review {reviewId} for product {productId}</h3>
}