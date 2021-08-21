import './App.css';
import AddBox from './components/AddBox';
import Header from './components/Headers';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <AddBox />
        <ProductList />
      </div>
    </div>
  );
}

export default App;