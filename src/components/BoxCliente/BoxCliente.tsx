import './BoxCliente.css'

import cliente from '../../imagem/cliente.png'
import lixeira from '../../imagem/lixeira.png'

function BoxCliente(){
  return (
    <div className="boxCliente">
      <img src={cliente} />
      <p>Boris estou no local já lhe esperando. estou com camisa azul e calça jeans</p>
      <img src={lixeira} />
    </div>
  );
}

export default BoxCliente;