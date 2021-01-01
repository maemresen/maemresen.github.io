
import { Container, Navbar } from "react-bootstrap";


const TopMenu = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand className="text-light">Mehmet Arif Emre Şen</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default TopMenu; 