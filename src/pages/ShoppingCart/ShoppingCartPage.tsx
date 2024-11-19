import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextWrapper";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

export const ShoppingCartPage = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);
  return <ShoppingCart />;
};
