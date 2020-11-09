import React from 'react';
import Card from "./Card";

const Results = () => {

    return (
        //div with border title:results small boxes inside with book details view and save button f
        <div style={{borderStyle}}>
            <h1>Results </h1>
            <Card />
            
        </div>
    );
};

export default Results;


const borderStyle = {
    borderColor: "black", 
    borderWidth: "3px", 
    backgroundColor: "lightGray", 
    fontFamily: "courier", 
    borderStyle: "solid"

};