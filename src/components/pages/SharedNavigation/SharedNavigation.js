import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseFirebase from "../../firebase/UseFirebase";
const SharedNavigation = () => {
  
  const { users, logOut } = UseFirebase();
 const [ sidebarValue, setSidebarValue ] = useState(true);

  console.log(sidebarValue);
  
  const navStyle = {
    textDecoration: "none",
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand text-light fs-4 fw-bold" to="/">
            {/* <img src={image1} className="img-fluid" alt="" width="150" height="70"/> */}
            URBAZAAR
          </Link>

          <div>
            <h4>
              <i onClick={()=>setSidebarValue(!sidebarValue)} className="fas fa-align-justify text-light"></i>
            </h4>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <span className="navbar-text w-50 ms-5">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </span>

            <ul className="navbar-nav  mb-2 ms-2 mb-lg-0 fs-5">
              
                <li className="nav-item">
                  <Link style={navStyle} to="/" className="nav-link active me-3" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
            
             
                <li className="nav-item">
                  <Link style={navStyle} to="/help" className="nav-link me-3" href="#">
                    Help
                  </Link>
                </li>
              

              {!users?.email ? (
               
                  <li className="nav-item">
                    <Link style={navStyle} to="/login" className="nav-link" href="#">
                      Log In
                    </Link>
                  </li>
               
              ) : (
                <li className="nav-item">
                  <a onClick={logOut} className="nav-link" href="#">
                    Log Out
                  </a>
                </li>
              )}
            </ul>

            <div className="ms-5">
              {!users.photoURL ? (
                <i className="fas fa-user-circle fs-1"></i>
              ) : (
                <img
                  className="rounded-circle"
                  src={users.photoURL}
                  height={50}
                  width={50}
                />
              )}
            </div>

            <span className="ms-4 ">
              <h4>
                <i className="fas fa-cart-plus text-light"></i>
              </h4>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SharedNavigation;
