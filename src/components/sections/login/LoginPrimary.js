"use client";

const LoginPrimary = () => {
  return (
    <div className="loginarea sp_top_140 sp_bottom_200">
      {/* Contenedor principal del área de login */}
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 col-md-12 col-12">
            {/* Sección de pestañas para cambiar entre "Ingresar" y "Registrarme" */}
            <ul
              className="nav  tab__button__wrap text-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                {/* Botón para la pestaña "Ingresar" */}
                <button
                  className="single__tab__link active"
                  data-bs-toggle="tab"
                  data-bs-target="#projects__one"
                  type="button"
                >
                  Ingresar
                </button>
              </li>{" "}
              <li className="nav-item" role="presentation">
                {/* Botón para la pestaña "Registrarme" */}
                <button
                  className="single__tab__link"
                  data-bs-toggle="tab"
                  data-bs-target="#projects__two"
                  type="button"
                >
                  Registrarme
                </button>
              </li>
            </ul>
          </div>

          {/* Contenedor del contenido dinámico de las pestañas */}
          <div className="tab-content tab__content__wrapper" id="myTabContent">
            {/* Sección para "Ingresar" */}
            <div
              className="tab-pane fade active show"
              id="projects__one"
              role="tabpanel"
              aria-labelledby="projects__one"
            >
              <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 col-md-12 col-12">
                <div className="loginarea__wraper">
                  <div className="loginarea__heading">
                    {/* Título y descripción del formulario de ingreso */}
                    <h5 className="login__title">Ingresar</h5>
                    <p className="login__description">
  {"Aun"} no tienes una cuenta?{" "}
  <a
    href="#projects__two"
    onClick={(e) => {
      e.preventDefault(); // Evita que la página se recargue
      const tabButton = document.querySelector(
        '[data-bs-target="#projects__two"]'
      ); // Busca el botón que activa la pestaña de registro
      if (tabButton) {
        tabButton.click(); // Simula un clic en ese botón
      }
    }}
  >
    Registrate gratis
  </a>
</p>
                  </div>

                  {/* Formulario de ingreso */}
                  <form action="#">
                    <div className="loginarea__form">
                      <label className="form__label">Nombre de usuario o Email</label>
                      <input
                        className="common__login__input"
                        type="text"
                        placeholder="Your username or email"
                      />
                    </div>
                    <div className="loginarea__form">
                      <label className="form__label">Contraseña</label>
                      <input
                        className="common__login__input"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="loginarea__form d-flex justify-content-between flex-wrap gap-2">
                      {/* Opción para recordar al usuario */}
                      <div className="form__check">
                        <input type="checkbox" name="" id="remamber__pass" />
                        <label htmlFor="remamber__pass">Recuerdame</label>
                      </div>
                      {/* Enlace para recuperar contraseña */}
                      <div className="text-end login__form__link">
                        <a href="#">No recuerdas tu contraseña?</a>
                      </div>
                    </div>
                    {/* Botón para enviar el formulario */}
                    <div className="loginarea__button text-center">
                      <button className="default__button btn__black">
                        INGRESAR
                      </button>
                    </div>
                  </form>

                  {/* Opciones para ingresar con redes sociales */}
                  <div className="loginarea__social__option">
                    <ul className="loginarea__social__btn">
                      <li>
                        <a className="default__button btn__black" href="#">
                          <i className="icofont-facebook"></i> facebook
                        </a>
                      </li>{" "}
                      <li>
                        <a className="default__button btn__black" href="#">
                          <i className="icofont-google-plus"></i> Google
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección para "Registrarme" */}
            <div
              className="tab-pane fade"
              id="projects__two"
              role="tabpanel"
              aria-labelledby="projects__two"
            >
              <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 col-md-12 col-12">
                <div className="loginarea__wraper">
                  <div className="loginarea__heading">
                    {/* Título y descripción del formulario de registro */}
                    <h5 className="login__title">Sing Up</h5>
                    <p className="login__description">
                      Already have an account?{" "}
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#registerModal"
                      >
                        Log In
                      </a>
                    </p>
                  </div>

                  {/* Formulario de registro */}
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="loginarea__form">
                          <label className="form__label">First Name</label>
                          <input
                            className="common__login__input"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="loginarea__form">
                          <label className="form__label">Last Name</label>
                          <input
                            className="common__login__input"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="loginarea__form">
                          <label className="form__label">Username</label>
                          <input
                            className="common__login__input"
                            type="text"
                            placeholder="Username"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="loginarea__form">
                          <label className="form__label">Email</label>
                          <input
                            className="common__login__input"
                            type="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="loginarea__form">
                          <label className="form__label">Password</label>
                          <input
                            className="common__login__input"
                            type="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="loginarea__form">
                          <label className="form__label">
                            Re-Enter Password
                          </label>
                          <input
                            className="common__login__input"
                            type="password"
                            placeholder="Re-Enter Password"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Opción para aceptar términos y condiciones */}
                    <div className="loginarea__form d-flex justify-content-between flex-wrap gap-2 sp_bottom_20">
                      <div className="form__check">
                        <input type="checkbox" name="" id="accpet__terms" />
                        <label htmlFor="accpet__terms">
                          Accept the Terms and Privacy Policy
                        </label>
                      </div>
                    </div>
                    {/* Botón para enviar el formulario de registro */}
                    <div className="login__button">
                      <button
                        type="submin"
                        className="default__button btn__black text-center"
                      >
                        SIGN UP
                      </button>
                    </div>
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