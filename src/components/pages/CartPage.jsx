import { useHistory } from "react-router-dom";

import { useFavorites } from "../CartProvider";
import ProductCard from "../ProductCard";

const FavoritesPage = () => {
  const { push } = useHistory();
  const { favorites } = useFavorites();

  let total = 0;
  for (let i = 0; i < favorites.length; i++) {
    const product = favorites[i];
    const quantity = product.quantity || 1;

    total += product.price * quantity;
  }

  return (
    <div className="cart-container">
      <h1>My Cart</h1>

      {favorites.length === 0 ? (
        <div className="empty-cart">
          <p>No Products In Cart</p>
          <button onClick={() => push("/products")}>Browse products</button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-header">
            <button id="cart-button" onClick={() => push("/products")}>
              Browse products
            </button>
          </div>
          <div className="cart-main">
            <div className="product-wrapper">
              {favorites.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  showQuantity={true}
                />
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <p>Total: ${total}</p>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
