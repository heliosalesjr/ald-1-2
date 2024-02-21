import React from 'react'

import ReactPlayer from 'react-player';
import { motion } from 'framer-motion'


function AtiUnindoFerramentas() {
  return (
    <div className='bg-slate-600'>
        <div className='max-w-7xl mx-auto p-4  py-8'>
                <div>
                    <h1 className='font-bold text-3xl py-4 text-white'>Unindo ferramentas</h1>
                    <p className='text-white py-4'>
                    Lembre-se de que tanto você quanto seus estudantes podem utilizar as Ferramentas Google {' '}
                    <a
                    href='https://sites.google.com/beieducacaopedagogico.com/ef6-ciclo-1/para-o-professor#h.blhg2aam0y00'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white underline py-2 hover:text-blue-200'
                    >
                    (apresentadas aqui)
                    </a> para criar documentos importantes como textos, listas e planilhas, que podem ser compartilhadas no quadros do Padlet através de links.
                    </p>
                </div>

                <div className="max-w-screen-xl mx-auto relative py-4">
                {/* Gradiente de fundo azul e verde com ajustes */}
                <div className="absolute top-0 left-0 md:w-4/5 w-full h-full bg-gradient-to-br from-primary to-primary-focus z-0"></div>

                <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 md:p-8 relative z-10">
                    <motion.div className="w-full md:w-1/2 pr-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    >
                    <motion.h1 className="text-3xl font-bold text-white mb-4 mx-8 py-4"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        >
                        Para saber mais</motion.h1>
                    <p className="text-white text-lg mx-8">
                    Aqui você encontra textos e referências sobre a construção do Diário de Bordo. Para acessar o conteúdo, clique nos links.
                    </p>
                    
                    <p className='text-white py-4 mx-8'>
                        <a
                        href='https://sites.google.com/beieducacaopedagogico.com/ef-6-ano-ciclo-2/recursos-did%C3%A1ticos#:~:text=Educa%2D%20PE%20Di%C3%A1rio%20de%20Bordo%20%2D%20Texto'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-white underline py-2 hover:text-blue-200'
                        >
                        Educa- PE Diário de Bordo - Texto
                        </a>
                    </p>

                    <p className='text-white py-4 mx-8'>
                        <a
                        href='https://sites.google.com/beieducacaopedagogico.com/ef-6-ano-ciclo-2/recursos-did%C3%A1ticos#:~:text=O%20que%20%C3%A9%20e%20como%20compor%20um%20Di%C3%A1rio%20de%20Bordo'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-white underline py-2 hover:text-blue-200'
                        >
                        O que é e como compor um Diário de Bordo
                        </a>
                    </p>

                    <br />
                    </motion.div>
                    <motion.div className="w-full md:w-1/2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}>
                    <ReactPlayer url='https://youtu.be/WzPqHeUq6z8' width="100%" />
                    </motion.div>
                </div>
                </div>   
        </div>
    </div>
    
  )
}

export default AtiUnindoFerramentas