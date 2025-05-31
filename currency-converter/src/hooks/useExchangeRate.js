import { useEffect, useState } from 'react';

const useExchangeRate = (fromCurrency, toCurrency) => {
    const [rate, setRate] = useState(0)
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
        .then(res => res.json())
        .then(data => {
            setRate(data[fromCurrency][toCurrency])
        })
    })

    return rate
};

export default useExchangeRate;
