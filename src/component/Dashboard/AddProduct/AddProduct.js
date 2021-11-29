import React from 'react';
import { useForm } from "react-hook-form";
import './addProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

   const onSubmit = (product) =>{
  
    fetch('http://localhost:5000/products',{
        method:"post",
        headers:{
            'content-type': "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(data =>{
        if(data.insertedId){
            alert('Successfully added Product')
             reset()
        }
        
    })
   };

    return (
       <div>
      
          <div className="container add-product">
            <h4 className="text-center fs-bolder text-success mt-4 text-white">Place Order</h4>
            <form  className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true,  })} placeholder="title" />
                <input {...register("description", { required: true,  })} placeholder="description" />
                <input {...register("image", { required: true,  })} placeholder="image url" />
                <input type="number"{...register("price", { required: true,  })} placeholder="price" />
                <input className="place-btn" type="submit" />
            </form>
          </div>
       </div>
    );
};

export default AddProduct;