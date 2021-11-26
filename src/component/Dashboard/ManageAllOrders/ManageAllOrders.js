import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const ManageAllOrders = () => {
  // const [allOrder, setAllOrder] = useState([]);
  const [myOrder, setMyOrder] = useState()

  useEffect(() => {
    fetch("https://rocky-fjord-43160.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setMyOrder(data);
      });
  }, [myOrder]);


  // delete all orders

  const handleDeleteAll = (id) => {
    const url = `https://rocky-fjord-43160.herokuapp.com/deleteOrder/${id}`;
    fetch(url, {
      method: "DELETE",
      
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          window.confirm("Delete Confirm...???");
          const remaining = myOrder.filter((orders) => orders._id !== id);
          setMyOrder(remaining);

          
        }
      });
  };


  return (
    <div>
      <h3 className="text-success pt-3">Total Order: {myOrder?.length}</h3>
      <Table responsive container-fluid bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Client Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Delete order</th>
          </tr>
        </thead>
        <tbody>
          {myOrder?.map((allOrders, index) => (
            <tr key={index}>
              <td>#</td>
              <td>{allOrders?.name}</td>
              <td>{allOrders?.email}</td>
              <td>{allOrders?.phone}</td>
              <td>
              <button
                  onClick={() => handleDeleteAll(allOrders?._id)}
                  className="bg-danger text-white border rounded-3"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllOrders;
