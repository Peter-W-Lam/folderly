import React, { useRef, useState, useContext, useEffect } from 'react'
import { Folder, Infinite, Motion, Pdf, 
         Picture, Ppt, Spreadsheet, Word, Zip } from 'assets'
import {FileContext} from 'context/FileUsersContext'
import { getDateString } from 'utils/DateString'
// import {useOutsideAlerter} from 'utils/UseOutsideAlerter'
import ProfilesListSm from './profiles-list-sm/ProfilesListSm'
import './Tile.css'


export default function Tile(props) {
    // const [profiles, setProfiles] = useState(null)
    const [selected, setSelected] = useState(false)
    const [file, setFile] = useContext(FileContext)
    const TileRef = useRef(null)

    const images = {
        1: Folder, 
        2: Infinite, 
        3: Motion, 
        4: Pdf,
        5: Picture, 
        6: Ppt, 
        7: Spreadsheet, 
        8: Word, 
        9: Zip
    }

    // useEffect(() => {
    //     console.log(file);
    // }, [file])


    const handleClick = () => {
        setSelected(true);
        setFile({...file, ...props, users: props.sharedWith});
    }

    const useOutsideAlerter = (ref, handleOutsideClick) => {
        useEffect(() => {
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setSelected(false);
                // setFile({selected: false});
            }
          }
    
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref, handleOutsideClick]);
    }

    useOutsideAlerter(TileRef);

    if (!props.filetype || !props.title || !props.time) return <></>


    const getClassName = () => {
        if (selected) {
            return props.isList ? 'Tile list selected' : 'Tile grid selected'
        } else {
            return props.isList ? 'Tile list' : 'Tile grid'
        }
    }
    return (
        <div className={getClassName()} ref={TileRef} onClick={handleClick}>
            <div className="folder-and-title">
                 <div className={props.filetype > 1 ? 'icon file' : 'icon folder'}>
                    <img src={images[props.filetype]} alt=""/>
                </div>
                <h3 className={props.filetype > 1 ? 'normal' : 'lg'}>
                    {props.title}
                </h3>
            </div>
           
            <p>{getDateString(props.time)}</p>
            <ProfilesListSm {...props} />
        </div>
    )
}