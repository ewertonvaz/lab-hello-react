import ironLogo from '../images/ironhack-logo-xs.png';
import menuImg from '../images/menu-top-xs.png';

function Hero(){
    return(
        <div className="hero">
            <nav>
                <img src={ironLogo} alt="Logotipo IronHack sem fundo" />
                <img src={menuImg} alt="Imem de menu de opções" />
            </nav>
            <div>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer. </p>
                <button>Awesome!</button>
            </div>
        </div>
    );
}

export default Hero;