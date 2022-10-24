import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import { plans } from '../../data'

import './plans.css'

const Plans = () => {
  return (
    <>
    <Header title="Planos de Subscrição" image={HeaderImage}>
      Escolha o seu plano de serviço e subscrição a partir das opções abaixo para saber mais informações.
    </Header>
    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features}) => {
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`€${price}`}</h1><h2>/mês</h2>
              <h4>Características</h4>
              {
                features.map(({feature, available}, index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                })
              }
              <button className='btn lg'>Subscrever</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans