
interface RowProps {
  row: string[]
  shaded: boolean;
}

export function Row({ row, shaded }: Readonly<RowProps>) {
  return (
    <tr className={`Row${shaded ? ' Row--shaded' : ''}`}>
      {row.slice(1).map(cell => (
        <td className="Row-cell" key={cell}>
          {cell}
        </td>
      ))}
    </tr>
  )
}