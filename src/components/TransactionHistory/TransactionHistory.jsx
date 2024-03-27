import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles["table-wrapper"]}>
      <thead className={styles["table-head-wrap"]}>
        <tr className={styles["table-head-list"]}>
          <th className={styles["table-head-list-item"]}>Type</th>
          <th className={styles["table-head-list-item"]}>Amount</th>
          <th className={styles["table-head-list-item"]}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles["table-body-wrap"]}>
        {items.map((item) => (
          <tr key={item.id} className={styles["table-items-list"]}>
            <td className={styles["table-items-list-item"]}>{item.type}</td>
            <td className={styles["table-items-list-item"]}>{item.amount}</td>
            <td className={styles["table-items-list-item"]}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
