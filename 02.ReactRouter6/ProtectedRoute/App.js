import React from "react"
import ReactDOM from "react-dom/client"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import AuthRequired from "./AuthRequired"

import Layout from "./Layout"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<h1>Home page</h1>} />

    {/* Wrap with Layout Route (AuthRequired) */}
    <Route element={<AuthRequired />}>
        <Route path="protected" element={<h1>Super secret info here</h1>} />
    </Route>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)