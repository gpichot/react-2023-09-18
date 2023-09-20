import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  Navigate,
} from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import { BienvenuePage } from "./pages/BienvenuePage";
import NouvelUtilisateurPage from "./pages/NouvelUtilisateurPage";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Root() {
  return (
    <>
      <h1>SpokApp</h1>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          margin: "1rem",
        }}
      >
        <Link to="/">Accueil</Link>
        <Link to="/users">Utilisateurs</Link>
        <Link to="/users/form">Créer un utilisateur</Link>
      </nav>
      <Outlet />
    </>
  );
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const [token, setToken] = React.useState(() => {
    return window.localStorage.getItem("token");
  });
  void setToken;

  if (token !== "adminToken") {
    return <Navigate to="/" />;
  }
  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <BienvenuePage />,
      },
      {
        path: "/users",
        element: <UserListPage />,
      },
      {
        path: "/users/form",
        element: <NouvelUtilisateurPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
