import AppLayout from "@/components/layout/AppLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <p>Something Wrong</p>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
