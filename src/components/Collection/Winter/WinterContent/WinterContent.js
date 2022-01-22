import React, { useEffect, useState } from "react";
import "./WinterContent.css";

const WinterContent = () => {
  const [winterData, setWinterData] = useState([]);

  const [productCount, setProductCount] = useState(0);
  const [productName, setProductName] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProduct = (id) => {
    let cart = productCount + 1;
    setProductCount(cart);

    const filterCost = winterData.filter((p) => p.id == id);

    console.log("cost id", filterCost[0]);

    setProductName([...productName, filterCost[0]]);

    console.log("product", filterCost[0].price);
    let singleProductPrice = filterCost[0].price;

    let allproductPrice = parseInt(singleProductPrice) + parseInt(totalPrice);

    setTotalPrice(allproductPrice);
  };

  console.log("product name", productName);
  console.log(productCount);

  useEffect(() => {
    fetch("/winterData.json")
      .then((res) => res.json())
      .then((data) => setWinterData(data));
  }, []);

  return (
    <div className="my-5 ">
      <div className="cart-section">
        <div
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          className="cart bg-primary"
        >
          <h4 className="text-center pt-2 mb-0 ">
            <i className="fas fa-shopping-bag text-light"></i>
          </h4>
          {productCount == 0 && (
            <div className="bg-light">
              <p className="text-center mb-1">Items: 0</p>
            </div>
          )}

          {productCount !== 0 && (
            <div className="bg-light">
              <p className="text-center mb-1">Items: {productCount}</p>
            </div>
          )}
          <div className="text-center">
            <p className="mb-0 text-light">৳: {totalPrice}</p>
          </div>
        </div>
      </div>

      {/* off canvas start */}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">shopping Item</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="h-75">
            {productName.map((p) => (
              <div className="">
                <p className="">{p.name}</p>
              </div>
            ))}

            <p>
              Items: <span className="text-danger">{productCount}</span>
            </p>
            <p>
              Total Price : ৳ <span className="text-danger">{totalPrice}</span>
            </p>
          </div>
 
 {/* footer */}
          <div>
            <div>
              <p>Have a special code ?</p>
              <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Discount Code" aria-label="Code" aria-describedby="button-addon2"/>
  <button class="btn btn-primary" type="button" id="button-addon2">Apply</button>
</div>
            </div>

            <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-warning">Place Order</button>
 
  <button type="button" class="btn btn-danger">৳ {totalPrice}</button>
</div>
          </div>
        </div>
      </div>
      {/* off canvas end */}

      <div className="row row-cols-1 row-cols-md-3 g-4 mx-0">
        {winterData.map((winterCollection) => (
          <div className="col">
            <div
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              }}
              className="card h-100 border-0"
            >
              <img
                src={winterCollection.image}
                height={250}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{winterCollection.name}</h5>
                <p className="card-text">{winterCollection.weight}</p>
                <p className="card-text">
                  ৳{" "}
                  <span className="price" name="price">
                    {winterCollection.price}
                  </span>
                </p>
              </div>
              <div className="card-footer border-0 bg-white">
                <div className="d-flex mb-3">
                  <button
                    onClick={() => addProduct(winterCollection.id)}
                    type="button"
                    className="btn rounded-pill btn-primary"
                  >
                    Add Cart
                  </button>

                  <button
                    type="button"
                    className="btn rounded-pill btn-danger ms-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Details
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Details
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body m-0">
                          <div className="row">
                            <div className="col-md-6">
                              <div>
                                <img
                                  src={winterCollection.image}
                                  height={200}
                                  className="card-img-top"
                                  alt="..."
                                />
                                <h5 className="">{winterCollection.name}</h5>
                                <p className="">
                                  Weight: {winterCollection.weight}
                                </p>
                                <p className="">
                                  ৳ <span>{winterCollection.price}</span>
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-group mb-3 w-50">
                                <button
                                  className="btn btn-warning"
                                  type="button"
                                  id="button-addon"
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  className="form-control text-center"
                                  placeholder="Recipient's username"
                                  aria-label="Recipient's username"
                                  aria-describedby="button-addon2"
                                  min={0}
                                  defaultValue={1}
                                />
                                <button
                                  className="btn btn-danger"
                                  type="button"
                                  id="button-addon2"
                                >
                                  +
                                </button>
                              </div>

                              <button
                                className="btn btn-danger mt-2"
                                type="button"
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          {/* <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterContent;
