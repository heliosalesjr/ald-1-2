import React from 'react'

function AtiPlanoPDA() {
    return (
        <div className="relative w-full">
          {/* Camada com gradiente e opacidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-focus opacity-40"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('images/classroom.png')",
            }}
          ></div>
    
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-focus opacity-70"></div>
    
          {/* Conteúdo sobreposto */}
          <div className="relative z-10 text-white text-center py-20 max-w-3xl mx-auto">
            <div className='border-white border-3 rounded-xl p-4'>
                <h1 className="text-4xl font-bold mb-4 pt-8 px-8">Plano Didático Ativo (PDA)</h1>
                <p className="text-lg px-8 p-2">
                Escrever o PDA é a terceira parte do ciclo do educador, na qual deverão constar, além das escolhas já feitas (conteúdos, perfil da turma e conhecimentos prévios dos estudantes), as atividades, com estratégias e ferramentas que incitem a participação dos estudantes, e que preveja ainda os momentos e as formas de avaliação.
                </p>
                <p className="text-lg px-8 p-2">Um resumo do que você identificou em seus diagnósticos pode constar no seu PDA, como uma justificativa para várias de suas escolhas quanto ao ritmo de andamento, as estratégias e ferramentas. Por fim, você terá como Fator de Mobilização um Projeto Coletivo real, escolhido pelos estudantes, a ser realizado ao longo deste programa.</p>
            </div>
            
          </div>
        </div>
      );
    };

export default AtiPlanoPDA