import React from 'react'
import G_img from './public/realGhibliPrince.png'

export default function Card({name = "Prabhjot Singh", img = G_img}) {

  return (
    <div className = " flex justify-center items-center mt-12">
      <div className='border-8 w-fit rounded-4xl bg-amber-500'>
      <div className = "m-5 border-8 p-2.5 text-center rounded-4xl bg-amber-200">
          <img src={img} alt="Hello" className = 'object-contain rounded-4xl max-h-[300px] mb-2 w-fit mx-auto border-8 border-amber-700' />
          <span className='text-4xl font-extrabold mb-3'>
            {/* {name ||"Prabhjot Singh"} */}
            {name}
          </span>
          <div className='text-left font-semibold'>
            <br />Lorem ipsum dolor sit amet <br /> consectetur adipisicing el it. Omnis consequuntur, <br />cumque incidunt totam mollitia itaque quam. <br />Iure laboriosam at brobcaecati veritatis quibusdam <br />vel eius possimus sapiente. <br /> Voluptatem molestiae beatae ut?
          </div>
      </div>  
      </div>
      
    </div>
  )
}
