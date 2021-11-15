import React,{useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
 
    const [allOrder, setAllOrder] = useState([]);
    
   useEffect(()=>{
       fetch('http://localhost:5000/order')
       .then(res=>res.json())
       .then(data=>{
        setAllOrder(data)
       })
   },[])
    return (
        <div>
        <h3 className="text-success pt-3">Total Order: {allOrder?.length}</h3> 
              <Table responsive container-fluid bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                        <th>Client Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        {/* <th>Order Cancel</th> */}
                    </tr>
                </thead>
                <tbody>     
                {
                  allOrder?.map((allOrders, index) => ( 
                     <tr>
                           <td>#</td>
                            <td>
                                {allOrders?.name} 
                            </td>
                            <td>
                                {allOrders?.address} 
                            </td>
                            <td>
                                {allOrders?.phone} 
                            </td>
                            {/* <td>
                               <button onClick={()=>handleDelete(order?._id)} className="bg-danger text-white border rounded-3">cancel</button>
                            </td> */}
                       
                        </tr>
                  ))}
                </tbody>
                </Table>
        </div>
    );
};

export default ManageAllOrders;