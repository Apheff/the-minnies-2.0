import Logo from '../assets/logo.svg';
import Gioca from '../assets/gioca.png';
import ShoppingBag from '../assets/shopping-bag.svg';

function Navbar()
{
    return(
    <nav class="fixed p-8 pr-14 w-screen z-50">
            <ul class="flex justify-between">
                {/*  logo  */}

                <li class="hover:translate-y-1">
                    <a href="/">
                        <img src={Logo} alt="Minnies logo" />
                    </a>
                </li>

                {/*  gioca  */}

                <li class = "hover:translate-y-1 justify-between">
                    <a href="https://www.challengermode.com/s/TheMinnies">
                        <img src={Gioca} alt="Challenger Mode" />
                    </a>
                </li>

                {/*  connetti wallet  */}

                <li class="hover:translate-y-1">
                    <a href="/wallet">
                        <img src={ShoppingBag} alt="Connetti Wallet" />
                    </a>
                </li>
                
            </ul>
        </nav>
    );  
}

export default Navbar;