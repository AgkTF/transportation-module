import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <Navbar.Brand href="/">Transportation</Navbar.Brand>
      </Navbar>

      <Container>{children}</Container>
    </>
  );
};

export default Layout;
