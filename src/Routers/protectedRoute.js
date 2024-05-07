import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
console.log("isAuthenticated protected routed"  , isAuthenticated)
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login-page");
    }
  }, [isAuthenticated]);
  return children;
};

export default ProtectedRoute;
