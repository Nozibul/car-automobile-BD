import React,{useState,useEffect} from 'react';
import useAuth from '../../Hooks/useAuth'
import { Table } from 'react-bootstrap';

const MyOrder = () => {
    const {user} = useAuth()
    const [myOrder, setMyOrder] =useState()

    useEffect(()=>{
        const url = `http://localhost:5000/order?email=${user?.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyOrder(data))
    },[myOrder])
    return (
        <div>
            
           <h3 className="text-success pt-3">Total Order: {myOrder?.length}</h3> 
              <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                        <th>Client Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>     
                {
                  myOrder?.map((order, index) => ( 
                     <tr>
                           <td>#</td>
                            <td>
                                {order?.name} 
                            </td>
                            <td>
                                {order?.address} 
                            </td>
                            <td>
                                {order?.phone} 
                            </td>
                       
                        </tr>
                  ))}
                </tbody>
                </Table>
        </div>
    );
};

export default MyOrder;