import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router'

function App() {
  return (
    <>
      <header>header</header>
      <RouterProvider router={router} />
      <footer>footer</footer>
    </>
  )
}

export default App
