/**
 * ShoppingCart component displays a list of products that the user has added to their shoppingCart.
 * It fetches the shoppingCart items from the backend API and allows the user to remove items from the shoppingCart.
 *
 * @component
 * @example
 * return (
 *   <ShoppingCart />
 * )
 *
 * @returns {JSX.Element} The rendered ShoppingCart component.
 *
 * @remarks
 * This component uses the `AuthContext` to get the current user's data and fetches the shoppingCart items
 * from the backend API using Axios. It also handles the removal of items from the shoppingCart.
 *
 * @typedef {Object} ShoppingCartItem
 * @property {number} id - The unique identifier of the shoppingCart item.
 * @property {string} title - The title of the shoppingCart item.
 * @property {string} price - The price of the shoppingCart item.
 * @property {string} link - The link to the product page of the shoppingCart item.
 * @property {string} website - The website where the shoppingCart item is listed.
 * @property {string} img_link - The image link of the shoppingCart item.
 *
 * @state {ShoppingCartItem[]} shoppingCart - The list of shoppingCart items.
 * @state {string} error - The error message to display if fetching or removing items fails.
 *
 * @function fetchShoppingCart - Fetches the shoppingCart items from the backend API.
 * @function handleRemove - Removes an item from the shoppingCart by making a DELETE request to the backend API.
 *
 * @requires axios
 * @requires @mui/material
 * @requires @mui/icons-material/Delete
 * @requires react-router-dom
 * @requires ./style.css
 * @requires ../../ContextWrapper
 */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { AuthContext } from "../../ContextWrapper";
import { Container, Typography, Alert, List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

interface ShoppingCartItem {
  id: number;
  title: string;
  price: string;
  link: string;
  website: string;
  img_link: string;
}

const ShoppingCart: React.FC = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);
  const { userData } = useContext(AuthContext);
  const [error, setError] = useState("");

  const totalCost = shoppingCart.reduce((acc, item) => {
    // Ensure item.price is a string before using replace
    const priceAsString = typeof item.price === "string" ? item.price : String(item.price);
    const numericPrice = parseFloat(priceAsString.replace("$", ""));
    return acc + (isNaN(numericPrice) ? 0 : numericPrice);
  }, 0);
  console.log(shoppingCart);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchShoppingCart = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/cart/${userData?.username}`);
      if (response.data) {
        setShoppingCart(response.data);
        setError("");
      }
    } catch (error) {
      setError("Failed to fetch shoppingCart items. Please try again.");
      console.error("Error fetching shoppingCart:", error);
    }
  };

  const handleRemove = async (id: number) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/cart/${id}`);
      // Update the state to remove the item from the list
      alert("item removed from shoppingCart");
      fetchShoppingCart();
    } catch (error) {
      setError("Failed to remove item from shoppingCart. Please try again.");
      console.error("Error removing item:", error);
    }
  };

  const handleBuy = async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:5000/api/place-order`, {
        items: shoppingCart,
        username: userData?.username,
      });
      if (response.status === 200) {
        alert("Order placed successfully!");
        fetchShoppingCart();
      }
    } catch (error) {
      console.error("Error buying", error);
      alert("Failed to buy!");
    }
  };

  useEffect(() => {
    fetchShoppingCart();
  }, []);

  return (
    <Container className="shoppingCart-container">
      <Typography variant="h4" gutterBottom>
        ShoppingCart
      </Typography>
      {error && (
        <Alert severity="error" className="error">
          {error}
        </Alert>
      )}
      {shoppingCart.length > 0 ? (
        <>
          <List>
            {shoppingCart.map((item) => (
              <ListItem key={item.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src={item.img_link} alt={item.title} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Price: {item.price}
                      </Typography>
                      <br />
                      <Link to={item.link} target="_blank" rel="noopener noreferrer">
                        View Product
                      </Link>
                    </>
                  }
                />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleRemove(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>
          <Box marginTop={2}>
            <Typography variant="h5" color="primary">
              Total Cost: ${totalCost.toFixed(2)}
            </Typography>
          </Box>
          <Button variant="contained" color="primary" size="large" style={{ marginTop: "10px" }} onClick={() => handleBuy()}>
            Buy
          </Button>
        </>
      ) : (
        <Typography>No items in the shoppingCart.</Typography>
      )}
    </Container>
  );
};

export default ShoppingCart;
