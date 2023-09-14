import './App.css'


import Header from './components/Header/Header';
import Motorista from './components/Motorista/Motorista';
import BoxMensagem from './components/BoxMensagem/BoxMensagem';
import BoxCliente from './components/BoxCliente/BoxCliente';
import BoxMotorista from './components/BoxMotorista/BoxMotorista';

function App() {
  return (
    <div className="App">
      <div className="topo"></div>

      <Header />

      <Motorista />

      <BoxMensagem />

      <BoxCliente />

      <BoxMotorista />
    </div>
  );
}

export default App;
