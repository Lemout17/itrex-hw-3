import React from 'react'
import Main from '../../components/containers/main'
import Section from '../../components/containers/section'
import SignUpForm from '../../components/form/signUpForm'

const SignUpView = () => {
  return (
    <>
      <Main>
        <Section>
          <SignUpForm />
        </Section>
      </Main>
    </>
  )
}

export default SignUpView
