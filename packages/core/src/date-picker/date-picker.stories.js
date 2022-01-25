import React from 'react';
import { storiesOf } from '@storybook/react';
import { format } from 'date-fns';

import DatePicker from './';

const Demo = () => {
  const [value, setValue] = React.useState(new Date());
  const onChange = date => {
    console.log('onChange: ', format(date, 'yyyy-MM-dd'));
    setValue(date);
  };

  return <DatePicker onChange={onChange} value={value} />;
};

storiesOf('DatePicker', module).add('SinglePicker', () => <Demo />);
