import styles from "./FieldInput.module.css";

export interface FieldInputProps
  extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}

export default function FieldInput(props: FieldInputProps) {
  const { id, label, ...inputProps } = props;
  return (
    <div className={styles.formControl}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...inputProps} />
    </div>
  );
}
