import React from 'react';
import { render, waitFor, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Popover2 from '../index';
import ThemeProvider from '../../theme-provider';
import { usePopup } from '../../popup';

const TestComponent = ({ id }) => {
  const { bindTrigger, bindPopover, setTargetEl, isOpen } = usePopup({ id });

  return (
    <ThemeProvider>
      <div>
        <button {...bindTrigger()} ref={setTargetEl}>
          {isOpen ? 'Close' : 'Open'}
        </button>

        <Popover2 placement="bottom" {...bindPopover()}>
          <p>Content</p>
        </Popover2>
      </div>
    </ThemeProvider>
  );
};

const ToggleTestComponent = ({ id }) => {
  const { bindToggle, bindPopover, setTargetEl, isOpen } = usePopup({ id });

  return (
    <ThemeProvider>
      <div>
        <button {...bindToggle()} ref={setTargetEl}>
          {isOpen ? 'Close' : 'Open'}
        </button>

        <Popover2 placement="bottom" {...bindPopover()}>
          <p>content</p>
        </Popover2>
      </div>
    </ThemeProvider>
  );
};

test('has proper aria attributes', async () => {
  const popoverId = 'test-popover';
  const utils = render(<TestComponent id={popoverId} />);
  const trigger = utils.getByText(/open/i);

  expect(trigger).toHaveAttribute('aria-haspopup', 'true');
  expect(trigger).toHaveAttribute('aria-expanded', 'false');

  userEvent.click(trigger);

  await waitFor(() => {
    expect(trigger).toHaveAttribute(
      'aria-controls',
      expect.stringContaining(popoverId)
    );
  });
  expect(trigger).toHaveAttribute('aria-expanded', 'true');
});

test('can open and close', async () => {
  const popoverId = 'test-popover';
  const utils = render(<ToggleTestComponent id={popoverId} />);

  act(() => {
    userEvent.click(utils.getByText(/open/i));
  });

  expect(utils.queryByText(/content/i)).toBeInTheDocument();

  await waitFor(() => {
    userEvent.click(utils.getByText(/close/i));
  });

  expect(utils.queryByText(/open/i)).toBeVisible();

  expect(utils.queryByText(/content/i)).not.toBeInTheDocument();
});

test('can close the popover using Escape key', async () => {
  const popoverId = 'test-popover';
  const utils = render(<TestComponent id={popoverId} />);

  act(() => {
    userEvent.click(utils.getByText(/open/i));
  });

  const popover = await utils.findByRole('tooltip');
  fireEvent.keyDown(popover, { key: 'Escape' });
  expect(utils.queryByRole('tooltip')).toBeNull();
});
