import React from "react";
import "./AddBox.css"

function AddBox () {
    return (
        <div className="add-div">
            <form className="add-form">
                <label className="name-label">
                    <span className="text-label">
                        Наименование товара <span className="required-dot">•</span>   
                    </span>
                    <input placeholder="Введите наименование товара" type="text" required/>
                </label>
                <label className="description-label">
                    <span className="text-label">Описание товара</span>
                    <textarea className="description-textarea" rows="5" cols="30" placeholder="Введите описание товара"></textarea>
                </label>
                <label className="url-label">
                    <span className="text-label">
                        Ссылка на изображение товара <span className="required-dot">•</span>   
                    </span>
                    <input type="text" placeholder="Введите ссылку" required/>
                </label>
                <label className="price-label">
                    <span className="text-label">
                        Цена товара <span className="required-dot">•</span>   
                    </span>
                    <input type="text" placeholder="Введите цену" required/>
                </label>
                <button className="add-button">Добавить товар</button>
            </form>
        </div>
    );
}

export default AddBox;