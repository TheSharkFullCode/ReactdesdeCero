import React, { useEffect, useState } from 'react'

export default function Reyes({datos,OnAction,style}) {
    const {nombre,vacas,imagen}= datos;
    const [Valoracion,setValoracion]=useState(0);

    const Votar=()=>{

        setValoracion(Valoracion+1);

       
    }

    useEffect(()=>{
      OnAction(nombre,Valoracion)
    },[Valoracion])

  return (
    <>
    <div className='cadaRey' style={style}>
        <h1>    {nombre}   </h1>
        <div className='menu'>     come {vacas} vacas al dia.     </div>
        <div>       <img src={imagen} alt={nombre} />    </div>

        <div className='cajaVotacion'>
            <button onClick={Votar}>Votame </button>
            <div className='votacion'> {Valoracion} </div>
        
        </div>
    </div>
    </>
  )
}

// dato importante aqui a tener en cuenta es que; el contador valoracion que esta controlado por un useState, los datos que se actualizan quiero mandralo al padre , por tanto lo que hare es que en el padre me inventare una funcion que recoja los click daodos en la funcion valoracion.

// A la hora de acceder a reyes le envio las propiedades y tambien una function. onAction 