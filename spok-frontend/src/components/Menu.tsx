import { MenuItem } from "./MenuItem";

const programme = [
  { titre: "React", horaire: "14h" },
  { titre: "Components", horaire: "15h" },
  { titre: "JSX", horaire: "16h" },
  { titre: "Hooks", horaire: "17h" },
];

export function Menu() {
  return (
    <ul>
      {programme.map((item, index) => {
        return (
          <MenuItem key={item.titre} horaire={item.horaire}>
            {item.titre} <i>({index})</i>
          </MenuItem>
        );
      })}
    </ul>
  );
}
