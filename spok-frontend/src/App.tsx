import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import { BienvenuePage } from "./pages/BienvenuePage";
import NouvelUtilisateurPage from "./pages/NouvelUtilisateurPage";

function Root() {
  return (
    <>
      <h1>SpokApp</h1>
      <nav>
        <a href="/">Accueil</a>
        <a href="/users">Utilisateurs</a>
        <a href="/users/form">Créer un utilisateur</a>
      </nav>
      <Outlet />
    </>
  );
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
