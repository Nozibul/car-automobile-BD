import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

   useEffect(()=>{
       fetch('https://rocky-fjord-43160.herokuapp.com/products')
       .then(res=>res.json())
       .then(data=>{
           const reverseData = data.reverse();
           setProducts(reverseData)
       })
   },[])
    return (
        <div className="container-fluid mt-5">
              <h1 className="fw-bolder text-center" style={{color:"green"}}> Latest <span className="bd-title">Collection</span></h1>
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