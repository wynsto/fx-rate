export function Rate({currency, rate, baseRate, amount}) {
    const displayAmount = (+rate / baseRate * amount || 0).toFixed(2)
    const displayRate = (rate/baseRate||0).toFixed(4)
    return <div>{currency.toUpperCase()}: {displayAmount} @ {displayRate}</div>
}