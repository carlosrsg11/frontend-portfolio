import "/src/app/styles/landing.scss";
import Image from "next/image";

export default function Senas() {
    return (
        <section className="projects-specific-section" id="projects-specific-section">
            <div className="container">
                <div className="row">
                    <h3 className="section-title-specific text-center text-md-start">detector y Reconocimiento de lenguaje de señas</h3>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <div>
                            <Image
                                className="img-fluid my-picture"
                                src="/senias2.png"
                                alt="Imagen del Segundo Proyecto"
                                width={540}
                                height={385}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <h2 className="title-section-specific">Descripción</h2>
                        <p className="project-description-specific col-12 col-md-10">
                            El detector de lenguaje de señas por medio de la cámara web despliega
                            una ventana donde detecta por medio de la librería numpy una mano,
                            diferencia las señas que hace y despliega la letra en pantalla. El rol
                            que asumí dentro del proyecto fue de backend, se cumplió con los
                            requerimietos esperados y específicos.
                        </p>
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <h2 className="title-section-specific">Lenguajes</h2>
                        <p className="project-description-specific col-12 col-md-10">
                            Construido con Python. <br /><br /><br />
                        </p>
                        <h2 className="title-section-specific">Fecha de publicación</h2>
                        <p className="project-description-specific col-12 col-md-10">
                            05 de mayo de 2023. <br /><br /><br />
                        </p>
                        <div className="text-center">
                            <button className="project-link-specific-button">
                                <a href="https://github.com/carlosrsg11/ProyectoIAFinal.git" className="project-link-specific" target="_blank"><b>Ir al Proyecto </b></a>
                            </button>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <div>
                            <Image
                                className="img-fluid my-picture"
                                src="/senias3.png"
                                alt="Imagen del Segundo Proyecto"
                                width={540}
                                height={385}
                            />
                        </div>
                    </div>
                </div>
                <div className="projects-footer">
                    <p>Y algunos otros proyectos más, si deseas ver los más recientes puedes ir a mi <a href="https://github.com/carlosrsg11" className="projects-footer-link" target="_blank">GitHub</a>.</p>
                </div>
            </div>
        </section>
    );
}