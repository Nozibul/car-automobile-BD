import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Comment = () => {
    const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (comment) => {
    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully submit your Feedback");
          reset();
        }
      });
};
    return (
        <div>
                <h4 className="text-center mt-3 text-success p-3">
                    Please Share Your Suggestion/Feedback 
                </h4>

            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <input
                className=" w-50 border rounded-3"
                defaultValue={user.displayName}
                {...register("name", { required: true })}
                placeholder="your name"
                /> <br/>
                <input
                className="p-3 w-50 h-50 mt-3 border-2 rounded-3"
                type="text"
                {...register("comment", { required: true })}
                placeholder="Suggestion/Feedback"
                /> <br />
                
                <input className="order-submit border rounded-3 p-2 w-25" type="submit" />
            </form>
        </div>
    );
};

export default Comment;