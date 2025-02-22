import { useState, useEffect } from "react";

import {card06} from "/src/cardsModals.js";

export default function Modal06() {
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
    <div className="flex justify-center items-center">
      {/* Botão para abrir o modal */}
      <button onClick={() => setIsOpen(true)} className="btnCardCuidados">
        Ver mais sobre
      </button>

      {/* Fundo escuro e modal */}
      {isOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bgBlur" onClick={() => setIsOpen(false)}>
          <div className="bg-gradient-to-r from-[#1F2937] to-[#2a3a50] py-6 rounded-2xl shadow-lg w-[50%] h-[95%] overflow-y-scroll text-center justify-items-center space-y-4 max-md:w-[80%] max-md:h-[65%]" onClick={(e) => e.stopPropagation()}>
            <div className="border-b-[1px] w-full px-4 border-gray-700 flex flex-col-reverse items-center">
              <h2 className="modalCuidadoTittle">
                {card06.tittle}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="modalCuidadoBtn"
              >
                Fechar
              </button>
            </div>

            <img
              className="imgModalCuidados"
              src={card06.img}
              alt=""
            />

            <p className="pModalCuidados">
            {card06.h2Modal}
            </p>

            <ul className="ulModalCuidados marker:text-blue-500">
              <li className="liModalCuidados">{card06.desc01}</li>
              <li className="liModalCuidados">{card06.desc02}</li>
              <li className="liModalCuidados">{card06.desc03}</li>
              
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
