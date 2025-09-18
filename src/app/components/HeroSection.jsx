import React from 'react';
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-focus mx-auto pt-20 h-[40rem] flex items-center justify-center text-white">
      <div className='max-w-screen-xl'>
        <div className="text-center flex items-center justify-between px-12">
          <div>
            <h1 className=" text-5xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
              Aprendendo a Lidar com Dinheiro
            </h1>
            <p className="text-lg text-white py-8">
            Olá, professores e professoras! Sejam bem-vindos  e bem-vindas ao segundo site da camada digital da coleção Aprendendo a Lidar com Dinheiro – Educação Financeira. Neste material, traremos um aprofundamento nas etapas de elaboração do Planejamento Didático Ativo (PDA), conheceremos o Plano de Ação dos estudantes e aprenderemos a utilizar o Padlet para criar um Diário de Bordo.



            </p>
          </div>
          <motion.div 
            className="hidden md:block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="images/1covers_nonumber.png" alt="Capas" className="px-8 w-[2000px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

