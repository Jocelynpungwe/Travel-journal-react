import React from "react"

export default function Main(props){
    console.log(props)
    return(
        <div className="main-container">
            <img className="main-img" src={`${props.places.imageUrl}`} />
            <div className="content-container">
                <div>
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="country-el">{props.places.location}</span>
                    <span><a className="country-link" href="#">View on Google Maps</a></span>
                </div>
                <h2>{props.places.title}</h2>
                <p className="date-paragraph">{props.places.startDate} - {props.places.endDate}</p>
                <p className="content-body">{props.places.description}</p>
            </div>
        </div>
        
    )
}