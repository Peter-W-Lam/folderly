import React from 'react'
import './Title.css'
export default function Title(props) {
    return (
        <h4 className="Title">{props.children}</h4>
    )
}