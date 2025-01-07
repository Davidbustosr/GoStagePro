"use client";

import { useRouter } from "next/navigation"; // Importa useRouter

const SignUpPrimary = () => {
  const router = useRouter(); // Inicializa el enrutador

  const handleSignUp = async (e) => {
    e.preventDefault(); // Previene que el formulario recargue la página

    // Recoge los datos del formulario de registro
    const userData = {
      name: e.target.name.value, // Nombre completo
      email: e.target.email.value, // Email
      password: e.target.password.value, // Contraseña
    };

    try {
      // Envía los datos al backend
      const response = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Error al registrarse");
      }

      const data = await response.json();
      alert("Registro exitoso. Redirigiendo a la página de inicio de sesión");

      // Redirige a la página de inicio de sesión
      router.push("/login");
    } catch (error) {
      console.error("Error al registrarse:", error.message);
      alert("Error al registrarse. Por favor, verifica los datos.");
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
                  data-bs-target="#projects__two"
                  type="button"
                >
                  Registrarme
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content tab__content__wrapper" id="myTabContent">
            <div
              className="tab-pane fade active show"
              id="projects__two"
              role="tabpanel"
              aria-labelledby="projects__two"
            >
              <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 col-md-12 col-12">
                <div className="loginarea__wraper">
                  <div className="loginarea__heading">
                    <h5 className="login__title">Registrarme</h5>
                    <p className="login__description">
                      ¿Ya tienes una cuenta?{" "}
                      <a href="/login">Inicia sesión</a>
                    </p>
                  </div>

                  <form onSubmit={handleSignUp}>
                    <div className="loginarea__form">
                      <label className="form__label">Nombre</label>
                      <input
                        className="common__login__input"
                        type="text"
                        name="name"
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div className="loginarea__form">
                      <label className="form__label">Email</label>
                      <input
                        className="common__login__input"
                        type="email"
                        name="email"
                        placeholder="Tu email"
                        required
                      />
                    </div>
                    <div className="loginarea__form">
                      <label className="form__label">Contraseña</label>
                      <input
                        className="common__login__input"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        required
                      />
                    </div>
                    <button type="submit" className="default__button btn__black mt-4">
                      REGISTRARME
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

export default SignUpPrimary;