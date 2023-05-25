import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const login = true;
const ProtectedRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!login) {
      navigate("/");
    } else if (login && location.pathname === "/admin") {
      navigate("/admin/home");
    }
  });

  return <Outlet />;
};

export default ProtectedRoute;
