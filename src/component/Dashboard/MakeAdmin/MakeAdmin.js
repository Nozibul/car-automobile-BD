import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [adminSuccess, setAdminSuccess] = useState(false);

  const handleAdmin = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://rocky-fjord-43160.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setAdminSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Form className="w-50 bg-info mt-5  p-5" onSubmit={handleAdminSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Create Admin</Form.Label>
          <Form.Control
            onBlur={handleAdmin}
            type="email"
            placeholder="Enter new admin email"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          make admin
        </Button>
      </Form>
      {adminSuccess && (
        <Alert variant="success"> Made Admin Successfully! </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
