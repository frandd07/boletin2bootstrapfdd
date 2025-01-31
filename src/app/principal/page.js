"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function Ejercicio1() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    // Este código solo se ejecutará en el cliente
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

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
                      onClick={handleShowModal} // Muestra el modal
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
              {/* Aquí puedes agregar el formulario de registro */}
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

      {/* Grid de productos */}
      <div className="container mt-5 pt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {/* Producto 1 */}
          <div className="col">
            <div className="card">
              <img
                src="https://nenelshop.es/3137-superlarge_default/mochila-infantil-personalizada-leo.jpg  "
                className="card-img-top"
                alt="Producto 1"
              />
              <div className="card-body">
                <h5 className="card-title">Mochila personalizada</h5>
                <button className="btn btn-primary">Comprar ahora</button>
              </div>
            </div>
          </div>
          {/* Producto 2 */}
          <div className="col">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTC_tg9qw85RHHMdVO_B16-ajBX8gcjJ70nQ&s"
                className="card-img-top"
                alt="Producto 2"
              />
              <div className="card-body">
                <h5 className="card-title">Set de bloques de construcción</h5>
                <button className="btn btn-primary">Comprar ahora</button>
              </div>
            </div>
          </div>
          {/* Producto 3 */}
          <div className="col">
            <div className="card">
              <img
                src="https://jugandoconnuria.com/wp-content/uploads/pinturas2.jpg"
                className="card-img-top"
                alt="Producto 3"
              />
              <div className="card-body">
                <h5 className="card-title">Lápices de colores</h5>
                <button className="btn btn-primary">Comprar ahora</button>
              </div>
            </div>
          </div>
          {/* Producto 4 */}
          <div className="col">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpWi9vtIWSEHbmpidflvrNt2V65IxIA20Tw&s"
                className="card-img-top"
                alt="Producto 4"
              />
              <div className="card-body">
                <h5 className="card-title">Pañales</h5>
                <button className="btn btn-primary">Comprar ahora</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carrusel pequeño */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide mt-5"
        style={{ maxWidth: "75%", margin: "0 auto" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/483798205/es/foto/beb%C3%A9s-jugando.jpg?s=612x612&w=0&k=20&c=D-vWDPDlms2l-FFR005UHUfdI_ynq61pynZdCGK90MI="
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Diversión y Aprendizaje</h5>
              <p>
                Tres pequeños explorando y aprendiendo mientras juegan en un
                ambiente seguro y lleno de alegría
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1458807880/es/foto/aprender-a-trav%C3%A9s-del-juego.jpg?s=612x612&w=0&k=20&c=K1c6c6nXcVRVN30E-i34GYxsYbOkon7y7tK-qPcTyLk="
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Aprendiendo Juntos con la Ayuda de la Señorita</h5>
              <p>
                Tres niños pequeños disfrutando de una actividad educativa
                guiados por su señorita, fomentando su desarrollo a través del
                juego y el aprendizaje.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2015/02/18/14242502545386.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Diversión y Risas</h5>
              <p>
                Tres niños/as disfrutando de un momento de juego y risas
                mientras se ponen pelotas en los ojos, fomentando la creatividad
                y la alegría en su día a día.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
