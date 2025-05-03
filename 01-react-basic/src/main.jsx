import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me'
// }

// function ReactElement() {
//   return reactElement;
// }

const anotherElement = (
  <a href="https://google.com">Click me</a>
)

const anotherElement1= React.createElement(
  'a', {
    href: "https://google.com"
  },
'click me')

createRoot(document.getElementById('root')).render(
  anotherElement
)
