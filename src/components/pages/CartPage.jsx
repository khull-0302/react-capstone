import { useHistory } from "react-router-dom";

import { useFavorites } from "../CartProvider";
import ProductCard from "../ProductCard";

// const FavoritesPage = () => {
//   const { push } = useHistory();
//   const { favorites } = useFavorites();

//   return (
//     <div className="cart-container">
//       <h1>My Cart</h1>

//       {favorites.length === 0 ? (
//         <div>
//           <p>No favorites yet</p>
//           <button onClick={() => push("/products")}>Browse products</button>
//         </div>
//       ) : (
//         <div className="product-wrapper">
//           <span>
//             <button onClick={() => push("/products")}>Browse products</button>
//           </span>
//           {favorites.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

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
        <div>
          <p>No favorites yet</p>
          <button onClick={() => push("/products")}>Browse products</button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="product-wrapper">
            <button id="cart-button" onClick={() => push("/products")}>
              Browse products
            </button>

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
      )}
    </div>
  );
};

export default FavoritesPage;
