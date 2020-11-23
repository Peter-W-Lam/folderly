import React, {useEffect, useState, useContext} from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {FileGridContext} from 'context/FileGridContext'
import {FilteredGridContext} from 'context/FilteredGridContext'
import Tile from 'components/common/tile/Tile'
import './FileGrid.css'
import ListFile from 'components/common/list-file/ListFile'


export default function FileGrid(props) {
    const [grid, setGrid] = useContext(FileGridContext);
    const [filtered, setFiltered] = useContext(FilteredGridContext);

    useEffect(() => {
        setFiltered([...grid])
    }, [])

    return (
        <div className={props.isList ? 'FileGrid list' : 'FileGrid grid'}>
            <TransitionGroup className="folders">
                {filtered && 
                    filtered
                        .filter(item => item.filetype === 1)
                        .map(item => 
                        <CSSTransition key={`css-${item.title}-${item.time}`} timeout={100} classNames="tile" appear={true}>
                            <Tile {...item} key={`tile-${item.title}-${item.time}`} isList={props.isList} />
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
            <TransitionGroup className="files">
                {filtered && 
                    filtered
                    .filter(item => item.filetype !== 1)
                    .map(item => 
                        <CSSTransition key={`css-${item.title}-${item.time}`} timeout={100} classNames="tile" appear={true}>
                            <Tile {...item} key={`tile-${item.title}-${item.time}`} isList={props.isList} />
                        </CSSTransition>
                    )}
            </TransitionGroup>
        </div>
    )
}