import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log("isAuthenticated", isAuthenticated)
  const userrol = localStorage.getItem('user_role')
  console.log("userrols", userrol)
  // HOOKS
useEffect(() => {
  if  (userrol === 2 && isAuthenticated) {
    navigate("/packages-page");
  } else if (userrol === 3) {
    navigate("/");
  }
}, [isAuthenticated  ]);
  return children;
};

export default AuthRoute;




// useEffect(() => {
//   if ((userrol === 2 && isAuthenticated) || (userrol === 3 && isAuthenticated)) {
//     navigate("/packages-page");
//   } else if (!isAuthenticated) {
//     navigate("/");
//   }
// }, [isAuthenticated  ]);
