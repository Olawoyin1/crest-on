import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.css";
import Loader from "./components/Loader";
import { Toaster } from "sonner";
import FloatingWhatsApp from "./components/FloatingWhatsapp";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Agents = lazy(() => import("./pages/Agents"));
// const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const SharedLayout = lazy(() => import("./components/SharedLayout"));

const main = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<Loader />}>
          <SharedLayout />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />

      
      <Route
        path="/product/:id"
        element={
          <Suspense fallback={<Loader />}>
            <Agents />
          </Suspense>
        }
      />
     
      <Route
        path="about"
        element={
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="services"
        element={
          <Suspense fallback={<Loader />}>
            <Services />
          </Suspense>
        }
      />

      {/* <Route
        path="contact"
        element={
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        }
      /> */}


     
      




      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <ErrorPage />
          </Suspense>
        }
      />
    </Route>
  )
);

function App() {
 return (
        <>
        <Toaster position="top-right" expand={false} richColors />
        <RouterProvider router={main} />
        <FloatingWhatsApp />
    </>
  );
}

export default App;

