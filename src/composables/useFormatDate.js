export function useFormatDate() {
  function formatDate(date) {
    if (!date) {
      return ''
    }

    const formatted = new Date(date)

    return formatted.toLocaleDateString()
  }

  return {
    formatDate
  }
}