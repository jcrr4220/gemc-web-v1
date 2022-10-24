import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Entre em Contacto" image={HeaderImage}>
      Interessado em mais informação?<br/>
      Entre em contacto connosco hoje.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:geral.termas@chaves.pt" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/termasdechaves" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+351968493306" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact