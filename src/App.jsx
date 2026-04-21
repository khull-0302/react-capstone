import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AboutPage from "./components/pages/AboutPage";
import CartPage from "./components/pages/CartPage";
import ContactPage from "./components/pages/ContactPage";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductDetail from "./components/pages/ProductDetail";
import FavoritesProvider from "./components/CartProvider";
import NotFoundPage from "./components/pages/NoPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import icons from "./assets/icons";
icons();

export default function App() {
  return (
    <div className="app-container">
      <FavoritesProvider>
        <ToastContainer position="top-right" autoClose={2000} />
        <BrowserRouter>
          <Navbar />
          <div className="main-page-container">
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/info" component={AboutPage} />
              <Route path="/products" component={ProductsPage} />
              <Route path="/product/:productId" component={ProductDetail} />
              <Redirect exact from="/" to="/home" />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </FavoritesProvider>
    </div>
  );
}
