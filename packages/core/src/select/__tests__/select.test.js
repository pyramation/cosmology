import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { testA11y } from '../../test-utils';
import { Select } from '../index';

describe('Select', () => {
  test('should pass a11y check', async () => {
    const options = ['a', 'b', 'c'];
    const { container } = render(
      <Select
        aria-label="Select Food"
        placeholder="Select an option"
        placeholder="Select Pokemon"
        items={options}
      />
    );
    await testA11y(container);
  });

  test('renders a no items option', async () => {
    const { container } = render(<Select placeholder="Select an option" />);
    const button = container.querySelector("[data-select-element='button']");

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    await waitFor(() => {
      container.querySelector("[data-select-element='no-items']");
    });

    const option = container.querySelector("[data-select-element='no-items']");
    expect(option).toBeInTheDocument();
  });
});
