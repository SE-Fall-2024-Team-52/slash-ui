/**
 * Wishlist component displays a list of products that the user has added to their wishlist.
 * It fetches the wishlist items from the backend API and allows the user to remove items from the wishlist.
 *
 * @component
 * @example
 * return (
 *   <Wishlist />
 * )
 *
 * @returns {JSX.Element} The rendered Wishlist component.
 *
 * @remarks
 * This component uses the `AuthContext` to get the current user's data and fetches the wishlist items
 * from the backend API using Axios. It also handles the removal of items from the wishlist.
 *
 * @typedef {Object} WishlistItem
 * @property {number} id - The unique identifier of the wishlist item.
 * @property {string} title - The title of the wishlist item.
 * @property {string} price - The price of the wishlist item.
 * @property {string} link - The link to the product page of the wishlist item.
 * @property {string} website - The website where the wishlist item is listed.
 * @property {string} img_link - The image link of the wishlist item.
 *
 * @state {WishlistItem[]} wishlist - The list of wishlist items.
 * @state {string} error - The error message to display if fetching or removing items fails.
 *
 * @function fetchWishlist - Fetches the wishlist items from the backend API.
 * @function handleRemove - Removes an item from the wishlist by making a DELETE request to the backend API.
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
import { Product } from "../SearchPage/SearchProduct";

interface WishlistItem {
  id: number;
  title: string;
  price: string;
  link: string;
  website: string;
  img_link: string;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const { userData } = useContext(AuthContext);
  const [error, setError] = useState("");

  const fetchWishlist = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/wishlist/${userData?.username}`);
      if (response.data) {
        setWishlist(response.data);
        setError("");
      }
    } catch (error) {
      setError("Failed to fetch wishlist items. Please try again.");
      console.error("Error fetching wishlist:", error);
    }
  };

  const handleRemove = async (id: number) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/wishlist/${id}`);
      // Update the state to remove the item from the list
      alert("item removed from wishlist");
      fetchWishlist();
    } catch (error) {
      setError("Failed to remove item from wishlist. Please try again.");
      console.error("Error removing item:", error);
    }
  };

  const addToCart = async (item: WishlistItem) => {
    try {
      const response = await axios.post(`http://127.0.0.1:5000/api/cart`, {
        item,
        username: userData?.username,
      });
      if (response.status === 200) {
        alert("Item added to cart successfully!");
      }
      handleRemove(item.id);
      fetchWishlist();
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <Container className="wishlist-container">
      <Typography variant="h4" gutterBottom>
        Wishlist
      </Typography>
      {error && (
        <Alert severity="error" className="error">
          {error}
        </Alert>
      )}
      {wishlist.length > 0 ? (
        <List>
          {wishlist.map((item) => (
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
                <Button sx={{ marginRight: "5px" }} variant="contained" color="secondary" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
                <IconButton edge="end" aria-label="delete" onClick={() => handleRemove(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No items in the wishlist.</Typography>
      )}
    </Container>
  );
};

export default Wishlist;
