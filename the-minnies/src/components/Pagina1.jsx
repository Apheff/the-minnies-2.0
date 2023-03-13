import Minniesalta from '../assets/minnie-salta.svg';
import './Pagina1.css';

function Pagina1()
{
    return(
        <div class="snap-start h-screen w-screen">
            <div class="block relative top-16 lg:flex">
                <div class="p-20 pb-0 md:pt-32 lg:py-64 lg:w-1/2">

                    <h1 class="text-sm md:text-5xl text-white md:font-black leading-normal">MINNIES</h1>

                        <p class="text-xs md:text-lg text-white mt-5 md:font-black">
                            I Minnies sono una collezione web3 di cupcakes con dettagli unici disegnati a mano, arte dolce e adorabile.
                            I Minnies sono stati creati per tutti gli amanti dei cupcake che sono interessati ai giochi, alle criptovalute e all'intrattenimento!
                            L'obiettivo del progetto è quello di creare una forte comunità di giocatori: ospiteremo alcuni grandi tornei sui giochi più amati
                            e conosciuti con premi e regali! Ti unirai a noi dal lato dolce del gioco?
                        </p>
                        <p>
                            <a class="text-[#FFD4E1] hover:text-[#FF89AC] hover:translate-x-1" href="https://my.spline.design/untitled-fc13554e6ede504363d007cc77962cc3/">
                                cliccami!
                            </a>
                        </p>
                </div>

                    {/* foto del minnie che salta  */}

                <img src={Minniesalta} alt="Minnie che salta" class="relative -top-5 m-auto p-10 w-1/2 md:w-1/3 lg:w-2/5 hover:translate-x-4 hover:translate-y-4 duration-500"/>
            </div>
        </div>
    );
}

export default Pagina1;