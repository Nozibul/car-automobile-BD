import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

   useEffect(()=>{
       fetch('http://localhost:5000/products')
       .then(res=>res.json())
       .then(data=>setProducts(data))
   },[])
    return (
        <div className="container-fluid mt-5">
              <h1 className="fw-bolder text-center" style={{color:"green"}}> LUXURY <span className="bd-title">CAR's</span></h1>
            <div className="row pb-5">
                    {
                            products?.slice(0, 6).map((product, index) => <Product
                            product={product} 
                            key={index}    
                            >
                            </Product>
                           )
                    }
            </div>
        </div>
    );
};

export default Products;