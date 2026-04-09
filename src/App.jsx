import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AboutPage from "./components/pages/AboutPage";
import CartPage from "./components/pages/CartPage";
import ContactPage from "./components/pages/ContactPage";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import Navbar from "./components/NavBar";
import ProductDetail from "./components/pages/ProductDetail";

import icons from "./assets/icons";
icons();

export default function App() {
  return (
    <div className="app-container">
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
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
