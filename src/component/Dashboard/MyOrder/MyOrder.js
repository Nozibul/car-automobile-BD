import React, { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { Table } from "react-bootstrap";

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState();

  useEffect(() => {
    const url = `https://rocky-fjord-43160.herokuapp.com/order?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [user?.email]);

  // DELETE api
  const handleDelete = (id) => {
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
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Client Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Order Cancel</th>
          </tr>
        </thead>
        <tbody>
          {myOrder?.map((order, index) => (
            <tr>
              <td>#</td>
              <td>{order?.name}</td>
              <td>{order?.address}</td>
              <td>{order?.phone}</td>
              <td>
                <button
                  onClick={() => handleDelete(order?._id)}
                  className="bg-danger text-white border rounded-3"
                >
                  cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrder;
