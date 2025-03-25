import React from "react";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Badge, Input, message } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";

const Header = ({ setSearch }) => {
  const cart = useSelector((state) => state.cart);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log(pathname);

  const logOut = () => {
    if (window.confirm("Are you sure to logout?")) {
      localStorage.removeItem("posUser");
      navigate("/login");
      message.success("Logout successfully");
    }
  };

  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <Link to="/">
            <h2
              className="text-2xl font-bold 
                        md:text-4xl"
            >
              LOGO
            </h2>
          </Link>
        </div>
        <div
          className="header-search flex-1 flex justify-center"
          onClick={() => {
            pathname !== "/" && navigate("/");
          }}
        >
          <Input
            size="large"
            placeholder="Search Product.."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]:"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
        <div className="menu-links">
          <Link
            to={"/"}
            className={`menu-link ${pathname === "/" && "active"}`}
          >
            <span>
              <HomeOutlined className="md:text-2xl text-xl" />
              <span className="text-[10px] md:text-xs">Home</span>
            </span>
          </Link>
          <Badge
            count={cart.cartItems.length}
            offset={[0, 0]}
            className="md:flex hidden"
          >
            <Link
              to={"/cart"}
              className={`menu-link ${pathname === "/cart" && "active"}`}
            >
              <span>
                <ShoppingCartOutlined className="md:text-2xl text-xl" />
                <span className="text-[10px] md:text-xs">Cart</span>
              </span>
            </Link>
          </Badge>
          <Link
            to={"/invoices"}
            className={`menu-link ${pathname === "/invoices" && "active"}`}
          >
            <span>
              <CopyOutlined className="md:text-2xl text-xl" />
              <span className="text-[10px] md:text-xs">Invoices</span>
            </span>
          </Link>
          <Link
            to={"/customers"}
            className={`menu-link ${pathname === "/customers" && "active"}`}
          >
            <span>
              <UserOutlined className="md:text-2xl text-xl" />
              <span className="text-[10px] md:text-xs">Customers</span>
            </span>
          </Link>
          <Link
            to={"/stats"}
            className={`menu-link ${pathname === "/stats" && "active"}`}
          >
            <span>
              <BarChartOutlined className="md:text-2xl text-xl" />
              <span className="text-[10px] md:text-xs">Stats</span>
            </span>
          </Link>
          <div onClick={logOut}>
            <Link className={`menu-link`}>
              <span>
                <LogoutOutlined className="md:text-2xl text-xl" />
                <span className="text-[10px] md:text-xs">Logout</span>
              </span>
            </Link>
          </div>
        </div>
        <Badge
          count={cart.cartItems.length}
          offset={[0, 0]}
          className="md:hidden flex"
        >
          <Link
            to={"/"}
            className={`menu-link ${pathname === "/cart" && "active"}`}
          >
            <ShoppingCartOutlined className="text-2xl" />
            <span className="md:text-xs text-[10px]">Cart</span>
          </Link>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
