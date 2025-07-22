import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  // Example jokes array
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get(`/jokes`)
      .then((resp) => {
        setJokes(resp.data.jokes);
        console.log(resp.data.jokes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-gray-800">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Jokes
        </h1>
        <div className="flex flex-col gap-4">
          {jokes.map((joke) => (
            <div
              key={joke.id}
              className="bg-gray-700 text-white p-4 rounded-lg shadow"
            >
              {joke.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
