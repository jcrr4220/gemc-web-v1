import {Link} from 'react-router-dom'

import './notFound.css'

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Página Inexistente!</h2>
        <Link to="/" className='btn'>Voltamos ao Inicio</Link>
      </div>
    </section>
  )
}

export default NotFound