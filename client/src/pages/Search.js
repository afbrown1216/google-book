import React from 'react';
import Results from "../components/Results";
import Form from "../components/Form";


const Search = () => {

    return (
        <div>
            <h1> Search Page. </h1>            
            <div className={{borderStyle}}>
                <Form/>
            </div>
            
            <Results />
        

        </div>
    );
};

export default Search;

const borderStyle = {
    borderColor: "black", 
    borderWidth: "3px", 
    backgroundColor: "lightGray", 
    fontFamily: "courier", 
    borderStyle: "solid"

};