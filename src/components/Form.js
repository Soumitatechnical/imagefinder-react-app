import React from 'react'
import './Form.css'

const Form =({handleGetRequest})=> {
    return (
        <div className="container">

    <form className="form py-3" onSubmit={handleGetRequest} >
                <input placeholder="Search for images...." type="text"
                autoComplete="off" className="forn-control" name="searchValue"></input>
                <button className="btn btn-primary">Search</button>
            </form>
            
        </div>
    )
}


export default Form