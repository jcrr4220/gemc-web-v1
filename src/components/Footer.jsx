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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci rem, quidem saepe dolor modi quis architecto maxime doloribus debitis?
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://fb.com" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://twitter.com" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://instagram.com" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">Somos</Link>
                <Link to="/plans">Planos</Link>
                <Link to="/trainers">Governo</Link>
                <Link to="/gallery">Galeria</Link>
                <Link to="/contact">Contacto</Link>
            </article>
            <article>
                <h4>Pensamentos</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Casos de Estudo</Link>
                <Link to="/s">Eventos</Link>
                <Link to="/s">Comunidades</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Entre em Contacto</h4>
                <Link to="/contact">Contacte-nos</Link>
                <Link to="/s">Suporte</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 GEMC, EM SA &copy; Todos os direitos reservados</small>
        </div>
    </footer>
  )
}

export default Footer