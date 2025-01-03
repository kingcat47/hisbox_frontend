import styles from "./styles.module.scss";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  text?: string;
}

export const ButtonComponent = ({ className, onClick, text }: ButtonProps) => {
  return (
    <>
      <div
        className={[styles.container, className].join(" ")}
        onClick={onClick}
      >
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
};
