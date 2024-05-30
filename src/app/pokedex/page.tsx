import "/src/app/styles/landing.scss";
import Image from "next/image";

export default function Pokedex() {
    return (
        <section className="projects-specific-section" id="projects-specific-section">
            <div className="container">
                <div className="row">
                    <h3 className="section-title-specific text-center text-md-start">Pokédex de seis pokémon random</h3>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <div>
                            <Image
                                className="img-fluid my-picture"
                                src="/Pokedex1.png"
                                alt="Imagen del Cuarto Proyecto"
                                width={540}
                                height={385}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <h2 className="title-section-specific">Descripción</h2>
                        <p className="project-description-specific col-12 col-md-10">
                            La función de este proyecto es crear una página web que servirá
                            como pokédex que guarda seis pokémon y los muestra en tarjetas,
                            cada vez que se recarga la página se cambian los seis pokémon de
                            la pokédex. El rol que asumí dentro de este proyecto fue de backend
                            y frontend, ya que era un proyecto pequeño, se cumplió con
                            lo solicitado para la realización del mismo.
                        </p>
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <h2 className="title-section-specific">Lenguajes</h2>
                        <p className="project-description-specific col-12 col-md-10">
                            Construido con HTML, CSS y JavaScript. <br /><br /><br />
                        </p>
                        <h2 className="title-section-specific">Fecha de publicación</h2>
                        <p className="project-description-specific col-12 col-md-10">
                            27 de octubre de 2022. <br /><br /><br />
                        </p>
                        <div className="text-center">
                            <button className="project-link-specific-button">
                                <a href="https://github.com/carlosrsg11/Proyecto4LevelUp.git" className="project-link-specific" target="_blank"><b>Ir al Proyecto </b></a>
                            </button>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <div>
                            <Image
                                className="img-fluid my-picture"
                                src="/Pokedex2.png"
                                alt="Imagen del Cuarto Proyecto"
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