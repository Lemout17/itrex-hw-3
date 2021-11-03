import React from 'react'
import Main from '../../components/main'
import Section from '../../components/section'
import SignUpForm from '../../components/form/signUpForm'
import Title from '../../components/title'

const SignUpView = () => {
  const titleText = 'Sign Up'
  return (
    <>
      <Main>
        <Section>
          <Title text={titleText} />
          <SignUpForm />
        </Section>
      </Main>
    </>
  )
}

export default SignUpView
