import React from 'react';

function RecPadlet() {
  return (
    <div className='max-w-7xl mx-auto p-4 flex flex-col md:flex-row items-center'>
      <div className='md:w-1/5 md:order-2 mb-4 md:mb-0'>
        {/* Adicionando a classe hidden md:block para ocultar em telas pequenas */}
        <img
          src='images/padlet.png'
          alt='Descrição da imagem'
          className='w-full h-auto md:order-2 md:mb-4 md:max-w-[150px] md:mx-auto hidden md:block'
        />
      </div>
      <div className='md:w-4/5 md:order-1'>
        <h1 className='font-bold text-3xl py-4 text-slate-700'>Padlet</h1>
        <p className='text-slate-700 py-4'>
          O Padlet é uma ferramenta que permite a criação de quadro digitais.
          Estes quadros podem conter diferentes tipos de mídias (textos, links,
          imagens, áudios etc.) e ficam organizados na forma de murais virtuais.
          O usuário pode escolher entre diferentes formas de organização do mural.
        </p>
        <p className='text-slate-700 py-4'>
          Para visitar a página da ferramenta,{' '}
          
          <a href='https://www.google.com/url?q=https%3A%2F%2Fpadlet.com%2F&sa=D&sntz=1&usg=AOvVaw2_IspiGwLYeexQXVYO-P4X' target="_blank" className='text-blue-700 underline hover:text-purple-900'>
            clique aqui
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default RecPadlet;

