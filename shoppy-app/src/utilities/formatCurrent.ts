const CUREENCY_FORMATTER= new Intl.NumberFormat(undefined, {currency:"USD", style: 'currency' })

export function formatCurrency(number: number | string) {
    if (typeof number  == "string") {
        number = +number
    }
    return CUREENCY_FORMATTER.format(number)
}