
interface RowProps {
  row: string[]
}

export function Row({ row }: RowProps) {
  return (
    <div className="Row">
      {row.map(cell => (
        <div className="Row-cell" key={cell}>
          {cell}
        </div>
      ))}
    </div>
  )
}