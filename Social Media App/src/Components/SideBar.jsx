import { Link, useLocation } from 'react-router-dom';

function SideBar() {
  const location = useLocation();

  const getClass = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link text-white';
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: '180px', height: '100vh' }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <i className="bi bi-bootstrap me-2" style={{ fontSize: '1.5rem' }}></i>
        <span className="fs-4">Feature</span>
      </Link>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className={getClass('/')}>
            <i className="bi bi-house-door me-2"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Create" className={getClass('/Create')}>
            <i className="bi bi-speedometer2 me-2"></i>
            Create Post
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
