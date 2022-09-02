import React from "react";
import call from "../../assets/images/call.png";
import logo from "../../assets/images/logo.png";
import email from "../../assets/images/email.png";
import shopping from "../../assets/images/shopping.png";
import { Link, NavLink } from "react-router-dom";
const header = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="header_top d_none1">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <ul className="conta_icon ">
                    <li>
                      <a href="#">
                        <img src={call} alt="#" />
                        Call us: 0126 - 922 - 0162
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="social_icon">
                    <li>
                      {" "}
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/about">
                        <i className="fa fa-twitter"></i>
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        {" "}
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <div className="se_fonr1">
                    <form action="#">
                      <div className="select-box">
                        <label className="label select-box1">
                          <span className="label-desc">English</span>{" "}
                        </label>
                        <select id="select-box1" className="select">
                          <option value="Choice 1">English</option>
                          <option value="Choice 1">Falkla</option>
                          <option value="Choice 2">Germa</option>
                          <option value="Choice 3">Neverl</option>
                        </select>
                      </div>
                    </form>
                    <span className="time_o"> Open hour: 8.00 - 18.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header_midil">
            <div className="container">
              <div className="row d_flex">
                <div className="col-md-4">
                  <ul className="conta_icon d_none1">
                    <li>
                      <a href="#">
                        <img src={email} alt="#" /> demo@gmail.com
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <a className="logo" href="#">
                    <img src={logo} alt="#" />
                  </a>
                </div>
                <div className="col-md-4">
                  <ul className="right_icon d_none1">
                    <li>
                      <a href="#">
                        <img src={shopping} alt="#" />
                      </a>{" "}
                    </li>
                    <a href="#" className="order">
                      Order Now
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                  <nav className="navigation navbar navbar-expand-md navbar-dark ">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarsExample04"
                      aria-controls="navbarsExample04"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarsExample04"
                    >
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                          <NavLink to="/" className="nav-link">
                            Home
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/about" className="nav-link">
                            About
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/products" className="nav-link">
                            Products
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <Link to="/admin/login" className="nav-link">
                            Login
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="news.html">
                            News
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="col-md-4">
                  <div className="search">
                    <form action="/action_page.php">
                      <input
                        className="form_sea"
                        type="text"
                        placeholder="Search"
                        name="search"
                      />
                      <button type="submit" className="seach_icon">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
