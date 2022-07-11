import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  return (
    <div className="flex items-center justify-between p-4 -[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer ">
          Blog
        </h1>
      </Link>
      <div className="flex">
        {user ? (
          <>
            <Link to="/account">
              <h1 className="bg-red-600 px-2 text-xl rounded cursor-pointer text-white">
                Account
              </h1>
            </Link>
            <Link to="/createpost">
              <h1 className="bg-red-600 px-2 text-xl rounded cursor-pointer text-white">
                Create post
              </h1>
            </Link>
            <Link to="/">
              <h1
                onClick={() => logOut()}
                className="bg-red-600 px-2 text-xl rounded cursor-pointer text-white"
              >
                Log out
              </h1>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                Sign in
              </button>
            </Link>

            <Link to="/signup">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                Sign Out
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
