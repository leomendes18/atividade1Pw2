import './BoxMotorista.css'

import motorista from '../../imagem/motorista.png'
import lixeira from '../../imagem/lixeira.png'

function BoxMotorista(){
  return (
    <div className="boxMotorista">
        <img src={motorista} />
        <p>Acabei de lhe ver. Vou estacionar o carro próximo.</p>
        <img src={lixeira} />
    </div>
  );
}

export default BoxMotorista;