// src/components/Modal.js
"use client";
import { useState } from 'react';

const Modal = () => {
    const [show, setShow] = useState(false);

    const toggleModal = () => {
        setShow(!show);
    };

    return (
        <>
            {/* Button to trigger the modal */}
            <button className="btn btn-primary" onClick={toggleModal}>
                Open Modal
            </button>

            {/* Modal structure */}
            {show && (
                <div
                    className="modal fade show"
                    style={{ display: 'block' }}
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    role='dialog'
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Modal title
                                </h5>
                            </div>
                            <div className="modal-body">
                                This is the content of the modal.
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={toggleModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
