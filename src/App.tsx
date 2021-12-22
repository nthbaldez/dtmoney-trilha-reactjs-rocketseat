import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';

import Modal from "react-modal";
import { useState } from 'react';


Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionNewModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );

}


