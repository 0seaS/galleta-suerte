
import phrases from './data/phrases.json'
import Galleta from './components/Galleta'
import Autor from './components/Autor'
import { useState } from 'react'
import './App.css'

function App() {

  const rand = Math.floor(Math.random() * 16);
  const randBackGround = Math.floor(Math.random() * 4);

  console.log(rand)
  console.log(randBackGround)

  const colors = ["/fondo1.jpg", "/fondo2.jpg", "/fondo3.jpg", "/fondo4.jpg"]

  const [index, setIndex] = useState(0)


  const changeFortune = () => {
    setIndex(rand)
  }

  document.body.style = `background-image:url(${colors[randBackGround]})`

  return (
    <>
      <Galleta  data={phrases[index].phrase}/>
      <Autor data={phrases[index].author}/>

      <button className='btn-fortuna' onClick={changeFortune}>Ver otro</button>
    </>
  )
}

export default App
