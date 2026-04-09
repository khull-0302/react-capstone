import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useHistory } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
    };
    fetchProduct();
  }, []);
  return <h1>product detail</h1>;
}
