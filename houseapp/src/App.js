import "./App.css";
import React from "react";
import AddRoom from "./Components/AddRoom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import HomeScreen from "./Components/HomeScreen";
import Room from "./Components/Room";


export default function App(props) {
  const [rooms, setrooms] = useState([]);
  const [roomFilter, setRoomFilter] = useState({})



  const addRoom = (r, n, c) => {
    setrooms([...rooms, { room: r, Name: n, color: c, index: rooms.length }]);
    console.log(rooms);

  };

  const deleteR = (i) => {
    setRoomFilter((temp) => {
      var temp = rooms.filter((element, index) => index == i) 
      console.log(temp);
      return { Name: temp[0].Name, room: temp[0].room, index: i };

    });

  };


  return (
    <Router>
      <div className="container" style={{ textAlign: "center", backgroundColor: "rgb(189, 193, 255)", position: "relative", height: "auto", width: "1200px", overflow: "hidden", }} >
        <div className="row">
          <div className="col-sm-12 text-center">
            <a href="/"><p style={{ width: "200px", left: "40%", position: "relative", marginTop: "32px", color: "rgb(84,84,84)", fontSize: "24px" }}>SMART HOUSE
              </p>
            </a>
            <h1 style={{ textAlign: "left", position: "relative", fontFamily: "helvetica", top: "110px", letterSpacing: "8px", left: "100px", top: "80px" }}>

              <pre style={{ position: "relative" }}>
                <span style={{ fontWeight: "bold", fontSize: "44px" }}>Y</span>
                our
              </pre>
              <pre><span style={{ color: "black", left: "120px", fontWeight: "bold", position: "relative", lineHeight: "5px", fontSize: "44px" }} >Dream Life</span>
              </pre>

              <pre style={{ left: "450px", position: "relative", color: "white", fontSize: "44px", }}>

                Starts
              </pre>

              <pre style={{ left: "700px", position: "relative" }}>
                <span style={{ fontWeight: "bold", fontSize: "44px" }}>H</span>
                ere!
              </pre>
            </h1>

            <br />
            <br />
            <br />
            <br />









            <Switch>
              <Route
                exact path="/addRoom" component={() => { return <AddRoom add={addRoom} /> }} />

              <Route exact path="/" component={() => { return <HomeScreen rooms={rooms} filter={deleteR} /> }}
              />
              <Route exact path="/room" component={() => { return <Room room={roomFilter}/> }} />



            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}