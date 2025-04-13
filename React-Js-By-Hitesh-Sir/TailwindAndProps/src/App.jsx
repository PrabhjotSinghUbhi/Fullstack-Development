import Card from './Card'
// import ghibliPrince from "./public/cartoonPrince.png"
import pp from './public/profile pick.jpg'
import mainDP from './public/main_DP.jpg'

function App() {
  return (
    <div className='flex gap-8 justify-center'>
         <Card img = {pp} name = "Prince"  />
         <Card name = "Prabh Ramgharia" img={mainDP} />
         <Card/>
    </div>
  )
}

export default App
