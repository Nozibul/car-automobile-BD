import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Footer from "../Home/Footer/Footer";
import useAuth from "../Hooks/useAuth";

const data = [
  {
    id:1,
    title:"BMW X6"
  },
  {
    id:2,
    title:"Audi A5"
  },
]
const Explore = () => {
  const {admin} = useAuth()
  const [explores, setExplores] = useState([]);
  const [searchCar, setSearchCar] = useState('');
  useEffect(() => {
    fetch("https://rocky-fjord-43160.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const reverseData = data.reverse();
        setExplores(reverseData)
      });
  }, []);

  // search a car on user
   const searchFilterCar = explores.filter(explore =>{
     return explore.title.toLowerCase().includes(searchCar.toLowerCase())
   })



  return (
    <div>
      <Header />
    
      <div className="container-fluid">
        <h1 className="fw-bolder text-center mt-3" style={{ color: "green" }}>
          {" "}
          More <span className="bd-title">CAR's</span> Collection
        </h1>
         <div className="mt-5">
           <input type="text" placeholder="search your car" onChange={ e =>{setSearchCar(e.target.value)}}></input>
         </div>
        <div className="row pb-5">
          {searchFilterCar?.map((explore, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card-group mt-3">
                <div className="card pb-3">
                  <img src={explore.image} alt="" />
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">{explore.title}</h5>
                    <p className="card-text">{explore.description}</p>
                    <h5 className="text-center fw-bolder ">
                      Price: ${explore.price}
                    </h5>
                  </div>

                  {
                    !admin && <NavLink to={`/order/${explore._id}`} className="buy-now ">
                    <button className="card-btn w-75 rounded-pill shadow border border-warning p-1 fs-5 text-light bg-success fw-bolder mx-auto">
                      Buy Now
                    </button>
                   </NavLink>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;

/* 
 const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();
console.log("The current month is " + monthNames[d.getMonth()])
 */