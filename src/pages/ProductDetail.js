import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.country}</p>
    </section>
  );
};

export default ProductDetail;
