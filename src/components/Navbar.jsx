import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo_w.png'
import {links} from '../data'
import {FiMenu} from 'react-icons/fi'
import {AiOutlineMinus} from 'react-icons/ai'
import './navbar.css'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
        <div className="container nav__container">
            {/*<Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="Nav Logo" />
               </Link>*/}
            <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                <h1>gemc.</h1>
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
              {
                links.map(({name, path}, index) => {
                  return(
                    <li key={index}>
                      <NavLink to={path} end className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                {
                  isNavShowing ? <AiOutlineMinus/> : <FiMenu/>
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar