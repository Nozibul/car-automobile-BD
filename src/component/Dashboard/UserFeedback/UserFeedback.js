import React, { useEffect, useState } from 'react';

const UserFeedback = () => {
    const [userComment, setUserComment] = useState();

    useEffect(() => {
      fetch("http://localhost:5000/comment")
        .then((res) => res.json())
        .then((data) => setUserComment(data));
    }, []);
    return (
      <div className="container-fluid">
        <h1 className="fw-bolder text-center mt-5" style={{ color: "green" }}>
          <span className="bd-title">User</span> Feedback
        </h1>
        <div className="row pb-5 ">
          {userComment?.map((comments, index) => (
            <div className="col-lg-4   col-md-6 col-sm-12" key={index}>
              <div className="card-group mt-4">
                <div className="card pb-3 bg-dark text-white shadow">
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">{comments.name}</h5>
                    <p className="card-text">{comments.comment}</p>               
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default UserFeedback;