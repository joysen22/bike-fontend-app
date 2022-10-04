import React, { useState } from "react";
import "../assets/style/Navebar.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaAngleUp } from "react-icons/fa";
import man from "../assets/images/man.jpg";

const Navebar = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="header ">
        <div className="navebar-body  mx-auto ">
          <div className="navebar-item-left">
            <div className="logo">
              <Link to="/">
                <img className="nav-logo" src={man} alt="logo" />
              </Link>
            </div>
          </div>
          <div
            className={
              show
                ? "navebar-item-center-mobile navebar-item-center show-bar"
                : "navebar-item-center-mobile navebar-item-center hidden-bar"
            }
          >
            <nav className="menu">
              <ul className="menu-main">
                <li>
                  <Link className="link">Home</Link>
                </li>
                <li>
                  <Link className="link">New</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link className="flex items-center link">
                    Shop <FaAngleDown className="default-show-icon" />
                    <FaAngleUp className="default-hidde-icon" />
                  </Link>
                  <div className="sub-mega-menu">
                    <div className="sub-mega-menu-one">
                      <ul>
                        <li>
                          <Link>item1</Link>
                        </li>
                        <li>
                          <Link>item2</Link>
                        </li>
                        <li>
                          <Link>item3</Link>
                        </li>
                        <li>
                          <Link>item4</Link>
                        </li>
                        <li>
                          <Link>item5</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="sub-mega-menu-one">
                      <ul>
                        <li>
                          <Link>item1</Link>
                        </li>
                        <li>
                          <Link>item2</Link>
                        </li>
                        <li>
                          <Link>item3</Link>
                        </li>
                        <li>
                          <Link>item4</Link>
                        </li>
                        <li>
                          <Link>item5</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="sub-mega-menu-one">
                      <ul>
                        <li>
                          <Link>item1</Link>
                        </li>
                        <li>
                          <Link>item2</Link>
                        </li>
                        <li>
                          <Link>item3</Link>
                        </li>
                        <li>
                          <Link>item4</Link>
                        </li>
                        <li>
                          <Link>item5</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="sub-mega-menu-one">
                      <ul>
                        <li>
                          <Link>item1</Link>
                        </li>
                        <li>
                          <Link>item2</Link>
                        </li>
                        <li>
                          <Link>item3</Link>
                        </li>
                        <li>
                          <Link>item4</Link>
                        </li>
                        <li>
                          <Link>item5</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children ">
                  <Link className="flex items-center link">
                    Category
                    <FaAngleDown className="default-show-icon" />
                    <FaAngleUp className="default-hidde-icon" />
                  </Link>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <Link>item1</Link>
                      </li>
                      <li>
                        <Link>item2</Link>
                      </li>
                      <li>
                        <Link>item3</Link>
                      </li>
                      <li>
                        <Link>item4</Link>
                      </li>
                      <li>
                        <Link>item5</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link className="flex items-center link">
                    Contact
                    <FaAngleDown className="default-show-icon" />
                    <FaAngleUp className="default-hidde-icon" />
                  </Link>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <Link>item1</Link>
                      </li>
                      <li>
                        <Link>item2</Link>
                      </li>
                      <li>
                        <Link>item3</Link>
                      </li>
                      <li>
                        <Link>item4</Link>
                      </li>
                      <li>
                        <Link>item5</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="navebar-item-right  ">
            <div className="search ">
              <input type="text" className="search-bar" />
              <FaSearch className="search-icon" />
            </div>
            <div className="nav-icon ">
              <Link className="flex items-center ml-3" to="/card">
                <AiOutlineShoppingCart className="nav-cart-icon" />
                <span>13</span>
              </Link>
            </div>
            <div
              onClick={() => setShow(!show)}
              className="mobile-bar-icon ml-16"
            >
              {show ? (
                <AiOutlineClose className=" text-gray-700 text-3xl" />
              ) : (
                <FaBars className=" text-gray-700 text-2xl" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
