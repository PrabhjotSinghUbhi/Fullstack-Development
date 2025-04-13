import { useState } from "react"; 

function App() {

  let [count, setCount] = useState(0)

  const addValue = () => {
    console.log("clicked", count);
    
    setCount(count = count + 1)
  }

  return(
    <div className="bg-black text-slate-50 min-w-screen min-h-screen flex items-center pt-32 flex-col" >

      <div className="text-5xl font-bold m-10">
              Prabhjot Singh's Counter 
      </div>

      <div>
  
        <button 
            className=" h-12 p-2 border w-fit rounded-lg m-5 active:bg-amber-500 font-bold active:text-black" onClick={addValue} id="btn" >
            counter <span className="ml-3 text-red-200">
                {count}
            </span>
        </button>


        <button 
            className=" h-12 p-2 border w-fit rounded-lg m-5 active:bg-amber-500 font-bold active:text-black" onClick={addValue} id="btn" >
            counter <span className="ml-3 text-red-200">
                {count}
            </span>
        </button>


        <button 
            className=" h-12 p-2 border w-fit rounded-lg m-5 active:bg-amber-500 font-bold active:text-black" onClick={addValue} id="btn" >
            counter <span className="ml-3 text-red-200">
                {count}
            </span>
        </button>

      </div>

  </div>
  );
}

export default App
