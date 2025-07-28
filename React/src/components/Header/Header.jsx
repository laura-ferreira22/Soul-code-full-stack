import "./Header.css";
//componente tem letra maiuscula diferente da função


export default () => { 
  const nome ="Gabriel Braga";  
  return(
    <header>
      <h1>Bem-vindo(a), {nome} </h1>
    </header>
  );
}

