import React from "react";
import ReactDOM from "react-dom/client";

function car(props){
    return(
        <div>
            <h1>{props.brand} {props.model}</h1>
        </div>
    )
}

function carInfo(){
    const cardetails = [
        { brand: "Toyota", model: "Camry" },
        { brand: "Honda", model: "Accord" },
        { brand: "Ford", model: "Mustang" }
    ];

    return (
        <div>
            {cardetails.map((each) => {
                return <car key={each.model} brand={each.brand} model={each.model} />;
            })}
        </div>
        
    )
}