import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useHistory } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState([null]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading)
    return (
      <h2>
        <FontAwesomeIcon id="loading" icon="fa-circle-notch" spin size="2x" />
      </h2>
    );
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail-container">
      <h1 id="details">Details</h1>
      <button id="back-to-home" onClick={() => push("/products")}>
        Back to Products
      </button>
      <button id="back-to-cart" onClick={() => push("/cart")}>
        Back to Cart
      </button>
      <div className="product-detail-card">
        <img src={product.image} alt={product.title} width="200" />
        <h1>{product.title}</h1>
        <h3>Price: ${product.price}</h3>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Average: {product.rating.rate}/5</p>
        <p>Reviews: {product.rating.count}</p>
      </div>
    </div>
  );
}
