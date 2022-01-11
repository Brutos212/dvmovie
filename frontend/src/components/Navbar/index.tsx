import {ReactComponent as Git} from "assets/img/github.svg";
import './styles.css';

function Navbar() {
    return (
        <header>
            
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1 className="">DvMovie</h1>
                    <a href="https://github.com/brutos212/dvmovie">
                        <div className="dsmovie-contact-container">
                            <Git />
                            <p className="dsmovie-contact-link">Dvmovie</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;