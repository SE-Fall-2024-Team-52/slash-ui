import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextWrapper";
import Order from "../../components/Order/Order";

const OrderPage = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);
  return <Order />;
};

export default OrderPage;
