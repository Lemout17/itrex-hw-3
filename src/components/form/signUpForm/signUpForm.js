import React from 'react'

const SignUpForm = () => {
  return (
    <div>
      <form class="form">
        <div>
          <div class="form__input__wrapper">
            <input
              class="form__input"
              type="text"
              placeholder="First Name"
              id="name"
              autocomplete="on"
              required
            />
            <p class="error-message__name"></p>
          </div>
          <div class="form__input__wrapper">
            <input
              class="form__input"
              type="text"
              placeholder="Last Name"
              id="surname"
              autocomplete="on"
              required
            />
            <p class="error-message__surname"></p>
          </div>
          <div class="form__input__wrapper">
            <input
              class="form__input"
              type="email"
              placeholder="Email"
              id="email"
              autocomplete="on"
              required
            />
            <p class="error-message__email"></p>
          </div>
          <div class="form__input__wrapper">
            <input
              class="form__input"
              type="password"
              placeholder="Password"
              title="Password must contain minimum eight characters, at least one letter and one number"
              id="password"
              autocomplete="on"
              required
            />
            <div class="input__svg input__svg_close"></div>
            <p class="error-message__password"></p>
          </div>
          <div class="form__input__wrapper">
            <input
              class="form__input"
              type="password"
              placeholder="Confirm Password"
              id="confirmPass"
              autocomplete="on"
              required
            />
            <div class="input__svg input__svg_close"></div>
            <p class="error-message__confirmPass"></p>
          </div>
        </div>

        <button
          class="form__button form__button_register"
          type="submit"
          data-name="/doctor"
        >
          Sign up
        </button>

        <div class="form__textwrapper">
          <p class="form__text">Already have an account?</p>
          <a class="form__link" href="#" data-name="/signin">
            Sign in
          </a>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
