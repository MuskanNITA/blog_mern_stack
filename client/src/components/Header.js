import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  const Navigate=useNavigate();
  const token=localStorage.getItem("token");
  const username=localStorage.getItem("username");
  const handleLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    alert("Logout Success")
     Navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <Link className="navbar-brand text-white mx-3" to="/">
        Muskan Blog
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/add-blog">
              Add Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/add-category">
              Add Category
            </Link>
          </li>
        </ul>
        <div className="d-inline mx-auto my-2 my-lg-0">
          {token && token!==null  ?
          <>
            <button classname="btn btn-primary">Welcome:{username}</button> 
            <button onClick={handleLogout}classname="btn btn-primary">Logout</button>
              </>
            :
            <>
          <Link to="/login">
            <button className="btn btn-primary mx-1">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-primary mx-1">Register</button>
          </Link>
          </> }
        </div>
      </div>
    </nav>
  );
};

export default Header;
