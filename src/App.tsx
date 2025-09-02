import AppLayout from "@/components/layout/AppLayout";
import PageNotFound from "@/components/ui/PageNotFound";
import About from "@/pages/About";
import CategoryProducts from "@/pages/CategoryProducts";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import ProductsType from "@/pages/ProductsType";
// import Products from "@/pages/Products";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <p>Something Wrong</p>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/sign-up", element: <SignUpPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      // { path: "/products/:category", element: <Products /> },
      { path: "/products/:category", element: <CategoryProducts /> },
      { path: "/products/:category/:type", element: <ProductsType /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
