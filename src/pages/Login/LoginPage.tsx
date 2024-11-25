/**
 * LoginPage component renders a login form with username and password fields.
 * It handles user authentication by sending a POST request to the server.
 * On successful login, it updates the user context and navigates to the search page.
 *
 * @component
 * @example
 * return (
 *   <LoginPage />
 * )
 *
 * @returns {JSX.Element} The rendered login page component.
 *
 * @remarks
 * This component uses Material-UI for styling and layout.
 * It also utilizes React Router for navigation and Axios for HTTP requests.
 *
 * @hook
 * - useState: Manages the state of username and password inputs.
 * - useContext: Accesses the AuthContext to get and set user data.
 * - useEffect: Logs user data to the console whenever it changes.
 * - useNavigate: Provides navigation functionality to redirect users after login.
 *
 * @dependencies
 * - @mui/material: For UI components like TextField, Button, and Typography.
 * - axios: For making HTTP requests to the backend.
 * - react: Core React library for building the component.
 * - react-router-dom: For navigation and routing.
 *
 * @param {React.FormEvent} e - The form submission event.
 */
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext, UserData } from "../../ContextWrapper";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    axios
      .post("http://localhost:5000/login", { username, password })
      .then((res: any) => {
        if (res.data.content.status === "success") {   
          console.log(res.data.content)
          alert("Login successful!");
          console.log("Login successful!");
          setUserData(res.data.content.data as UserData);
          if(res.data.content.data.role === "buyer"){
            navigate("/search");
          }
          else if(res.data.content.data.role === "seller"){
            navigate("/sell");
          }
        }
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 65px)", // Adjust the height to account for the navbar
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "2.3rem", color: "#888", textAlign: "center" }}
      >
        Welcome Back
      </Typography>
      <form
        onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          data-testid="username-input"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          data-testid="password-input"
        />
        <Button
          variant="contained"
          data-testid="login-button"
          color="primary"
          type="submit"
          style={{ marginTop: "16px" }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
