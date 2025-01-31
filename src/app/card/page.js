"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function Card() {
  useEffect(() => {
    // Lo pongo para que se ejecute solo en el cliente sino da error en el document aunque se ve todo.
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "#627264" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.png" alt="Logo de la Página" height="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ejercicio8">
                  Sobre nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/form">
                  Contacto
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explorar
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleShowModal}
                    >
                      Registrarse
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/datos">
                      Usuarios
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/card">
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/login">
                      Iniciar sesión
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/prices">
                      Precios
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="registerModal"
        tabIndex="-1"
        aria-labelledby="registerModalLabel"
        aria-hidden={!showModal}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registerModalLabel">
                Registrarse
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Nombre de usuario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Registrarse
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCloseModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mt-5 pt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Card 1 */}
          <div className="col">
            <div className="card">
              <img
                src="https://www.healthychildren.org/SiteCollectionImagesArticleImages/quality_eecc.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Cuidado y atención infantil</h5>
                <p className="card-text">
                  Supervisión, alimentación y acompañamiento en las actividades
                  diarias de los niños, garantizando su seguridad y bienestar.
                </p>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#627264" }}
                >
                  Más información
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card">
              <img
                src="https://neurocenter.mx/wp-content/uploads/2022/04/fisioterapia-ninos-8-1200-1024x682.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Estimulación temprana y aprendizaje
                </h5>
                <p className="card-text">
                  Actividades lúdicas y educativas adaptadas a cada etapa de
                  desarrollo, incluyendo juegos sensoriales, música, lectura y
                  manualidades.
                </p>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#627264" }}
                >
                  Más información
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card">
              <img
                src="https://www.cateringalcala.com/pics_fotosnoticias/20/big_crop_diseno-sin-titulo-37.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Alimentación y hábitos saludables
                </h5>
                <p className="card-text">
                  Servicio de comedor con menús equilibrados, adaptados a las
                  necesidades nutricionales de los niños, además de fomentar
                  hábitos de higiene y autonomía personal.
                </p>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#627264" }}
                >
                  Más información
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
