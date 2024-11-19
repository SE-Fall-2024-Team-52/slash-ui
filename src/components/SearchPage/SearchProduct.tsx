/**
 * SearchProducts component allows users to search for products based on various criteria
 * such as product name, price range, and currency. It fetches the search results from an API
 * and displays them in a list. Users can also add products to their wishlist.
 *
 * @component
 * @example
 * return (
 *   <SearchProducts />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @remarks
 * This component uses the AuthContext to get the user data and axios for making HTTP requests.
 * It also uses Material-UI components for styling and layout.
 *
 * @typedef {Object} Product
 * @property {string} title - The title of the product.
 * @property {string} price - The price of the product.
 * @property {string} link - The link to the product page.
 * @property {string} website - The website where the product is listed.
 * @property {string} img_link - The link to the product image.
 *
 * @state {string} product - The name of the product to search for.
 * @state {string} currency - The currency to use for the price range.
 * @state {number} minPrice - The minimum price for the search.
 * @state {number} maxPrice - The maximum price for the search.
 * @state {Product[]} results - The list of search results.
 * @state {string} error - The error message to display if the search fails.
 *
 * @function handleSearch - Fetches the search results from the API based on the search criteria.
 * @function addToWishlist - Adds a selected product to the user's wishlist.
 */
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../ContextWrapper";
import "./style.css";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Alert,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

export interface Product {
  title: string;
  price: string;
  link: string;
  website: string;
  img_link: string;
}

const SearchProducts: React.FC = () => {
  const { userData } = useContext(AuthContext);

  const [product, setProduct] = useState("");
  const [currency, setCurrency] = useState("USD($)");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [results, setResults] = useState<Product[]>([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/search`, {
        params: {
          item_name: product,
          min_price: minPrice,
          max_price: maxPrice,
          currency,
        },
      });

      if (response.data && response.data.length > 0) {
        setResults(response.data);
        setError("");
      } else {
        setResults([]);
        setError("No similar products found.");
      }
    } catch (error) {
      setError("Failed to fetch results. Please try again.");
      console.error("Error fetching search results:", error);
    }
  };

  //Adding the selected items into the wishlist
  const addToWishlist = async (item: Product) => {
    try {
      const response = await axios.post(`http://127.0.0.1:5000/api/wishlist`, {
        item,
        username: userData?.username,
      });
      if (response.status === 200) {
        alert("Item added to wishlist successfully!");
      }
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
      alert("Failed to add item to wishlist.");
    }
  };

  const addToCart = async (item: Product) => {
    try {
      const response = await axios.post(`http://127.0.0.1:5000/api/cart`, {
        item,
        username: userData?.username,
      });
      if (response.status === 200) {
        alert("Item added to cart successfully!");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  return (
    <div className="main-container">
      <TextField
        label="Enter product name"
        variant="outlined"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        required
        data-testid="product-input"
      />
      <FormControl variant="outlined">
        <InputLabel>Currency</InputLabel>
        <Select value={currency} onChange={(e) => setCurrency(e.target.value)} label="Currency" data-testid="currency-input">
          <MenuItem value="USD($)">USD($)</MenuItem>
          <MenuItem value="EUR(€)">EUR(€)</MenuItem>
          <MenuItem value="JPY(¥)">JPY(¥)</MenuItem>
          <MenuItem value="INR(₹)">INR(₹)</MenuItem>
          <MenuItem value="GBP(£)">GBP(£)</MenuItem>
          <MenuItem value="AUD($)">AUD($)</MenuItem>
          <MenuItem value="CAD($)">CAD($)</MenuItem>
        </Select>
      </FormControl>
      <TextField
        type="number"
        label="Min price"
        variant="outlined"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
        data-testid="minprice-input"
      />
      <TextField
        type="number"
        label="Max price"
        variant="outlined"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        data-testid="maxprice-input"
      />
      <Button data-testid="search-button" variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>

      {error && <Alert severity="error">{error}</Alert>}

      {results.length > 0 && (
        <div className="results">
          <Typography variant="h5">Product List</Typography>
          <List>
            {results.map((result, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src={result.img_link} alt={result.title} />
                </ListItemAvatar>
                <ListItemText
                  primary={result.title}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Price: {result.price}
                      </Typography>
                      <br />
                      <Link to={result.link} target="_blank" rel="noopener">
                        View Product
                      </Link>
                      <br />
                      <Button variant="contained" color="secondary" onClick={() => addToWishlist(result)}>
                        Add to Wishlist
                      </Button>

                      <Button sx={{ marginLeft: "5px" }} variant="contained" color="secondary" onClick={() => addToCart(result)}>
                        Add to Cart
                      </Button>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

export default SearchProducts;
