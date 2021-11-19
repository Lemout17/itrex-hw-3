import { useState } from 'react'
import useStoreMiddleware from '../../../redux/useStoreMiddleware'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Title from '../../title/title'
import {
  Form,
  Wrapper,
  Input,
  ErrorText,
  Svg,
  Button,
  Link,
  Text,
  TextWrapper,
} from '../styles'

import routes from '../../../routes/routes'
import authActions from '../../../redux/auth/authActions'

const SignInForm = () => {
  const [togglePass, setTogglePass] = useState(false)

  const dispatch = useDispatch()

  const { loginUser } = useStoreMiddleware()

  const handleToggle = (e) => {
    if (e.target.id === 'togglePass') {
      setTogglePass(!togglePass)
    }

    return
  }

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .email('Invalid email address')
        .required('Please enter your email address'),
      password: Yup.string()
        .required('Please Enter your password')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          'Must contain 8 characters,at least one letter and one number'
        ),
    }),
    onSubmit: (value) => {
      console.log(value)
      loginUser(value)
    },
  })

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Title text="Sign In" />

        <div>
          <Wrapper
            login
            status={
              formik.touched.userName && formik.errors.userName
                ? 'error'
                : 'normal'
            }
          >
            <Input
              id="userName"
              name="userName"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <ErrorText>{formik.errors.userName}</ErrorText>
            ) : null}
          </Wrapper>

          <Wrapper
            login
            status={
              formik.touched.password && formik.errors.password
                ? 'error'
                : 'normal'
            }
          >
            <Input
              id="password"
              name="password"
              type={togglePass ? 'text' : 'password'}
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorText>{formik.errors.password}</ErrorText>
            ) : null}

            <Svg
              state={togglePass ? 'open' : 'close'}
              onClick={handleToggle}
              id="togglePass"
            ></Svg>
          </Wrapper>
        </div>
        <Button login type="submit">
          Sign In
        </Button>

        <Link login>
          <NavLink exact to={routes.restorePage}>
            Forgot Password?
          </NavLink>
        </Link>

        <TextWrapper>
          <Text>Don’t have an account?</Text>
          <Link>
            <NavLink exact to={routes.signupPage}>
              Sign up
            </NavLink>
          </Link>
        </TextWrapper>
      </Form>
    </>
  )
}

export default SignInForm
