import Modal01 from "./ModalCuidados/Modal01";
import Modal02 from "./ModalCuidados/Modal02";
import Modal03 from "./ModalCuidados/Modal03";
import Modal04 from "./ModalCuidados/Modal04";
import Modal05 from "./ModalCuidados/Modal05";
import Modal06 from "./ModalCuidados/Modal06";
import Modal07 from "./ModalCuidados/Modal07";
import Modal08 from "./ModalCuidados/Modal08";

import {card01, card02, card03, card04, card05, card06, card07, card08} from "/src/cardsModals.js";


export default function Cuidados() {
    return (
        <div id="cuidados" className="min-h-[200vh] bg-gradient-to-r from-zinc-800 to-zinc-900 py-30">
            <h1 className="text-5xl max-md:text-4xl py-6 text-center text-white">Cuidados Essenciais</h1>
            <div className="grid grid-cols-3 p-12 max-lg:grid-cols-1 max-lg:space-y-12 gap-4 justify-items-center">

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={card01.img} alt="" />
                    <h2 className="tituloCardCuidados">{card01.tittle}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{card01.li01}</li>
                        <li className="liCardCuidados">{card01.li02}</li>
                        <li className="liCardCuidados">{card01.li03}</li>
                        <li className="liCardCuidados">{card01.li04}</li>
                    </ul>
                    <Modal01 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={card02.img} alt="" />
                    <h2 className="tituloCardCuidados">{card02.tittle}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{card02.li01}</li>
                        <li className="liCardCuidados">{card02.li02}</li>
                        <li className="liCardCuidados">{card02.li03}</li>
                        
                    </ul>
                    <Modal02 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={card03.img} alt="" />
                    <h2 className="tituloCardCuidados">{card03.tittle}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{card03.li01}</li>
                        <li className="liCardCuidados">{card03.li02}</li>
                        
                    </ul>
                    <Modal03 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={card04.img} alt="" />
                    <h2 className="tituloCardCuidados">{card04.tittle}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{card04.li01}</li>
                        <li className="liCardCuidados">{card04.li02}</li>
                        <li className="liCardCuidados">{card04.li03}</li>
                        <li className="liCardCuidados">{card04.li04}</li>
                    </ul>
                    <Modal04 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={card05.img} alt="" />
                    <h2 className="tituloCardCuidados">{card05.tittle}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{card05.li01}</li>
                        <li className="liCardCuidados">{card05.li02}</li>
                        
                    </ul>
                    <Modal05 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={card06.img} alt="" />
                    <h2 className="tituloCardCuidados">{card06.tittle}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{card06.li01}</li>
                        <li className="liCardCuidados">{card06.li02}</li>
                        <li className="liCardCuidados">{card06.li03}</li>
                        
                    </ul>
                    <Modal06 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={card07.img} alt="" />
                    <h2 className="tituloCardCuidados">{card07.tittle}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{card07.li01}</li>
                        <li className="liCardCuidados">{card07.li02}</li>
                        <li className="liCardCuidados">{card07.li03}</li>
                        <li className="liCardCuidados">{card07.li04}</li>
                    </ul>
                    <Modal07 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={card08.img} alt="" />
                    <h2 className="tituloCardCuidados">{card08.tittle}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{card08.li01}</li>
                        <li className="liCardCuidados">{card08.li02}</li>
                        <li className="liCardCuidados">{card08.li03}</li>

                        
                    </ul>
                    <Modal08 />
                </div>

            </div>
        </div>
    );
}
