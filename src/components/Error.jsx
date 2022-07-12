import styled from '@emotion/styled'

const Texto = styled.div`
background-color: red;
color: #fff;
padding: 15px;
font-size: 22px; 
font-family: 'lato', sans-serif;
font-weight: 700;
text-align: center;
border-radius:5px;
`
const Error = ({ children }) => {

    return (
        <Texto>
            {children}
        </Texto>
    )
}

export default Error