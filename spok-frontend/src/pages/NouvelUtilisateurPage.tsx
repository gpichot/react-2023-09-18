import styles from "./NouvelUtilisateurPage.module.css";

export default function NouvelUtilisateurPage() {
  return (
    <form>
      <div className={styles.formControl}>
        <label htmlFor="firstName">Prénom</label>
        <input type="text" id="firstName" name="firstName" />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="lastName">Nom</label>
        <input type="text" id="lastName" name="lastName" />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <button type="submit">Créer</button>
    </form>
  );
}
