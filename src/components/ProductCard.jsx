import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { push } = useHistory();
  return (
    <div
      onClick={() => push(`/product/${product.id}`)}
      className="product-card"
    >
      <img src={product.image} alt="" />
      <h4>{product.title}</h4>
      <span>${product.price}</span>
      <button>
        <FontAwesomeIcon icon="fa-heart" />
      </button>
    </div>
  );
};

export default ProductCard;
