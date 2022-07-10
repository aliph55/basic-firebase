import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  return (
    <div className="flex items-center justify-between p-4 -[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer ">
          Netflex
        </h1>
      </Link>
      <div>
        {user ? (
          <>
            <Link to="/account">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                Account
              </button>
            </Link>

            <Link to="/">
              <button
                onClick={() => logOut()}
                className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
              >
                Log out
              </button>
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
