import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import { BienvenuePage } from "./pages/BienvenuePage";
import NouvelUtilisateurPage from "./pages/NouvelUtilisateurPage";

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
