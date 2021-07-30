import { useEffect } from "react";
import { api } from "../../services/api";
import { TransactionsTableDiv } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
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