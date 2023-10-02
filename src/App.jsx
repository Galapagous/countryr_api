import Home from './pages/Home/Home'
import './style.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Single from './pages/SinglePage/Single';

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
  return(
  <div className='theme-dark'>
    <RouterProvider router={router} />
  </div>)
}
export default App
