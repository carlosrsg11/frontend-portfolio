"use client";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export default function NavbarModal({ isOpen, handleModalClose }: { isOpen: boolean, handleModalClose: () => void }) {
    return (
        <div className={
            clsx(
                "container-fluid",
                {
                    "modal-open": isOpen,
                    "d-none": !isOpen
                }
            )
        }>
            <div className="nav-links">
                <a href="#top-section" onClick={handleModalClose} className="navbar-link">Inicio</a>
                <a href="#project-section" onClick={handleModalClose} className="navbar-link">Proyectos</a>
                <a href="#education-section" onClick={handleModalClose} className="navbar-link">Educación</a>
                <a href="https://linkedin.com/" onClick={handleModalClose} className="navbar-link" target="_blank">Acerca de mí <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                <a href="/blog" onClick={handleModalClose} className="navbar-link" target="_blank">Blog <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                <a href="#contact-section" onClick={handleModalClose} className="navbar-link">Contáctame</a>
            </div>
        </div>
    );
}