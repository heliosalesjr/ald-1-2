import React from 'react'
import ReactPlayer from 'react-player';

function MatPolinomios() {
    return (
        <div className='max-w-7xl mx-auto py-4'>
          <div className=" p-4 ">
            
    
            <div className="p-4 flex flex-col md:flex-row items-center">
            
              <div className="w-full md:w-1/2 pr-4">
                <div className=" mb-4">
                    <h1 className="text-4xl font-bold text-slate-700">Função Polinomial de 1º grau</h1>
                </div>
                <h1 className="text-lg  text-slate-800 mb-4 pr-8">Para tratar desse assunto, trouxemos três vídeos:  o primeiro da Labin sobre o que é e o que significa resolver uma equação. Em seguida, o Tiago Eutíquio mostra os princípios e regras para a resolução da equação, fazendo uma analogia com uma balança de dois pratos. Por último, um vídeo do canal “Matemática Champs” traz dois exemplos bem diretos de resolução de equações.  

A professora Victória Oliveira do canal descomplica traz um vídeo que mostra algumas formas diferentes de como calcular porcentagem de um número, dando ao estudante a oportunidade de escolher a forma que mais lhe agrade. </h1>
              </div>
              <div className="w-full md:w-1/2">
                <ReactPlayer url='https://youtu.be/E-ZgbASUS4o' width="100%" />
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto pb-4 p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
            
            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/4cLpcQ4kK-M' width="100%" />
              </div>
              <p className='text-center text-slate-800 font-bold p-4'>Equação e balança de dois pratos</p>
              
            </div>

            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/WmUw__LSkNU' width="100%" />
              </div>
              <p className='text-center text-slate-800 font-bold p-4'>Equação polinomial</p>
              
            </div>
            
          </div>
        </div>
      );
    }

export default MatPolinomios