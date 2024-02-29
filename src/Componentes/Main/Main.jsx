import React from 'react'; // Importa o módulo React para criar componentes React
import './Main.css'; // Importa o arquivo de estilos CSS para o componente Main
import imagem from './Mulher 2.jpg'; // Importa a imagem que será exibida no componente Main

// Componente Main para exibir informações e imagem sobre saúde da mulher
function Main() {
  // Retorna o componente Main com informações e imagem sobre saúde da mulher
  return (
    <main>
      <h2>Explore nossos artigos sobre saúde da mulher</h2>
      <p>Aqui você encontrará uma variedade de tópicos, desde nutrição e exercícios físicos até saúde mental e emocional. Navegue pelos nossos artigos e descubra como você pode levar uma vida mais saudável e feliz.</p>
      
      <div className="image-container">
      <img src={imagem} alt="Mulher pesquisando medicamentos" />
      </div>
    </main>
  );
}

export default Main;