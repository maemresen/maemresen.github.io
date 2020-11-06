
import { Container, Navbar, Row } from "react-bootstrap";


const TopMenu = (props) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand>Mehmet Arif Emre Şen</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default TopMenu; 