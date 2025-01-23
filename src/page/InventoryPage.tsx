import '../styles/page/inventory.css'
import HeaderInventory from '../components/inventory/HeaderInventory'
import MainInventory from '../components/inventory/MainInventory'
import '../styles/page/inventory.css'

const InventoryPage = () => {
  return (
    <>
      <HeaderInventory />
      <MainInventory />
      {/* <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">Bienvenido al Sistema de Inventario - Administra tus productos con facilidad</p>
        </div>
      </footer> */}
    </>
  )
}

export default InventoryPage