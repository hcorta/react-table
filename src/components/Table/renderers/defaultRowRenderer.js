import { defaultCellRenderer } from './defaultCellRenderer'
import { utils } from '../../../utils'


export function defaultRowRenderer({ onRowClick, cellRenderer, rowData, rowIndex, rowHeight, columns, rowProps, ...rest }) {
  return (
    <div
      {...rowProps}
      onClick={() => onRowClick && onRowClick({ rowData, rowIndex, rowProps })}
      style={{ height: rowHeight, width: '100%', display: 'flex', ...rowProps.style }}>
      {columns.map((column, cellIndex) => {
        const cellProps = {
          cellIndex,
          cellData: rowData[column.id],
          Cell: column.Cell,
          rowData,
          align: column.align,
          rowIndex,
          width: utils.calculateColumnWidth({
            width: column.width,
            columns
          }),
          ...rest
        }

        return cellRenderer
          ? cellRenderer(cellProps)
          : defaultCellRenderer(cellProps)
      })}
    </div>
  )
}
