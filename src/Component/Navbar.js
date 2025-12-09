
import { Link } from 'react-router-dom';
import logo from './myntra.jpg';
import { useNavigate } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap'; // Import Dropdown component

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4 me-4" to="/">
            <img src={logo} alt="Description" height={50} className="me-2" />
            MYNTRA
          </Link>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
  <li className="nav-item">
    <Link className="btn btn-outline-dark me-3" aria-current="page" to="/Home">
      <i className="fa fa-home me-1"></i>Home
    </Link>
  </li>
  <li className="nav-item">
    <Link className="btn btn-outline-dark me-3" to="/aboutus">
      <i className="fa fa-inbox me-1"></i> About Us
    </Link>
  </li>
  <li className="nav-item">
    <Link className="btn btn-outline-dark me-3" to="/Help">
      <i className="fa fa-question-circle me-1"></i> Help
    </Link>
  </li>
  <li className="nav-item">
    <Link className="btn btn-outline-dark" to="/products">
      <i className="fa fa-product-hunt me-1"></i> Products
    </Link>
  </li>
</ul>

          <div className="d-flex">
            <Link to="/cartt" className="btn btn-outline-dark me-2">
              <i className="fa fa-shopping-cart me-1"></i>Cart
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/login">
                  <i className="fa fa-sign-in me-1"></i>Login
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/register">
                  <i className="fa fa-user-plus me-1"></i>Register
                </Dropdown.Item>
                <Dropdown.Item as={Button} onClick={handleLogout}>
                  <i className="fa fa-sign-out me-1"></i> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
