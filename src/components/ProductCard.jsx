import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { useFavorites } from "./CartProvider";

const ProductCard = ({ product, showQuantity = false }) => {
  const { push } = useHistory();
  const {
    isFavorite,
    addFavorite,
    removeFavorite,
    increaseQuantity,
    decreaseQuantity,
  } = useFavorites();

  const isFav = isFavorite(product.id);
  const toggleFavorite = (e) => {
    e.stopPropagation();
    if (isFav) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return (
    <div
      onClick={() => push(`/product/${product.id}`)}
      className="product-card"
    >
      <img src={product.image} alt="" />
      <h4>{product.title}</h4>
      <span>${product.price}</span>
      <button onClick={toggleFavorite}>
        <FontAwesomeIcon
          icon="fa-cart-shopping"
          style={{ color: isFav ? "red" : "gray" }}
        />
      </button>
      {showQuantity && isFav && (
        <div onClick={(e) => e.stopPropagation()} className="qty-controls">
          <button id="decrease" onClick={() => decreaseQuantity(product.id)}>
            -
          </button>
          <span>{product.quantity || 1}</span>
          <button id="increase" onClick={() => increaseQuantity(product.id)}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
