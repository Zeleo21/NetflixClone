import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage.tsx";
import Home from "./Pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage></WelcomePage>
  },
  {
    path: "/home",
    element: <Home></Home>
  }
]);

function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  )
}

export default App
