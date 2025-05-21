import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../Elements/Card/Card";

export default function NavBar() {
  return (
    <div className="ll">
    <Navbar expand="lg" className="bag" variant="dark">
      <Container>
        <Navbar.Brand className="logo" href="#home">
          <img
            src="/Image/logovector.png" /* تأكد من المسار الصحيح لملف الصورة */
            className="d-inline-block align-top size"
            alt="Logo"
          />
          <span>Adel Alsaied</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mx-auto"
            style={{
              justifyContent: "center",
              display: "flex",
              width: "100%",
              gap: "40px",
            }}
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Mywork">My Work</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
          <Card></Card>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
  );
}
