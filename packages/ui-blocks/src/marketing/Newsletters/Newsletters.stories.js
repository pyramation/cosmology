import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import { Newsletter1 } from './Newsletter1';
import { Newsletter2 } from './Newsletter2';
import { Newsletter3 } from './Newsletter3';
import { Newsletter4 } from './Newsletter4';
import { Newsletter5 } from './Newsletter5';
import { Newsletter6 } from './Newsletter6';

storiesOf('Examples/Marketing/Newsletters', module).add(
  'Newsletter1',
  () => {
    const majorText = text('majorText', 'Receive news and any answer?');
    const minorText = text('minorText', 'Sign up for our newsletter.');
    const input = object('input', {
      placeholder: 'Enter your email'
    });
    const button = object('button', {
      text: 'Notify me',
      variant: 'primary'
    });
    return (
      <Newsletter1
        majorText={majorText}
        minorText={minorText}
        input={input}
        button={button}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Newsletters', module).add(
  'Newsletter2',
  () => {
    const majorText = text('majorText', 'Sign up for our newsletter');
    const description = text(
      'description',
      'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of satisfaction.'
    );
    const policyText = text(
      'policyText',
      'We care about the protection of your data. Read our Privacy Policy.'
    );
    const input = object('input', {
      placeholder: 'Enter your email'
    });
    const button = object('button', {
      text: 'Notify me',
      variant: 'primary'
    });

    return (
      <Newsletter2
        majorText={majorText}
        description={description}
        policyText={policyText}
        input={input}
        button={button}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Newsletters', module).add(
  'Newsletter3',
  () => {
    const majorText = text('majorText', 'Sign up for our newsletter');
    const description = text(
      'description',
      'Praesent scelerisque turpis sed quam vestibulum, et sagittis metus hendrerit.'
    );
    const policyText = object('policyText', {
      text: 'We care about the protection of your data. Read our',
      link: { href: '/', text: 'Privacy Policy.', color: 'white' }
    });
    const input = object('input', {
      placeholder: 'Enter your email'
    });
    const button = object('button', {
      text: 'Notify me',
      bg: 'palette.primary.light',
      color: 'white'
    });
    const background = text('background', 'palette.primary.base');

    return (
      <Newsletter3
        majorText={majorText}
        description={description}
        policyText={policyText}
        input={input}
        button={button}
        background={background}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Newsletters', module).add(
  'Newsletter4',
  () => {
    const majorText = text('majorText', 'Sign up for our newsletter');
    const description = text(
      'description',
      'Sed arcu leo, vehicula vel tempor vel, condimentum facilisis ligula. Pellentesque ut sapien orci. Suspendisse facilisis urna dolor, in aliquet ipsum venenatis commodo. '
    );
    const input = object('input', {
      placeholder: 'Enter your email'
    });
    const button = object('button', {
      text: 'Notify me',
      bg: 'palette.primary.light',
      color: 'white'
    });
    const background = text('background', 'palette.primary.base');

    return (
      <Newsletter4
        majorText={majorText}
        description={description}
        input={input}
        button={button}
        background={background}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Newsletters', module).add(
  'Newsletter5',
  () => {
    const majorText = text('majorText', 'Sign up for our newsletter');
    const description = text(
      'description',
      'Praesent scelerisque turpis sed quam vestibulum, et sagittis metus hendrerit.'
    );
    const policyText = object('policyText', {
      text: 'We care about the protection of your data. Read our',
      link: { href: '/', text: 'Privacy Policy.' }
    });
    const input = object('input', {
      placeholder: 'Enter your email'
    });
    const button = text('button', 'Notify me');

    return (
      <Newsletter5
        majorText={majorText}
        description={description}
        policyText={policyText}
        input={input}
        button={button}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Newsletters', module).add(
  'Newsletter6',
  () => {
    const majorText = text('majorText', 'Sign up for our newsletter');
    const description = text(
      'description',
      'Praesent scelerisque turpis sed quam vestibulum, et sagittis metus hendrerit. Duis vel sem ut nisl ultrices consectetur.'
    );
    const policyText = object('policyText', {
      text: 'We care about the protection of your data. Read our',
      link: { href: '/', text: 'Privacy Policy.', color: 'white' }
    });
    const input = object('input', {
      placeholder: 'Enter your email'
    });
    const button = object('button', {
      text: 'Notify me',
      bg: 'palette.primary.light',
      color: 'white'
    });
    const background = text('background', 'palette.primary.base');

    return (
      <Newsletter6
        majorText={majorText}
        description={description}
        policyText={policyText}
        input={input}
        button={button}
        background={background}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
