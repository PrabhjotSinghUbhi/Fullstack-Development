import React from "react";
import { useState } from "react";

function ColorPanel() {

  const [colored, setColor] = useState({background : "black"})

  const colors = [
    { name: "Red", value: "red", tailwind: "bg-red-500" },
    { name: "Green", value: "green", tailwind: "bg-green-500" },
    { name: "Blue", value: "blue", tailwind: "bg-blue-500" },
    { name: "Olive", value: "#808000", tailwind: "bg-[#808000]" },
    { name: "Gray", value: "#333", tailwind: "bg-gray-500" },
    { name: "Yellow", value: "yellow", tailwind: "bg-yellow-500" },
    { name: "Pink", value: "pink", tailwind: "bg-pink-500" },
    { name: "Purple", value: "purple", tailwind: "bg-purple-500" },
    { name: "Lavender", value: "#E6E6FA", tailwind: "bg-[#E6E6FA] text-black" },
    { name: "White", value: "white", tailwind: "bg-white text-black" },
    { name: "Black", value: "black", tailwind: "bg-black" }
  ];
  
  // Scale pop up animation using gsap
  

  return (
    <div className="flex justify-center min-h-screen min-w-screen text-slate-50 overflow-hidden " style = {colored}>
        <div className="flex gap-4 py-2 mt-16 justify-center text-center rounded-2xl ">
           {
            colors.map((color) => (
              <button 
                className={`active:animate-bounce w-20 text-center border px-3 py-1.5 rounded-xl ${color.tailwind} transition-transform hover:scale-130`}

                key={color.name}

                onClick={
                    () => {
                        setColor({background : color.value})
                    }
                }
               >
                {color.name}
              </button>
            ))
           }
        </div>
    </div>
  );
}

export default ColorPanel;
