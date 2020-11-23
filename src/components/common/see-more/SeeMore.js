import React, { useEffect, useState } from 'react'
import './SeeMore.css'
export default function SeeMore(props) {
    let profileString = "";
    const [dataTip, setDataTip] = useState("")
    useEffect(() => {
        for (let i = 0; i < props.profiles.length; i++) {
            profileString += props.profiles[i].name + "<br />";
        }
        setDataTip(profileString);
    }, [])

    return (
        <div className="SeeMore" data-tip={dataTip}>
            <p>{`+${props.profiles.length}`}</p>
        </div>
    )
}