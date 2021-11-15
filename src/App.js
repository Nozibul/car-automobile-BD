import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Explore from './component/Explore/Explore';
import Contact from './component/Contact/Contact';
import Header from './shared/Header/Header';
import Login from './shared/Login/Login';
import Register from './shared/Register/Register';
import TopHeader from './component/Home/TopHeader/TopHeader';
import AuthProvider from './component/context/AuthProvider';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './shared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
     <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route exact path="/home">
              <Home></Home>
          </Route>
          <Route  path="/explore">
              <Explore />
          </Route>
          <Route  path="/login">
              <Login />
          </Route>
          <Route  path="/register">
               <TopHeader />
              <Register />
          </Route>
          <Route  path="/contact">
              <Contact />
          </Route>
         <PrivateRoute exact path="/order/:id">
            <Header />
            <PlaceOrder />
         </PrivateRoute>
          <PrivateRoute  path="/dashboard">
             <Header />
             <Dashboard></Dashboard>
          </PrivateRoute> 
            
        </Switch>
      </Router>
      </AuthProvider> 
    </div>
  );
}

export default App;
