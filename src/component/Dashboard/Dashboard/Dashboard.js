import React from "react";
import { Switch, Link, useRouteMatch } from "react-router-dom";
import "./dashboard.css";
import MyOrder from "../MyOrder/MyOrder";
import Review from "../Review/Review";
import Comment from "../Comment/Comment";
import Pay from "../Pay/Pay";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import useAuth from "../../Hooks/useAuth";
import { Button } from "react-bootstrap";
import AdminRoute from "../../../shared/AdminRoute/AdminRoute";
import LoginRoute from "../../../shared/LoginRoute/LoginRoute";
import UserFeedback from "../UserFeedback/UserFeedback";
import AddProduct from "../AddProduct/AddProduct";


const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, logOut, user } = useAuth();


  return (
    <div className="container-fluid">
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-lg-3 col-md-3 ">
            <div className="dashboard">
              {!admin &&
                (
                  <div>
                    {" "}
                    <h5 className="pt-5">User Dashboard</h5>
                    <Link to={`${url}/myOrder`}>
                      <li className="dashboard-menu mt-3">My Order</li>
                    </Link>
                    <Link to={`${url}/review`}>
                      <li className="dashboard-menu mt-3">Review</li>
                    </Link>
                    <Link to={`${url}/comment`}>
                      <li className="dashboard-menu mt-3">personal Feedback</li>
                    </Link>
                    <Link to={`${url}/pay`}>
                      <li className="dashboard-menu mt-3">Pay</li>
                    </Link>
                    {user?.email && (
                      <Button className="btn-login mt-5" onClick={logOut}>
                        Logout
                      </Button>
                    )}
                  </div>
                )}

              {admin && (
                <div>
                  {" "}
                  <h5 className="pt-5"> Admin Dashboard</h5>
                  <div className="admin-dashboard">
                    <Link to={`${url}/manageAllOrders`}>
                      <li className="dashboard-menu mt-3">Manage All Orders</li>
                    </Link>
                    <Link to={`${url}/makeAdmin`}>
                      <li className="dashboard-menu mt-3">Make Admin</li>
                    </Link>
                    <Link to={`${url}/manageProducts`}>
                      <li className="dashboard-menu mt-3">Manage Products</li>
                    </Link>
                    <Link to={`${url}/addProducts`}>
                      <li className="dashboard-menu mt-3">Add Products</li>
                    </Link>
                    <Link to={`${url}/feedback`}>
                      <li className="dashboard-menu mt-3">User Feedback</li>
                    </Link>
                    {user?.email && (
                      <Button className="btn-login mt-5" onClick={logOut}>
                        Logout
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-9">
            <Switch>
              <LoginRoute exact path={`${path}/review`}>
                <Review></Review>
              </LoginRoute>
              <LoginRoute exact path={`${path}/comment`}>
                <Comment></Comment>
              </LoginRoute>
              <LoginRoute path={`${path}/myOrder`}>
                <MyOrder></MyOrder>
              </LoginRoute>
              <LoginRoute path={`${path}/pay`}>
                <Pay></Pay>
              </LoginRoute>
              <AdminRoute path={`${path}/manageAllOrders`}>
                <ManageAllOrders />
              </AdminRoute>
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute exact path={`${path}/manageProducts`}>
                <ManageProducts />
              </AdminRoute>
              <AdminRoute exact path={`${path}/addProducts`}>
                <AddProduct />
              </AdminRoute>
              <AdminRoute path={`${path}/feedback`}>
                <UserFeedback></UserFeedback>
              </AdminRoute>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
