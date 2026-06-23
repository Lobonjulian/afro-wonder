import styles from "./Input.module.css";

function Input({
  label,
  error,
  className,
  classNameLabel,
  type = "text",
  required,
  ...props
}) {
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label
          htmlFor={props.id}
          className={`${classNameLabel} ${styles.inputLabel}`}
        >
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type={type}
        {...props}
        className={`${className} ${styles.input} ${error ? styles.errorInput : ""}`}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
