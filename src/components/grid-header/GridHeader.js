import React, {useContext, useState} from 'react'
import GridHeaderIcon from './grid-header-icon/GridHeaderIcon'
import Modal from 'components/common/modal/Modal'
import Divider from 'components/common/divider/Divider'
import { FileContext } from 'context/FileUsersContext'
import { FileGridContext } from 'context/FileGridContext'
import { ViewModalBody, EditModalBody } from 'utils/modal-bodies/ModalBodies'
import './GridHeader.css'
import { FilteredGridContext } from 'context/FilteredGridContext'

export default function GridHeader(props) {
    const [file] = useContext(FileContext)
    const [filtered, setFiltered] = useContext(FilteredGridContext);
    const [grid, setGrid] = useContext(FileGridContext);
    const [viewModal, setViewModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const toggleViewModal = () => setViewModal(!viewModal);
    const toggleEditModal = () => setEditModal(!editModal);

    const deleteFile = fileTitle => {
        let i = grid.map(file => file.title).indexOf(fileTitle);
        let j = filtered.map(file => file.title).indexOf(fileTitle);
        let updatedGrid = [...grid];
        let updatedFilteredGrid = [...filtered];
        if (i < 0) return;
        updatedGrid.splice(i, 1);
        updatedFilteredGrid.splice(j, 1);
        setGrid(updatedGrid);
        setFiltered(updatedFilteredGrid);
    }

    const toggleList = () => {
        props.setIsList(!props.isList);
    }

    return (
        <div className="GridHeader">
            <h2>{props.title}</h2>
            <div className="buttons">
                <a href={require('../../utils/sample-files/sample.txt')} download={file.title ? file.title : "sample.txt"}>
                    <GridHeaderIcon type={1} />
                </a>
                <GridHeaderIcon type={2} onClick={file.title ? toggleViewModal : () => {}}/>
                <GridHeaderIcon type={5} onClick={file.title ? toggleEditModal : () => {}} />
                <GridHeaderIcon type={6} onClick={() => deleteFile(file.title)}/>
                <GridHeaderIcon type={props.isList ? 3 : 4} onClick={toggleList}/>
            </div>
            <Divider />
            <Modal open={viewModal} setOpen={setViewModal}>
                <ViewModalBody file={file} />
            </Modal>
            <Modal open={editModal} setOpen={setEditModal}>
                <EditModalBody file={file} toggle={toggleEditModal}/>
            </Modal>
        </div>
    )
}