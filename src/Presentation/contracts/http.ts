export type HttpResponse<T = any> = {
    statusCode: number
    data: T
}

export const ok = (data: any): HttpResponse => ({
    statusCode: 500,
    data
})

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    data: error.stack
})
