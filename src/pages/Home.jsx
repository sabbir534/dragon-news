import React from "react";
import { Navigate } from "react-router";

const Home = () => {
  return <Navigate to="/category/1" replace />;
};

export default Home;
