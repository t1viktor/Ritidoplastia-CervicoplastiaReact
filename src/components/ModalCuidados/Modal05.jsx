import { useState, useEffect } from "react";

import {card05} from "/src/cardsModals.js"; 

export default function Modal03() {
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
        <div className="fixed z-50 inset-0 flex items-center  justify-center bgBlur" onClick={() => setIsOpen(false)}>
          <div className="modalCuidados" onClick={(e) => e.stopPropagation()}>
            <div className="border-b-[1px] w-full px-4 border-gray-700 flex justify-between flex-col-reverse items-center">
              <h2 className="modalCuidadoTittle">
                {card05.tittle}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="modalCuidadoBtn"
              >
                Fechar
              </button>
            </div>

            <div className="space-y-12 flex flex-col items-center">

            

            <img
              className="imgModalCuidados"
              src={card05.img}
              alt=""
            />

            <p className="pModalCuidados">
            {card05.h2Modal}
            </p>

            <ul className="cardAlert text-gray-100 list-disc liCardCuidados mx-6 text-left">
              <h2 className="pModalCuidados">{card05.li01}</h2>
              <li>{card05.desc01}</li>
              <li>{card05.desc02}</li>
              <li>{card05.desc03}</li>
           
            </ul>

            <ul className="cardAlert text-gray-100 list-disc liCardCuidados mx-6 text-left">
              <h2 className="pModalCuidados">{card05.li02}</h2>
              <li>{card05.desc04}</li>
            <li>{card05.desc05}</li>
            </ul>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
