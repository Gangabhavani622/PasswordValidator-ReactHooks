// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  PasswordContainer,
  Heading,
  Paragraph,
  InputElement,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, setUpdateInput] = useState('')

  const onChangeInput = event => {
    setUpdateInput(event.target.value)
  }

  const errorStatus = userInput.length < 8

  return (
    <AppContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputElement
          type="password"
          value={userInput}
          onChange={onChangeInput}
        />
        {errorStatus && (
          <Paragraph isError={errorStatus}>
            Your password must be at least 8 characters
          </Paragraph>
        )}
      </PasswordContainer>
    </AppContainer>
  )
}

export default PasswordValidator
