function SideBar({ changeState, clickButton }) {
  function handleClick(page) {
    changeState(page);
  }

  const getClass = (page) => {
    return page === clickButton ? "nav-link active" : "nav-link text-white";
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "180px", height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <i className="bi bi-bootstrap me-2" style={{ fontSize: "1.5rem" }}></i>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className={getClass("Home")}
            onClick={() => handleClick("Home")}
          >
            <i className="bi bi-house-door me-2"></i>
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={getClass("Create")}
            onClick={() => handleClick("Create")}
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Create Post
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
