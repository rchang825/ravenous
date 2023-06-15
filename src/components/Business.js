import React from "react";

//creates businesses with appropriate attributes
export default function Business() {
    const sample = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    };
    return (
        <div>
            <img src= {sample.imageSrc}></img>
            <h3>{sample.name}</h3>
            <p>{sample.address}</p>
            <p>{sample.city}</p>
            <p>{sample.state} {sample.zipCode}</p>
            <h5>{sample.category}</h5>
            <p>{sample.rating} stars</p>
            <p>{sample.reviewCount}</p>
        </div>
    );
}