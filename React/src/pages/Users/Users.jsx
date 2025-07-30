import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./Users.css";
import Footer from "../../components/Footer/Footer";

export default function Users() {
    return(
        <>
            <Header />
             <Container className="py-5" >
                <h1>Lista de Usuários</h1>
             </Container>
            <Footer />
        </>  
    );
}