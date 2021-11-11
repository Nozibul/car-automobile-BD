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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route exact path="/home">
              <Home></Home>
          </Route>
          <Route exact path="/explore">
              <Header />
              <Explore />
          </Route>
          <Route exact path="/login">
              <Header />
              <Login />
          </Route>
          <Route exact path="/register">
               <TopHeader />
              <Register />
          </Route>
          <Route exact path="/contact">
              <Header />
              <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
