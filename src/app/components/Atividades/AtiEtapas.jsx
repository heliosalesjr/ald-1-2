'use client'
import React from "react";



export default function AtiEtapas() {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl text-slate-800 py-4 pt-8 text-center">Localizando-se no Ciclo de Projetos</h1>
        <p className="text-lg mt-4 py-4 text-slate-600 p-4">
        Chegamos à segunda fase da aplicação do projeto coletivo e para te ajudar a compreender as atividades a serem desenvolvidas, vamos retomar o Ciclo de Projetos.
        </p>

      </div>
      
      <div className="container mx-auto max-w-5xl flex mt-8">
          
          <div className="w-1/3 max-w-[260px] py-4">
            <img
              src="images/cicloeducador2.png"
              alt="Imagem"
              className="w-full h-auto"
            />
          </div>

          
          <div className="w-2/3 px-4 m-4 py-4">
            <h1 className="font-bold text-2xl text-slate-800 mb-4">
              Planejando no Ciclo de Projeto do Educador
            </h1>
            <p className="text-base text-slate-600 py-2">
              Na fase anterior, o educador realizou o diagnóstico dos estudantes (tanto dos conhecimentos matemáticos como de seus interesses) por meio das ferramentas sugeridas. Além disso, os estudantes já selecionaram um tema do projeto coletivo e deram início à criação e execução do Plano de Ação. Uma vez que o professor tem em mãos os conteúdos de matemática a serem trabalhados, diagnósticos e dados do projeto coletivo, é hora de planejar e organizar ações docentes referentes ao ensino dos conteúdos de matemática e que, ao mesmo tempo, auxiliarão os estudantes a alcançarem os objetivos propostos no projeto coletivo.
            </p>
          </div>
      </div>

      <div className="container mx-auto max-w-5xl flex mt-8">
          

          <div className="w-2/3 px-4 m-4 py-4">
                <h1 className="font-bold text-2xl text-slate-800 mb-4">
                Planejando no Ciclo de Projeto Coletivo
                </h1>
                <p className="text-base text-slate-600 py-2">
                Neste momento os alunos devem definir um tema do projeto e elaborar um diagnóstico da situação escolhida por eles. Com estes dados já é possível que os estudantes proponham, analisem e organizem ações visando o alcance do objetivo proposto.
                </p>
              
                <p className="text-base text-slate-600 py-2">
                O nome dado ao planejamento dos estudantes é o Plano de Ação e aprofundaremos sua estrutura com mais detalhes nas próximas seções. É importante que os alunos já iniciem a execução das ações planejadas, para que comecem a obter os primeiros resultados de suas propostas.
                </p>
          </div>
          
          <div className="w-1/3 max-w-[280px] py-4">
            <img
              src="images/ciclocoletivo2.png"
              alt="Imagem"
              className="w-full h-auto"
            />
          </div>

          
          
      </div>
    
    </>
  );
}
