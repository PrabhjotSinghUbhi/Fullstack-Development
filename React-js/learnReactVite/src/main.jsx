import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App'

//! This will not work as react requires a special syntax
// const reactElement = {
//   type: "a",
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: "click me to visit google"
// }

//! this will work because this is made according to react.
const myOwnElement = React.createElement(
  'a',
  {href : "https://google.com", target : "_black"},
  "This is google"
)

createRoot(document.getElementById('root')).render(
  // <div>
  //   <h1>Hello world my name is Prince</h1>
  // </div>
  myOwnElement
  // reactElement 


)

