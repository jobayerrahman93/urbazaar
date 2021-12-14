import React from "react";
import MainPageContent from "../MainPageContent/MainPageContent";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div class="main-page ">
      <div className="row p-0 mx-0">
        <div className="col-md-2 d-flex p-0 sidebar flex-column border">
          <a class="mt-5 ms-5" href="#">
            Best offer <span class="badge bg-primary">77</span>
          </a>
          <a class="ms-5" href="#">Food Aid</a>
          <hr />

          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/winter-collection?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80233&q=low&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>
          <a href="#">Winter Collection</a>
          </div>
          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80219&q=low&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>
          <a href="#">Popular</a>
          </div>
          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/flash-sales?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80224&q=low&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>
          <a href="#">Flash Sales</a>
          </div>
          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80247&q=low&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>

              <li class="nav-item dropdown">
            <a
              class="nav-link p-0 dropdown-toggle"
              href="#"
              id="offcanvasNavbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Baby Care
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li>
                <a class="dropdown-item" href="#">
                  New Born Essentials
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Diapers and wipes
                </a>
              </li>
              <li></li>
              <li>
                <a class="dropdown-item" href="#">
                  Feeding
                </a>
              </li>
            </ul>
          </li>
       
          </div>
        
    
          

          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/pet-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80246&q=low&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>
          <a href="#">Pet Care</a>
          </div>

          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/toys-games?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D88523&q=best&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>
          <a href="#">Toys and Games</a>
          </div>
          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/sports-fitness?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D90398&q=best&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>
          <a href="#">Sports and fitness</a>
          </div>
          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/food?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80241&q=low&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>
          <a href="#">Food</a>
          </div>
          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/home-cleaning?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80249&q=low&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>
          <a href="#">Home and cleaning</a>
          </div>
          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/office-products?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80251&q=low&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>
          <a href="#">Office Products</a>
          </div>
          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/beauty-health?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80254&q=low&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>
          <a href="#">Beauty health</a>
          </div>
          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/home-appliances?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80253&q=low&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>
          <a href="#">Home Appliances</a>
          </div>
          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/hygiene?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80229&q=low&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>
          <a href="#">Hygine</a>
          </div>
          <div class="d-flex">
              <img class="mx-3" src="https://chaldn.com/_mpimage/vehicle-essentials?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80252&q=low&v=1&m=40&webp=1&alpha=1" height="20" width="20"></img>
          <a href="#">Vehicles</a>
          </div>
        


        </div>


<div className="col-md-10 mt-2 p-0 ps-2 overflow-auto sidenav">
    <MainPageContent></MainPageContent>
</div>


      </div>
    </div>
  );
};

export default MainPage;
