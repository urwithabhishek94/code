import React from 'react'
import '../App.css';
import {
    Link
  } from "react-router-dom";
 const InserFlight = () => {
    return(
        <>
        <div className='container mt-2 '>
        <Link to="/search" className='btn-sm button-link mt-2 btn btn-primary 'style={{"width":"15%"}} >Search Flight</Link>
        </div>
        
        <div className='container mt-5'>
        <h3 className='h3-left-text'>Add New Flight Details</h3>
            <div className="row mt-3 mb-3">
            <div className="col">
                <input type="text" className="form-control" placeholder="Departure City" aria-label="First name" />
            </div>

            <div className="col">
                <input type="text" className="form-control" placeholder="Arrival City" aria-label="Last name" />
            </div>

            <div className="col">
                <input type="text" className="form-control" placeholder="Departure time" aria-label="Last name" />
            </div>
            </div>

            <div className="container mb-3">
                <button type="submit"name='Search' className='button-link btn btn-primary'>Submit</button>
            </div>
        </div>
        </>
    )
 }

 export default InserFlight;