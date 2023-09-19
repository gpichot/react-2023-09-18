import { useState } from "react";

export function BienvenuePage() {
  let [count, setCount] = useState(0);

  return (
    <>
      <p>Bienvenue sur mon app de gestion d'utilisateurs</p>
      Compteur : {count}
      <button onClick={() => setCount(count++)}>+1</button>
    </>
  );
}
