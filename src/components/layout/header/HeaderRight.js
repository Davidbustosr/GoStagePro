import Link from "next/link";
import CartHeader from "./CartHeader";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useHeaderContex } from "@/providers/HeaderContex";
import SocialHeader from "./SocialHeader";
import { useState, useEffect } from "react";

const HeaderRight = () => {
  const { style } = useHeaderContex();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Verificar si hay un token de autenticación en el localStorage
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // Si existe un token, el usuario está logueado
  }, []);

  // Manejar el logout
  const handleLogout = () => {
    console.log("Antes de eliminar:", localStorage.getItem("authToken")); // Verificar si el token existe
    localStorage.removeItem("authToken");
    console.log("Después de eliminar:", localStorage.getItem("authToken")); // Debería ser null o undefined
    setIsLoggedIn(false);
    window.location.reload(); // Refresca la página para reflejar cambios
  };

  return (
    <div className="headerarea__component">
      <div className="headerarea__right">
        {style === 4 ? (
          <SocialHeader />
        ) : (
          <>
            {/* Carrito */}
            <div className="headerarea__cart__wraper">
              <div className="headerarea__cart__icon">
                <Link href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.4945 12H15.5035"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.49451 12H8.50349"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <div className="headerarea__cart__border__dot"></div>
              </div>

              <CartHeader />
            </div>

            {/* Botón o menú de usuario */}
            <div className="headerarea__button">
              {isLoggedIn ? (
                <div className="menu-container">
                  <button className="menu-button">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt="Usuario"
                      width="30"
                      height="30"
                      style={{ borderRadius: "50%" }}
                    />
                  </button>
                  <div className="menu-dropdown">
                    <div className="menu-items">
                      <Link href="#" className="menu-item">
                        Mi cuenta
                      </Link>
                      <Link href="/wishlist" className="menu-item">
                        Crear plantilla
                      </Link>
                      <button onClick={handleLogout} className="menu-item logout">
                        Cerrar sesión
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <ButtonPrimary
                  text="Ingresar"
                  button={!style ? "" : "white"}
                  path="/login"
                />
              )}
            </div>
          </>
        )}
      </div>

      {/* Estilo del menú desplegable */}
      <style jsx>{`
        .menu-container {
          position: relative;
        }

        .menu-button {
          background: none;
          border: none;
          cursor: pointer;
        }

        .menu-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          background-color: #333; /* Fondo gris oscuro */
          border-radius: 8px;
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
          width: 220px;
          z-index: 10;
        }

        .menu-container:hover .menu-dropdown {
          display: block;
        }

        .menu-items {
          display: flex;
          flex-direction: column;
        }

        .menu-item {
          padding: 10px 15px;
          text-align: left;
          text-decoration: none;
          color: white !important; /* Letras blancas */
          font-size: 14px;
          cursor: pointer;
        }

        .menu-item:hover {
          background-color: #444; /* Hover gris más oscuro */
        }

        .logout {
          border-top: 1px solid #555;
        }
      `}</style>
    </div>
  );
};

export default HeaderRight;