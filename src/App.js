import Product from "./Product";

const primaCard = {
  nome: "Asciugamano",
  img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f14712.jpg",
  prezzo: 2.16,
  prezzoFinale: 1.90,
  utente: "Leo787",
}
const secondaCard = {
  nome: "Cuccia Gatti",
  img: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f20099.jpg",
  prezzo: 12.16,
  prezzoFinale: 11,
  utente: "Bamby000",
}

function App() {
  return (
    <div className="App">
      <h1>La mia prima Card</h1>
      {/* <Product nome="mario" zona="rossa" /> */}
      <Product {...primaCard}/> {/* Spread operator (versione corta del passaggio qui sotto) */}
      {/* <Product 
      nome={primaCard.nome} 
      prezzo={primaCard.prezzo} 
      prezzoFinale={primaCard.prezzoFinale} 
      img={primaCard.img} 
      utente={primaCard.utente}/> */}
      <Product {...secondaCard}/>
    </div>
  );
}

export default App;
