import Modal from 'react-modal'
import { RadioBoxButton, TransactionForm, TransactionTypeDiv } from './styles'
import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import { useState } from 'react'

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}
  
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')

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
          <RadioBoxButton 
            type="button" 
            onClick={() => { setType('deposit') }} 
            isActive={type === 'deposit'}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBoxButton>
          <RadioBoxButton 
            type="button" 
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBoxButton>
        </TransactionTypeDiv>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </TransactionForm>
    </Modal>
  )
}