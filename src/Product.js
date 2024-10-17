import React from 'react'

// Destrutturazione migliore oggetto
// const Product = ({prezzoFinale, nome, img, prezzo, utente})
const Product = (props) => {

 // Destrutturazione oggetto (non serve mettere props. davanti al dato che mi serve stampare)
 const {prezzoFinale, nome, img, prezzo, utente} = props;
  return (
    <article>
        <div className="card">
            <img src={img} alt={`${nome}`} />
            <h6>{nome}</h6>
            <hr />
            <p>{prezzo} €</p>
            <p>{nome}</p>
            <p style={{textTransform: 'uppercase'}}>{utente}</p>
            <p className="card-time">RIAPRE PRESTO</p>
          <button>{prezzoFinale} €</button>
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