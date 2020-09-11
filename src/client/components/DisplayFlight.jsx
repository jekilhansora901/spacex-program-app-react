import React from 'react'
import "../styles/DisplayFlight.css"
const DisplayFlight = (props) => {
    return(<div className="flight_container flight_container_div">
        <div className="img_container">
            <img src={props.flight.links.mission_patch_small} className="img" alt="mission#" />
        </div>
        <div className="main_title">{props.flight.mission_name} #{props.flight.flight_number}</div>
        <div><span className="sub_title">Mission Ids:</span>
            <ul>
                {props.flight.mission_id && props.flight.mission_id.map((mission_id, index) => (
                    <li key={index}>{mission_id}</li>
                ))}
            </ul>    
        </div>
        <div><span className="sub_title">Launch Year: </span>{props.flight.launch_year}</div>
        <div><span className="sub_title">Successful Launch: </span>{props.flight.launch_success?.toString()}</div>
        <div><span className="sub_title">Successful Landing: </span>{props.flight.launch_landing}</div>
    </div>)
}

export default DisplayFlight;