import React from 'react'
import './Profile.css'
import ReactTooltip from 'react-tooltip';

export default function Profile(props) {
    return (
        <div className="Profile" >
            <img src={props.img} alt="Profile" data-tip={props.name}/>
            
            <ReactTooltip effect="solid" backgroundColor="#4339f2" multiline={true} id={`profile-tooltip-${props.name}`}/>
        </div>
    )
}