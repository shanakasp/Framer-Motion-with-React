import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <p to="/dashboard" className="nav-link" activeClassName="active">
            Dashboard
          </p>
        </li>
        <li className="nav-item">
          <p to="/users" className="nav-link" activeClassName="active">
            Users
          </p>
        </li>
        <li className="nav-item">
          <p to="/products" className="nav-link" activeClassName="active">
            Products
          </p>
        </li>
        {/* Add more nav items as needed */}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
