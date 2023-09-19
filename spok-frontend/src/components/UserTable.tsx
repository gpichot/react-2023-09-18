import React from "react";
import trash from "../../public/trash.png";

import styles from "./UserTable.module.css";
interface User {
  firstName: string;
  lastName: string;
  email: string;
  status?: InscriptionStatus;
}

enum InscriptionStatus {
  Demande = "Demande",
  EnAttente = "EnAttente",
  Valide = "Valide",
}

const StylesStatus = {
  [InscriptionStatus.Demande]: styles.styleDemande,
  [InscriptionStatus.EnAttente]: styles.styleDemande,
  [InscriptionStatus.Valide]: styles.styleDemande,
};

interface UserTableProps {
  users: User[];
}
export function UserTable(props: UserTableProps) {
  const handleDeleteUser = (user: User) => {
    console.log("Delete user!", user);
  };
  return (
    <table
      style={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr
            key={user.email}
            className={StylesStatus[user.status || InscriptionStatus.Demande]}
          >
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <th>
              <button onClick={() => handleDeleteUser(user)}>
                <img src={trash} alt="Supprimer" width={32} height={32} />
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
