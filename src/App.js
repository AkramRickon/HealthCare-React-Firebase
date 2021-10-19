import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Home/Home';
import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ServiceDetails from './Home/ServiceDetails/ServiceDetails';
import NotFound from './NotFound/NotFound';
import Doctors from './Doctors/Doctors';
import ContactUS from './ContactUS/ContactUS';
import Footer from './Footer/Footer';
import AuthProvider from './ContextApi/AuthProvider';
import Login from './Login/Login';
import Register from './Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import HospitalServices from './HospitalServices/HospitalServices';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <PrivateRoute path="/services">
            <HospitalServices></HospitalServices>
            </PrivateRoute>
          <PrivateRoute path="/doctors">
            <Doctors></Doctors>
          </PrivateRoute>
          <Route path="/contact">
            <ContactUS></ContactUS>
          </Route>
          <PrivateRoute exact path='/serviceDetails/:category'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path='/registration'>
            <Register></Register>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
