import React from "react";
import { Link } from "react-router-dom";

export default function HomeScreenRooms(props) {

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">

          {props.rooms.map((element) => {
            return ( <div style={{ width: "100px",height: "100px",position: "relative",
             left: "-150px",top: "-100px",display: "inline" }}>

                <Link to="/room"><button onClick={() => {props.filter(element.index) }}  style={{ width: "116px",height: "116px",backgroundColor: element.color,position: "relative",fontWeight: "bold", color: "white",fontSize: "18px", border: "3px solid rgb(84,84,84)" }}>
                    <p>
                      <span>{element.room} </span>
                    </p>
                    
                    <p>
                      <span
                        style={{ fontWeight: "bold", color: "rgb(84,84,84)" }}>{element.Name}  
                         </span>
                    </p>

                  </button>
                 
                </Link>
              </div>
            );
          })}
        </div>
      </div>

    
    </div>
  );
}