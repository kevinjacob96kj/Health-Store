import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "product1", price: 100.0 },
    { name: "product2", price: 150.0 },
  ]);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      { name: "product" + (prevState.length + 1), price: 300.0 },
    ]);
  };

  return (
    <>
      <h2>Hello, Vite + React!</h2>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </>
  );
}

export default App;
