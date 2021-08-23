import React, { useState } from "react";
import "./AddBox.css"

function AddBox ({ addProduct }) {

    const [nameProduct, setNameProduct] = useState('');
    const [descriptionProduct, setDescriptionProduct] = useState('');
    const [urlProduct, setUrlProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState('');

    const handleChangeName = (e) => {
        setNameProduct(e.currentTarget.value);
        setStatus1(false);
    }
    const handleChangeDescription = (e) => {
        setDescriptionProduct(e.currentTarget.value);
    }
    const handleChangeUrlProduct = (e) => {
        setUrlProduct(e.currentTarget.value);
        setStatus2(false);
    }
    const handleChangePrice = (e) => {
        setPriceProduct(e.currentTarget.value);
        setStatus3(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(nameProduct, descriptionProduct, urlProduct, priceProduct);
        setNameProduct('');
        setDescriptionProduct('');
        setUrlProduct('');
        setPriceProduct('');
    }

    const [status1, setStatus1] = useState(false);
    const onClickInput1 = () => {
        setStatus1(true);
        setStatus2(false);
        setStatus3(false);
    }

    const [status2, setStatus2] = useState(false);
    const onClickInput2 = () => {
        setStatus1(false);
        setStatus2(true);
        setStatus3(false);

    }

    const [status3, setStatus3] = useState(false);
    const onClickInput3 = () => {
        setStatus1(false);
        setStatus2(false);
        setStatus3(true);
    }

    const onClickTexarea = () =>{
        setStatus1(false);
        setStatus2(false);
        setStatus3(false);
    }

    return (
        <div className="add-div">
            <form className="add-form" onSubmit={handleSubmit}>
                <label className="name-label">
                    <span className="text-label">
                        Наименование товара <span className="required-dot">•</span>   
                    </span>
                    <input 
                        value={nameProduct}
                        onChange={handleChangeName}
                        placeholder="Введите наименование товара" 
                        type="text" 
                        required
                        onClick={onClickInput1}
                    />
                    <span className={status1 === false ? "warning-message" : 'visible'}>Поле является обязательным</span>
                </label>
                <label className="description-label">
                    <span className="text-label">Описание товара</span>
                    <textarea 
                        className="description-textarea" 
                        rows="5" 
                        cols="30" 
                        placeholder="Введите описание товара"
                        value={descriptionProduct}
                        onChange={handleChangeDescription}
                        onClick={onClickTexarea}>
                    </textarea>
                </label>
                <label className="url-label">
                    <span className="text-label">
                        Ссылка на изображение товара <span className="required-dot">•</span>   
                    </span>
                    <input 
                        type="text" 
                        placeholder="Введите ссылку" 
                        required
                        value={urlProduct}
                        onChange={handleChangeUrlProduct}
                        onClick={onClickInput2}
                    />
                    <span className={status2 === false ? "warning-message" : 'visible'}>Поле является обязательным</span>
                </label>
                <label className="price-label">
                    <span className="text-label">
                        Цена товара <span className="required-dot">•</span>   
                    </span>
                    <input 
                        type="number" 
                        placeholder="Введите цену" 
                        required
                        value={priceProduct}
                        onChange={handleChangePrice}
                        onClick={onClickInput3}
                    />
                    <span className={status3 === false ? "warning-message" : 'visible'}>Поле является обязательным</span>
                </label>
                <button className={nameProduct && urlProduct && priceProduct ? "add-button-active" : "add-button"}>Добавить товар</button>
            </form>
        </div>
    );
}

export default AddBox;