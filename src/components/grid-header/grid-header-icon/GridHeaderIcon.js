import React from 'react'
import { Download, Eye, Grid, List, Pencil, Trash, Tree } from 'assets'
import ReactTooltip from 'react-tooltip'
import './GridHeaderIcon.css'

export default function GridHeaderIcon(props) {

    const images = {1: Download, 2: Eye, 3: Grid, 4: List, 5: Pencil, 6: Trash, 7: Tree}
    const imageAlts = {1: "Download", 2: "View", 3: "Grid", 4: "List", 5: "Edit", 6: "Delete", 7: "Shared With"}
    
    return (
        <button onClick={props.onClick} className="GridHeaderIcon" data-tip={imageAlts[props.type]}>
            <img src={images[props.type]} alt={imageAlts[props.type]} />
            {/* <ReactTooltip effect="solid" backgroundColor="#4339f2" multiline={true} id={`grid-header-${props.type}`}/> */}
        </button>
    )
}