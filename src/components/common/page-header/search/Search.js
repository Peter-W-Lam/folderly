import React, {useContext, useEffect, useState} from 'react'
import {FileGridContext} from 'context/FileGridContext'
import FilesData from 'utils/data/FilesData.json'
import './Search.css'
import { FilteredGridContext } from 'context/FilteredGridContext'


export default function Search() {
    const [value, setValue] = useState("")
    const [grid, setGrid] = useContext(FileGridContext)
    const [filtered, setFiltered] = useContext(FilteredGridContext)


    useEffect(() => {
        if (value == "") {
            setFiltered([...grid])
        } else {
            let filteredResults = [...grid].filter(file => file.title.toUpperCase().includes(value.toUpperCase()));
            setFiltered(filteredResults);
        }
    }, [value])

    return (
        <div className="Search">
            <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Search"/>
        </div>
    )
}