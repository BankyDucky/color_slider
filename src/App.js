import React from "react";
import { useState } from "react";
import "./style.css";

const App = () => {
    const [color,setColor] = useState(0)
    const [number,setInt] = useState(0)

    const toHex = (intNum) => {
        setInt(intNum);
        var a = Math.abs(intNum).toString(16);
        var replacement = 6 - a.length;
        for(let i = 0; i < replacement; i++){
            a = "0" + a;
        }
        a = "#" + a;
        setColor(a);
    }

    return(
        <div className="background" style={{background:color}}>    
            <div className="SliderContainer">
                <input type="range" min={0} max={16777215} step="1" value={number} id="slider" onChange={(event)=>{toHex(event.target.value)}}/>
                <h1>{color}</h1>
            </div>
        </div>

    );
}

export default App;