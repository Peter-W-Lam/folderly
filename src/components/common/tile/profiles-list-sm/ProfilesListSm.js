import Profile from 'components/common/profile/Profile';
import React, { useEffect, useState } from 'react'
import './ProfilesListSm.css'


export default function ProfilesListSm(props) {

    const [profiles, setProfiles] = useState(null)

    const populateProfiles = () => {
        if (!props.sharedWith) return;
        if (props.sharedWith.length < 4) {
            let mappedProfiles = props.sharedWith.map(p => (
                <Profile 
                    img={p.img}
                    name={p.name}
                    key={`sm-profile-${p.name}-${Math.random()}`}
                />
            ))
            setProfiles(mappedProfiles);
        } else {
            let mappedProfiles = []
            for (let i = 0; i < 4; i++) {
                let p = props.sharedWith[i]
                mappedProfiles.push(<Profile img={p.img} name={p.name} key={`sm-profile-${p.name}-${Math.random()}`}/>)
            }
            setProfiles(mappedProfiles);
        }
    }

    useEffect(() => {
        populateProfiles();
    }, [])

    return (
        <div className="ProfilesListSm">
            {profiles}
        </div>
    )
}