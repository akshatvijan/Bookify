import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { HiMiniUser } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/order" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, logout } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery.trim()}`);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsDropDownOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="max-w-screen-2xl mx-auto md:mx-16 px-4 py-6">
      <nav className="flex justify-between items-center">

        {/* Left Section */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/" className="flex gap-2 items-center font-semibold">
            <HiBars3CenterLeft className="size-6" />
            Bookify
          </Link>

          <form onSubmit={handleSearch} className="relative sm:w-72 w-40">
            <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </form>
        </div>

        {/* Right Section */}
        <div className="relative flex items-center md:space-x-4 space-x-2">

          {/* User Section */}
          <div>
            {currentUser ? (
              <>
                <button
                  onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                >
                  <img
                    src={currentUser?.photoURL || avatarImg}
                    alt="User"
                    className="size-8 rounded-full ring-2 ring-blue-500"
                  />
                </button>

                {isDropDownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            onClick={() => setIsDropDownOpen(false)}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}

                      <li>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiMiniUser className="size-6" />
              </Link>
            )}
          </div>

          {/* Wishlist Icon */}
          <button onClick={() => alert("Wishlist feature coming soon!")} className="hidden sm:block">
            <CiHeart className="size-6" />
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md"
          >
            <MdOutlineShoppingCart className="size-4" />
            <span className="text-sm font-semibold sm:ml-1">
              {cartItems.length}
            </span>
          </Link>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;