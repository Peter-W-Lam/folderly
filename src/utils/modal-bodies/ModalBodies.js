import React, {useContext, useEffect, useState} from 'react'
import {FileGridContext} from 'context/FileGridContext'
import {FilteredGridContext} from 'context/FilteredGridContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons'
import dayjs from 'dayjs'
import './ModalBodies.css'

export const UploadModalBody = () => {
    return (
        <div className="UploadModalBody">
            <h3>Upload files</h3>
            <p className="upload-box">Drag files here or browse</p>
        </div>
    )
}

export const ViewModalBody = (props) => {
    const [file, setFile] = useState({});
    const [grid, setGrid] = useContext(FileGridContext);
    const [filtered, setFiltered] = useContext(FilteredGridContext);


    useEffect(() => {
        setFile({...props.file})
    }, [props.file]);

    const removeUser = (name) => {
        let sharedWith = [...file.sharedWith]
        let i  = sharedWith.map(usr => usr.name).indexOf(name);
        if (i < 0) return;
        sharedWith.splice(i, 1);
        setFile({...file, sharedWith: sharedWith});

        i = grid.map(f => f.title).indexOf(file.title)
        let j = filtered.map(f => f.title).indexOf(file.title)
        let localGrid = [...grid];
        let localFiltered = [...filtered];
        let newFile = {...localGrid[i]};
        
        newFile.sharedWith = sharedWith;
        localGrid[i] = newFile;
        setGrid(localGrid);

        if (j >= 0) {
            localFiltered[j] = newFile;
            setFiltered(localFiltered);
        }
    }

    const statusFromNum = num => {
        switch(num) {
            case 0: 
                return "Not Touched";
            case 1: 
                return "In Progress"; 
            case 2: 
                return "Approved"; 
            default: 
                return "Not Touched";
        }
    }

    return (file && 
        <div className="ViewModalBody">
            <h3>{file.title}</h3>
            <p className="time">{dayjs(props.time).format('hh:mm A, MMMM DD, YYYY')}</p>
            <p className="status">{statusFromNum(file.status)}</p>
            <div className="shared-list">
                <h3>Shared with</h3>
                {file.sharedWith && 
                 file.sharedWith.map(user => (
                    <div key={`viewmodal-${user.name}`} className="user-list-item">
                        <div className="user">
                            <img src={user.img} alt={user.name}/>
                            <p>{user.name}</p>
                        </div>
                        <button className="delete-user-btn" onClick={() => removeUser(user.name)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const EditModalBody = (props) => {

    const [value, setValue] = useState("");
    const [grid, setGrid] = useContext(FileGridContext);
    const [filtered, setFiltered] = useContext(FilteredGridContext);

    useEffect(() => {
        if (props.file) setValue(props.file.title);
    }, [props.file])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let i = grid.map(f => f.title).indexOf(props.file.title)
        let j = filtered.map(f => f.title).indexOf(props.file.title)

        let localGrid = [...grid];
        let localFiltered = [...filtered];

        let newFile = {...localGrid[i]};
        
        newFile.title = value;
        localGrid[i] = newFile;
        setGrid(localGrid);
 
        if (j >= 0) {
            localFiltered[j] = newFile;
            setFiltered(localFiltered);
        }

        props.toggle();
    }
    return(
        <div className="EditModalBody">
            <h3>Rename file</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Title 
                    <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                </label>
                <button type="submit" className="submit-btn">Rename</button>
            </form>
        </div>
    )
}