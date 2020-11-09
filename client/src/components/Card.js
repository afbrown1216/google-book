import React from 'react';

const Card = () => {
    return (
        <div style={{borderStyle}}>
            <div className="card text-right" >
                <div className="card-body">
                    <div className="row"> 
                    <h5 className="card-title col 8">Book Name  </h5>
                    <button type="button" className="btn btn-light col-2"> View </button> 
                    <button type="button" className="btn btn-light col-2">Save</button>
                    </div>
                    <div className="row">
                        <p className="card-text col"> short sentence  </p>
                        <p className="card-text col"> Author </p>
                    </div>
                    <div className="row">
                        <img className="col-9 rounded float-left" href="https://www.fillmurray.com/200/200"/>
                        <p className="blockquote text-right col-3"> summary  </p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Card;


const borderStyle = {
    borderColor: "grey", 
    borderWidth: "3px", 
    backgroundColor: "lightGray", 
    fontFamily: "courier", 
    borderStyle: "ridger"

}