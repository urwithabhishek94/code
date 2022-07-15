import React from "react";
import '../App.css';
const  Flight = () => {
    return(
        <>  
        <div className='container mt-5'>
            <h4 className="h3-left-text mb-4">BEST FLIGHT PLAN</h4>
            <div className="row border border-dark border-3 " style={{"border-radius":"30px"}}>
            <div className="col mt-3 mb-3">
                <b className="text-secondary">FLIGHT NUMBER</b>
                <h4 className="flights-details-text">Ak-168</h4>
            </div>
            <div className="col  mt-3 mb-3">
                <b className="text-secondary">FROM</b>
                <h4 className="flights-details-text">DELHI - 7:00 PM</h4>
            </div>
            <div className="col  mt-3 mb-3">
                <b className="text-secondary">TO</b>
                <h4 className="flights-details-text">INDORE -8:00 PM</h4>
            </div>
            </div>
            <br />
            <div className="row border border-dark border-3 " style={{"border-radius":"30px"}}>
            <div className="col mt-3 mb-3">
                <b className="text-secondary">FLIGHT NUMBER</b>
                <h4 className="flights-details-text">Ak-167</h4>
            </div>
            <div className="col  mt-3 mb-3">
                <b className="text-secondary">FROM</b>
                <h4 className="flights-details-text">INDORE - 7:00 PM</h4>
            </div>
            <div className="col  mt-3 mb-3">
                <b className="text-secondary">TO</b>
                <h4 className="flights-details-text">DELHI -8:00 PM</h4>
            </div>
            </div>

            <br />
            <div className="row border border-dark border-3 " style={{"border-radius":"30px"}}>
            <div className="col mt-3 mb-3">
                <b className="text-secondary">FLIGHT NUMBER</b>
                <h4 className="flights-details-text">Ak-168</h4>
            </div>
            <div className="col  mt-3 mb-3">
                <b className="text-secondary">FROM</b>
                <h4 className="flights-details-text">DELHI - 10:00 PM</h4>
            </div>
            <div className="col  mt-3 mb-3">
                <b className="text-secondary">TO</b>
                <h4 className="flights-details-text">PATNA - 11:30 PM</h4>
            </div>
            </div>
            <br />
        </div>
        </>
    )
}

export default Flight