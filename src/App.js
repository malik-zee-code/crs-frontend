import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../src/MyComponents/Header'
import Addcar from "./MyComponents/Addcar"
import ShowAllCars from './MyComponents/ShowAllCars';
import MultiStepBooking from './MyComponents/booking/MultiStepBooking';
import Login from './MyComponents/Login';
import AddGurantor from './MyComponents/AddGurantor';
import AddDriver from './MyComponents/AddDriver';
function App() {

  return (
    <div>

      <Router>
        <Routes>
          <Route exact path="/"
            element={
              <div>
                <Header loggedIn={true} role={"Receptionist"} />
                <ShowAllCars />
              </div>
            }
          />

          <Route exact path="/addcar"
            element={
              <div>
                <Header loggedIn={true} role={"Receptionist"} />
                <Addcar />
              </div>
            }
          />

          <Route exact path="/booking"
            element={
              <div>
                <Header loggedIn={true} role={"Receptionist"} />
                <MultiStepBooking />
              </div>
            }
          /> 
          <Route exact path="/addGurantor"
            element={
              <div>
                <Header loggedIn={true} role={"Receptionist"} />
                <AddGurantor />
              </div>
            }
          /> 

          <Route exact path="/addDriver"
            element={
              <div>
                <Header loggedIn={true} role={"Receptionist"} />
                <AddDriver />
              </div>
            }
          /> 
            <Route exact path="/login"
            element={
              <div>
                <Login />
              </div>
            }
          /> 

        </Routes>
      </Router>

    </div>
  );
}

export default App;
