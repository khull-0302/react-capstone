import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [filterBy, setFilterBy] = useState("");
  const [loading, setLoading] = useState(true);

  const filteredProducts = products
    .filter((p) => category === "all" || p.category === category)
    .sort((a, b) => {
      switch (filterBy) {
        case "priceLow":
          return a.price - b.price;
        case "priceHigh":
          return b.price - a.price;
        case "id":
          return a.id - b.id;
        default:
          return 0;
      }
    });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <h2>
        <FontAwesomeIcon id="loading" icon="fa-circle-notch" spin size="2x" />
      </h2>
    );

  return (
    <div className="products-container">
      <h1>Products Page</h1>
      <div className="filter">
        <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
          <option value="id">Product id</option>
          <option value="priceLow">Price low to high</option>
          <option value="priceHigh">Price high to low</option>
        </select>
        <button onClick={() => setCategory("men's clothing")}>Mens</button>
        <button onClick={() => setCategory("women's clothing")}>Womens</button>
        <button onClick={() => setCategory("electronics")}>Electronics</button>
        <button onClick={() => setCategory("jewelery")}>Jewlery</button>
        <button onClick={() => setCategory("all")}>All</button>
      </div>
      <div className="products-wrapper">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
