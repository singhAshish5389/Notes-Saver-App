import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Home from "./components/home";
import Navbar from "./components/navbar";
import Paste from "./components/Paste";
import View from "./components/view";
const Router=createBrowserRouter([
 {
  path:"/",
  element:
  <div>
     <Navbar/>
      <Home/>
  </div>
 },
  {
  path:"/paste",
  element:
  <div>
      <Navbar/>
      <Paste/>
  </div>
 },
 {
   path:"/pasteId=id",
  element:
  <div>
     <Navbar/>
      <Home/>
  </div>
 },
 {
    path: "/paste/view/:id",
    element: (
      <div>
        <Navbar />
        <View />
      </div>
    ),
  },
])
function App() {

return (
  <div>
    <RouterProvider router={Router}>
       
    </RouterProvider>
  </div>
)
}

export default App
