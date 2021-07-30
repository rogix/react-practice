import { useEffect } from "react";
import { TransactionsTableDiv } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

  return (
    <TransactionsTableDiv>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td>R$23.000,00</td>
            <td>Frontend</td>
            <td>20/08/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$23.000,00</td>
            <td>Frontend</td>
            <td>20/08/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td className="withdraw">R$23.000,00</td>
            <td>Frontend</td>
            <td>20/08/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td>R$23.000,00</td>
            <td>Frontend</td>
            <td>20/08/2021</td>
          </tr>
        </tbody>
      </table>
    </TransactionsTableDiv>
  )
}