"use client";

import Link from "next/link"; // Importa Link de Next.js para la navegación

const LoginPrimary = () => {
  const handleLogin = async (e) => {
    e.preventDefault(); // Previene que el formulario recargue la página

    // Recoge las credenciales del formulario
    const credentials = {
      email: e.target.email.value, // Solo correo electrónico
      password: e.target.password.value, // Contraseña
    };

    try {
      // Envía las credenciales al backend
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        credentials: "include", // Esto incluye las cookies si se están utilizando
      });

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }

      const data = await response.json();

      // Almacena el token en localStorage
      localStorage.setItem("authToken", data.token);

      // Redirigir al home usando window.location
      window.location.href = "/"; // Cambia a la ruta que desees después de iniciar sesión
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <div className="loginarea sp_top_140 sp_bottom_200">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 col-md-12 col-12">
            <ul
              className="nav tab__button__wrap justify-content-center text-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="single__tab__link active"
                  data-bs-toggle="tab"
                  data-bs-target="#projects__one"
                  type="button"
                >
                  Ingresar
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content tab__content__wrapper" id="myTabContent">
            <div
              className="tab-pane fade active show"
              id="projects__one"
              role="tabpanel"
              aria-labelledby="projects__one"
            >
              <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 col-md-12 col-12">
                <div className="loginarea__wraper">
                  <div className="loginarea__heading">
                    <h5 className="login__title">Ingresar</h5>
                    <p className="login__description">
                      ¿Aún no tienes una cuenta?{" "}
                      <Link href="/signup">Regístrate gratis</Link>
                    </p>
                  </div>

                  <form onSubmit={handleLogin}>
                    <div className="loginarea__form">
                      <label className="form__label">Email</label>
                      <input
                        className="common__login__input"
                        type="email"
                        name="email" // Cambiado a "email"
                        placeholder="Tu correo electrónico"
                        required
                      />
                    </div>
                    <div className="loginarea__form">
                      <label className="form__label">Contraseña</label>
                      <input
                        className="common__login__input"
                        type="password"
                        name="password"
                        placeholder="Tu contraseña"
                        required
                      />
                    </div>
                    <button type="submit" className="default__button btn__black mt-4">
                      INGRESAR
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPrimary;