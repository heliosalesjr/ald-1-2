import React from 'react'
import ReactPlayer from 'react-player'

function RecPadletVideo() {
  return (
    <div className='bg-slate-200'>
      <div className='max-w-7xl mx-auto py-8'>
            <div className="p-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4">
            <h1 className='font-bold text-3xl py-4 text-slate-700'>Diário de Bordo</h1>
                <p className='text-slate-700 py-4'>
                Devido à sua estrutura de quadros, o Padlet é muito utilizado como organizador de tarefas, assim como Diário de Bordo para projetos.
                </p>
                <p className='text-slate-700 py-4'>
                Veja abaixo alguns exemplos do uso do Padlet como Diário de Bordo:
                </p>
                <ul className='text-center pb-8'>
                    <li>
                        <a
                        href='https://padlet.com/cinemaeciencia/sbnsg7spp877tjgk'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-700 underline py-2 hover:text-purple-800'
                        >
                        Exemplo 1
                        </a>
                    </li>
                    <li>
                        <a
                        href='https://padlet.com/alicepimenta/07'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-700 underline py-2 hover:text-purple-800'
                        >
                        Exemplo 2
                        </a>
                    </li>

                    <li>
                        <a
                        href='https://padlet.com/jose_santos1/diariobordo'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-700 underline py-2 hover:text-purple-800'
                        >
                        Exemplo 3
                        </a>
                    </li>
                </ul>
              <h1 className="font-semibold mb-4 text-lg text-slate-700">Neste vídeo temos um tutorial de como utilizar a ferramenta Padlet e criar seu Diário de Bordo.</h1>
            </div>
            <div className="w-full md:w-1/2">
              <ReactPlayer url='https://youtu.be/-5uUe9Tzyyo' width="100%" />
            </div>
          </div>
        </div>
    
    </div>
  )
}

export default RecPadletVideo