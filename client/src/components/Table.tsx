import { Row } from "./Row";

interface TableProps  {
  rows: string[][];
}

export function Table({rows}: Readonly<TableProps>) {
  console.log('table', rows);
  const headers = rows[0];
  return (
    <div className="Table">
      <div className="Table-headers">
        {headers?.map(header => (
          <div className="Table-header" key={`header-${header}`}>
            {header}
          </div>
        ))}
      </div>
      <div className="Table-data">
        {rows?.map((row, i) => (
          i > 0 && <Row row={row} />
        ))}
      </div>
    </div>
  )
}