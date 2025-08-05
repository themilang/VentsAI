import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Search from "../Search";
import { FaRepeat } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import Badge from "@mui/material/Badge";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header>
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="top-strip py-2 border-1 border-gray-300 bg-gray-100">
            <div className="container flex justify-around  ">
              <div className="flex items-center justify-between">
                <div className="col1 w-[50%] ">
                  <p className="text-sm font-[Montserrat] text-nowrap">
                    Get up to 90% off new season arrivals, limited time only{" "}
                  </p>
                </div>
              </div>
              <div>
                <ul className="flex space-x-6 ">
                  <li className="hover:text-[#ff5252] cursor-pointer font-[Montserrat] text-xs">
                    <Link to="/helpcenter">Help Center</Link>
                  </li>
                  <li className="hover:text-[#ff5252] font-[Montserrat] text-xs cursor-pointer">
                    <Link to="/ordertracking">Order Tracking</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center space-x-16 "
          >
            <div className="col1 mt-2 ">
              <img className="max-w-20" src={logo} alt="ventsai" />
            </div>
            <div className="col2  mt-2 w-[40%] ">
              <Search />
            </div>
            <div className="col3 mt-2 flex items-center justify-between space-x-6">
              <ul className="flex space-x-1 items-center">
                <li className="hover:text-[#ff5252] cursor-pointer font-[Montserrat] text-xs">
                  <Link to="/signin">Sign In</Link>
                </li>
                <p className="text-xs">/</p>
                <li className="hover:text-[#ff5252] cursor-pointer font-[Montserrat] text-xs">
                  <Link to="/signup">Sign Up </Link>
                </li>
              </ul>
              <div className="col4 flex space-x-3 items-center justify-between">
                <Badge badgeContent={0} showZero color="secondary">
                  <FaRepeat className="text-xl w-9 text-gray-700 cursor-pointer" />
                </Badge>
                <Badge badgeContent={3} showZero color="secondary">
                  <FaCartShopping className="text-xl w-9 text-gray-700 cursor-pointer" />
                </Badge>
                <Badge badgeContent={12} showZero color="secondary">
                  <FaHeart className="text-xl w-9 text-gray-700 cursor-pointer" />
                </Badge>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
