import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#Olá, somos</h4>
          <h1>Gestão de Equipamentos do Município de Chaves</h1>
          <p>
            Damos-lhe as boas vindas a este novo espaço informativo. Esta é a nossa nova forma de comunicar consigo, esperando mantê-lo sempre informado de toda a nossa atividade.
          </p>
          <Link to="/plans" className='btn lg'>Começamos?</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main HeaderImage" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader