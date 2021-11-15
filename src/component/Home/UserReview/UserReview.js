import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import "./userReview.css";

const UserReview = () => {
  const [userReview, setUserReview] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setUserReview(data));
  }, []);
  return (
    <div className="container-fluid">
      <h1 className="fw-bolder text-center mt-5" style={{ color: "green" }}>
        <span className="bd-title">User</span> Review
      </h1>
      <div className="row pb-5 ">
        {userReview?.map((reviews, index) => (
          <div className="col-lg-4   col-md-6 col-sm-12" key={index}>
            <div className="card-group mt-4">
              <div className="card pb-3 bg-dark text-white shadow">
                <div className="card-body">
                  <h5 className="card-title fw-bolder">{reviews.name}</h5>
                  <p className="card-text">{reviews.comment}</p>
                  <Rating
                    readonly
                    initialRating={reviews.rating}
                    fullSymbol="fas fa-star rating-color"
                    emptySymbol="far fa-star rating-color"
                  ></Rating>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
