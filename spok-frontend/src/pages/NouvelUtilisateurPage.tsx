import React from "react";
import styles from "./NouvelUtilisateurPage.module.css";
import FieldInput from "../components/FieldInput";

type UserCreatePayload = {
  firstName: string;
  lastName: string;
  email: string;
};

function checkIsFormValid({
  firstName,
  lastName,
  email,
}: UserCreatePayload): boolean {
  return (
    firstName.length >= 2 &&
    lastName.length >= 2 &&
    email.length >= 6 &&
    /\S+@\S+\.\S+/.test(email)
  );
}

export default function NouvelUtilisateurPage() {
  const [user, setUser] = React.useState<UserCreatePayload>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const isFormValid = checkIsFormValid(user);
  const change = (prop: string, value: string) => {
    const newUser = { ...user, [prop]: value };
    setUser(newUser);
  };

  return (
    <form>
      <FieldInput
        label="Prénom"
        id="firstName"
        name="firstName"
        placeholder="Marc"
        onChange={(e) => change("firstName", e.currentTarget.value)}
      />
      <FieldInput
        label="Nom"
        id="lastName"
        name="lastName"
        onChange={(e) => change("lastName", e.currentTarget.value)}
      />
      <FieldInput
        label="Email"
        type="email"
        id="email"
        name="email"
        onChange={(e) => change("email", e.currentTarget.value)}
      />
      <button type="submit" disabled={!isFormValid}>
        Créer
      </button>
    </form>
  );
}
