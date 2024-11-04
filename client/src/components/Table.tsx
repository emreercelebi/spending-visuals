import { Row } from "./Row";

interface TableProps  {
  rows: string[][];
}

export function Table({rows}: Readonly<TableProps>) {
  const headers = rows[0].slice(1);
  return (
    <div className="Table">
      <div className="Table-headers">
        {headers?.map(header => (
          <div className="Table-header" key={`header-${header}`}>
            {header}
          </div>
        ))}
      </div>
      <table className="Table-data">
        {rows.slice(1).map(row => (
          <Row row={row} shaded={(parseInt(row[0])) % 2 == 1} key={row[0]}/>
        ))}
      </table>
    </div>
  )
}