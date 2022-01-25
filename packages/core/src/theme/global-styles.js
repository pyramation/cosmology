import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import css from '@styled-system/css';
import { DatePickerGlobalStyles } from '../date-picker';
import colors from './base-theme/colors';

export default createGlobalStyle`
  ${normalize}

  html {
    ${css({
      fontFamily: 'body',
      color: 'text'
    })}
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  input,
  textarea,
  button {
    border: none;
    padding: 0;
  }
  button {
    background: none;
  }

  /* Reset firefox and safari gray boxes */
  button,
  [type="button"],
  [type="submit"] {
    -webkit-appearance: none;
  }

  a,
  button {
    cursor: pointer;
  }

  textarea {
    resize: none;
  }

  *:focus {
    outline: none;
  }

  img {
    max-width: 100%;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  p,
  pre {
    margin: 0;
  }

  iframe {
    border: none;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Scrollbar */
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: ${colors.gray[200]};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.gray[300]};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.gray[500]};
  }

  /* Date picker styles */

  ${DatePickerGlobalStyles}

  .react-datepicker-popper {
    ${css({
      zIndex: 'popover'
    })}
  }

  .react-datepicker__input-container {
    ${css({
      '.react-datepicker__close-icon:after': {
        color: 'gray.600',
        bg: 'gray.50',
        border: 0,
        borderRadius: 'sm',
        fontSize: 'md',
        width: '18px',
        height: '18px',
        display: 'flex',
        flexDirection: 'column'
      },
      '.react-datepicker__close-icon:hover:after': {
        bg: 'gray.100'
      }
    })}
  }
`;
