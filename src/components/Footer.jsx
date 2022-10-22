import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"



const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Gestão de Equipamentos do Muncipio de Chaves, EM SA<br />
                    Largo das Caldas<br />
                    5400-534 Chaves<br />
                    Portugal
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/company/termasdechaves" target="_blank" rel='noopener noreferrer'><FaLinkedin/></a>
                    <a href="https://fb.com/termasdechaves" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://twitter.com" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://instagram.com/termasdechaves" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            {/*<article>
                <h4>Permalinks</h4>
                <Link to="/about">Somos</Link>
                <Link to="/plans">Planos</Link>
                <Link to="/trainers">Governo</Link>
                <Link to="/gallery">Galeria</Link>
                <Link to="/contact">Contacto</Link>
               </article>*/}
            <article>
                <h4>Legal</h4>
                <Link to="/s">Política de Cookies</Link>
                <Link to="/s">Política de Privacidade</Link>
                <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel='noreferrer noopener'>Reclamações</a>
            </article>
            <article>
                <h4>Entre em Contacto</h4>
                <Link to="/contact">Contacte-nos</Link>
                <Link to="/s">Suporte</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>&copy; GEMC, EM SA. Todos os direitos reservados.</small>
        </div>
    </footer>
  )
}

export default Footer