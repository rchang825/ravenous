import React, { useState } from "react";

//displays a search bar that allows sorting
export default function SearchBar() {
    //Create a JavaScript object to contain the key-value pairs for each sorting option, 
    //with the key being the name of the option and value being the appropriate API value.
    const sortOptions = {
        "Best Match": "best_match",
        "Highest Rated": "rating",
        "Most Reviewed": "review_count"
    };
    //Then, iterate through the object and generate a list item for each key-value pair. 
    //Set the key attribute of each list item to the value of the corresponding key, 
    //and set the content of the list item to the value of the corresponding value.
    const renderSortOptions = () => {
        return Object.keys(sortOptions).map((option) => {
            let sortOptionValue = sortOptions[option];
            //console.log("sortOptionValue", sortOptionValue, "sortOption state", sortOption);
            return <li key={sortOptionValue} onClick={() => {clickHandler(sortOptionValue)}} style={sortOptionValue === sortOption ? {"font-weight": "bold"} : null}>
                {option}
                </li>;
          });
    };

    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sortOption, setSortOption] = useState("");

    const clickHandler = (sortOptionValue) => {
        setSortOption(sortOptionValue);
        //console.log("sortOption is", sortOptionValue);
    };

    const inputChangeHandler = (event) => {
        setSearchTerm(event.target.value);
    };

    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
    };

    const submitClickHandler = (event) => {
        event.preventDefault();
        console.log("Searching Yelp with ", searchTerm, ",", location, ",", sortOption);
    }

    return (
        <div>
            <div>
                <ul className="sort-by-list">
                    {renderSortOptions()}
                </ul>
            </div>
            <div className="search-input">
                <input type="text" placeholder="Search Businesses" onChange={inputChangeHandler} value={searchTerm}></input>
                <input type="text" placeholder="Where?" onChange={locationChangeHandler} value={location}></input>
                <input type="submit" className="search-button" onClick={submitClickHandler} value="Let's Go"></input>
            </div>
        </div>
    );
}