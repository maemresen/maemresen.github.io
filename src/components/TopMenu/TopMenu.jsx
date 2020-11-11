
import { Container, Navbar } from "react-bootstrap";


const TopMenu = (props) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand className="text-info">Mehmet Arif Emre Şen</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default TopMenu; 