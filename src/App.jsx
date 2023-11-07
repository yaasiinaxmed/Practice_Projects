import { Button } from '@mantine/core';
import { useState } from 'react';
import ModealForm from './components/ModalForm';
import Add from './components/Add';
import img from './assets/img.jpg'
import Nav from './components/Nav';
import ModalForm from './components/ModalForm';
import Home from './pages/Home';

function App() {
  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
