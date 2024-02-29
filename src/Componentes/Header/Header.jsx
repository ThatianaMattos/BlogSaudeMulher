// Importando o módulo React
import React from 'react';

// Importando o arquivo de estilo CSS
import './Header.css';

// Importando a imagem
import imagem from './Mulher1.jpg';

// Função que retorna o componente Header
function Header() {
  return (
    <header>
      <h1>Bem-vindo ao meu blog sobre saúde da mulher!</h1>
      <p>Seu guia para uma vida saudável e feliz</p>
      <img src={imagem} alt="Mulher fazendo o teste da mama" />
    </header>
  );
}

// Exportando o componente Header como padrão
export default Header;