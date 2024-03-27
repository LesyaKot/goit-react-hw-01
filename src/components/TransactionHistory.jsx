export default function TransactionHistory({ items }) {
  return (
    <table className="table-wrapper">
      <thead className="table-head-wrap">
        <tr className="table-head-list">
          <th className="table-head-list-item">Type</th>
          <th className="table-head-list-item">Amount</th>
          <th className="table-head-list-item">Currency</th>
        </tr>
      </thead>

      <tbody className="table-body-wrap">
        {items.map((item) => (
          <tr key={item.id} className="table-items-list">
            <td className="table-items-list-item">{item.type}</td>
            <td className="table-items-list-item">{item.amount}</td>
            <td className="table-items-list-item">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
