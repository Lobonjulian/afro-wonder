import styles from "./Heading.module.css";

export default function Heading({
  children,
  level = 3,
  className = "",
  ...props
}) {
  const Tag = `h${level}`;

  return (
    <Tag
      className={`${styles.heading} ${styles[`h${level}`]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
