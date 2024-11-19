/**
 * Navigation component that renders the application's navigation bar.
 *
 * This component uses Material-UI's AppBar and Toolbar to create a navigation bar
 * with links to different routes in the application. It also displays the user's
 * login status and provides a logout button if the user is logged in.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered navigation bar component.
 *
 * @example
 * // Usage example:
 * // <Navigation />
 *
 * @remarks
 * This component uses React Router's `Link` component for navigation and `useNavigate`
 * for programmatic navigation. It also consumes the `AuthContext` to get the current
 * user's data and to update the user state on logout.
 *
 * @requires {@link https://mui.com/material-ui/react-app-bar/ | @mui/material/AppBar}
 * @requires {@link https://mui.com/material-ui/react-toolbar/ | @mui/material/Toolbar}
 * @requires {@link https://mui.com/material-ui/react-typography/ | @mui/material/Typography}
 * @requires {@link https://mui.com/material-ui/react-button/ | @mui/material/Button}
 * @requires {@link https://mui.com/material-ui/react-box/ | @mui/material/Box}
 * @requires {@link https://reactrouter.com/web/guides/quick-start | react-router-dom}
 * @requires {@link https://reactjs.org/docs/hooks-reference.html#usecontext | React.useContext}
 * @requires {@link https://reactjs.org/docs/hooks-reference.html#useeffect | React.useEffect}
 *
 * @see {@link https://reactrouter.com/web/api/Link | Link}
 * @see {@link https://reactrouter.com/web/api/Hooks | useNavigate}
 * @see {@link ../../ContextWrapper | AuthContext}
 */
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../ContextWrapper";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

const Navigation = () => {
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const logout = () => {
    setUserData(undefined);
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button component={Link} to="/" color="inherit" data-testid="home-button">
              <HomeIcon />
              Home
            </Button>
            <Button component={Link} to="/search" color="inherit" data-testid="search-button">
              <SearchIcon />
              Search
            </Button>
            <Button component={Link} to="/wishlist" color="inherit" data-testid="wishlist-button">
              <ListAltIcon />
              Wishlist
            </Button>
            <Button component={Link} to="/sell" color="inherit" data-testid="sell-button">
              <MonetizationOnIcon /> Sell
            </Button>
            <Button component={Link} to="/sell" color="inherit" data-testid="sell-button">
              <ShoppingCartIcon />
              Cart
            </Button>
          </Box>
        </Typography>
        {userData ? (
          <React.Fragment>
            <Typography color="textPrimary" variant="overline" component="div" fontStyle="italic">
              logged in as: {userData.username}
            </Typography>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
            <Button component={Link} to="/register" color="inherit">
              Register
            </Button>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
