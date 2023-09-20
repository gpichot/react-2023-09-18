import styles from "./NouvelUtilisateurPage.module.css";
import FieldInput from "../components/FieldInput";
import Button from "../components/Button";
import useUserForm from "../hooks/useUserForm";
import { useQuery } from "@tanstack/react-query";

export default function NouvelUtilisateurPage() {
  const { change, isFormValid } = useUserForm();
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
      <Button
        type="submit"
        disabled={!isFormValid}
        className={styles.buttonFormulaire}
      >
        Créer
      </Button>
    </form>
  );
}
