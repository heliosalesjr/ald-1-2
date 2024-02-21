
import { Divider } from "@nextui-org/react";
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";

function AtiProximos() {
    return (
        <div className='bg-slate-600 py-8'>
            <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center sm:p-8">
            
                <div className="md:w-1/2 md:ml-4">
                    <h2 className="mb-16 text-4xl text-primary font-bold px-8 ">Próximos passos</h2>
                    <p className='text-white px-8 py-2'>
                    Feito o Plano de Ação, torna-se mais claro que tipos de itens entrarão no orçamento do Projeto – tanto as despesas para atingir a meta como as receitas para que seja possível assumir os gastos previstos. Assim, o orçamento será mais detalhado, o que implica também rever o Plano de Ação.
                    </p>
                    <p className="text-white px-8 py-2">Toda essa movimentação gera oportunidades para aplicar vários dos conceitos e procedimentos propostos no Livro do Estudante. E mostra também aos jovens que, em qualquer projeto, é importante levar em consideração a pesquisa e os detalhes que aparecem ao longo do trabalho – esse é um aprendizado relevante para a vida pessoal e profissional, assim como para as práticas de cidadania.</p>
                </div>
    
                
                <div className="p-8 md:w-1/2 mb-4 md:mb-0">
                    <img
                    className="w-full h-full object-cover rounded-md max-h-[500px]"
                    src="/images/cropproximospassos.png"  // Substitua pelo caminho da sua imagem
                    alt="Descrição da Imagem"
                    />
                </div>
            </div>

            <Divider className='max-w-3xl mx-auto bg-primary-focus '/>

            <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center sm:p-8">

                <div className="p-8 md:w-1/2 mb-4 md:mb-0">
                    <img
                    className="w-full h-full object-cover rounded-md max-h-[500px]"
                    src="/images/cropdiario.png"  // Substitua pelo caminho da sua imagem
                    alt="Descrição da Imagem"
                    />
                </div>

                <div className="md:w-1/2 md:ml-4">
                    <h2 className="mb-16 text-4xl text-primary font-bold px-8 ">Monitoramento</h2>
                    <p className='text-white px-8 py-2'>
                    À medida que o Projeto Coletivo avança, novos conceitos e novos procedimentos são aprendidos assim como decisões são tomadas. Então, mais do que nunca, será importante monitorar o quanto esses processos estão dando resultado. Para isso, é necessário criar registros de cada atividade executada. Estes registros podem ser na forma de:
                    </p>
                    <ul>
                        <li className="text-white px-8 py2"> • 
                        registros das atividades na forma de anotações;
                        </li>
                        <li className="text-white px-8 py2"> • 
                        fotos;
                        </li>
                        <li className="text-white px-8 py2"> • trabalhos com gráficos;</li>
                        <li className="text-white px-8 py2"> • painéis;</li>
                        <li className="text-white px-8 py2"> • apresentação de slides;</li>
                        <li className="text-white px-8 py2"> • vídeos;</li>
                        <li className="text-white px-8 py2"> • outros.</li>
                        
                        
                    </ul>
                    <p className="text-white px-8 py-2">Tudo isso será útil para a avaliação do processo inteiro e, posteriormente, para a Culminância, que ocorrerá no fim da Quarta Etapa. Você pode se inspirar em algumas dicas para o registro fotográfico que estão no Anexo 1 do Caderno do Educador <a href='https://drive.google.com/file/d/1OE9IHdzKWIePHgeznKTOjgTHS4FAT94L/view?usp=sharing' target="_blank" className='text-blue-100 underline hover:text-purple-200'>(acessível aqui)</a>{''}.</p>
                </div>
            
            
                
            </div>
            <Divider className='max-w-3xl mx-auto bg-primary-focus '/>
            <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center sm:p-8">
            
                <div className="md:w-1/2 md:ml-4">
                    <h2 className="mb-16 text-4xl text-primary font-bold px-8 ">Diário de Bordo</h2>
                    <p className='text-white px-8 py-2'>
                    Ao longo de toda a execução do programa Aprendendo a Lidar com Dinheiro, será importante registrar o que acontece: os temas tratados em cada aula, a reação dos estudantes, como eles avançam em seu Projeto Coletivo, como se saem nos exercícios propostos no Livro do Estudante, e assim por diante. Para isso, você pode elaborar um Diário de Bordo.
                    </p>
                    <p className="text-white px-8 py-2">As anotações podem ser feitas em um texto narrativo, como quem conta um caso, ou de forma esquemática. Você pode anexar fotos ou vídeos que mostrem algum momento do processo. Assim, você poderá visualizar e avaliar toda a jornada quando esta chegar ao fim.</p>
                    
                </div>
    
                
                <div className="p-8 md:w-1/2 mb-4 md:mb-0">
                    <img
                    className="w-full h-full object-cover rounded-md max-h-[500px]"
                    src="/images/cropmonitoramento.png"  // Substitua pelo caminho da sua imagem
                    alt="Descrição da Imagem"
                    />
                </div>
            </div>
            
            <p className='text-white px-8 max-w-7xl mx-auto text-center font-semibold py-8'>Da mesma forma que você está produzindo seu Diário de Bordo, peça aos jovens que também mantenham um, registrando as aulas e principalmente as atividades do Projeto Coletivo. Os registros podem ser em forma de textos, fotos, vídeos, entre outros. Essas anotações vão compor o relato da experiência de seu projeto, importante para o monitoramento da aprendizagem.</p>
        </div>
        
      );
    };
    

export default AtiProximos