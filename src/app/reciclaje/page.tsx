import "/src/app/styles/landing.scss";
import Image from "next/image";

export default function Reciclaje() {
    return (
        <section className="projects-specific-section" id="projects-specific-section">
            <div className="container">
                <div className="row">
                    <h3 className="section-title-specific text-center text-md-start">Página de reciclaje y rutas de recolección de basura en xela</h3>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <div>
                            <Image
                                className="img-fluid my-picture"
                                src="/Reciclaje1.png"
                                alt="Imagen del Tercer Proyecto"
                                width={540}
                                height={385}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <h2 className="title-section-specific">Descripción</h2>
                        <p className="project-description-specific col-12 col-md-10">
                            Esta es un página web enfocada al reciclaje, en ella podemos
                            encontrar los días en que los camiones de basura tanto orgánica
                            como inorgánica hacen sus rutas dependiendo la zona de
                            Quetzaltenango. El rol que asumí dentro de este proyecto fue de
                            desarrollador backend, se cumplió con lo esperado para la página
                            y la hicimos responsiva como se pedía.
                        </p>
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <h2 className="title-section-specific">Lenguajes</h2>
                        <p className="project-description-specific col-12 col-md-10">
                            Construido con HTML, CSS y JavaScript. <br /><br /><br />
                        </p>
                        <h2 className="title-section-specific">Fecha de publicación</h2>
                        <p className="project-description-specific col-12 col-md-10">
                            11 de junio de 2023. <br /><br /><br />
                        </p>
                        <div className="text-center">
                            <button className="project-link-specific-button">
                                <a href="https://github.com/Jos-mlp/HackFest10.git" className="project-link-specific" target="_blank"><b>Ir al Proyecto </b></a>
                            </button>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start project">
                        <div>
                            <Image
                                className="img-fluid my-picture"
                                src="/Reciclaje2.png"
                                alt="Imagen del Tercer Proyecto"
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