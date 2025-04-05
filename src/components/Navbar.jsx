import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, clearAuth } from '../utils/auth';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuth();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">BestStore</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {isLoggedIn() ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
