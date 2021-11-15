import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect } from "react-router";
import { Route } from "react-router-dom";
import useAuth from '../../component/Hooks/useAuth';

const LoginRoute = ({children, ...rest}) => {
    const {user,isLoading  } = useAuth()

   if(isLoading){
     return <Spinner animation="grow" variant="danger" />
   }

    return (
      <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
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

export default LoginRoute;