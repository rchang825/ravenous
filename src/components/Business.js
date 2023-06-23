import React from "react";

//creates businesses with appropriate attributes
export default function Business(props) {
    // const sample = {
    //     imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    //     name: 'MarginOtto Pizzeria',
    //     address: '1010 Padding Way',
    //     city: 'Flavortown',
    //     state: 'NY',
    //     zipCode: '10101',
    //     category: 'Italian',
    //     rating: 4.5,
    //     reviewCount: 90
    // };
    return (
        <div>
            <div className="business-img-container">
                <img src= {props.business.imageSrc} className="business-img"></img>
            </div>
            <div className="info">
                <h3 className="restaurant-name">{props.business.name}</h3>
                <div className="details-format">
                    <p className="address">
                        {props.business.address} <br></br>
                        {props.business.city} <br></br>
                        {props.business.state} {props.business.zipCode}
                    </p>
                    <p className="misc-details">
                        {props.business.category} <br></br>
                        {props.business.rating} stars <br></br>
                        {props.business.reviewCount} reviews
                    </p>                      
                </div>
            </div>
        </div>
    );
}