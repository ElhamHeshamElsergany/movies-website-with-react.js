import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


function NavbarSection() {
    return (
        <div className="navy">
            <Navbar className="shadow-lg" expand="lg">
                <Container fluid>
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faVideo} spin className="my-2 mx-2" />
                        <Navbar.Brand className="text-danger h1" href="#">MOVIE</Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-5 my-lg-0 navy d-flex justify-content-around w-100"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div>
                                <Link className="navy na h5 mx-3" to="/"> Movies</Link>
                                <Link className="navy na h5 mx-3" to="/Series"> Series</Link>
                                <Link className="navy  h5 mx-3 " to="/Fav" >
                                    <IconButton className='text-white' aria-label="add to favorites">
                                        <FavoriteIcon className="text-danger" />
                                    </IconButton></Link>
                            </div>
                            <div>
                                <Link className="navy na h5 mx-3" to="/Login">Login</Link>
                                <Link className="navy na h5 mx-3" to="/Register">Register</Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarSection;