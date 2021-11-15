import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (review) => {
    fetch("https://rocky-fjord-43160.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // <Alert variant="success">Order Successfully</Alert>
          alert("successfully Comment submit");
          reset();
        }
      });
  };
  return (
    <div className="add-order">
      <h4 className="text-center fs-bolder text-white p-3">
        Please Your Comment
      </h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className=" w-50"
          defaultValue={user.displayName}
          {...register("name", { required: true })}
          placeholder="your name"
        />
        <input
          className=" w-50"
          type="number"
          {...register("rating", { required: true, min: 0, max: 5 })}
          placeholder="rating (0/5)"
        />
        <input
          className="p-3 w-50"
          type="text"
          {...register("comment", { required: true })}
          placeholder="your comment"
        />
        <input className="order-submit w-25" type="submit" />
      </form>
    </div>
  );
};

export default Review;
