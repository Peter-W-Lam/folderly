import React, {useContext, useState} from 'react'
import LinkTitle from '../link-title/LinkTitle'
import {FileGridContext} from 'context/FileGridContext'
import {FilteredGridContext} from 'context/FilteredGridContext'
import './LinkBlock.css'
import { StatusContext } from 'context/StatusContext'

export default function LinkBlock() {

    const [tab, setTab] = useState(3);
    const [grid, setGrid] = useContext(FileGridContext);
    const [status, setStatus] = useContext(StatusContext)
    const [filtered, setFiltered] = useContext(FilteredGridContext)
    const handleClick = tab => {
        setTab(tab);
        setStatus(tab);
        
        if (tab === 3) {
            setFiltered([...grid])
        } else {
            let filteredItems = grid.filter(file => file.status === tab);
            setFiltered([...filteredItems])
            
        }
    }
    return (
        <div className="LinkBlock">
            <LinkTitle 
                className={tab === 3 ? 'selected' : ''} 
                onClick={() => handleClick(3)}
                title="All" 
                alertNum={grid.length} 
                color="yellow"
            />
            <LinkTitle 
                className={tab === 2 ? 'selected' : ''} 
                onClick={() => handleClick(2)}
                title="Approved" 
                alertNum={grid.filter(f => f.status === 2).length} 
                color="green"
            />
            <LinkTitle 
                className={tab === 1 ? 'selected' : ''} 
                onClick={() => handleClick(1)}
                title="In Progress" 
                alertNum={grid.filter(f => f.status === 1).length} 
                color="purple"
            />
            <LinkTitle 
                className={tab === 0 ? 'selected' : ''} 
                onClick={() => handleClick(0)}
                title="Not Touched" 
                alertNum={grid.filter(f => f.status === 0).length} 
                color="red"
            />
        </div>
    )
}