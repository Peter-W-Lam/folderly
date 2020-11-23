import React, {useState, useContext} from 'react'
import Logo from 'components/sidebar/logo/Logo.js'
import './Sidebar.css'
import Divider from 'components/common/divider/Divider'
import SharedBlock from './shared-block/SharedBlock'
import LogoutBtn from './logout/LogoutBtn'
import LinkBlock from './link-block/LinkBlock'
import TestData from 'utils/data/TestData.json'
import Hamburger from 'assets/sidebar/hamburger.svg'
import Close from 'assets/sidebar/close.svg'
import {FileContext} from 'context/FileUsersContext'

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const [file, setFile] = useContext(FileContext);

    return (
        <div className={open ? 'Sidebar open' : 'Sidebar'}>
            <button className="menu-icon" onClick={() => setOpen(!open)}>
                <img src={Hamburger} alt="Hamburger menu"/>
            </button>
            <div className='contents'>
                <button className="close-icon" onClick={() => setOpen(!open)}>
                    <img src={Close} alt="Close" />
                </button>
                <Logo />
                <Divider />
                <div className="links">
                    <div className="top">
                        <LinkBlock />
                        <SharedBlock profiles={file.users} />
                    </div>
                    <LogoutBtn />
                </div>
            </div>
        </div>
    )
}
