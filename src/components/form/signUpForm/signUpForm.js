import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Title from '../../title'
import Form from '../formStyles/form'
import Wrapper from '../formStyles/inputWrapper'
import Input from '../formStyles/input'
import ErrorText from '../formStyles/errorText'
import Svg from '../formStyles/passwordSvg'
import Button from '../formStyles/button'
import TextWrapper from '../formStyles/textWrapper'
import Text from '../formStyles/text'
import Link from '../formStyles/link'

import routes from '../../../routes/routes'
import authActions from '../../../redux/auth/authActions'

const SignUpForm = () => {
  const [togglePass1, setTogglePass1] = useState(false)
  const [togglePass2, setTogglePass2] = useState(false)
  const dispatch = useDispatch()

  const handleToggle = (e) => checkTogglePass(e.target.id)

  const checkTogglePass = (id) => {
    id === 'togglePass1'
      ? setTogglePass1(!togglePass1)
      : setTogglePass2(!togglePass2)
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPass: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Please enter your name')
        .matches(
          /^[a-z][a-z '-.,]{1,21}$|^$/i,
          'Please use only letters for your name'
        ),
      lastName: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .max(20, 'Must be 20 characters or less')
        .required('Please enter your last name')
        .matches(
          /^[a-z][a-z '-.,]{1,21}$|^$/i,
          'Please use only letters for your last name'
        ),
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter your email address'),
      password: Yup.string()
        .required('Please Enter your password')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          'Must contain 8 characters,at least one letter and one number'
        ),
      confirmPass: Yup.string()
        .required('Please Enter your password')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: () => dispatch(authActions.registerSuccess()),
  })

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Title text="Sign Up" />

        <div>
          <Wrapper
            status={
              formik.touched.firstName && formik.errors.firstName
                ? 'error'
                : 'normal'
            }
          >
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <ErrorText>{formik.errors.firstName}</ErrorText>
            ) : null}
          </Wrapper>

          <Wrapper
            status={
              formik.touched.lastName && formik.errors.lastName
                ? 'error'
                : 'normal'
            }
          >
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <ErrorText>{formik.errors.lastName}</ErrorText>
            ) : null}
          </Wrapper>

          <Wrapper
            status={
              formik.touched.email && formik.errors.email ? 'error' : 'normal'
            }
          >
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorText>{formik.errors.email}</ErrorText>
            ) : null}
          </Wrapper>

          <Wrapper
            status={
              formik.touched.password && formik.errors.password
                ? 'error'
                : 'normal'
            }
          >
            <Input
              id="password"
              name="password"
              type={togglePass1 ? 'text' : 'password'}
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorText>{formik.errors.password}</ErrorText>
            ) : null}

            <Svg
              onClick={handleToggle}
              id="togglePass1"
              state={togglePass1 ? 'open' : 'close'}
            ></Svg>
          </Wrapper>

          <Wrapper
            status={
              formik.touched.confirmPass && formik.errors.confirmPass
                ? 'error'
                : 'normal'
            }
          >
            <Input
              id="confirmPass"
              name="confirmPass"
              type={togglePass2 ? 'text' : 'password'}
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPass}
            />
            {formik.touched.confirmPass && formik.errors.confirmPass ? (
              <ErrorText>{formik.errors.confirmPass}</ErrorText>
            ) : null}

            <Svg
              state={togglePass2 ? 'open' : 'close'}
              onClick={handleToggle}
              id="togglePass2"
            ></Svg>
          </Wrapper>
        </div>
        <Button>Sign Up</Button>

        <TextWrapper>
          <Text>Already have an account?</Text>
          <Link>
            <NavLink exact to={routes.signinPage}>
              Sign in
            </NavLink>
          </Link>
        </TextWrapper>
      </Form>
    </>
  )
}

export default SignUpForm
