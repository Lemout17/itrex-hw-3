import styled from 'styled-components'
import ReactSelect from 'react-select'

export const CustomSelect = styled(ReactSelect)`
  & .Select {
    &__menu {
      border-radius: 8px;
      box-shadow: none;
      filter: drop-shadow(0px 4px 40px rgba(118, 136, 187, 0.16));
      overflow-y: hidden;
      &-list {
        &::-webkit-scrollbar {
          width: 8px;
          margin-right: 44px;
          background-color: rgba(220, 224, 236, 0.3);
        }
        &::-webkit-scrollbar-thumb {
          background-color: rgba(220, 224, 236, 0.5);
          border-radius: 8px;
        }
      }
    }
    &__option {
      cursor: pointer;
      &--is-focused,
      &--is-selected {
        background-color: #f9faff;
        color: black;
      }
      &:active {
        background-color: #f9faff;
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
          border: 1px solid #7297ff;
        }
      }
      &--menu-is-open {
        svg {
          transform: rotate(-180deg);
          color: #7297ff;
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

  //&::-webkit-scrollbar{
  //  width: 8px;
  //  margin-right: 44px;
  //  background-color: rgba(220, 224, 236, 0.3);
  //}
  //&::-webkit-scrollbar-thumb {
  //  background-color: rgba(220, 224, 236, 0.5);
  //  border-radius: 8px;
  //}
`

// Select__control Select__control--is-focused Select__control--menu-is-open css-1s2u09g-control
