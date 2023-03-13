import Discord from "../assets/discord.svg";
import Opensea from "../assets/opensea.svg";
import Twitch from "../assets/twitch.svg";


function Socials()
{
    return(
            <ul class="flex justify-between fixed bottom-10 w-full px-2 xl:block xl:top-44 xl:right-10 xl:w-auto z-50 max-h-10">

                {/*  opensea  */}

                <li class="xl:mt-64">
                    <a href="">
                        <img src={Opensea} alt="Opensea" />
                    </a>
                </li>

                {/* discord  */}

                <li class="xl:my-10">
                    <a href="">
                        <img src={Discord} alt="Discord" />
                    </a>
                </li>

                {/*  twtich  */}

                <li class="xl:my-10">
                    <a href="">
                        <img src={Twitch} alt="Twitch" />
                    </a>
                </li>
            </ul>
    );
}

export default Socials;