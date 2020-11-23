import Modal from 'components/common/modal/Modal'
import React, {useState} from 'react'
import {UploadModalBody} from 'utils/modal-bodies/ModalBodies'
import './UploadButton.css'


export default function UploadButton() {
    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        setModalOpen(true);
    }

    return (
        <>
            <button className="UploadButton" onClick={handleClick}>Upload</button>
            <Modal open={modalOpen} setOpen={setModalOpen}>
                <UploadModalBody />
            </Modal>
        </>
    )
}