import React from 'react'
import Title from 'components/common/title/Title'
import './LinkTitle.css'

export default function LinkTitle(props) {
    return (
        <button className={`LinkTitle ${props.className}`} onClick={props.onClick}>
            <Title>{props.title}</Title>
            <p className={`alertNum ${props.color}`}>{props.alertNum}</p>
        </button>
    )

}
