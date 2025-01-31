"use client"; // Asegúrate de que este componente se ejecute en el cliente
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function Login() {
  useEffect(() => {
    // Lo pongo para que se ejecute solo en el cliente sino da error en el document aunque se ve todo.
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Correo:", email, "Contraseña:", password);
  };

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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/principal"
                >
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

      {/* Formulario de inicio de sesión */}
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="card" style={{ width: "100%", maxWidth: "400px" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Iniciar sesión</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ backgroundColor: "#627264" }}
              >
                Iniciar sesión
              </button>
            </form>

            <div className="text-center mt-3">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
