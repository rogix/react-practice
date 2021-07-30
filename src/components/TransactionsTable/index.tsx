import { TransactionsTableDiv } from "./styles";

export function TransactionsTable() {
  return (
    <TransactionsTableDiv>
      <table>
        <thead>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
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