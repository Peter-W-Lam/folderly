import React, {useContext, useEffect, useState} from 'react'

import Divider from 'components/common/divider/Divider'
import PageHeader from 'components/common/page-header/PageHeader'
import FileGrid from 'components/file-grid/FileGrid'
import GridHeader from 'components/grid-header/GridHeader'
import {FileGridProvider} from 'context/FileGridContext'
import {FilteredGridProvider} from 'context/FilteredGridContext'
import FilesData from 'utils/data/FilesData.json'
import { GenerateFiles } from 'utils/GenerateFiles'
import { statusString } from 'utils/DateString'
import './HomePage.css'
import { StatusContext } from 'context/StatusContext'

export default function HomePage() {
    const [isList, setIsList] = useState(false);
    const [status, getStatus] = useContext(StatusContext);
    const files = GenerateFiles();

    
    return (
        <div className="HomePage page">
            <PageHeader />
            <GridHeader title={statusString(status)} setIsList={setIsList} isList={isList}/>
            <FileGrid isList={isList} />
                
        </div>
    )
}