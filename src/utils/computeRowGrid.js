export function computeRowGrid({ columns, width }) {
  const isTableOverWidth = isOverWindowWidth({ columns, width })
  let output = ''

  columns.forEach(column => {
    if (!column.width) {
      if (!isTableOverWidth) {
        output += output.length > 0 ? ' minmax(0px, 1fr)' : 'minmax(0px, 1fr)'
      } else {
        output += output.length > 0 ? ' 100px' : '100px'
      }
    } else {
      if (typeof column.width === 'number') {
        output += output.length > 0 ? ` ${column.width}px` : `${column.width}px`
      } else {
        output += output.length > 0 ? ` ${column.width}` : `${column.width}`
      }
    }
  })

  return {
    computedRowGrid: output,
    rowWidth: isTableOverWidth ? 'fit-content' : '100%'
  }
}

function isOverWindowWidth({ columns, width }) {
  let value = 0
  columns.map(col => {
    if (col.width && typeof col.width === 'number') {
      value += col.width
    }
  })

  return value > width
}
