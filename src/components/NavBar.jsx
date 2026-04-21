import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  return (
    <nav>
      <NavLink className="home-button" to="/home">
        Shopping Spree
      </NavLink>
      <div className="button-groups">
        <NavLink className="products-button" to="/products">
          <button>
            <div className="icon-hover-group">
              <FontAwesomeIcon icon="fa-circle-plus" size="2x" />
              <span>Products</span>
            </div>
          </button>
        </NavLink>
        <NavLink className="about-button" to="/info">
          <button>
            <div className="icon-hover-group">
              <FontAwesomeIcon icon="fa-circle-info" size="2x" />
              <span>Info</span>
            </div>
          </button>
        </NavLink>
        <NavLink className="contact-button" to="/contact">
          <button>
            <div className="icon-hover-group">
              <FontAwesomeIcon icon="fa-square-phone" size="2x" />
              <span>Contact</span>
            </div>
          </button>
        </NavLink>
        <NavLink className="cart-button" to="/cart">
          <button>
            <div className="icon-hover-group">
              <FontAwesomeIcon icon="fa-cart-shopping" size="2x" />
              <span>Cart</span>
            </div>
          </button>
        </NavLink>
      </div>
    </nav>
  );
}
