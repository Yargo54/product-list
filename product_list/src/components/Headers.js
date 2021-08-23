import React from "react";
import "./Headers.css";

function Header ({sortProducts, products}) {

    return (
        <div className="header">
            <h1 className="header-text">Добавление товара</h1>
            <select id="select" className="header-button" onClick={() => {sortProducts(products, document.getElementById("select").value)}}>
                <option value="По умолчанию">По умолчанию</option>
                <option value="По возрастанию цены">По возрастанию цены</option>
                <option value="По убыванию цены">По убыванию цены</option>
                <option value="По алфавиту">По алфавиту</option>
            </select>
        </div>
    );
}

export default Header;