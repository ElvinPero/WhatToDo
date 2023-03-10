import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





export default function Header(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <NavDropdown title="Task" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Favourites</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    New
                                </NavDropdown.Item>
                                <NavDropdown.Divider />

                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                About
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
// Header.defaultProps = {
//     title: "hey"
// }
// Header.proptypes = {
//     title: propTypes.string,
// }