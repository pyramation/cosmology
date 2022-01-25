import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '../index';

test('has the proper aria attributes', () => {
  const { rerender } = render(<Button>Hello</Button>);

  // button has role="button"
  let button = screen.getByRole('button');
  expect(button).not.toHaveAttribute('aria-disabled');

  // loading sets aria-disabled="true"
  rerender(<Button loading>Hello</Button>);
  button = screen.getByRole('button');
  expect(button).toHaveAttribute('data-loading', 'true');

  // isDisabled sets aria-disabled="true"
  rerender(<Button disabled>Hello</Button>);
  button = screen.getByRole('button');
  expect(button).toHaveAttribute('disabled', '');
});
