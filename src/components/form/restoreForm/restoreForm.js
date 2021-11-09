import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

import Title from '../../title/title'
import { Form, Wrapper, Input, ErrorText, Button, Text } from '../styles'

import routes from '../../../routes/routes'

const RestoreForm = () => {
  let history = useHistory()
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter your email address'),
    }),
    onSubmit: () => {
      history.push(routes.confirmPage)
    },
  })
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Title text="Restore password" restore />

        <Text restore>
          Please use your email address, and we’ll send you the link to reset
          your password
        </Text>

        <Wrapper
          restore
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

        <Button restore type="submit">
          Send Reset Link
        </Button>
      </Form>
    </>
  )
}

export default RestoreForm
