const descProcedimento = "A mastopexia com prótese é um procedimento cirúrgico que combina o levantamento dos seios com a colocação de próteses de silicone, visando melhorar o volume, o contorno e a firmeza das mamas, proporcionando resultados estéticos harmoniosos e maior confiança.";

const tituloProcCard01 = "Avaliação Inicial";
const tituloProcCard02 = "Preparação";
const tituloProcCard03 = "Procedimento";
const tituloProcCard04 = "Recuperação";

const descProcCard01 = "Avaliação das mamas e definição do plano cirúrgico personalizado, considerando expectativas e saúde do paciente.";

const descProcCard02 = "Exames pré-operatórios e orientações sobre dieta, medicamentos e preparação física e emocional para a cirurgia.";

const descProcCard03 = "Cirurgia para levantar as mamas e posicionar próteses de silicone, com técnicas personalizadas para resultados naturais.";

const descProcCard04 = "Cuidados pós-operatórios com cicatrizes, uso de sutiã especial, alimentação e atividades para recuperação segura.";

export default function Procedimento() {
    return (
        <div id="procedimento" className="min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex flex-col items-center justify-center px-3 space-y-20 py-12">
            <h1 className="text-orange-200 text-5xl max-lg:text-3xl">O Procedimento</h1>
            <p className="text-orange-100 text-2xl text-center px-26 max-lg:text-xl">{descProcedimento}</p>

            <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1 justify-items-center"> 

                <div className="procCard cardProcHover">
                    <h2 className="numProcCard">01</h2>
                    <h2 className="h2ProcCard">{tituloProcCard01}</h2>
                    <p className="pProcCard">{descProcCard01}</p>
                    <button className="verMaisProcCard">Mais detalhes</button>
                </div>

                <div className="procCard">
                    <h2 className="numProcCard">02</h2>
                    <h2 className="h2ProcCard">{tituloProcCard02}</h2>
                    <p className="pProcCard">{descProcCard02}</p>
                    <button className="verMaisProcCard">Mais detalhes</button>
                </div>

                <div className="procCard">
                    <h2 className="numProcCard">03</h2>
                    <h2 className="h2ProcCard">{tituloProcCard03}</h2>
                    <p className="pProcCard">{descProcCard03}</p>
                    <button className="verMaisProcCard">Mais detalhes</button>
                </div>

                <div className="procCard">
                    <h2 className="numProcCard">04</h2>
                    <h2 className="h2ProcCard">{tituloProcCard04}</h2>
                    <p className="pProcCard">{descProcCard04}</p>
                    <button className="verMaisProcCard">Mais detalhes</button>
                </div>

            </div>
        </div>
    )
}
