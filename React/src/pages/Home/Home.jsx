import { Button, Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [contador, setContador] = useState(0);
  const [times, setTimes] = useState([
    "Bahia",
    "Flamengo",
    "Fluminense",
    "Botafogo"
  ])
  let resultado = null;

  if (contador >= 0) { 
      resultado = "Positivo";
  } else { 
      resultado = "Negativo";
  }

  function somar() {
    setContador(contador + 1);

  } // por modificar o estado as funções devem ser declaradas dentro do componente

    function subtrair() {
    setContador(contador - 1);
    
  }
  // setInterval(()=>{
  //   // contador += 1; n pode alterar o valor de estado dessa forma  com atribuição =.
  //   setContador(contador + 1);
  // },1000)

  

  return (
    <>
      <Header />
      <Container>
        <h2>Contador</h2>

        <Button onClick={somar}>+</Button>

        <span className="mx-2">{contador}</span>

        <Button onClick={subtrair}>-</Button>

        <p>{contador % 2 == 0 ? <i>par</i> : <b>impar</b>}</p>

        <p>{contador > 10 && "Maior que 10."}</p>

        <p>{resultado}</p>

        <ul>
          {times.map((time, index) => <li key={index} >{time}</li>)} 
          {/* Usou o map tem que usar o Key do elemento da lista pq 
          ele busca todos os elementos e precisa da key pra renderizar
           o dom real atraves do virtual  */}
        </ul>
      </Container>

      <Container className="py-5">
        <h1>Página inicial</h1>
        <Link to="/products">Acesse a página de produtos</Link>
        {/*Link n da refresh na pagina, diferente do <a/> usado p algum link externo*/}
        <br />
        <Link to="/users">Acesse a página de usuarios</Link>
      </Container>
      <Footer />
    </>
  );
}
