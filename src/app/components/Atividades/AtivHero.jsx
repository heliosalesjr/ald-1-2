import React from 'react';

const AtivHero = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-focus mx-auto h-[40rem] flex items-center justify-center text-white">
      <div className='max-w-screen-xl'>
        <div className="text-center flex items-center justify-between px-12">
            <div>
            <h1 className=" text-5xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
            Atividades do Projeto: Planejamento e Monitoramento
            </h1>
            <p className="text-lg text-white py-8">
            Nesta seção, vamos aprofundar a etapa de Planejamento do Educador, o planejamento ou Plano de Ação dos Estudantes e o Monitoramento. Também vamos conhecer duas ferramentas que ajudarão na definição das ações do projeto e podem auxiliar no monitoramento: a 5W2H e as Metas SMART.
            </p>
            </div>
            <div className="hidden md:block">
                <img src="images/ilustra_mercado.png" alt="Capa" className="px-8 w-[2000px]" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AtivHero;