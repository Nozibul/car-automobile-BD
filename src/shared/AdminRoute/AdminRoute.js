import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect } from "react-router";
import { Route } from "react-router-dom";
import useAuth from '../../component/Hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user,isLoading ,admin } = useAuth()

   if(isLoading){
     return <Spinner animation="grow" variant="danger" />
   }

    return (
      <Route
        {...rest}
        render={({ location }) =>
          user?.email || admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    )
};

export default AdminRoute;