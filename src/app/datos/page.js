"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function Datos() {
  useEffect(() => {
    // Lo pongo para que se ejecute solo en el cliente sino da error en el document aunque se ve todo.
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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

      {/* Tabla de Usuarios */}
      <div className="container mt-5 pt-5">
        <h2>Datos de los Usuarios</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo electrónico</th>
                <th>Fecha de registro</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-primary">
                <td>1</td>
                <td>Juan Pérez</td>
                <td>juan.perez@example.com</td>
                <td>01/01/2023</td>
                <td>Activo</td>
              </tr>
              <tr className="table-secondary">
                <td>2</td>
                <td>Maria Gómez</td>
                <td>maria.gomez@example.com</td>
                <td>15/03/2023</td>
                <td>Inactivo</td>
              </tr>
              <tr className="table-success">
                <td>3</td>
                <td>Carlos Sánchez</td>
                <td>carlos.sanchez@example.com</td>
                <td>22/06/2023</td>
                <td>Activo</td>
              </tr>
              <tr className="table-danger">
                <td>4</td>
                <td>Lucía Rodríguez</td>
                <td>lucia.rodriguez@example.com</td>
                <td>10/09/2023</td>
                <td>Inactivo</td>
              </tr>
              <tr className="table-warning">
                <td>5</td>
                <td>José Martínez</td>
                <td>jose.martinez@example.com</td>
                <td>25/11/2023</td>
                <td>Activo</td>
              </tr>
              <tr className="table-info">
                <td>6</td>
                <td>Ana Pérez</td>
                <td>ana.perez@example.com</td>
                <td>30/12/2023</td>
                <td>Inactivo</td>
              </tr>
              <tr className="table-light">
                <td>7</td>
                <td>Marcos Torres</td>
                <td>marcos.torres@example.com</td>
                <td>01/02/2024</td>
                <td>Activo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
