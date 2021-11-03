import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import s from '../form.module.css'
import Title from '../../title'

const SignUpForm = () => {
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
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const errorText =
    formik.touched.firstName && formik.errors.firstName ? (
      <p className={s.text_error}>{formik.errors.firstName}</p>
    ) : null

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <Title text="Sign Up" />

        <div>
          <div className={s.wrapper}>
            <label htmlFor="firstName">First Name</label>
            <input
              className={s.input}
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {errorText}
          </div>

          <div className={s.wrapper}>
            <label htmlFor="lastName">Last Name</label>
            <input
              className={s.input}
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {errorText}
          </div>

          <div className={s.wrapper}>
            <input
              className={s.input}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          <div className={s.wrapper}>
            <input
              className={s.input}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <div className={`${s.svg} ${s.svg_close}`}></div>
          </div>

          <div className={s.wrapper}>
            <input
              className={s.input}
              id="confirmPass"
              name="confirmPass"
              type="password"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              value={formik.values.confirmPass}
            />

            <div className={`${s.svg} ${s.svg_close}`}></div>
          </div>

          <button className={s.button} type="submit">
            Submit
          </button>

          <div className={s.text_wrapper}>
            <p className={s.text}>Already have an account?</p>
            <a className={s.link} href="#" data-name="/signin">
              Sign in
            </a>
          </div>
        </div>
      </form>
    </>
  )
}

export default SignUpForm
