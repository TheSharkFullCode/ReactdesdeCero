import { useState } from 'react'
import './App.css'
import Reyes from './components/Reyes'
import English from './components/English'

function App() {

  const [mensaje,setMensaje]=useState('Vota por tu rey favorito')

  const Sumar=(nombre,valoracion)=>{
    setMensaje(<div>
      Has votado por el rey <span className='rojo'> {nombre}</span> con una valoracion de <span className='rojo'> {valoracion} </span>
    </div>)

  }

  return (
    <>
      <h2> {mensaje}      </h2>
    <div className='container'> 
      <Reyes OnAction={Sumar} datos={{nombre:'Ervigio',vacas:2,imagen:'http://www.html6.es/img/rey_ervigio.png'}} style={{backgroundColor: 'orange'}}/>
      <Reyes OnAction={Sumar} datos={{nombre:'atanagildo',vacas:11,imagen:'http://www.html6.es/img/rey_atanagildo.png'}}  style={{backgroundColor: 'pink'}}/>
      <Reyes OnAction={Sumar} datos={{nombre:'Recesvinto',vacas:9,imagen:'http://www.html6.es/img/rey_recesvinto.png'}}  style={{backgroundColor: 'yellow'}}/>
      <Reyes OnAction={Sumar} datos={{nombre:'Ataulfo',vacas:5,imagen:'http://www.html6.es/img/rey_ataulfo.png'}}  style={{backgroundColor: 'gray'}}/>
    </div>
      <English className={'styleSheet'}></English>
    </>
  )
}

export default App
