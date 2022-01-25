import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

/**
 * Validates against common a11y mistakes.
 * @example
 * ```jsx
 * it('passes a11y test', async () => {
 *  await testA11Y(<MyComponent />, options);
 * });
 *
 * // sometimes we need to perform interactions first to render conditional UI
 * it('passes a11y test when open', async () => {
 *  const { container } = render(<MyComponent />, options);
 *
 *  fireEvent.click(screen.getByRole('button'));
 *
 *  await testA11Y(container, options);
 * });
 * ```
 *
 * @see https://github.com/nickcolley/jest-axe#testing-react-with-react-testing-library
 */
export const testA11y = async (ui, testA11YOptions = {}) => {
  const { axeOptions, ...options } = testA11YOptions;
  const container = React.isValidElement(ui)
    ? render(ui, options).container
    : ui;

  const results = await axe(container, axeOptions);

  expect(results).toHaveNoViolations();
};
