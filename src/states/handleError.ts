export const handleError = (e: unknown) => {
    if (typeof e === 'string') {
        e.toUpperCase()
    } else if (e instanceof Error) {
        alert(e.message)
    }
}