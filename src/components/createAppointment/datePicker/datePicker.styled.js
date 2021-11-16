import styled from "styled-components";
import Calendar from "react-calendar";

export const StyledCalendar = styled(Calendar)`
  &.react-calendar {
    width: 400px;
    max-width: 100%;
    background: white;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    border-radius: 12px;
    border: none;
    padding: 0 32px 32px 32px;

    button {
      margin: 0;
      border: 0;
      outline: none;

      &:enabled:hover {
        cursor: pointer;
      }
    }
  }

  .react-calendar--doubleView {
    width: 700px;

    &.react-calendar__viewContainer {
      display: flex;
      margin: -0.5em;

      > * {
        width: 50%;
        margin: 0.5em;
      }
    }
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .react-calendar__navigation {
    display: flex;
    height: 88px;
    margin-bottom: 1em;
    border-bottom: 1px solid;
    border-color: rgba(220, 224, 236, 0.5);
  }

  .react-calendar__navigation__label__labelText--from {
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }

  .react-calendar__navigation button {
    background: none;
  }

  .react-calendar__navigation__prev-button,
  .react-calendar__navigation__next-button {
    color: #A1ABC9;
    font-size: 25px;
  }

  .react-calendar__navigation button[disabled] {
    background-color: inherit;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }


  .react-calendar__month-view__weekdays__weekday {
    padding: 1.2em;
  }

  abbr[title] {
    text-decoration: none;
    font-size: 13px;
    color: #A1ABC9;
  }

  .react-calendar__month-view__days {
    font-size: 17px;
    font-weight: 600
  }


  .react-calendar__month-view__weekNumbers {
    .react-calendar__tile {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75em;
      font-weight: bold;
      padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 0.75em 0.5em;
    background: none;
    border-radius: 12px;
    &:disabled{
      background-color: #f0f0f0;
    }
  }
  
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #7297FF;
    color: #ffffff;
    transition: 0.1s linear;
  }

  .react-calendar__tile--now {
    background: inherit;
    border: 1px solid #7297FF !important;
    border-radius: 12px;
    color: #7297FF;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #7297FF;
    color: #fff;
  }

  .react-calendar__tile--hasActive {
    background: inherit;
    border: 1px solid #7297FF !important;
    border-radius: 12px;
    color: #7297FF;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #7297FF;
    color: #fff;
  }

  .react-calendar__tile--active {
    color: white;
    background: #7297FF;
    border-radius: 12px;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #7297FF;
  }

  .react-calendar--selectRange {
    .react-calendar__tile--hover{
      background-color: #e6e6e6;  
    }
  }

  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    display: none;
  }

`;