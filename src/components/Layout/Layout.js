import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <Link to="/">
          <Navbar.Brand>Transportation</Navbar.Brand>
        </Link>
      </Navbar>

      <Container className="mt-4">{children}</Container>
    </>
  );
};

export default Layout;
