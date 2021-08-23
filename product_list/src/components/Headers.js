import React from "react";
import "./Headers.css";

function Header ({sortProducts, products}) {

    return (
        <div className="header">
            <h1 className="header-text">Добавление товара</h1>
            <select id="select" className="header-button" onClick={() => {sortProducts(products, document.getElementById("select").value)}}>
                <option className="button-text" value="По умолчанию">По умолчанию</option>
                <option className="button-text" value="По возрастанию цены">По возрастанию цены</option>
                <option className="button-text" value="По убыванию цены">По убыванию цены</option>
                <option className="button-text" value="По алфавиту">По алфавиту</option>
                <img src="/images/row.svg" alt="row-down" className="button-row"/>
            </select>
        </div>
    );
}

export default Header;