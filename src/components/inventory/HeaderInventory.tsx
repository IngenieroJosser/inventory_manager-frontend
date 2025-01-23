import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import "../../styles/page/inventory/header-inventory.css";
import profile from "../../assets/img/profile-esqueleto.jpg";

const HeaderInventory: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toast = useRef<Toast>(null);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const confirmLogout = () => {
    toast.current?.show({
      severity: "info",
      summary: "Confirmación",
      detail: "¿Estás seguro de que quieres cerrar sesión?",
      sticky: true,
      content: (
        <div className="toast-container">
            <span>¿Seguro que deseas salir?</span>
            <div className="btn-choose">
                <Button
                    label="Sí"
                    icon="pi pi-check"
                    className="p-button-danger"
                    onClick={() => handleLogout()}
                    style={{ marginRight: ".5rem", padding: '4px 19px'  }}
                    />
                <Button
                    label="No"
                    icon="pi pi-times"
                    className="p-button-secondary"
                    onClick={() => toast.current?.clear()}
                    style={{ marginRight: ".5rem", padding: '4px 19px'  }}
                />
            </div>
        </div>
      ),
    });
  };

  const handleLogout = () => {
    toast.current?.clear();
    console.log("Sesión cerrada"); // Aquí iría la lógica de cerrar sesión
  };

  const menuItems = [
    { label: "Editar", action: () => console.log("Editar") },
    { label: "Configuraciones", action: () => console.log("Configuraciones") },
    { label: "Ver fechas", action: () => console.log("Ver fechas") },
    { label: "Ver productos", action: () => console.log("Ver productos") },
    { label: "Cerrar sesión", action: confirmLogout },
  ];

  return (
    <header>
      <Toast ref={toast} />
      <input type="search" placeholder="Buscar..." />

      <div className="profile-container">
        <div className="profile" onClick={toggleMenu}>
          <img src={profile} alt="Perfil de usuario" />
        </div>

        {showMenu && (
          <div className="dropdown-menu">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="dropdown-item"
                onClick={item.action}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderInventory;
