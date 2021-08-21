import React from "react";
import "./Headers.css";

function Header () {

    return (
        <div className="header">
            <h1 className="header-text">Добавление товара</h1>
            <button className="header-button">
                <span className="button-text">По умолчанию</span>
                <img src="/images/row.svg" alt="row-down" className="button-row"/>
            </button>
        </div>
    );
}

export default Header;