import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Todoist Clone App</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
