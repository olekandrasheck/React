import styles from "./wrapperItem.module.scss";

interface IFormItem {
  children: JSX.Element;
  label: string;
  error?: string;
}

export const ItemWrapper: React.FC<IFormItem> = ({
  children,
  label,
  error,
}) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper-item"]}>
        <label className={styles["label"]}>{label}</label>
        {children}
      </div>
      {error && <p className={styles["error"]}>{error}</p>}
    </div>
  );
};
