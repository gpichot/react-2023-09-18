import { UserTable } from "../components/UserTable";

const users = [
  { firstName: "John", lastName: "Doe", email: "john.doe@example.com" },
  { firstName: "Jane", lastName: "Doe", email: "jane.doe@example.com" },
  { firstName: "Jack", lastName: "Doe", email: "Jack.doe@example.com" },
];

export default function UserListPage() {
  return (
    <>
      <h1>Liste des utilisateurs</h1>
      <UserTable users={users} />
    </>
  );
}
