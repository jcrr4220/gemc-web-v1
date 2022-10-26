// ScrollToTop.jsx
// Autor: Joao Rocha
// Date: 2022/10/25

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return <>{props.children}</>
  };
  
  export default ScrollToTop;