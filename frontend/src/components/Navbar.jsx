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

const navigation = [
    {
        name: "Dashboard", href:"/dashboard"
    },
    {
        name : "Orders",href : "/order"
    },
    {
        name : "Cart Page" ,href:"/cart"
    },
    {
        name : "Check Out",href : "/checkout"
    }
]
const Navbar = () => {
    const [isDropDownOpen,setisDropDownOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);
    const {currentUser,logout} = useAuth()
    const handleLogout = () =>{
      logout();
    }
  return (
    <header className="max-w-screen-2xl mx-auto md:mx-16 px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <div className="flex gap-2"><HiBars3CenterLeft className="size-6" /> Bookify</div>
          </Link>
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoIosSearch className="absolute inline-block left-3 inset-y-1 size-6" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={()=>setisDropDownOpen(!isDropDownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {
                    isDropDownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                            <ul className="py-2">
                                {
                                    navigation.map((item)=> (
                                        <li key={item.name} onClick={()=> setisDropDownOpen(false)}><Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">{item.name}</Link></li>
                                    ))
                                }
                                <li className="block px-4 py-2 text-sm hover:bg-gray-100">
                                  <button onClick={handleLogout} className="">Logout</button>
                                </li>
                            </ul>
                        </div>
                    )
                }
              </>
            ) : (
              <Link to="/login">
                <HiMiniUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <CiHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md"
          >
            <MdOutlineShoppingCart className="size-4" />
            {
              cartItems.length>0 ?  <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> : <span className="text-sm font-semibold sm:ml-1">0</span> 
            }         
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
