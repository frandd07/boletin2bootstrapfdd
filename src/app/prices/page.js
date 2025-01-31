"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function Prices() {
  useEffect(() => {
    // Este código solo se ejecutará en el cliente
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
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

      {/* Pricing Section */}
      <div className="container mt-5 pt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Plan Básico */}
          <div className="col">
            <div
              className={`card ${
                selectedPlan === "basic" ? "border-primary" : ""
              }`}
              onClick={() => handleSelectPlan("basic")}
            >
              <div
                className={`card-header text-center ${
                  selectedPlan === "basic" ? "bg-primary text-white" : ""
                }`}
              >
                <h5>Básico</h5>
              </div>
              <div className="card-body">
                <h3 className="card-title">200€/mes</h3>
                <ul className="list-unstyled">
                  <li>Horario: Lunes a Viernes, de 9:00 a 14:00</li>
                  <li>Actividades educativas y recreativas</li>
                  <li>Supervisión de los niños por personal capacitado</li>
                  <li>Comida: Almuerzo incluido</li>
                  <li>1 salida de campo al mes</li>
                  <li>
                    Comunicación con los padres a través de informes semanales
                  </li>
                </ul>
                <button className="btn btn-primary w-100">
                  Seleccionar plan
                </button>
              </div>
            </div>
          </div>

          {/* Plan Pro (destacado) */}
          <div className="col">
            <div
              className={`card ${
                selectedPlan === "pro" ? "border-primary" : ""
              }`}
              onClick={() => handleSelectPlan("pro")}
            >
              <div
                className={`card-header text-center ${
                  selectedPlan === "pro" ? "bg-primary text-white" : ""
                }`}
              >
                <h5>Pro</h5>
              </div>
              <div className="card-body">
                <h3 className="card-title">350€/mes</h3>
                <ul className="list-unstyled">
                  <li>Horario: Lunes a Viernes, de 8:00 a 17:00</li>
                  <li>Actividades educativas y recreativas + Talleres extra</li>
                  <li>
                    Supervisión por personal capacitado y apoyo psicológico
                  </li>
                  <li>Comida: Almuerzo y merienda incluidos</li>
                  <li>2 salidas de campo al mes</li>
                  <li>Reportes de desarrollo personalizados cada 15 días</li>
                  <li>
                    Acceso a una plataforma para ver fotos y videos de las
                    actividades diarias
                  </li>
                  <li>
                    Descuentos en actividades extracurriculares (deporte,
                    música)
                  </li>
                </ul>
                <button className="btn btn-primary w-100">
                  Seleccionar plan
                </button>
              </div>
            </div>
          </div>

          {/* Plan Premium */}
          <div className="col">
            <div
              className={`card ${
                selectedPlan === "premium" ? "border-primary" : ""
              }`}
              onClick={() => handleSelectPlan("premium")}
            >
              <div
                className={`card-header text-center ${
                  selectedPlan === "premium" ? "bg-primary text-white" : ""
                }`}
              >
                <h5>Premium</h5>
              </div>
              <div className="card-body">
                <h3 className="card-title">500€/mes</h3>
                <ul className="list-unstyled">
                  <li>Horario: Lunes a Viernes, de 7:30 a 19:00</li>
                  <li>
                    Actividades educativas, recreativas y talleres creativos
                    especializados (arte, música, deportes)
                  </li>
                  <li>
                    Supervisión por personal capacitado, apoyo psicológico y
                    educativo
                  </li>
                  <li>
                    Comida: Almuerzo, merienda y snacks saludables incluidos
                  </li>
                  <li>4 salidas de campo al mes</li>
                  <li>Reportes detallados de desarrollo cada semana</li>
                  <li>Clases de idiomas para niños</li>
                  <li>Prioridad en eventos y actividades especiales</li>
                  <li>24/7 soporte para padres</li>
                </ul>
                <button className="btn btn-primary w-100">
                  Seleccionar plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
