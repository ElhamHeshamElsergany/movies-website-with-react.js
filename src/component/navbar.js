import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


function NavbarSection() {
    return (
        <div className="navy">
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faVideo} spin className="my-2 mx-2" />
                        <Navbar.Brand className="text-danger h1" href="#">MOVIE</Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-5 my-lg-0 navy"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className="navy h5 mx-3" to="/"> Movies</Link>
                            <Link className="navy h5 mx-3" to="/Series"> Series</Link>

                            <Link className="navy h5 mx-3 " to="/Fav" >Favoriets</Link>
                            <Link className="navy h5 mx-3" to="/Login">Login</Link>
                            <Link className="navy h5 mx-3" to="/Register">Register</Link>



                        </Nav>
                        <Form className="d-flex navy">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-danger">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarSection;