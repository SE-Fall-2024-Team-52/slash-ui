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
