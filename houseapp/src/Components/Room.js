import React from "react";
import { useState } from "react";


export default function Room(props) {


    const [flag, setflag] = useState(false)
    const [product, setproduct] = useState()
    const [products, setproducts] = useState([])
    const [backgroundColor, setcolor] = useState("red")

    const sel = (p) => {
        setproducts([...products, { product: p, index: products.length,backgroundColor:'red' }]);
    }


    const addOnclick = () => {
        sel(product)
        setflag(false)
    }

    const colorbackground = () => {

        const nextColor = backgroundColor == "green" ? "red" : "green"
        setcolor(nextColor)

    }



    const check5 = () => {

        if (products.length > 4) {

            alert("You can add not more than 5 pieces of furniture") && setflag(false)
        }
        else {
            setflag(true)
        }
    }
    const boiler=(element)=>{
        if (element.target.value=="Boiler" && props.room!=="Bathroom"){
        
          alert( "You can add boiler only in the Bathroom")
        
        }
        
         if(product=="Stereo" && element.target.value=="Stereo"){
           alert("you cant add twice Stereo in the same room")
         }
        
        
        else{
          setproduct(element.target.value)
        }}
        
        



    const isHid = () => {
        if (flag == true) {
            return (

                <div id="a" style={{ width: "200px", height: "200px", border: "1px solid black", position: "relative", marginTop: "-300px", backgroundColor: "rgb(105,146,242)" }}>

                    <select onChange={boiler} style={{ border: 'none', height: "36px", width: "185px", borderRadius: "10px" }}>

                        <option value="Choose the furniture">Choose the furniture</option>
                        <option id="conditioner" value="Conditioner">Conditioner</option>
                        <option id="Stereo" tape value="Stereo">Stereo</option>
                        <option id="lamp" value="Lamp">Lamp</option>
                        <option id="Boiler" value="Boiler">Boiler</option></select>

                    <button onClick={addOnclick} style={{ border: 'none', height: "36px", width: "100px", borderRadius: "10px", position: "relative", marginTop: "100px" }}>Add</button>

                </div>)
        }
    }


    return (
        <div className="container">
            <div className="row" >
                <div className="col-sm-12 text-center" >
                    <div>
                        <div>
                            <h3
                                style={{ fontFamily: "serif", fontWeight: "bold", position: "relative", left: "-48px" }} >Name:<span style={{ color: "rgb(84,84,84)", fontWeight: "normal" }}>{props.room.Name} </span>
                            </h3>
                            <br /> 

                            <h3 style={{ fontFamily: "serif", fontWeight: "bold", position: "relative", left: "-48px" }}>
                                Room: <span style={{ color: "rgb(84,84,84)", fontWeight: "normal" }}>{props.room.room}
                                </span>
                            </h3>


                            {products.map((element) => {
                                return (

                                    <button onClick={colorbackground} style={{
                                        backgroundColor: backgroundColor, position: "relative", top: "0px", marginLeft: "12px",
                                        width: "154px", height: "36px", border: "2px solid white", color: "black", borderRadius: "16px", fontWeight: "bold", left: "0px",
                                    }} >{element.product}</button>)
                            })}

                            <br></br>
                            <button onClick={check5}
                                style={{
                                    position: "relative", marginTop: "32px", marginBottom: "124px", marginLeft: "0px",
                                    backgroundColor: "transparent", width: "196px", height: "36px", border: "2px solid white", colo: "white", borderRadius: "16px", fontWeight: "bold"
                                }}> Add The Product
              </button>




                            {isHid()}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}