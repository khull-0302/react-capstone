import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useFavorites } from "./FavoritesProvider";

export default function NavBar() {
  // const { favorites } = useFavorites();
  return (
    <nav>
      <NavLink className="home-button" to="/home">
        Shopping Spree
      </NavLink>
      <div className="button-groups">
        <NavLink className="products-button" to="/products">
          <button>
            <FontAwesomeIcon icon="fa-circle-plus" size="2x" />
            <span>Products</span>
          </button>
        </NavLink>
        <NavLink className="about-button" to="/info">
          <button>
            <FontAwesomeIcon icon="fa-circle-info" size="2x" />
            <span>Info</span>
            {/* Favorites ({favorites.length}) */}
          </button>
        </NavLink>
        <NavLink className="contact-button" to="/contact">
          <button>
            <FontAwesomeIcon icon="fa-square-phone" size="2x" />
            <span>Contact</span>
          </button>
        </NavLink>
        <NavLink className="cart-button" to="/cart">
          <button>
            <FontAwesomeIcon icon="fa-cart-shopping" size="2x" />
            <span>Cart</span>
            {/* Favorites ({favorites.length}) */}
          </button>
        </NavLink>
      </div>
    </nav>
  );
}
