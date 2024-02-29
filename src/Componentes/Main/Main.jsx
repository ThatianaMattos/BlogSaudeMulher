import React from 'react';
import './Main.css';
import imagem from './Mulher 2.jpg';

// Componente Main para exibir informações e imagem sobre saúde da mulher
function Main() {
  // Retorna o componente Main com informações e imagem sobre saúde da mulher
  return (
    <main>
      <h2>Explore nossos artigos sobre saúde da mulher</h2>
      <p>Aqui você encontrará uma variedade de tópicos, desde nutrição e exercícios físicos até saúde mental e emocional. Navegue pelos nossos artigos e descubra como você pode levar uma vida mais saudável e feliz.</p>
      <img src={imagem} alt="Mulher pesquisando medicamentos" />
    </main>
  );
}

export default Main;