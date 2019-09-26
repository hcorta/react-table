var headers = {
  model: 'Phone Model'.replace(/,/g, ''), // remove commas to avoid errors
  chargers: "Chargers",
  cases: "Cases",
  earphones: "Earphones"
};

export function exportCSVFile(headers, items, fileTitle) {
  if (headers) {
    items.unshift(headers)
  }

  // Convert Object to JSON
  const jsonObject = JSON.stringify(items)

  const csv = this.convertToCSV(jsonObject)

  const exportedFilenmae = fileTitle + '.csv' || 'export.csv'

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  if (navigator.msSaveBlob) { // IE 10+
    navigator.msSaveBlob(blob, exportedFilenmae)
  } else {
    const link = document.createElement('a')
    if (link.download !== undefined) { // feature detection
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', exportedFilenmae)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
