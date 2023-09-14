import './BoxMensagem.css'

import telefone from '../../imagem/Vector2.png'
import vector3 from '../../imagem/Vector3.png'

function BoxMensagem(){
  return (
    <div className="boxMensagem">
        <input type="text" className='input' placeholder='Enviar mensagem para Fábio...'/>
        <button className='button'>Publicar</button>
        <img src={telefone} className='telefone'></img>
        <img src={vector3} className='vector3' />
    </div>
  );
}

export default BoxMensagem;