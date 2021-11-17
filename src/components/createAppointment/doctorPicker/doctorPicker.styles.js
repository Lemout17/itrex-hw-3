import styled from 'styled-components'
import Select from 'react-select'

const Form = styled.form``

const StyledSelect = styled(Select)`
  & .Select {
    &__value-container {
      padding: 8px 24px;
      font-weight: 400;
      font-size: 17px;
      line-height: 1.4;
    }

    &__single-value {
      color: var(--title-color);
    }

    &__placeholder {
      color: var(--text-color);
    }

    &__menu {
      overflow-y: scroll;
      padding: 4px;
      font-weight: 400;
      font-size: 15px;
      line-height: 1.3;
      border-radius: 8px;
      box-shadow: none;
      filter: drop-shadow(0px 4px 40px rgba(118, 136, 187, 0.16));
      overflow-y: hidden;
      &-list {
        max-height: 128px;
      }
    }
    &__option {
      padding-left: 24px;
      cursor: pointer;
      &--is-focused,
      &--is-selected {
        background-color: var(--main-bg);
        border-radius: 6px;
        color: var(--title-color);
      }
      &:active {
        background-color: var(--main-bg);
        color: black;
      }
    }
    &__control {
      margin-top: 16px;
      height: 56px;
      border: 1px solid #dce0ec;
      border-radius: 8px;
      &--is-focused {
        box-shadow: none;
        &:hover {
          border: 1px solid var(--input-accent);
        }
      }
      &--menu-is-open {
        svg {
          transform: rotate(-180deg);
          color: var(--input-accent);
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
    &__indicator-separator {
      background: none;
    }
    &__indicator {
      padding: 0 30px;
    }
  }
`

const Label = styled.label`
  display: block;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.3;
  color: var(--title-color);

  &:last-child {
    margin-bottom: 0;
  }
`

export { Form, Label, StyledSelect }
