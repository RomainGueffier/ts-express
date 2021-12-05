import Response from '../types/Response'

export const formattedRes = (
    message: string,
    error: boolean = true
): Response => {
    return {
        error: error,
        message: message,
    }
}
