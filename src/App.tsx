import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { lazy } from "react";
import Error from "@/components/ui/Error";

import AppLayout from "@/components/layout/AppLayout";
import PrivateAdminRoutes from "@/components/PrivateAdminRoutes";
import PrivateUserRoutes from "@/components/PrivateUserRoutes";
import PaymentSettings from "@/components/profile/PaymentSettings";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const CategoryProducts = lazy(() => import("./pages/CategoryProducts"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Profile = lazy(() => import("@/pages/Profile"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const MyInfo = lazy(() => import("@/components/profile/MyInfo"));
const ChangePassword = lazy(
  () => import("@/components/profile/ChangePassword"),
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/sign-in", element: <SignInPage /> },

      {
        path: "/dashboard",
        element: (
          <PrivateAdminRoutes>
            <Dashboard />
          </PrivateAdminRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateUserRoutes>
            <Profile />
          </PrivateUserRoutes>
        ),
        children: [
          {
            index: true,
            element: <MyInfo />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
          {
            path: "PaymentSettings",
            element: <PaymentSettings />,
          },
        ],
      },

      { path: "/cart", element: <Cart /> },

      { path: "/products/:category/:id", element: <ProductDetails /> },
      { path: "/products/:category", element: <CategoryProducts /> },
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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
