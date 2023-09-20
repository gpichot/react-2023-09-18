import { UserTable } from "../components/UserTable";
import useUsersListQuery from "../query-hooks/useUsersListQuery";

export default function UserListPage() {
  const page = 1;
  const usersQuery = useUsersListQuery({ page });

  if (usersQuery.isLoading) {
    return <div>Patiente un peu, ça charge !</div>;
  }

  if (usersQuery.isError) {
    return <div>Tant pis pour toi, il y a une erreur!</div>;
  }

  const { users, count } = usersQuery.data;

  return (
    <>
      <h1>Liste des utilisateurs (total: {count})</h1>
      <UserTable users={users} />
    </>
  );
}
