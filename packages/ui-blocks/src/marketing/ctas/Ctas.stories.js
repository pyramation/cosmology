import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, boolean, select, radios } from '@storybook/addon-knobs';
import { Cta1 } from './Cta1';
import { Cta2 } from './Cta2';
import { Cta3 } from './Cta3';
import { Cta4 } from './Cta4';
import { Cta5 } from './Cta5';
import { Cta6 } from './Cta6';
import { Cta7 } from './Cta7';
import { Cta8 } from './Cta8';
import { Cta9 } from './Cta9';
import { Cta10 } from './Cta10';
import { Cta11 } from './Cta11';

storiesOf('Examples/Marketing/Ctas', module).add(
  'Cta1',
  () => {
    const ctaText = text(
      'ctaText',
      'We are offering a 14-days trail. You can purchase Stack for $18 USD.'
    );
    const badgeText = text('badgeText', 'Hot Sale');
    const badgeIntent = select(
      'badgeIntent',
      ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      'primary'
    );

    return (
      <Cta1 ctaText={ctaText} badgeText={badgeText} badgeIntent={badgeIntent} />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Ctas', module).add(
  'Cta2',
  () => {
    const ctaText = text('text', 'Purchase Stack now and get lifetime');
    const description = text(
      'description',
      'Each purchase of Stack comes with six months free support — and a lifetime of free content and bug-fix updates.'
    );
    const links = object('links', [
      {
        id: 1,
        href: '/',
        text: 'Join us',
        intent: 'primary',
        variant: 'tertiary'
      },
      {
        id: 2,
        href: '/',
        text: 'Buy now',
        textColor: 'blackAlpha.900',
        backgroundColor: 'whiteAlpha.900'
      }
    ]);

    return <Cta2 text={ctaText} description={description} links={links} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Ctas', module).add(
  'Cta3',
  () => {
    const majorText = text('majorText', 'Ready to dive in?');
    const minorText = text('minorText', 'Start your free trial today.');
    const links = object('links', [
      {
        id: 1,
        href: '/',
        text: 'Get Started',
        variant: 'primary'
      },
      {
        id: 2,
        href: '/',
        text: 'Sign up',
        variant: 'tertiary',
        intent: 'primary'
      }
    ]);

    return <Cta3 majorText={majorText} minorText={minorText} links={links} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Ctas', module).add(
  'Cta4',
  () => {
    const majorText = text('majorText', `We're here to help`);
    const minorText = text('minorText', 'Planning, Stabilizing and Work');
    const mode = boolean('dark', true);
    const description = text(
      'description',
      `We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. Lorem Ipsum has been the industry standard dummy text ever since the 1500s and used by everywhere.`
    );
    const link = object('link', {
      href: '/',
      text: 'Visit the help center',
      icon: 'external-link',
      variant: 'secondary',
      intent: 'primary',
      textColor: 'whiteAlpha.700'
    });
    const backgroundImage = text(
      'backgroundImage',
      'https://i.imgur.com/fcLy370.jpg'
    );
    const shift = boolean('shift', false);

    return (
      <Cta4
        majorText={majorText}
        minorText={minorText}
        description={description}
        link={link}
        backgroundImage={backgroundImage}
        shift={shift}
        mode={mode}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Ctas', module).add(
  'Cta5',
  () => {
    const title = text('title', `Web Incubator`);
    const subtitle = text(
      'subtitle',
      "The next quantum leap in the way you've been working"
    );
    const links = object('links', [
      {
        id: 1,
        href: '/',
        text: 'Get Started',
        variant: 'primary'
      },
      {
        id: 2,
        href: '/',
        text: 'Sign up',
        textColor: 'palette.primary.base',
        variant: 'tertiary',
        intent: 'primary'
      }
    ]);

    return <Cta5 title={title} subtitle={subtitle} links={links} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Ctas', module).add(
  'Cta6',
  () => {
    const title = text('title', 'In nisi diam semper?');
    const subtitle = text(
      'subtitle',
      'Donec fermentum porta nisl non aliquam.'
    );
    const links = object('links', [
      {
        id: 1,
        href: '/',
        text: 'Get Started'
      },
      {
        id: 2,
        href: '/',
        text: 'Learn more',
        variant: 'tertiary'
      }
    ]);

    return <Cta6 title={title} subtitle={subtitle} links={links} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Ctas', module).add(
  'Cta7',
  () => {
    const title = text('title', 'In nisi diam semper?');
    const subtitle = text(
      'subtitle',
      'Donec fermentum porta nisl non aliquam.'
    );
    const desc = text(
      'desc',
      'Etiam in odio mi. Donec fermentum porta nisl non aliquam. Aliquam eu turpis sit amet mi aliquet feugiat nec et magna. Pellentesque congue porttitor orci eget tristique. Nunc faucibus sed sapien vitae posuere. Vivamus volutpat mi nec tortor pretium interdum.'
    );
    const link = object('link', {
      id: 1,
      href: '/',
      text: 'Sign up for free',
      bg: 'whiteAlpha.900',
      color: 'palette.primary.base'
    });
    const bgColor = text('background color', 'palette.primary.base');
    const img = text(
      'image',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    );

    return (
      <Cta7
        title={title}
        subtitle={subtitle}
        desc={desc}
        link={link}
        bgColor={bgColor}
        img={img}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Ctas', module).add(
  'Cta8',
  () => {
    const title = text('title', 'In nisi diam semper?');
    const subtitle = text(
      'subtitle',
      'Donec fermentum porta nisl non aliquam.'
    );
    const desc = text(
      'desc',
      'Etiam in odio mi. Donec fermentum porta nisl non aliquam. Aliquam eu turpis sit amet mi aliquet feugiat nec et magna. Pellentesque congue porttitor orci eget tristique. Nunc faucibus sed sapien vitae posuere. Vivamus volutpat mi nec tortor pretium interdum.'
    );
    const link = object('link', {
      id: 1,
      href: '/',
      text: 'Sign up for free',
      bg: 'whiteAlpha.900',
      color: 'palette.primary.base'
    });
    const bgColor = text('background color', 'palette.primary.base');

    return (
      <Cta8
        title={title}
        subtitle={subtitle}
        desc={desc}
        link={link}
        bgColor={bgColor}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Ctas', module).add(
  'Cta9',
  () => {
    const title = text('title', 'In nisi diam semper?');
    const subtitle = text(
      'subtitle',
      'Donec fermentum porta nisl non aliquam.'
    );
    const link = object('link', {
      id: 1,
      href: '/',
      text: 'Sign up for free'
    });
    const bgColor = text('background color', 'palette.primary.lightest');

    return (
      <Cta9 title={title} subtitle={subtitle} link={link} bgColor={bgColor} />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Ctas', module).add(
  'Cta10',
  () => {
    const title = text('title', 'In nisi diam semper?');
    const subtitle = text(
      'subtitle',
      'Donec fermentum porta nisl non aliquam.'
    );
    const links = object('links', [
      {
        id: 1,
        href: '/',
        text: 'Get Started',
        variant: 'primary'
      },
      {
        id: 2,
        href: '/',
        text: 'Sign up',
        variant: 'tertiary',
        intent: 'primary'
      }
    ]);
    const bgColor = text('background color', 'palette.primary.lightest');
    const displayOptions = {
      left: 'start',
      right: 'end'
    };
    const displayDefaultValue = displayOptions.left;
    const justify = radios(
      'justify content',
      displayOptions,
      displayDefaultValue
    );

    return (
      <Cta10
        title={title}
        subtitle={subtitle}
        links={links}
        bgColor={bgColor}
        justify={justify}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Ctas', module).add(
  'Cta11',
  () => {
    const title = text('title', 'In nisi diam semper?');
    const desc = text(
      'desc',
      'Etiam in odio mi. Donec fermentum porta nisl non aliquam. Aliquam eu turpis sit amet mi aliquet feugiat nec et magna. Pellentesque congue porttitor orci eget tristique. Nunc faucibus sed sapien vitae posuere. Vivamus volutpat mi nec tortor pretium interdum.'
    );
    const link = object('link', {
      id: 1,
      href: '/',
      text: 'Sign up for free',
      bg: 'whiteAlpha.900',
      color: 'palette.primary.base'
    });
    const bgColor = text('background color', 'palette.primary.base');
    const img = text(
      'image',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    );

    return (
      <Cta11
        title={title}
        desc={desc}
        link={link}
        bgColor={bgColor}
        img={img}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
