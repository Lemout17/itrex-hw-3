import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import s from '../form.module.css'
import Title from '../../title'
import routes from '../../../routes/routes'
import authActions from '../../../redux/auth/authActions'

const SignUpForm = () => {
  const [togglePass1, setTogglePass1] = useState(false)
  const [togglePass2, setTogglePass2] = useState(false)
  const dispatch = useDispatch()

  const handleToggle = (e) => {
    console.log(e.target.id)
    if (e.target.id === 'togglePass1') {
      setTogglePass1(!togglePass1)
    }

    if (e.target.id === 'togglePass2') {
      setTogglePass2(!togglePass2)
    }

    return
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
      <form
        onClick={handleToggle}
        onSubmit={formik.handleSubmit}
        className={s.form}
      >
        <Title text="Sign Up" />

        <div>
          <div className={s.wrapper}>
            <input
              className={
                formik.touched.firstName && formik.errors.firstName
                  ? `${s.input} ${s.input_error}`
                  : `${s.input}`
              }
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className={s.text_error}>{formik.errors.firstName}</p>
            ) : null}
          </div>

          <div className={s.wrapper}>
            <input
              className={
                formik.touched.lastName && formik.errors.lastName
                  ? `${s.input} ${s.input_error}`
                  : `${s.input}`
              }
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className={s.text_error}>{formik.errors.lastName}</p>
            ) : null}
          </div>

          <div className={s.wrapper}>
            <input
              className={
                formik.touched.email && formik.errors.email
                  ? `${s.input} ${s.input_error}`
                  : `${s.input}`
              }
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className={s.text_error}>{formik.errors.email}</p>
            ) : null}
          </div>

          <div className={s.wrapper}>
            <input
              className={
                formik.touched.password && formik.errors.password
                  ? `${s.input} ${s.input_error}`
                  : `${s.input}`
              }
              id="password"
              name="password"
              type={togglePass1 ? 'text' : 'password'}
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className={s.text_error}>{formik.errors.password}</p>
            ) : null}

            <div
              id="togglePass1"
              onClick={handleToggle}
              className={
                togglePass1
                  ? `${s.svg} ${s.svg_open}`
                  : `${s.svg} ${s.svg_close}`
              }
            ></div>
          </div>

          <div className={s.wrapper}>
            <input
              className={
                formik.touched.confirmPass && formik.errors.confirmPass
                  ? `${s.input} ${s.input_error}`
                  : `${s.input}`
              }
              id="confirmPass"
              name="confirmPass"
              type={togglePass2 ? 'text' : 'password'}
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPass}
            />
            {formik.touched.confirmPass && formik.errors.confirmPass ? (
              <p className={s.text_error}>{formik.errors.confirmPass}</p>
            ) : null}

            <div
              id="togglePass2"
              onClick={handleToggle}
              className={
                togglePass2
                  ? `${s.svg} ${s.svg_open}`
                  : `${s.svg} ${s.svg_close}`
              }
            ></div>
          </div>

          <button className={s.button} type="submit">
            Submit
          </button>

          <div className={s.text_wrapper}>
            <p className={s.text}>Already have an account?</p>
            <NavLink className={s.link} exact to={routes.signinPage}>
              Sign in
            </NavLink>
          </div>
        </div>
      </form>
    </>
  )
}

export default SignUpForm
