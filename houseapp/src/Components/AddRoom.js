import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddRoom(props) {
    const [room, setRoom] = useState();
    const [Name, setName] = useState();
    const [color, setColor] = useState();
    

    const validInput = () => {//input validation
        if ((Name == null) || ((room == 'Choose') || (room == null))) {//no name typed and no room chosen
            window.alert('Please choose a room and enter at least one character in room name');
            return true;//if alert pops up
        }
        else {
           
                return false;//alert is not shown
            }
        

    }

    const AddClick = () => {
        let result = validInput();
        if (result ==false)
        {
            props.add(room, Name, color);   
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center">

                    <select style={{ width: "200px", height: "34px", border: "1 px rgb(137, 243, 141) solid", borderRadius: "8px", textAlign: "left", position: "relative", top: "24px", marginBottom: "16px" }}
                        onChange={(element) => { setRoom(element.target.value) }}>

                        <option value="Choose">Choose the room</option>
                        <option value="Bedroom">Bedroom</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Bathroom">Bathroom</option>
                    </select>
                    <br />
                    <br />

                    <input type="text" onChange={(element) => { setName(element.target.value) }} maxLength='5' style={{ width: "200px", height: "34px", border: "1px solid black", borderRadius: "8px", textAlign: "left", marginBottom: "16px", position: "relative" }} type="text" placeholder="Choose the Name" />
                    <br />
                    <input
                        onChange={(element) => { setColor(element.target.value) }} type="color" style={{ width: "200px", height: "34px", border: "1px solid black", borderRadius: "8px", textAlign: "left", marginBottom: "16px", position: "relative" }} placeholder="Choose a color" />
                    <br />

                     <Link to="/" onClick={AddClick} > <button
                            style={{ width: "200px", height: "35px", border: "1px solid black", backgroundColor: "rgb(24,185,102)", borderRadius: "8px", position: "relative", marginBottom: "100px" }}
                            > Create
            </button> </Link>
                </div>
            </div>
        </div>
    );
}