import React from 'react'
import ReactPlayer from 'react-player'

function MatVideosPizza() {
    return (
        <div className='bg-slate-600'>
            <div className='max-w-7xl mx-auto m-4'>
                <div className='mx-auto p-4'>
                    <h1 className='font-bold text-3xl py-4 text-center text-primary'>Gráficos de pizza</h1>
                    <p className='text-white py-4'>Gráfico de setores ou gráfico de pizza é muito utilizado para representar partes do todo. A professora Ângela traz um passo a passo bem detalhado de como fazer um gráfico de setores. Trouxemos também um tutorial de como fazer esse tipo de gráfico utilizando Excel.</p>
                </div>
                
                <div className="max-w-screen-xl mx-auto p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
                    
                    <div className="w-full lg:w-1/2">
                    <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                        <ReactPlayer url='https://youtu.be/72raxPYXRCA' width="100%" />
                    </div>
                    <p className='text-center text-white font-bold p-4'>Operações com frações</p>
                    
                    </div>

                    <div className="w-full lg:w-1/2">
                    <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                        <ReactPlayer url='https://youtu.be/BGxNBYhd92w' width="100%" />
                    </div>
                    <p className='text-center text-white font-bold p-4'>Adição e subtração de frações</p>
                    
                    </div>

                </div>

        </div>
        </div>
      )
    }

export default MatVideosPizza