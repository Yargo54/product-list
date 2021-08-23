import { useState } from 'react';
import './App.css';
import AddBox from './components/AddBox';
import Header from './components/Headers';
import ProductCard from './components/ProductCard';

function App() {

  const [products, setProducts] = useState([]);
  const [saveProducts, setSaveProducts] = useState([]);

  const addProduct = (nameProduct, descriptionProduct, urlProduct, priceProduct) => {
    if(nameProduct) {
      const newProduct = {
        id: Math.random().toString(36).substr(2,9),
        name: nameProduct,
        description: descriptionProduct,
        url: urlProduct,
        price: priceProduct
      }
      setProducts([...products, newProduct]);
      setSaveProducts([...products, newProduct]);
    }
  }

  const removeProduct = (id) => {
    setProducts([...products.filter((product) => product.id !== id)]);
  }

  const sortProducts = (massiv, value)=> {
    if(value === "По возрастанию цены"){
      setProducts([...massiv.sort((a, b) => Number(b.price) - Number(a.price))]);
    } else if (value === "По убыванию цены"){
      setProducts([...massiv.sort((a, b) => Number(a.price) - Number(b.price))]);
    } else if (value === "По алфавиту"){
      setProducts([...massiv.sort((a,b) => {
        if(a.name < b.name) {
          return - 1
        }
      })]);
    } else if (value==="По умолчанию"){
      massiv = saveProducts;
      setProducts([...massiv]);
    }
  }

  return (
    <>
      <Header sortProducts={sortProducts} products={products}/>
      <div className="main">
        <AddBox addProduct={addProduct}/>
        <div className="product-list">
          {products.map((product) => {
            return(
              <div>
                <ProductCard
                  product={product} 
                  key={product.id}
                  removeProduct={removeProduct}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;