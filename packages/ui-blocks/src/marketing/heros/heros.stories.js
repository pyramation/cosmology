import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { Hero1 } from './Hero1';
import { Hero2 } from './Hero2';
import { Hero3 } from './Hero3';
import { Hero4 } from './Hero4';
import { Hero5 } from './Hero5';

storiesOf('Examples/Marketing/Heros', module).add(
  'Hero1',
  () => {
    const desc = `Website building is chaotic. Across teams, there are design apps, coding editors, prototyping tools, tickets, style guides. When you design with our tool, every stroke gets code generated ready to go live. CMS, IDE and Analytics are integrated for seamless customizations. Cross-team collaboration is built along every step. Go from all-over-the-place handoffs, to building cozily hands-on.`;
    const src = text('src', 'https://i.imgur.com/PeGpFZu.png');
    const shift = boolean('shift', false);
    const majorWords = text('majorWords', 'Web Design Platform');
    const minorWords = text('minorWords', 'for All Creatives');
    const description = text('description', desc);
    const links = object('links', [
      {
        id: 1,
        href: '/',
        text: 'Signup',
        variant: 'secondary'
      },
      {
        id: 2,
        href: '/',
        text: 'Signin',
        variant: 'primary'
      }
    ]);
    return (
      <Hero1
        src={src}
        shift={shift}
        majorWords={majorWords}
        minorWords={minorWords}
        description={description}
        links={links}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Heros', module).add(
  'Hero2',
  () => {
    const desc = `Website building is chaotic. Across teams, there are design apps, coding editors, prototyping tools, tickets, style guides. When you design with our tool, every stroke gets code generated ready to go live. CMS, IDE and Analytics are integrated for seamless customizations. Cross-team collaboration is built along every step. Go from all-over-the-place handoffs, to building cozily hands-on.`;

    const majorWords = text('majorWords', 'Turn ideas to live web');
    const minorWords = text('minorWords', 'experiences');
    const description = text('description', desc);

    const input = text('placeholder', 'Enter your email');

    const button = object('button', {
      text: 'Notify me',
      variant: 'primary',
      bgColor: '#01A1FF',
      color: '#ffffff'
    });
    const newsletterText = text(
      'newsletterText',
      `Sign up to get notification when it's ready.`
    );

    const policyText = text(
      'policyText',
      'We care about the protection of your data. Read Privacy Policy'
    );

    const illustration = text(
      'illustration',
      'https://i.imgur.com/v4uQCOe.png'
    );
    const shift = boolean('shift', false);
    return (
      <Hero2
        majorWords={majorWords}
        minorWords={minorWords}
        description={description}
        input={input}
        button={button}
        newsletterText={newsletterText}
        illustration={illustration}
        policyText={policyText}
        shift={shift}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Heros', module).add(
  'Hero3',
  () => {
    const desc = `When you design with us, every stroke gets code generated ready to go live. CMS, IDE and Analytics are integrated for seamless customizations. Cross-team collaboration is built along every step.`;

    const majorWords = text('majorWords', 'Web Design Platform');
    const height = text('height', '800px');
    const minorWords = text('minorWords', 'for All Creatives');
    const description = text('description', desc);

    const links = object('links', [
      {
        id: 1,
        href: '/signin',
        text: 'Signup',
        bg: 'whiteAlpha.900',
        color: 'gray.900'
      },
      {
        id: 2,
        href: '/signup',
        text: 'Signin',
        variant: 'primary'
      }
    ]);

    const backgroundImageSource = text(
      'backgroundImageSource',
      'https://images.unsplash.com/photo-1433838552652-f9a46b332c40'
    );

    const backgroundImageAttachment = boolean(
      'backgroundImageAttachment',
      true
    );

    const inverted = boolean('inverted', true);

    return (
      <Hero3
        height={height}
        majorWords={majorWords}
        minorWords={minorWords}
        description={description}
        links={links}
        backgroundImageSource={backgroundImageSource}
        backgroundImageAttachment={backgroundImageAttachment}
        inverted={inverted}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Heros', module).add(
  'Hero4',
  () => {
    const desc = `When you design with us, every stroke gets code generated ready to go live. CMS, IDE and Analytics are integrated for seamless customizations. Cross-team collaboration is built along every step.`;

    const height = text('height', '800px');
    const majorWords = text('majorWords', 'Web Design Platform');
    const minorWords = text('minorWords', 'for All Creatives');
    const description = text('description', desc);

    const links = object('links', [
      {
        id: 1,
        href: '/signin',
        text: 'Signup',
        bg: 'whiteAlpha.900',
        color: 'gray.900'
      },
      {
        id: 2,
        href: '/signup',
        text: 'Signin',
        variant: 'primary'
      }
    ]);

    const video = object('video', [
      {
        id: 1,
        src:
          'https://assets.mixkit.co/videos/preview/mixkit-abstract-tunnel-of-dark-triangular-lights-32981-large.mp4',
        muted: true,
        autoPlay: true,
        loop: true,
        controls: false
      }
    ]);

    const invertedText = boolean('invertedText', true);

    return (
      <Hero4
        height={height}
        majorWords={majorWords}
        minorWords={minorWords}
        description={description}
        links={links}
        video={video}
        invertedText={invertedText}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Heros', module).add(
  'Hero5',
  () => {
    const desc = `Website building is chaotic. Across teams, there are design apps, coding editors, prototyping tools, tickets, style guides. When you design with our tool, every stroke gets code generated ready to go live. CMS, IDE and Analytics are integrated for seamless customizations. Cross-team collaboration is built along every step. Go from all-over-the-place handoffs, to building cozily hands-on.`;

    const height = text('height', '100vh');
    const majorWords = text('majorWords', 'Web Design Platform');
    const minorWords = text('minorWords', 'for All Creatives');
    const description = text('description', desc);

    const src = text('src', 'https://i.imgur.com/crDFOzg.jpg');

    const links = object('links', [
      {
        id: 1,
        href: '/signin',
        text: 'Get Started',
        variant: 'primary'
      },
      {
        id: 2,
        href: '/signup',
        text: 'Signup',
        intent: 'primary',
        variant: 'tertiary'
      }
    ]);

    const simple = boolean('simple', false);

    return (
      <Hero5
        height={height}
        majorWords={majorWords}
        minorWords={minorWords}
        description={description}
        src={src}
        links={links}
        simple={simple}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
