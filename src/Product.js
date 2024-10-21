import React from 'react'

// Destrutturazione migliore oggetto
// const Product = ({prezzoFinale, nome, img, prezzo, utente})
const Product = ({prezzoFinale, nome, img, prezzo, utente}) => {

  //Aggiungo una reattività al bottone con onClick
  const handleClick = () => {
    console.log("Mi hai premuto");
  };

  const paramsHandler = (prezzo) => {
    console.log(prezzo);
    
  };

  function prezzoPieno(prezzo) {
    return console.log(prezzo);
    
  }

  return (
    <article>
        <div className="card">
            <img src={img} alt={`${nome}`} onClick={handleClick}/> {/* Al click sulla foto */}
            <h6>{nome}</h6>
            <hr />
            <p>{prezzo} €</p>
            <p>{nome}</p>
            <p style={{textTransform: 'uppercase'}}>{utente}</p>
            <p className="card-time">RIAPRE PRESTO</p>
          <button onClick={()=> alert("Bottone premuto")}>{prezzoFinale} €</button>
          <button onClick={()=> alert(`${nome}`)}>{prezzoFinale} €</button>
          <button onClick={()=> paramsHandler(prezzo)}>{prezzoFinale} €</button>
          <button onClick={()=> prezzoPieno(prezzo)}>{prezzoFinale} €</button>
          {/* Se si richiama una funzione è essenziale l'arrow function ()=> altrimenti esse partiranno all'avvio della applicazione*/}
        </div>
        
    </article>
  )
}


  // Oggetto non destrutturato (props.nome ecc..)
  // return (
  //   <article>
  //       <div className="card">
  //           <img src={img} alt={`${props.nome}`} />
  //           <h6>{props.nome}</h6>
  //           <hr />
  //           <p>{props.prezzo} €</p>
  //           <p>{props.nome}</p>
  //           <p style={{textTransform: 'uppercase'}}>{props.utente}</p>
  //           <p className="card-time">RIAPRE PRESTO</p>
  //         <button>{props.prezzoFinale} €</button>
  //       </div>
        
  //   </article>
  // )


export default Product