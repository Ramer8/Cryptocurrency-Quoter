import styled from '@emotion/styled'

const Contendor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap:1rem;
    margin-top:30px;

`
const Image = styled.img`
      display: block;
      width: 120px;
    
    
`
const Text = styled.p`
      font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Price = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`
const Variation = styled.p`
    font-size: 18px;
    color: red;
`
const Result = ({ result }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result
    return (
        <Contendor>
            <Image
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="image crypto" />
            <div>
                <Price>The price is: <span>{PRICE}</span></Price>
                <Text>Highest price is: <span>{HIGHDAY}</span></Text>
                <Text>Lower price is: <span>{LOWDAY}</span></Text>

                <Variation>Variation last 24 hours: <span>{CHANGEPCT24HOUR}</span></Variation>
                <Text>Last update: <span>{LASTUPDATE}</span></Text>
            </div>
        </Contendor >
    )
}

export default Result