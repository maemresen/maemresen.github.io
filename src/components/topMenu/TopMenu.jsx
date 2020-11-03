import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

import { Container, Navbar, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

import './TopMenu.module.scss'

import { toggle, getVisibility } from '../navTerminal/navTerminalSlice'

const TopMenu = (props) => {
    const visibility = useSelector(getVisibility);
    const dispatch = useDispatch();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="text-center">
            <Container>
                <Navbar.Brand>
                    Mehmet Arif Emre Şen
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink exact={true} to="/" activeClassName="active" className="nav-link">
                            Home
                </NavLink>
                        <NavLink to="/cv" activeClassName="active" className="nav-link">
                            CV
                </NavLink>
                        <div
                            className={`d-inline-block text-secondary`}
                            onClick={() => dispatch(toggle())}
                        >
                            <FontAwesomeIcon
                                icon={faTerminal}
                                className="ml-3 mt-1"
                                size="2x"
                                style={{
                                    color: (visibility ? "green" : "red")
                                }}
                            />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopMenu;