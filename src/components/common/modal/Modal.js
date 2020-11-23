import React, {useState} from 'react'
import './Modal.css'


export default function Modal(props) {

    return (
        <div className={props.open ? 'Modal open' : 'Modal'}>
            <div className="content">
                <span className="close-button" onClick={() => props.setOpen(false)}>&times;</span>
                {props.children}
            </div>
        </div>
    )
}