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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Listings from "./pages/Listings";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
import Agents from "./pages/Agents";
import { Toaster } from 'sonner';


function App() {
  
  
  const main = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
  
          <Route path="*" element={<ErrorPage />} />
  
          <Route path="/listings" element={<Listings />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="services" element={<Services />} />
        </Route>
        )
      )
      return (
        <>
        <Toaster position="top-right" expand={false} richColors />
    <RouterProvider router={main} />
        <FloatingWhatsApp />
    </>
  );
}

export default App;
