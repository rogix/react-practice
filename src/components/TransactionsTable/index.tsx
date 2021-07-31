import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionsTableDiv } from "./styles";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
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
          {transactions.map(({ id, type, title, amount, category, createdAt }) => {
            return(
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>
                  { new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(amount) }
                </td>
                <td>{category}</td>
                <td>
                  { new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))}
                  </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </TransactionsTableDiv>
  )
}