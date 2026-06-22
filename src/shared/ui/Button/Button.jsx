import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "Primary",
  className = "",
  type = "button",
  as = "button",
  disabled = false,
  ...props
}) {
  const Component = as;
  return (
    <Component
      type={type}
      className={`${className} ${styles.btn} ${styles[`btn${variant}`]} `}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
}
