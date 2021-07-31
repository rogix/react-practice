import Modal from 'react-modal'
import { TransactionForm, TransactionTypeDiv } from './styles'
import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'

  type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
  }
  
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <TransactionForm>
        <h2>Cadastrar</h2>

        <input placeholder="Titulo" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeDiv>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeDiv>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </TransactionForm>
    </Modal>
  )
}