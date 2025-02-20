import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Create } from "./Create";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Create />,
  },
]);

function App() {
  return (
    <div className="">
      <>
        <RouterProvider router={appRouter} />
      </>
    </div>
  );
}

export default App;
