import MutationObserver from 'mutation-observer';
import { toHaveNoViolations } from 'jest-axe';
import '@testing-library/jest-dom/extend-expect';
expect.extend(toHaveNoViolations);
global.MutationObserver = MutationObserver;
