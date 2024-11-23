/**
 * Order component displays a list of grouped orders fetched from the backend API.
 * It organizes orders by `order_id` and provides detailed information for each order item.
 *
 * @component
 * @example
 * return (
 *   <Order />
 * )
 *
 * @returns {JSX.Element} The rendered Order component.
 *
 * @remarks
 * This component utilizes the `AuthContext` to retrieve the logged-in user's data
 * and fetches the orders from a backend API using Axios. Orders are grouped by `order_id`
 * for better visualization. Each order displays its date, item details, and links to product pages.
 *
 * @typedef {Object} OrderItem
 * @property {number} id - The unique identifier of the order item.
 * @property {string} title - The title of the product in the order.
 * @property {string} order_id - The identifier for the order to which the item belongs.
 * @property {string} date - The date when the order was placed.
 * @property {string} price - The price of the product in the order.
 * @property {string} link - The link to the product page.
 * @property {string} website - The website where the product is listed.
 * @property {string} img_link - The image link of the product in the order.
 *
 * @state {OrderItem[]} order - The list of order items fetched from the API.
 * @state {string} error - The error message to display if fetching data fails.
 *
 * @function fetchOrder - Fetches the order data from the backend API.
 * @function groupOrdersById - Groups order items by their `order_id`.
 *
 * @requires axios
 * @requires @mui/material
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

interface OrderItem {
  id: number;
  title: string;
  order_id: string;
  date: string;
  price: string;
  link: string;
  website: string;
  img_link: string;
}

const Order: React.FC = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const { userData } = useContext(AuthContext);
  const [error, setError] = useState("");

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/get-orders/${userData?.username}`);
      if (response.data) {
        setOrder(response.data);
        console.log(response.data);
        setError("");
      }
    } catch (error) {
      setError("Failed to fetch order items. Please try again.");
      console.error("Error fetching order:", error);
    }
  };

  // Group orders by order_id
  const groupOrdersById = (orders: OrderItem[]) => {
    return orders.reduce((groups: Record<string, OrderItem[]>, item) => {
      if (!groups[item.order_id]) {
        groups[item.order_id] = [];
      }
      groups[item.order_id].push(item);
      return groups;
    }, {});
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  // Create grouped orders
  const groupedOrders = groupOrdersById(order);

  return (
    <Container className="order-container">
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      {error && (
        <Alert severity="error" className="error">
          {error}
        </Alert>
      )}
      {order.length > 0 ? (
        Object.entries(groupedOrders).map(([orderId, items]) => (
          <Box key={orderId} mb={4} p={2} border={1} borderRadius={4} borderColor="grey.300">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6">Order ID: {orderId}</Typography>
              <Typography variant="body2" color="textSecondary">
                Date: {items[0].date}
              </Typography>
            </Box>
            <List>
              {items.map((item) => (
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
                </ListItem>
              ))}
            </List>
          </Box>
        ))
      ) : (
        <Typography>No items in the order.</Typography>
      )}
    </Container>
  );
};

export default Order;
