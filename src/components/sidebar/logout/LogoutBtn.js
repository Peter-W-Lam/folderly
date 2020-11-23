import React from 'react'
import './LogoutBtn.css'
import PowerIcon from 'assets/sidebar/Power.svg'
import ReactTooltip from 'react-tooltip';


export default function LogoutBtn() {
    return (
        <div className="LogoutBtn">
            <button data-tip="Log out">
                <img src={PowerIcon} alt="Power on/off" />
            </button>

            
        </div>
    )
}