import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-2">Login With</h2>
      <div>
        <button className="btn btn-outline btn-secondary  w-full mb-2">
          <FcGoogle size={20} />
          Login with Google
        </button>
        <button className="btn btn-outline btn-primary  w-full">
          <FaGithub size={20} />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
