import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard, { dashboardLoader } from "./pages/Dashboard";


const router = createBrowserRouter([
  //can also be defined as elements: search doc 'createRoutesFromElements'
  {
    path: "/",
    element: <h1>Dashboard</h1>,
    loader: dashboardLoader
  },
  {
    path: "/about",
    element: <h1>About</h1>
  },
]);

function App() {
  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  )
}

export default App
