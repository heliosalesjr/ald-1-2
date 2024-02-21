import React from 'react';

const MyComponent = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      
      <div className="text-center mb-8">
        <h1 className="text-4xl text-slate-800 md:text-4xl font-bold mb-4">Sugestão de ferramentas para o Plano de Ação dos Estudantes</h1>
        <p className="text-slate-700">
        Abaixo, sugerimos duas ferramentas importantes para a definição e organização de metas de um projeto.
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row md:justify-center">
        <img
          src="/images/smart.png" 
          alt="Imagem 1"
          className="w-full md:w-1/2 h-auto md:h-full object-cover rounded-md m-4 md:mb-0"
        />
        <img
          src="/images/5w2h.png"  
          alt="Imagem 2"
          className="w-full md:w-1/2 h-auto md:h-full object-cover rounded-md m-4"
        />
      </div>
    </div>
  );
};

export default MyComponent;
