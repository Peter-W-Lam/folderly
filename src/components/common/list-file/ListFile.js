import React from 'react'
import { getDateString } from 'utils/DateString'
import ProfilesListSm from '../tile/profiles-list-sm/ProfilesListSm'
import './ListFile.css'


export default function ListFile(props) {
    return (
        <div className="ListFile">
            <p>{props.title}</p>
            <p>{getDateString(props.time)}</p>
            <ProfilesListSm {...props} />
        </div>
    )
}