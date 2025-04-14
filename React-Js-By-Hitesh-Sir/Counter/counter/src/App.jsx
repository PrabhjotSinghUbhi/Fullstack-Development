import { useState } from "react"; 

function App() {

  // use of useState() hook
  let [count, setCount] = useState(0)

  const addValue = () => {
    console.log("clicked", count);
    
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
    setCount(count +=  1)
  }

  const reduceValue = () => {
    console.log("clicked", count);

    if(count > 0) setCount(count -= 1)

    
  }

  return(
    <div className="bg-black text-slate-50 min-w-screen min-h-screen flex items-center pt-32 flex-col" >

      <div className="text-5xl font-bold m-10">
              Prabhjot Singh's Counter 
      </div>

      <div className="items-center flex flex-col">
  
        <button 
            className=" h-12 p-4 flex items-center border w-fit rounded-lg m-5 active:bg-amber-500 font-bold active:text-black bg-green-600" onClick={addValue} id="btn" >
            Increment
        </button>

        <button 
            className=" h-12 p-4 flex items-center border w-fit rounded-lg bg-red-900 text-white m-5 active:bg-amber-500 font-bold active:text-black" onClick={reduceValue} id="btn" >
            Decrement
        </button>


        <div 
            className="flex justify-center items-center text-4xl p-10 h-12 border w-fit rounded-lg mt-5 active:bg-amber-500 font-bold active:text-black" id="btn" >
            counter <span className="ml-3 text-red-200">
                {count}
            </span>
        </div>

      </div>

  </div>
  );
}

export default App
