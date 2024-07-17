import "./Header.scss";
import React, { Fragment } from "react";
import Logo from "../../../assets/header/logo.svg";

const Header = () => {
    return (
        <Fragment>
            <header className="header">
                <div className="container header__container">
                    <ul className="header__container__list">
                        <li>
                            <a href="#">Demos</a>
                        </li>
                        <li>
                            <a href="#">Pages</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                    <div className="header__container__logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="header__container__action">
                        <p>+ Submit New Job</p>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
