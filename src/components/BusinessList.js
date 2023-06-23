import React from "react";
import Business from "./Business";

//displays businesses
export default function BusinessList(props) {
    return (
        <div className="businesses grid-container">
            {props.businesses.map(b =>  <Business business={b} />)}
        </div>
    );
}