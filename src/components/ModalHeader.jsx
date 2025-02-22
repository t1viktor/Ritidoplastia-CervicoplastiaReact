import { useState, useEffect } from "react";



export default function ModalHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Bloqueia o scroll
    } else {
      document.body.classList.remove("overflow-hidden"); // Libera o scroll
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Garante que o scroll é liberado ao desmontar
    };
  }, [isOpen]);

  return (
    <div className="flex justify-center items-center ">
      {/* Botão para abrir o modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="duration-300 bg-gradient-to-r from-[#1a212c] to-[#25364e] border-[2px]  hover:text-blue-200 hover:border-[2px] hover:border-blue-500 py-4  max-lg:py-1 max-lg:px-4 px-12 rounded-full text-orange-200 text-xl font-semibold max-lg:text-sm cursor-pointer"
      >
        Saiba mais sobre o procedimento
      </button>

      {/* Fundo escuro e modal */}
      {isOpen && (
        <div className="fixed z-50 inset-0 flex  items-center justify-center bgBlur" onClick={() => setIsOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} className="z-50 fixed h-[90%] bg-slate-800 py-6 rounded-4xl shadow-lg w-[60%] max-lg:w-[90%] h-[80%] max-lg:h-[76%] border-[1px] border-slate-500 flex flex-col space-y-2 justify-between">
            <div className="w-full flex  max-md:flex-col-reverse items-center justify-items-center text-center justify-between border-b-[1px] border-slate-500 max-md:text-xl">
                  {/* Botão para fechar */}
            <h2 className="text-orange-200 text-4xl text-left px-8 py-4 max-md:text-3xl">Sobre a Mastopexia com Prótese</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-slate-800 font-semibold text-white rounded-md w-60 cursor-pointer"
            >
              Fechar
            </button>
            </div>

            <h2 className="font-semibold mb-2 text-blue-500 text-3xl px-8 max-md:text-2xl">O que é a Mastopexia com Prótese?
            </h2>
            <p className="text-gray-100 px-8 py-2 text-lg max-md:text-md">A mastopexia com prótese é um procedimento cirúrgico que combina o levantamento dos seios com a colocação de próteses de silicone para melhorar o volume e o contorno. O pós-operatório é uma fase crucial para o sucesso da cirurgia e para garantir um resultado seguro e satisfatório. Este guia traz orientações completas para que você tenha uma recuperação tranquila e alcance os melhores resultados.
</p>

            <div className="cardAlert">
            <strong>Importante:</strong> O sucesso da cirurgia depende tanto do procedimento quanto dos cuidados pós-operatórios.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
