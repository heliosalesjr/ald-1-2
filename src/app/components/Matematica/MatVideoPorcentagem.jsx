'use client'
import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion'


function MatVideoPorcentagem() {
    return (
        <div className='bg-slate-200'>
            <div className='max-w-7xl mx-auto py-12'>
              <div className=" p-4 ">
                
        
                <div className="p-4 flex flex-col md:flex-row items-center">
                
                  <div className="w-full md:w-1/2 pr-4">
                    <div className=" mb-4">
                        <h1 className="text-4xl font-bold text-slate-800">Porcentagem</h1>
                    </div>
                    <h1 className="text-lg  text-slate-900 mb-4 pr-8">A porcentagem é muito importante no mercado financeiro, mas também na vida cotidiana, pois ela é usada, por exemplo, para divulgar promoções oferecidas por lojas, noticiar o aumento do salário mínimo e/ou inflação na mídia e também para apresentar resultados de pesquisas, que normalmente são apresentados em termos de porcentagens.

    A professora Victória Oliveira do canal descomplica traz um vídeo que mostra algumas formas diferentes de como calcular porcentagem de um número, dando ao estudante a oportunidade de escolher a forma que mais lhe agrade. </h1>
                  </div>
                  <div className="w-full md:w-1/2">
                    <ReactPlayer url='https://youtu.be/b0AQkMYvWU8' width="100%" />
                  </div>
                </div>
              </div>
            
            </div>
        </div>
      );
    }

export default MatVideoPorcentagem