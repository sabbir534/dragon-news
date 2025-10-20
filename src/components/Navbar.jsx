import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user } = use(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-lg text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-3">
        <img src={userImg} alt="" />
        <Link className="btn btn-primary px-10" to="/auth/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
