import React from "react";
import { Link } from "react-router-dom";
import HomeScreenRooms from "../Components/HomeScreenRooms";

export default function HomeScreen(props) {
 

  return (
    <div>
    

      <HomeScreenRooms rooms={props.rooms}  filter={props.filter} />

      <Link to="/AddRoom">
        <button
          style={{width: "124px",height: "124px", position: "relative", borderRadius: "50%", left: "200px", top: "20px", textAlign: "center", bottom: "160px", backgroundColor: "rgb(82,118,250)", color: "white", fontFamily: "Palatino, URW Palladio L, serif", fontWeight: "bold",border: "3px solid white", marginBottom: "124px"}}>
          
          <span style={{ fontSize: "40px" }}>+</span>
        </button>
      </Link>
    </div>
  );
}