import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { testA11y } from '../../test-utils';
import { Suggest } from '../index';

describe('Suggest', () => {
  beforeAll(() => {
    // JSDom does not implement this and an error was being
    // thrown from jest-axe because of it.
    window.getComputedStyle = () => {};
  });

  test('should pass a11y check', async () => {
    const options = ['a', 'b', 'c'];
    const { container } = render(
      <Suggest
        aria-label="Select Food"
        placeholder="Select an option"
        items={options}
      />
    );
    await testA11y(container);
  });

  test.only('shows option menu on focus', async () => {
    const options = ['a', 'b', 'c'];
    const { container, getByText } = render(
      <Suggest placeholder="Select an option" items={options} />
    );
    const input = container.querySelector("[data-select-element='input']");

    expect(input).toBeInTheDocument();

    fireEvent.focus(input);

    await waitFor(() => {
      container.querySelector("[data-select-element='menu']");
    });

    const menu = container.querySelector("[data-select-element='menu']");
    expect(menu).toBeInTheDocument();

    for (const opt of options) {
      const queriedOption = await getByText(opt);
      expect(queriedOption).toBeInTheDocument();
    }
  });

  // test('filters options', () => {
  //   const options = ['a', 'b', 'c'];
  //   const { container } = render(
  //     <Suggest placeholder="Select an option" items={options} />
  //   );
  //   const input = container.querySelector("[data-select-element='input']");

  //   expect(input).toBeInTheDocument();

  //   fireEvent.focus(input);
  // })
});
