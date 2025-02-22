import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Image from "react-bootstrap/Image"

import tensorflowImg from "images/tensorflowjs.png"

import "./Navbar.scss"

const NavbarWrapper = () => (
  <Navbar className="bg-body-secondary main-navbar">
    <Container className="justify-content-center">
      <Navbar.Brand>
        <Image src={tensorflowImg} className="rounded border logo" />
      </Navbar.Brand>
    </Container>
  </Navbar>
)

export default NavbarWrapper