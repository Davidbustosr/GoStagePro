import Link from "next/link";
import Image from "next/image";  // <-- AÑADIR IMPORT
import CartHeader from "./CartHeader";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useHeaderContex } from "@/providers/HeaderContex";
import SocialHeader from "./SocialHeader";
import { useState, useEffect } from "react";

const HeaderRight = () => {
  const { style } = useHeaderContex();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Verificar si hay un token de autenticación en localStorage
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  // Manejar el logout
  const handleLogout = () => {
    console.log("Antes de eliminar:", localStorage.getItem("authToken"));
    localStorage.removeItem("authToken");
    console.log("Después de eliminar:", localStorage.getItem("authToken"));
    setIsLoggedIn(false);
    window.location.reload(); // Refresca la página
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
                    {/* ... SVG Paths ... */}
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
                    {/* Reemplazamos <img> por <Image> */}
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt="Usuario"
                      width={30}
                      height={30}
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

      <style jsx>{`
        /* ... estilos del menú desplegable ... */
      `}</style>
    </div>
  );
};

export default HeaderRight;