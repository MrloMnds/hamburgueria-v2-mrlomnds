import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ProductsContext } from "../../contexts/ProductsContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  const { loadingProducts } = useContext(ProductsContext);

  if (loading || loadingProducts) {
    return null;
  }
  
  return user ? <Outlet /> : <Navigate to="login" />;
};
