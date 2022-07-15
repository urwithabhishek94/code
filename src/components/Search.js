import React from 'react'
import Flight from './Flight';
import {
    Link
  } from "react-router-dom";

 const Search = () => {
    return(
        <>
        <Link to="/" className="btn-sm button-link mt-2 btn btn-primary" style={{"width":"15%"}}>Insert Flight</Link>
        <div className='container  mt-5'>
            <h4 className='h3-left-text'>SEARCH FLIGHT</h4>
            <div className="row mt-3 mb-3">
            <div className="col">
                <input type="text" className="form-control" placeholder="Departure City" aria-label="First name" />
            </div>

            <div className="col">
                <input type="text" className="form-control" placeholder="Arrival City" aria-label="Last name" />
            </div>

            <div className="col">
                <input type="text" className="form-control" placeholder="Departure time"
                 aria-label="Last name" />
            </div>
            </div>

            <div className="container mb-3">
                <button name='Search' className=' button-link btn btn-primary'>SEARCH</button>
            </div>
        </div>
        <Flight />
        </>
    )
 }

 export default Search;