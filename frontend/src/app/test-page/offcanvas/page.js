'use client';

import { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

export default function OffcanvasComponent() {
    const offcanvasRef = useRef(null);
    let bootstrap; // Declare bootstrap variable

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bs) => {
            bootstrap = bs; // Assign imported module to variable
        });
    }, []);

    const handleShow = () => {
        if (offcanvasRef.current && bootstrap) {
            new bootstrap.Offcanvas(offcanvasRef.current).show();
        }
    };

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>Show Offcanvas</Button>

            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasWithBackdrop"
                aria-labelledby="offcanvasWithBackdropLabel"
                ref={offcanvasRef}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>.....</p>
                </div>
            </div>
        </div>
    );
}
