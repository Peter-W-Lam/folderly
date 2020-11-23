import React from 'react'
import './PageHeader.css'
import Search from './search/Search'
import UploadButton from './upload-button/UploadButton'
import UserProfile from './user-profile/UserProfile'


export default function PageHeader() {
    return (
        <div className="PageHeader">
            <Search />
            
            <div className="right">
                <UploadButton />
                <UserProfile />
            </div>
            
        </div>
    )
}