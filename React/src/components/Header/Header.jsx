import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
    const {logout, isAuthenticated} = useAuth();
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Controle de Estoque</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Produtos</Nav.Link>
                        <Nav.Link as={Link} to="/users">Usuários</Nav.Link>
                        {isAuthenticated ? 
                        (<Nav.Link as="button" onClick={logout}>Sair</Nav.Link>
                        ):(
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>)}
    
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}