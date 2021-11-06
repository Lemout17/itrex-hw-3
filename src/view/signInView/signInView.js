import React from 'react'
import Main from '../../components/containers/main'
import Section from '../../components/containers/section'
import SignInForm from '../../components/form/signInForm'

const SignInView = () => {
  return (
    <>
      <Main>
        <Section>
          <SignInForm />
        </Section>
      </Main>
    </>
  )
}

export default SignInView
