import './Motorista.css';
import imagem1 from '../../imagem/imagem1.png'
import imagem2 from '../../imagem/imagem2.png'
import estrela from '../../imagem/Vector.png'

function Motorista(){
  return (
    <div className='motorista'>
        <div className='imagemMotorista'>
          <img src={imagem2} className='imagem2'></img>
          <img src={imagem1} className='imagem1'></img>
          <div className='boxNota'>
            <img src={estrela} className='estrela' />
            <p className='nota'>5.0</p>
          </div>
          <p className='nomeMotorista'>Fábio D.</p>
        </div>

        <div className="placa">
          <p className='numero'>BCD0D19</p>
          <p className='carro'>Honda Civic Roxo</p>
        </div>
      </div>
  )
}

export default Motorista