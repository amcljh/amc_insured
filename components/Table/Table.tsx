import { TableProps } from "./type";

/**
 * Table component is a wrapper for the table component.
 * It is a table element that can be used to display data in a grid.
 */
const Table = ({
  className,
  columns,
  rows,
  style,
  ...props
}: TableProps) => {
  return (
    <table className={className} style={style} {...props}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join(',')}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;