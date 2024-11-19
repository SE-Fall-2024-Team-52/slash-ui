/**
 * SlashRouter component sets up the routing for the application.
 * It defines the routes and their corresponding components.
 *
 * Routes:
 * - "/" renders the LandingPage component.
 * - "/login" renders the LoginPage component.
 * - "/wishlist" renders the WishlistPage component.
 * - "/sell" renders the PostPage component.
 * - "/search" renders the SearchPage component.
 * - "/register" renders the RegisterPage component.
 *
 * @component
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/Login/LoginPage";
import PostPage from "./pages/Post/PostPage";
import SearchPage from "./pages/Search/SearchPage";
import WishlistPage from "./pages/Wishlist/WishlistPage";
import RegisterPage from "./pages/Register/RegisterPage";
import { ShoppingCartPage } from "./pages/ShoppingCart/ShoppingCartPage";
import OrderPage from "./pages/Order/OrderPage";

const SlashRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/sell" element={<PostPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
      <Route path="/orders" element={<OrderPage />} />
    </Routes>
  );
};

export default SlashRouter;
