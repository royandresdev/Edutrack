function StudentDataTable({ rows }) {
  return (
    <table className="table-fixed w-full">
      <tr>
        {rows.slice(0, 3).map((row, index) => (
          <th key={index} scope="col" className="font-bold text-left">
            {row.header}
          </th>
        ))}
      </tr>
      <tr>
        {rows.slice(0, 3).map((row, index) => (
          <td key={index} className="whitespace-nowrap pb-8">
            {row.data}
          </td>
        ))}
      </tr>
      <tr>
        {rows.slice(3).map((row, index) => (
          <th key={index} scope="col" className="font-bold text-left">
            {row.header}
          </th>
        ))}
      </tr>
      <tr>
        {rows.slice(3).map((row, index) => (
          <td key={index} className="whitespace-nowrap">
            {row.data}
          </td>
        ))}
      </tr>
    </table>
  );
}

export default StudentDataTable;
