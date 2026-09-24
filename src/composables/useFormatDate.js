export function useFormatDate() {
    function formatDate(date) {
        if (!date) return ''
        const d = new Date(date)
        if (isNaN(d)) return ''

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }

        return d.toLocaleDateString('en-US', options)
    }

    return {
        formatDate
    }
}