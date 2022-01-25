import styled from 'styled-components';
import css from '@styled-system/css';
import Box from '../box';

export const StyledCalendar = styled(Box)`
  ${css({
    '&&': {
      border: '1px',
      boxShadow: 'md'
    },
    '.react-datepicker__navigation--previous': {
      borderRightColor: 'gray.400'
    },
    '.react-datepicker__navigation--next': {
      borderLeftColor: 'gray.400'
    },
    '.react-datepicker__header': {
      bg: 'bg.50',
      borderBottomWidth: '0.5px',
      borderBottomColor: 'divider'
    },
    '.react-datepicker__current-month': {
      fontWeight: 'medium',
      letterSpacing: 'wide'
    },
    [`
      .react-datepicker__day--selected,
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--selected,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--selected,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--selected,
      .react-datepicker__year-text--in-selecting-range,
      .react-datepicker__year-text--in-range
      `]: {
      bg: 'blue.400',
      '&:hover': {
        bg: 'blue.500'
      }
    }
  })}
`;
