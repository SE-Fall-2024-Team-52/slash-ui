/**
 * RegisterPage component allows users to create a new account by providing their
 * username, password, first name, last name, and email address. It validates the
 * password and confirm password fields to ensure they match before submitting the
 * registration form to the server.
 *
 * @component
 * @example
 * return (
 *   <RegisterPage />
 * )
 *
 * @returns {React.FC} A React functional component that renders the registration form.
 *
 * @remarks
 * This component uses Material-UI for styling and layout. It also uses Axios for
 * making HTTP requests to the backend server for user registration. Upon successful
 * registration, the user is redirected to the search page.
 *
 * @requires {@link https://www.npmjs.com/package/axios | axios}
 * @requires {@link https://mui.com/ | @mui/material}
 * @requires {@link https://reactjs.org/ | React}
 * @requires {@link https://reactrouter.com/ | react-router-dom}
 *
 * @see {@link https://mui.com/components/box/ | Box (Material-UI)}
 * @see {@link https://mui.com/components/container/ | Container (Material-UI)}
 * @see {@link https://mui.com/components/text-field/ | TextField (Material-UI)}
 * @see {@link https://mui.com/components/button/ | Button (Material-UI)}
 */
import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, UserData } from "../../ContextWrapper";

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("buyer")
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(username,
      password,
      email,
      firstName,
      lastName,
      role)
    axios
      .post("http://localhost:5000/register", {
        username,
        password,
        email,
        firstName,
        lastName,
        role,
      })
      .then((res: any) => {
        if (res.data.content.status === "success") {
          console.log("Login successful!");
          setUserData(res.data.content.data as UserData);
          if(role === "buyer"){
            navigate("/search");
          }
          else if(role === "seller"){
            navigate("/sell");
          }
        }
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleRegister}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            data-testid="username"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            data-testid="firstName"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            data-testid="lastName"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            data-testid="email"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            data-testid="password"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            data-testid="confirmPassword"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="role">Role:</label>
          <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <Button
            data-testid="submit"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;
