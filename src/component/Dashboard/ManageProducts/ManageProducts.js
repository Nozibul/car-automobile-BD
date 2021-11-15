import React, { useState, useEffect } from "react";

const ManageProducts = () => {
  const [manageProduct, setManageProduct] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState(false);

  useEffect(() => {
    fetch("https://rocky-fjord-43160.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setManageProduct(data));
  }, [deleteProduct]);

  // DELETE api
  const handleDeleteProduct = (id) => {
    const url = `https://rocky-fjord-43160.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          window.confirm("Delete Confirm...???");
          setDeleteProduct(!deleteProduct);
        }
      });
  };
  return (
    <div className="container-fluid">
      <h1 className="fw-bolder text-center mt-1" style={{ color: "green" }}>
        {" "}
        More <span className="bd-title">CAR's</span> Collection
      </h1>
      <div className="row pb-3">
        {manageProduct?.map((manageProducts, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <div className="card-group mt-3">
              <div className="card pb-3">
                <img src={manageProducts.image} alt="" />
                <div className="card-body">
                  <h5 className="card-title fw-bolder">
                    {manageProducts.title}
                  </h5>
                  <p className="card-text">
                    {manageProducts.description.slice(0, 30)}
                  </p>
                  <h5 className="text-center fw-bolder ">
                    Price: ${manageProducts.price}
                  </h5>
                </div>

                <button
                  onClick={() => handleDeleteProduct(manageProducts._id)}
                  className="card-btn w-75 rounded-pill shadow border border-warning p-1 fs-5 text-light bg-success fw-bolder mx-auto"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
