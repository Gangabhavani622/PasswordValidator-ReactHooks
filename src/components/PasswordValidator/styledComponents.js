// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  height: 100vh;
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #475569;
  border: none;
  border-radius: 10px;
  box-shadow: 10px 10px 8px 10px #434451;
  padding: 20px;
  height: 50%;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
`

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: ${props => (props.isError ? '#ef4444' : '#f8fafc')};
`

export const InputElement = styled.input`
  border: none;
  background-color: #edeeff;
  cursor: pointer;
  color: #383a4e;
  padding: 8px;
  width: 100%;
`
