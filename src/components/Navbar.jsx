import { Link, NavLink } from "react-router";
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-lg text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-3">
        <img src={user} alt="" />
        <Link className="btn btn-primary px-10" to="/auth/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
