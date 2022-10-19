import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'


const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
              <div className="values__image">
                <img src={Image} alt="Imagem Valores" />
              </div>
            </div>
            <div className="values__right">
              <SectionHead icon={<GiCutDiamond/>} title="Valores"/>
              <p>
                  A missão da Gestão de Equipamentos do Município de Chaves, EM SA assenta na gestão de equipamentos e prestação de serviços de interesse geral, nos quais se incluem as termas, a gestão de sistemas de estacionamento público pago, as piscinas de recreio e lazer e o parque de campismo da Quinta do Rebentão.
              </p>
              <div className="values__wrapper">
                  {
                    values.map(({id, icon, title, desc}) => {
                      return <Card key={id} className="values__value">
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{desc}</small>
                      </Card>
                    })
                  }
              </div>
            </div>
        </div>
    </section>
  )
}

export default Values