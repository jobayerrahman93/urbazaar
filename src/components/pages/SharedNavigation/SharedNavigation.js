import React from "react";
const SharedNavigation = () => {
  return (
    <div className="App">
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand text-light fs-4 fw-bold" href="#">
    {/* <img src={image1} className="img-fluid" alt="" width="150" height="70"/> */}
    URBAZAAR
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
    <span class="navbar-text w-50 ms-5">
    <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
      </span>

      <ul class="navbar-nav  mb-2 ms-5 mb-lg-0 fs-5">
        <li class="nav-item">
          <a class="nav-link active me-3" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-3" href="#">Help</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Log In</a>
        </li>
      </ul>

      <div className="ms-5">
      <i class="fas fa-user-circle fs-1"></i>
      </div>
     
    </div>
  </div>
</nav>
    </div>
  );
};

export default SharedNavigation;
