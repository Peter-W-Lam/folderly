import React, {useState, useEffect} from 'react'
import Title from 'components/common/title/Title'
import './SharedBlock.css'
import Profile from 'components/common/profile/Profile'
import SeeMore from 'components/common/see-more/SeeMore';


export default function SharedBlock(props) {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        if (!props.profiles) return;
        if (props.profiles.length > 3) {
            setProfiles(props.profiles.slice(0, 3))
        } else {
            setProfiles(props.profiles);
        }
    }, [props.profiles])



    return (
        <div className="SharedBlock">
            <Title>Shared by</Title>
            <div className="profiles">
                {profiles && profiles.map(p => <Profile key={p.name} img={p.img} name={p.name}/>)}
                {profiles && profiles.length > 3 && 
                <SeeMore profiles={props.profiles.slice(3, props.profiles.length - 1)}/>
                }
            </div>
        </div>
    )
}