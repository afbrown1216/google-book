import React from 'react';

const Form = () => {
    return (
            //div with a border  book search title book lable searchinput search button 
  
        <div className="card w-75">
            <div className="card-body">
              <h4 className="card-title">Book Search </h4>
              <h6 className="card-text"> Book</h6>
              <input className="form-control" type="text" placeholder="Book Title"/>
              <button type="button" className="btn btn-secondary btn-sm"> Search</button>
            </div>
        </div>
    );
};

export default Form;