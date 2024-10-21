'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

// FooterMenu Component
const FooterMenu = () => (
  <footer className="bg-dark text-white py-4">
    <Container>
      <div className="row">
        <div className="col-md-4">
          <h5>NAVIGATION</h5>
          <hr />
          <ul className="list-unstyled">
            <li><button type="button" className="btn btn-link text-white p-0">About Us</button></li>
            <li><button type="button" className="btn btn-link text-white p-0">Employment</button></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>MAIN MENU</h5>
          <hr />
          <ul className="list-unstyled">
            <li><button type="button" className="btn btn-link text-white p-0">Men</button></li>
            <li><button type="button" className="btn btn-link text-white p-0">Women</button></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>CONNECT</h5>
          <hr />
          <ul className="list-unstyled">
            <li>
              <button type="button" className="btn btn-link text-white p-0">
                Sign up for the latest updates
              </button>
            </li>
          </ul>
          <form>
            <div className="row">
              <div className="col-10">
                <input type="email" className="form-control mb-2" placeholder="Enter Email Address" />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-dark w-100">Join</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  </footer>
);

export default FooterMenu;
