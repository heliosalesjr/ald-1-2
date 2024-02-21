import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";

const AtiPDAAcordion = () => {
  return (
    <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center md:justify-between p-8">
      <div className="md:w-1/3 pt-8 pb-8">
        
        <h1 className="text-3xl font-bold text-center text-slate-700">Elaboração</h1>
        <p className="font-gray-800 mt-4 pt-4">
        Clique nos títulos para saber mais sobre os passos para a elaboração do PDA. Você pode utilizar a <a href='https://docs.google.com/spreadsheets/d/1mEpNOAX8QXuKc5_Icv0iKs9Pcm_Y4Q0B44uRcqnweIs/edit#gid=0' target="_blank" className='text-blue-700 underline hover:text-purple-900'>planilha Plano Didático Ativo</a>{' '}para ajudar na sua organização pessoal.
            
        </p>
        
      </div>
      <div className="p-8 md:w-2/3 mt-8 md:mt-0 w-full">
       
        <Accordion variant='bordered'>
            <AccordionItem key="1" aria-label="Accordion 1" title="Definir e delimitar os objetivos e conteúdos do seu projeto">
              <p className='text-slate-700 py-2 '>
              Objetivos: o que você quer alcançar com base em cada conteúdo pedagógico a ser abordado e com o PDA como um todo. É o que você deseja que o estudante aprenda em relação ao tema escolhido. 
              </p>
              <ul className='py-2'>
                <li className='py-2'>Escrever na perspectiva do que o estudante precisa alcançar ao final do PDA.</li>
                <li className='py-2'>Descrever com um verbo no infinitivo: mudar, realizar, empreender, diferenciar, intervir, entre outros.</li>
                <li className='py-2'>Utilizar expressões que revelem da forma mais clara possível sua intenção para com a aprendizagem do estudante.</li>
                <li className='py-2'>Definir objetivos que sejam passíveis de verificação imediata.</li>
              </ul>
              <p className='text-slate-700 py-2 '>Conteúdos: Dividem-se em conceituais, procedimentais e atitudinais. Veja abaixo mais informações sobre essa classificação.</p>
                <img className='w-full' src='images/atiacc1.png' alt='Objetivos e conteúdos do projeto' />
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Prever a divisão inicial das aulas">
                <p className='text-slate-700 py-2'>
                Avaliar os avanços semanais pretendidos para abordar os conteúdos e momentos de avaliação dos conteúdos dominados pelos estudantes.
                </p>
                <p className='text-slate-700 py-2'>
                Em quantas aulas/bimestres será dado esse projeto? Quais capítulos do livro serão abordados em quais semanas? Para cada objetivo, qual deverá ser o número de aulas?
                </p>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Escolher as atividades a serem desenvolvidas em cada etapa">
              <p className='text-slate-700 py-2'>
              Descrever as estratégias para cada semana de trabalho. Quais habilidades (definidas como importantes na segunda etapa, com o perfil da turma) você vai trabalhar, qual conteúdo utilizará e como acontecerá o processo que desenvolverá as habilidades listadas. Montar plano de atividades sem detalhamento. Detalhar a primeira parte: como apresentar o seu PDA para a turma; como levantar ideias para o Projeto Coletivo; como selecionar o tema do Projeto Coletivo.
              </p>
              <p className='text-slate-700 py-2'>
              Uma atividade é geralmente estimulante e motivadora quando propõe desafios que podem ser superados. Por isso, fique atento para apresentar atividades inovadoras e interessantes, algo diferente da rotina, mas realizável pelos estudantes. As atividades devem ocorrer uma após a outra, de forma que a sequência faça sentido, a fim de atingir o objetivo estabelecido. 
              </p>
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 3" title="Planejar a avaliação continuada e final sobre os objetivos alcançados">
              <p className='text-slate-700'>
              É importante que, para cada atividade ou bloco de atividades, seja programado e dedicado um tempo específico para o educador saber se está atingindo os objetivos do PDA. Um bom plano de avaliação contém:
              </p>
              <img className='w-full' src='images/atiacc4.png' alt='Objetivos e conteúdos do projeto' />
            </AccordionItem>
            <AccordionItem key="5" aria-label="Accordion 3" title="Planejar o formato e as condições da culminância ao final do processo">
              <p className='text-slate-700 py-2'>
              A culminância ajuda a organizar as atividades e os prazos, bem como o tipo de registro e apresentação dos resultados que se espera. Assim, é importante ter esse formato pensado inicialmente, ainda que haja espaço para eventuais mudanças ao longo do processo.
              </p>
              <p className='text-slate-700 py-2'>
              Quando o seu PDA estiver finalizado, você deve apresentá-lo à turma e iniciar as atividades conforme planejado. <a href='https://docs.google.com/spreadsheets/d/1z6b3Uh9g1jdFf7fhSwgVOFJ--8qDaKIKkwlBqX2V42w/edit?usp=sharing' target="_blank" className='text-blue-700 underline hover:text-purple-900'>Aqui</a>{' '} você acessa a Tabela de Atividades de Sala de Aula para facilitar seu planejamento e a execução deste programa, seguindo as etapas sugeridas no Livro do Estudante. Caso, prefira, pode utilizar a <a href='https://docs.google.com/spreadsheets/d/1F1GdDvkiHCEyqS4uZvhmBuJyXsjnfkqY5KKXyoQto3U/edit#gid=0' target="_blank" className='text-blue-700 underline hover:text-purple-900'>planilha PDA - Quadro Geral das Atividades</a>{' '}em Sala de Aula para elaborar o seu próprio.
              </p>
            </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AtiPDAAcordion;
