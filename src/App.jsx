import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import FAQ from "./pages/help/FAQ";
import Contact from "./pages/help/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Route>
  ))

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App
