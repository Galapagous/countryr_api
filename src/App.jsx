import Home from './pages/Home/Home'
import './style.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Single from './pages/SinglePage/Single';
import { themeContext } from './themeContext/themeContext';
import {useState} from 'react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/single/:name",
    element: <Single/>,
  },
]);
const App = ()=>{
  const [theme, setTheme] = useState("dark")
  return(
  <themeContext.Provider value={{theme, setTheme}}>
    <RouterProvider router={router} />
  </themeContext.Provider>
)}
export default App
