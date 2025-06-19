import styles from "./styles.module.css";

type TypeCommandButton ={
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function CommandButton({icon, color, ...props}: TypeCommandButton){

  return (
    <>
      <button className={`${styles.button} ${styles[color || 'green']}`} {...props}>
        {icon}
      </button>
    </>
  );
}