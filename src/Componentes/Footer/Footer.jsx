import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import imagem from './mulher3.jpg';

function Footer() {
  return (
    <footer>
      <img src="src\Componentes\Footer\mulher3.jpg" alt="mulherautocuidado" />
      <p>© 2024 Saúde da Mulher. Todos os direitos reservados.</p>
      <p>Contato: thatianamattos25@gmail.com</p>
      <p>Siga-nos nas redes sociais!</p>
      <a href="https://www.linkedin.com/in/thatiana-mattos" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faLinkedin} /> 
</a>
<a href="https://www.instagram.com/thatiana33/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
    </a>
<a href="https://www.facebook.com/THATYMATTOS82" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
  </a>

     
          </footer>
  );
}

export default Footer;
