import React from "react";

function Ads(props) {
    return (
        <div className="col-md-3">
        <div className="card w-100" style={{marginTop:50}}>
            <img style={{margin:10}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWauw-ZLWBWmfas4ULjlz3RatEXtuIDtznw&s" className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
        </div>
        </div>
    )
}

export default Ads