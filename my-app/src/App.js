import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h1>Hello worled</h1>
      <Product 
      name = 'Amazon Echo' 
      description = 'your AI Assistant' 
      price = {59.99}/>
      <Product 
      name = 'google bro' 
      description = 'your rpo Assistant' 
      price = {29.99}/>
      <Product 
      name = 'Amazon go go go' 
      description = 'your ssome Assistant' 
      price = {159.99}/>
    </div>
  );
}

export default App;
