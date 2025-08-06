import { Button, Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";


export default function Home() {
  const [time, setTime] = useState("00:00:00");
  const intervalId = useRef(null);

  useEffect(() => {
    startTime();

    return () => {
      stopTime();
    };
  }, []);

  function startTime() {
    if (!intervalId.current) {
      intervalId.current = setInterval(() => {
        const timeCurrent = new Date().toLocaleTimeString();
        setTime(timeCurrent);
      }, 1000);
    }
  }

  function stopTime() {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }

  // setInterval(()=>{
  //   // contador += 1; n pode alterar o valor de estado dessa forma  com atribuição =.
  //   setContador(contador + 1);
  // },1000)

  return (
    <>
      <Header />
      <Container className='my-5'>
        <h1>Página Inicial</h1>
        <Link to="/products">Acesse a página de produtos</Link>
      </Container>

      <Container className="my-5">
        <p>{ time }</p>
        <Button onClick={startTime}>Iniciar</Button>
        <Button onClick={stopTime}>Parar</Button>
      </Container>
      <Footer />
    </>
  );
}
