"use client";

import Image from "next/image";
import NavbarModal from "./components/NavbarModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
  faHtml5,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

import "/src/app/styles/landing.scss";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { faArrowUpRightFromSquare, faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleModalOpen() {
    setModalOpen(true);
  }

  function handleModalClose() {
    setModalOpen(false);
  }


  return (
    <main>
      <NavbarModal isOpen={isModalOpen} handleModalClose={handleModalClose} />
      <Navbar
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
        handleModalClose={handleModalClose}
      />
      <section className="hero" id="top-section">
        <div className="container full-height">
          <div className="row hero-row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-12 col-md-8 col-lg-5 hero-text text-center text-lg-start">
              <header>
                <h1>Carlos Rodolfo</h1>
                <h1>Santisteban</h1>
                <h1>Gramajo.</h1>
              </header>

              <p>
                Soy un estudiante de quinto año de la carrera de Ingeniería en Informatática y Sistemas,
                me gusta <b>programar</b>, actualmente estoy aprendiendo <b>Next.js</b>, un poco de <b>redes</b>,
                puedo decir que tengo la habilidad de adaptarme a la forma de trabajar que me soliciten.
              </p>

              <a className="about-me-button" href="https://www.linkedin.com/in/carlos-santisteban-a9651a30a/" target="_blank"><b>Aprende más sobre mí </b> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>

              <div className="brand-icons-phone d-flex d-lg-none justify-content-center">
                <a
                  className="brand-icon-phone"
                  href="https://www.facebook.com/carlos.santisteban.54/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a className="brand-icon-phone"
                  href="https://x.com/csgramajo"
                  target="_blank">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  className="brand-icon-phone"
                  href="https://github.com/carlosrsg11"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  className="brand-icon-phone"
                  href="https://www.facebook.com/carlos.santisteban.54/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  className="brand-icon-phone"
                  href="https://www.linkedin.com/in/carlos-santisteban-a9651a30a/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  className="brand-icon-phone"
                  href="https://www.youtube.com/@carlossantisteban1883/featured"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-none d-lg-block order-lg-11">
              <div className="d-flex">
                <div>
                  <Image
                    className="img-fluid my-picture"
                    src="/carlos.jpeg"
                    alt="Imagen de Carlos Santisteban"
                    width={380}
                    height={385}
                  />
                </div>

                <div className="brand-icons">
                  <a
                    className="brand-icon"
                    href="https://www.facebook.com/carlos.santisteban.54/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a className="brand-icon" href="https://x.com/csgramajo" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                  <a className="brand-icon" href="https://github.com/carlosrsg11" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a className="brand-icon" href="https://www.facebook.com/carlos.santisteban.54/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a className="brand-icon" href="https://www.linkedin.com/in/carlos-santisteban-a9651a30a/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a className="brand-icon" href="https://www.youtube.com/@carlossantisteban1883/featured" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section" id="project-section">
        <div className="container">
          <div className="row">
            <h3 className="section-title text-center text-md-start">Proyectos</h3>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 text-center text-md-start project">
              <div>
                <Image
                  className="img-fluid my-picture"
                  src="/proyecto1.png"
                  alt="Imagen del Primer Proyecto"
                  width={540}
                  height={385}
                />
              </div>
              <h1 className="project-number">01</h1>
              <h2 className="project-title">Juego de Totito</h2>
              <p className="project-stack">
                Construido con Python.
              </p>
              <div>
                <a href="/totito" className="project-description-link" target="_blank">Leer más del proyecto <FontAwesomeIcon icon={faPython} /></a>
                <br /><br /><br />
              </div>
              <a href="https://github.com/carlosrsg11/Juego-Totito.git" className="projects-link" target="_blank"><b>Ir al Proyecto </b><FontAwesomeIcon icon={faGithub} /></a>
            </div>

            <div className="col-12 col-md-6 text-center text-md-start project">
              <div>
                <Image
                  className="img-fluid my-picture"
                  src="/proyecto2_1.png"
                  alt="Imagen del Primer Proyecto"
                  width={540}
                  height={385}
                />
              </div>
              <h1 className="project-number">02</h1>
              <h2 className="project-title">Detector de Lenguaje de Señas</h2>
              <p className="project-stack">
                Construido con Python.
              </p>
              <div>
                <a href="/senas" className="project-description-link" target="_blank">Leer más del proyecto <FontAwesomeIcon icon={faPython} /></a>
                <br /><br /><br />
              </div>
              <a href="https://github.com/carlosrsg11/ProyectoIAFinal.git" className="projects-link" target="_blank"><b>Ir al Proyecto </b><FontAwesomeIcon icon={faGithub} /></a>
            </div>

            <div className="col-12 col-md-6 text-center text-md-start project">
              <div>
                <Image
                  className="img-fluid my-picture"
                  src="/proyecto3.png"
                  alt="Imagen del Primer Proyecto"
                  width={540}
                  height={385}
                />
              </div>
              <h1 className="project-number">03</h1>
              <h2 className="project-title">Página de Reciclaje</h2>
              <p className="project-stack">
                Construido con HTML, CSS y JavaScript.
              </p>
              <div>
                <a href="/reciclaje" className="project-description-link" target="_blank">Leer más del proyecto <FontAwesomeIcon icon={faHtml5} /></a>
                <br /><br /><br />
              </div>
              <a href="https://github.com/Jos-mlp/HackFest10.git" className="projects-link" target="_blank"><b>Ir al Proyecto </b><FontAwesomeIcon icon={faGithub} /></a>
            </div>

            <div className="col-12 col-md-6 text-center text-md-start project">
              <div>
                <Image
                  className="img-fluid my-picture"
                  src="/proyecto4.png"
                  alt="Imagen del Primer Proyecto"
                  width={540}
                  height={385}
                />
              </div>
              <h1 className="project-number">04</h1>
              <h2 className="project-title">Pokédex</h2>
              <p className="project-stack">
                Construido con HTML, CSS y JavaScript.
              </p>
              <div>
                <a href="/pokedex" className="project-description-link" target="_blank">Leer más del proyecto <FontAwesomeIcon icon={faHtml5} /></a>
                <br /><br /><br />
              </div>
              <a href="https://github.com/carlosrsg11/Proyecto4LevelUp.git" className="projects-link" target="_blank"><b>Ir al Proyecto </b><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
          <div className="projects-footer">
            <p>Y algunos otros proyectos más, si deseas ver los más recientes puedes ir a mi <a href="https://github.com/carlosrsg11" className="projects-footer-link" target="_blank">GitHub</a>.</p>
          </div>
        </div>
      </section>

      <section className="education-section" id="education-section">
        <div className="container">
          <div className="row">
            <h3 className="section-title text-center text-md-start">Educación y Habilidades</h3>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 text-center text-md-start project">
              <h2 className="project-title">Ingeniería en Sistemas</h2>
              <p className="project-stack">
                Estudio la Lincenciatura en Ingeniería en Informática y
                de Sistemas, en la universidad Rafael Landívar, ya estoy
                en el último año de la carrera y a lo largo de la carrera
                he aprendido a desarrollar, trabajar en equipo, adaptarme a
                diferentes modos de trabajo y exigencias, así como también
                he realizado proyectos y tareas con relación a la programación,
                redes y lógica.
              </p>
            </div>

            <div className="col-12 col-md-6 text-center text-md-start project">
              <h2 className="project-title">Habilidades</h2>
              <p className="project-stack">
                Me considero una persona responsable, que sabe lo que quiere
                y define metas claras, me gusta trabajar en equipo, soy proactivo
                y me gusta aprender cosas nuevas, tengo conocimientos en Python,
                HTML, CSS, JavaScript, Java, C++, SQL, entre otros. Manejo de
                herramientas como Git, GitHub, Visual Studio Code, entre otros.
              </p>
            </div>

            <div className="col-12 col-md-6 text-center text-md-start project">
              <div><h2 className="project-title">Cursos y Actividades</h2>
                <p className="project-stack">
                  He realizado diferentes cursos en línea, como por ejemplo
                  el curso de Red Hat System Administration I y II 9.0, también
                  he realizado cursos de programación en diferentes lenguajes,
                  así como también los cursos de <a href="https://web.dev/learn" className="projects-footer-link" target="_blank">
                    web.dev </a> donde aprendí cosas básicas de HTML, CSS, JavaScript,
                  Diseño Responsivo, entre otros. Además he participado en diferentes
                  actividades de la universidad, como por ejemplo la HackFest 10,
                  donde realicé una página web de reciclaje.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 text-center text-md-start project">
              <div>
                <h2 className="project-title">Trabajo</h2>
                <p className="project-stack">
                  Actualmente trabajo en la Universidad Rafael
                  Landívar de Quetzaltenango, estoy en el departamento de
                  Servicios Tecnológicos, en donde he ido aprendiendo sobre
                  diferentes temas, como por ejemplo el manejo de las redes,
                  programación, mantenimiento a equipos de cómputo, etc.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="contact-section" id="education-section">
        <div className="container">
          <div className="row">
            <h3 className="section-title text-center text-md-start">Contáctame</h3>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 text-center text-md-start contact">
              <h2 className="project-title">Correo Electrónico</h2>
              <p className="contact-description col-12 col-md-10">carlossantistebang@gmail.com</p>
            </div>

            <div className="col-12 col-md-6 text-center text-md-start contact">
              <h2 className="project-title">Redes Sociales</h2>
              <div className="row">
                <div className="contact-description col-12 col-md-6">
                  <a href="https://www.facebook.com/carlos.santisteban.54/" target="_blank">
                    Facebook <FontAwesomeIcon icon={faArrowUpRightFromSquare} /><br />
                  </a>
                  <a href="https://x.com/csgramajo" target="_blank">
                    Twitter <FontAwesomeIcon icon={faArrowUpRightFromSquare} /><br />
                  </a>
                  <a href="https://github.com/carlosrsg11" target="_blank">
                    Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} /><br />
                  </a>
                </div>
                <div className="contact-description col-12 col-md-6">
                  <a href="https://www.instagram.com/carlos_rsg/" target="_blank">
                    Instagram <FontAwesomeIcon icon={faArrowUpRightFromSquare} /><br />
                  </a>
                  <a href="https://www.youtube.com/channel/UCON9wNQNYDubqoOaRXvvrQA" target="_blank">
                    YouTube <FontAwesomeIcon icon={faArrowUpRightFromSquare} /><br />
                  </a>
                  <a href="https://www.linkedin.com/in/carlos-santisteban-a9651a30a/" target="_blank">
                    LinkedIn <FontAwesomeIcon icon={faArrowUpRightFromSquare} /><br />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="scrollTop">
        <a href="#top-section">
          <FontAwesomeIcon icon={faCircleArrowUp} />
        </a>
      </div>

      <Footer />
    </main>
  );
}
