import Product from "./Product";
import products from "./products";



function App() {
  return (
    <div className="App">
      <h1>La mia prima Card</h1>
      {/* Per stampare in maniera dinamica tutte le card nell'array eseguo un map dell'array */}
      {
        products.map( product => {
          // console.log(product);
          // Aggiunto valore identificativo chiamato key, ovvero l'id di solito presente in un array di oggetti
          return <Product key={product.id} {...product} />
        })
      }
    </div>
  );
}

export default App;
