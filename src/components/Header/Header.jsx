import logo from '../../assets/icon-page.svg';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__container-icon">
                    <img className="header__icon" src={logo} alt="Around the U.S logo" />
                </div>
            </div>
        </header>
    )
};

export { Header }