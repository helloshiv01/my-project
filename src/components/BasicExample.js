import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
return (
    <Navbar bg="light" expand="lg" fixed="top" >
    <Container>
        <Navbar.Brand href="https://osdag.fossee.in/">Osdag</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="https://osdag.fossee.in/">Home</Nav.Link>
            <Nav.Link href="https://osdag.fossee.in/resources/downloads">Downloads</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://osdag.fossee.in/fellowship/2023">FOSSEE Summer Fellowship 2023</NavDropdown.Item>
            <NavDropdown.Item href="https://osdag.fossee.in/testimonials">
            Testimonials
            </NavDropdown.Item>
            <NavDropdown.Item href="https://osdag.fossee.in/contact-us">Contact Us</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://osdag.fossee.in/news">
            News
            </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default BasicExample;