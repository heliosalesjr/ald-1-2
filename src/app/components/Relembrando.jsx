import React from 'react';

const Relembrando = () => {
  return (
    <div className="bg-white max-w-5xl mx-auto py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-tl from-primary to-primary-focus sm:flex-row">
           
            <div className="order-first h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
                src="images/notes_4.jpg"
                loading="lazy"
                alt="Photo by Helio Sales Jr."
                className="h-full w-full object-cover object-center"
            />
            </div>
            
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">Relembrando</h2>
    
            <p className="mb-8 max-w-md text-white">
            Lembre-se de que a estrutura dos sites está organizada de acordo com nossa tabela {' '}
                <a href="https://drive.google.com/file/d/1OB6RNKwKCrpGmMY2oMTAaLAi_FcHa6zu/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='underline hover:text-sky-300'>
                    (acessível aqui)
                </a>
            {' '}e que abrange conteúdos e atividades previstos no Mapa Esquemático de Matemática {' '}
                <a href='https://drive.google.com/file/d/1nN2I2_s2obnnBUStZDkN1K4k8h6l8eJV/view' 
                target="_blank" rel="noopener noreferrer" 
                className='underline hover:text-sky-300'>(acessível aqui)
                </a>
            {' '} e no Caderno do Educador (organizados através do Quadro Geral, {' '}
                <a href='https://docs.google.com/spreadsheets/d/1RLpcFXrQTB40T2DshPJklPjwE-2_EUsMcmw8w3VZX_c/edit#gid=0' 
                target="_blank" rel="noopener noreferrer" 
                className='underline hover:text-sky-300'> acessível aqui
                </a>
                
            ). Esta estrutura visa auxiliar a implantação e desenvolvimento das atividades previstas no material.
            </p>
    
            
            </div>
            {/* content - end */}
        </div>
        </div>
    </div>
  

  );
};

export default Relembrando;



