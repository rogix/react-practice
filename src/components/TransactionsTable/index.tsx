import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext'
import { TransactionsTableDiv } from './styles'

type Props = {
  id: number
  type: string
  title: string
  amount: number
  category: string
  createdAt: Date
}

export function TransactionsTable() {
  const transactions = useContext(TransactionsContext)

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
          {transactions.map(
            ({ id, type, title, amount, category, createdAt }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(amount)}
                </td>
                <td>{category}</td>
                <td>
                  {createdAt}
                  {/* {new Intl.DateTimeFormat('en-US').format(new Date(createdAt))} */}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </TransactionsTableDiv>
  )
}
