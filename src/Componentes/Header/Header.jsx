import React from 'react';
import './Header.css';
import imagem from './Mulher1.jpg';

function Header() {
  return (
    <header>
      <h1>Bem-vindo ao meu blog sobre saúde da mulher!</h1>
      <p>Seu guia para uma vida saudável e feliz</p>
      <img src="src\Componentes\Header\Mulher1.jpg" alt="Mulher fazendo o teste da mama" />
    </header>
  );
}

export default Header;