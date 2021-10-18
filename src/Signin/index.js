import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SigninElements'


const SignIn = ({img}) => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Travel <i class='fas fa-plane-departure' /></Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required placeholder='@example.com' />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required placeholder='Enter your Password'/>
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn;