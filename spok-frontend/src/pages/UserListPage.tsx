import { useState } from "react";
import { UserTable } from "../components/UserTable";
import useUsersListQuery from "../query-hooks/useUsersListQuery";

export default function UserListPage() {
  const [page, setPage] = useState(1);
  const usersQuery = useUsersListQuery({ page });

  if (usersQuery.isLoading) {
    return <div>Patiente un peu, ça charge !</div>;
  }

  if (usersQuery.isError) {
    return <div>Tant pis pour toi, il y a une erreur!</div>;
  }

  const { users, count, limit } = usersQuery.data;

  return (
    <>
      <h1>Liste des utilisateurs (total: {count})</h1>
      <UserTable users={users} />
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Page précédente
      </button>
      Page {page}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page * limit >= count}
      >
        Page suivante
      </button>
    </>
  );
}
