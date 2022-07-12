import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectCoins from './hooks/useSelectCoins'
import { currencies } from '../data/currency'
import Error from './Error'
const InputSubmit = styled.input`
    background-color: #9497ff;
    border:none;
    width: 100%;
    padding:10px;
    color:#fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius:5px;
    transition: background-color .3s ease;
    margin-top:30px;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    } 
    `
const Form = ({ setCurrencies }) => {

    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false);

    const [currency, SelectCoins] = useSelectCoins('Choose your currency', currencies)
    const [cryptocurrency, SelectCryptocurrency] = useSelectCoins('Choose your cryptocurrency', cryptos)

    useEffect(() => {
        const consultAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD"
            const response = await fetch(url)
            const result = await response.json()

            const arrayCryptos = result.Data.map(crypto => {

                const object = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName

                }
                return object
            })
            setCryptos(arrayCryptos)
        }
        consultAPI()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([currency, cryptocurrency].includes('')) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000);

            return
        }
        // setError(false) [asi lo hace Don udemy]
        setCurrencies({
            currency,
            cryptocurrency
        })
    }
    return (
        <>
            {error && <Error> All the fields are mandatoy</Error>}
            <form
                onSubmit={handleSubmit}>
                <SelectCoins />
                <SelectCryptocurrency />
                <InputSubmit
                    type='submit'
                    value='Quote'
                />

            </form>
        </>
    )
}

export default Form