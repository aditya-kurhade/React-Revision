import React from "react";
import ReactDOM from "react-dom/client";

function Car(props) {
    return (
        <div>
            <h1>{props.brand} {props.model}</h1>
        </div>
    );
}

function CarInfo() {
    const cardetails = [
        { brand: "Toyota", model: "Camry" },
        { brand: "Honda", model: "Accord" },
        { brand: "Ford", model: "Mustang" }
    ];

    return (
        <div>
            {cardetails.map((each) => {
                return <Car key={each.model} brand={each.brand} model={each.model} />;
            })}
        </div>
    );
}

export default CarInfo;