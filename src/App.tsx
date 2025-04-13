import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SharedLayout from "./components/SharedLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  
  
  const main = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
  
          <Route path="*" element={<ErrorPage />} />
  
          <Route path="services" element={<Services />} />
        </Route>
        )
      )
  return (
    <RouterProvider router={main} />
  );
}

export default App;
