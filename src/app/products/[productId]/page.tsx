import ProductDetail from "@/components/ProductDetail";

const SingleProductPage = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <ProductDetail productId={params.productId} />
    </div>
  );
};
export default SingleProductPage;
