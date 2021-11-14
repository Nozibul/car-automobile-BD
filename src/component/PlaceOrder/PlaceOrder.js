import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './placeOrder.css'

const PlaceOrder = () => {
    const { id} = useParams();
    console.log(id)
    const {user} = useAuth()

    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data=>setDetails(data))
    },[])

        const productDetail= details?.filter(detail=> detail?._id === id );
        

     // order part  
     const { register, handleSubmit, reset } = useForm();
     const onSubmit = order =>{
    //    console.log(order)
         
     // data send to the server
     fetch('http://localhost:5000/order', {
       
      method:'POST',
      headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify(order)
      
     })     
     .then(res=>res.json())
     .then(data=>{
        if(data.insertedId){
            // <Alert variant="success">Order Successfully</Alert> 
            alert('Order successfully ')
            reset()
        }
     })
    
    }

    return (
       <div className="row container-fluid">
           <div className="col-lg-8">
             <div  className=" w-70 h-25 justify-content-center">
              <div className="row col-sm-12">
                 {
                    productDetail?.map(detail=>(
                        <div key={detail.title} className="container  pt-4 mt-5 d-flex justify-content-center align-items-center">
                           <div className=" m-4">  
                               <img height="220px" src={detail.image} alt="" />
                            </div>
                                <div className=" align-items-center">
                                    <h4 className="text-info fw-bolder">{detail.title}</h4>
                                    <p>{detail.description.slice(0, 160)}</p> 
                                    <h5 className="text-info">Price: ${detail.price}</h5>   
                                </div>
                            
                        </div>
                       ))
                        
                    } 
                </div>
             </div>
           </div>
           <div className=" col-lg-4 add-order">
            <h4 className="text-center fs-bolder text-white p-3">Purchase</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true })} placeholder="your name" />
                <input defaultValue={user.email}{...register("email", { required: true })} placeholder="email" />
                <input  {...register("address", { required: true})} placeholder="your address" />
                <input type="number" {...register("phone")} placeholder="phone number" />

                <input className="order-submit" type="submit" />

            </form>

        </div>
       </div>
    );
};

export default PlaceOrder;