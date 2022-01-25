import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Picker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import enUS from 'date-fns/locale/en-US';
import warn from '../utils/warning';

// TODO: handle different locales
registerLocale('en-US', enUS);
setDefaultLocale('en-US');

export * from './date-picker-default-styles';

import Input from '../input';
import Icon from '../icon';
import { StyledCalendar } from './styled';

const DatePicker = React.forwardRef((props, forwardedRef) => {
  const {
    locale,
    value,
    onChange,
    placeholder,
    disabled,
    readOnly,
    closeOnSelect,
    dateFormat,
    // Range picker
    startDate,
    endDate,
    isRange,
    // Date range limit
    minDate,
    maxDate,
    includeDates,
    excludeDates,
    highlightDates,
    filterDate,
    InputProps,
    ...otherProps
  } = props;

  useEffect(() => {
    warn(
      isRange && (startDate || endDate),
      `DatePicker: must provide startDate and endDate for range picker`
    );
  }, []); // eslint-disable-line

  return (
    <Picker
      locale={locale}
      selected={value}
      onChange={onChange}
      disabled={disabled}
      readOnly={readOnly}
      dateFormat={dateFormat}
      isClearable
      shouldCloseOnSelect={closeOnSelect}
      placeholderText={placeholder}
      startDate={startDate}
      endDate={endDate}
      selectsRange={isRange}
      minDate={minDate}
      maxDate={maxDate}
      includeDates={includeDates}
      excludeDates={excludeDates}
      highlightDates={highlightDates}
      filterDate={filterDate}
      ref={forwardedRef}
      {...otherProps}
      customInput={
        <Input
          startElement={<Icon name="calendar" size={3} color="inherit" />}
          {...InputProps}
        />
      }
      calendarContainer={StyledCalendar}
    />
  );
});

DatePicker.displayName = 'DatePicker';

DatePicker.propTypes = {
  locale: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  startDate: PropTypes.any,
  endDate: PropTypes.any,
  minDate: PropTypes.any,
  maxDate: PropTypes.any,
  includeDates: PropTypes.array,
  excludeDates: PropTypes.array,
  highlightDates: PropTypes.array,
  filterDate: PropTypes.func,
  isRange: PropTypes.bool,
  closeOnSelect: PropTypes.bool,
  InputProps: PropTypes.object
};

DatePicker.defaultProps = {
  dateFormat: 'yyyy-MM-dd',
  locale: 'en-US',
  isRange: false,
  closeOnSelect: true
};

export default DatePicker;
