import React from "react";

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
        return Object.keys(sortOptions).map((sortOption) => {
            let sortOptionValue = sortOptions[sortOption];
            return <li key={sortOptionValue}>{sortOption}</li>;
          });
    };

    return (
        <div>
            <div>
                <ul className="sort-by-list">
                    {renderSortOptions()}
                </ul>
            </div>
            <div className="search-input">
                <input type="text" placeholder="Search Businesses"></input>
                <input type="text" placeholder="Where?"></input>
                <input type="submit" className="search-button" value="Let's Go"></input>
            </div>
        </div>
    );
}