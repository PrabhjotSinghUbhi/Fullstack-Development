import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { IoAddSharp } from 'react-icons/io5'

function App() {

  const [list, setList] = useState<{ id: string, name: string, checked: boolean }[]>()
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    fetch('http://localhost:3002/items')
      .then(resp => resp.json())
      .then(resp => {
        setList(resp)
        console.log(resp);
      })
      .catch((err) => console.log(err))
  }, [])

  const handleAddItem = () => {

    const toAdd = { id: `${Date.now()}`, name: inputValue, checked: false }

    const postOptions = {
      method: 'POST',
      header: {
        ' Content- type': 'application/json'
      },
      body: JSON.stringify(toAdd)
    }

    fetch('http://localhost:3002/items', postOptions)
      .catch(err => console.log(err))

    setList(prev => prev?.push(toAdd))
  }

  const handleDelete = (id: string) => {
    fetch(`http://localhost:3002/items/${id}`, { method: 'DELETE' })
      .catch((err) => console.log(err))
  }

  const updateChecked = (id: string) => {

    if (list != undefined) {
      // const updatedList = list.map((element: { id: string, name: string, checked: boolean }) => (
      //   element.id === id ? { ...element, checked: !element.checked } : element
      // ))

      // setList(updatedList)

      const newItem = list?.filter((element) => element.id === id)
      console.log(newItem[0]);

      const updateOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application-json'
        },
        body: JSON.stringify({ checked: !newItem[0].checked })
      }
      fetch(`http://localhost:3002/items/${id}`, updateOptions)
        .catch(err => console.log(err))
    }
  }

  return (
    <div className="font-sans bg-gray-900 min-h-screen p-8">
      <div className="max-w-md mx-auto bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="text-center mb-6 text-gray-100 tracking-wide text-2xl font-semibold">Grocery List</h2>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleAddItem()
        }} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Add grocery item..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-gray-100 text-base focus:outline-none focus:ring-2 focus:ring-green-600 placeholder-gray-400" />
          <button type="submit" className="bg-green-700 text-white rounded-lg px-5 py-2 font-medium text-base hover:bg-green-800 transition">{<IoAddSharp />}</button>
        </form>
        <ul className="list-none p-0 m-0">
          {list?.map((item: { id: string, name: string, checked: boolean }) => (
            <li id={`${item.id}`} key={item.id} className={`flex items-center justify-between py-2 border-b `}>
              <input
                type="checkbox"
                name={item.id}
                id={item.id}
                checked={item.checked}
                onChange={e => {
                  if (e.target) {
                    const liElement = e.target as HTMLElement
                    const id = String(liElement.closest('li')?.getAttribute('id'))
                    updateChecked(id)
                  }
                }}
              />
              <span className={`text-gray-200 text-base ${item.checked ? 'line-through text-gray-300' : ''}`}>{item.name}</span>
              <button
                onClick={e => {
                  if (e.target) {
                    const liElement = e.target as HTMLElement;
                    const id = String((liElement?.closest('li')?.getAttribute('id')))
                    handleDelete(id)
                  }
                }}
                className="bg-red-700 text-white rounded-md px-3 py-1 text-sm hover:bg-red-800 transition">{<FaTrash />}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
