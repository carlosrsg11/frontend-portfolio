import Image from "next/image";
import "/src/app/styles/landing.scss";

export default function Totito() {
    return (
        <section className="projects-specific-section" id="projects-specific-section">
            <div className="container">
                <div className="row">
                    <h3 className="section-title-specific text-center text-md-start">Totito en consola</h3>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <div>
                            <Image
                                className="img-fluid my-picture"
                                src="/Totito1.png"
                                alt="Imagen del Primer Proyecto"
                                width={540}
                                height={385}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <h2 className="title-section-specific">Descripción</h2>
                        <p className="project-description-specific col-12 col-md-10">
                            El proyecto consiste en una aplicación que despliega en consola
                            una ronda de Totito contra la computadora. El rol que asumí dentro
                            del proyecto fue de líder, ya que es un proyecto individual y el
                            resultado fue el esperado, funcionó tal y como se tenía previsto.
                        </p>
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <h2 className="title-section-specific">Lenguajes</h2>
                        <p className="project-description-specific col-12 col-md-10">
                            Construido con Python. <br /><br /><br />
                        </p>
                        <h2 className="title-section-specific">Fecha de publicación</h2>
                        <p className="project-description-specific col-12 col-md-10">
                            01 de abril de 2023. <br /><br /><br />
                        </p>
                        <div className="text-center">
                            <button className="project-link-specific-button">
                                <a href="https://github.com/carlosrsg11/Juego-Totito.git" className="project-link-specific" target="_blank"><b>Ir al Proyecto </b></a>
                            </button>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <div>
                            <Image
                                className="img-fluid my-picture"
                                src="/Totito2.png"
                                alt="Imagen del Primer Proyecto"
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