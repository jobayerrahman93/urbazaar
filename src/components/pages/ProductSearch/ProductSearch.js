import React, { useEffect, useState } from "react";
import "./ProductSearch.css";
const ProductSearch = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [product, setProduct] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const handleInput = (e) => {
    const inputValue = e.target.value;

    // setSearchProduct(inputValue);

    const matchedProduct = product?.filter((singleProduct) =>
      singleProduct.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilterData(matchedProduct);
  };

  // console.log(searchProduct);
  console.log(filterData);

  useEffect(() => {
    fetch("./winterData.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="overflow-auto sidenav">
      <div className="banner-section-product p-0">
        <span className="d-block search-area-product">
          <input
            className="form-control w-50 mx-auto "
            type="search"
            placeholder="Search for products Ex: vaseline"
            aria-label="Search"
            name="search-field"
            onChange={handleInput}
          />
        </span>
      </div>

      {/* Product searching area */}

      <div className="my-5 container">
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-0 ">
          {filterData?.map((product) => (
            <div className="col">
              <div
                style={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                }}
                className="card h-100 border-0"
              >
                <img
                  src={product.image}
                  height={250}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.weight}</p>
                  <p className="card-text">
                    ৳ <span>{product.price}</span>
                  </p>
                </div>
                <div className="card-footer border-0 bg-white">
                  <div className="d-flex mb-3">
                    <button type="button" className="btn rounded-pill btn-primary">
                      Add Cart
                    </button>
                    {/* <button
                    type="button"
                    className="btn rounded-pill btn-danger ms-3"
                  >
                    Details
                  </button> */}

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
                                  src={product.image}
                                  height={200}
                                  className="card-img-top"
                                  alt="..."
                                />
                                <h5 className="">{product.name}</h5>
                                <p className="">Weight: {product.weight}</p>
                                <p className="">
                                  ৳ <span>{product.price}</span>
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

                              <button  className="btn btn-danger mt-2"
                                  type="button">Buy Now</button>

                            </div>
                           </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
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
    </div>
  );
};

export default ProductSearch;
