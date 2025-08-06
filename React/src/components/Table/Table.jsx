import { Table as BootstrapTable } from "react-bootstrap";

export default function Table({ produtos }) {


  return (
    <BootstrapTable striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Quantidade</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto) => (
          <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.quantidade}</td>
            <td>R$ {produto.preco}</td>
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
}
