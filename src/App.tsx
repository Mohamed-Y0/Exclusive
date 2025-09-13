import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";

import AppLayout from "@/components/layout/AppLayout";
import PageNotFound from "@/components/ui/PageNotFound";
import About from "@/pages/About";
import CategoryProducts from "@/pages/CategoryProducts";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import ProductDetails from "@/pages/ProductDetails";
import Cart from "@/pages/Cart";
import { store } from "@/store/store";

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
      { path: "/:category", element: <CategoryProducts /> },
      { path: "/:category/:id", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
