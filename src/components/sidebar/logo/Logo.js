import React from 'react'
import './Logo.css'
import LogoImg from 'assets/sidebar/Logo.svg'

export default function Logo() {
    return (
        <div className="Logo">
            <img src={LogoImg} alt="Folderly icon" />
            <h3>folderly</h3>
        </div>
    )
}
