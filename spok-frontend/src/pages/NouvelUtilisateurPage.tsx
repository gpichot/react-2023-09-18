import styles from "./NouvelUtilisateurPage.module.css";
import FieldInput from "../components/FieldInput";
import Button from "../components/Button";
import useCreateUserMutation from "../query-hooks/useCreateUserMutation";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NouvelUtilisateurPage() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  // const { change, isFormValid, user } = useUserForm();
  const navigate = useNavigate();

  const createUserMutation = useCreateUserMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = { firstName, lastName, email };
    createUserMutation.mutate(user, {
      onSuccess: () => {
        navigate("/users");
      },
    });
  };
  console.log(createUserMutation.isLoading);

  return (
    <form onSubmit={handleSubmit}>
      <FieldInput
        label="Prénom"
        id="firstName"
        name="firstName"
        placeholder="Marc"
        onChange={(e) => setFirstName(e.currentTarget.value)}
      />
      <FieldInput
        label="Nom"
        id="lastName"
        name="lastName"
        onChange={(e) => setLastName(e.currentTarget.value)}
      />
      <FieldInput
        label="Email"
        type="email"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <Button type="submit" className={styles.buttonFormulaire}>
        Créer
      </Button>
    </form>
  );
}
