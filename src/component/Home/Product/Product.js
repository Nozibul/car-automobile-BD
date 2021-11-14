import React from 'react';
import { Link} from 'react-router-dom';
import './product.css'

const Product = ({product}) => {
    const {_id, title, image, price, description} = product
    
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card-group mt-5">
            <div className="card pb-3">
                <img src={image}  alt="" />
                <div className="card-body">
                    
                    <h5 className="card-title fw-bolder">{title}</h5>
                    <p className="card-text">{description.slice(0, 110)}</p>
                    <h5 className="text-center fw-bolder ">Price: ${price}</h5> 
                </div>
                
                    <Link to={`/order/${_id}`} className="buy-now " >
                        <button className="card-btn w-75 rounded-pill shadow border border-warning p-1 fs-5 text-light bg-success fw-bolder mx-auto">Buy Now</button>
                    </Link>
            </div>
           
        </div>
       </div>
    );
};

export default Product;