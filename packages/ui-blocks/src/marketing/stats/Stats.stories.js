import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, boolean } from '@storybook/addon-knobs';
import { Stat1 } from './Stat1';
import { Stat2 } from './Stat2';
import { Stat3 } from './Stat3';
import { Stat4 } from './Stat4';

storiesOf('Examples/Marketing/Stats', module).add(
  'Stat1',
  () => {
    const majorText = text(
      'majorText',
      'Donec laoreet mi iaculis, lacinia nisi non, semper erat.'
    );
    const minorText = text(
      'minorText',
      'Duis feugiat, nibh at consectetur viverra, magna sapien vehicula risus, id ullamcorper leo metus fermentum nibh.'
    );
    const stats = object('stats', [
      {
        id: 1,
        title: '100%',
        desc: 'Praesent'
      },
      {
        id: 2,
        title: '24/7',
        desc: 'Commodo'
      },
      {
        id: 3,
        title: '100k',
        desc: 'Suspendisse'
      }
    ]);

    return <Stat1 majorText={majorText} minorText={minorText} stats={stats} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Stats', module).add(
  'Stat2',
  () => {
    const majorText = text(
      'majorText',
      'Donec laoreet mi iaculis, lacinia nisi non, semper erat.'
    );
    const minorText = text(
      'minorText',
      'Duis feugiat, nibh at consectetur viverra, magna sapien vehicula risus, id ullamcorper leo metus fermentum nibh.'
    );
    const stats = object('stats', [
      {
        id: 1,
        title: '100%',
        desc: 'Praesent'
      },
      {
        id: 2,
        title: '24/7',
        desc: 'Commodo'
      },
      {
        id: 3,
        title: '100k',
        desc: 'Suspendisse'
      }
    ]);

    return <Stat2 majorText={majorText} minorText={minorText} stats={stats} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Stats', module).add(
  'Stat3',
  () => {
    const icon = text('icon', 'users');
    const majorText = text(
      'majorText',
      'Donec laoreet mi iaculis, lacinia nisi non, semper erat.'
    );
    const description = text(
      'description',
      'Quisque ipsum turpis, fermentum vel cursus vitae, consequat eu mi. Aenean id nisl laoreet, placerat est aliquam, rutrum arcu. Duis convallis metus quam, lacinia vulputate arcu lacinia vitae. Duis metus neque, tempor vehicula ornare at, laoreet sit amet arcu. Curabitur blandit, mauris eu consequat vestibulum, orci orci laoreet ipsum, ac lacinia est lectus eu lacus. Integer et sapien auctor, blandit magna vitae, finibus justo. Maecenas et mi euismod, vulputate augue sit amet, mattis mi.'
    );
    const stats = object('stats', [
      {
        id: 1,
        title: '100%',
        desc: 'Praesent'
      },
      {
        id: 2,
        title: '24/7',
        desc: 'Commodo'
      },
      {
        id: 3,
        title: '100k',
        desc: 'Suspendisse'
      }
    ]);
    const backgroundImage = text(
      'backgroundImage',
      'https://picsum.photos/1280/720'
    );
    const shift = boolean('shift', false);

    return (
      <Stat3
        majorText={majorText}
        description={description}
        icon={icon}
        stats={stats}
        backgroundImage={backgroundImage}
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

storiesOf('Examples/Marketing/Stats', module).add(
  'Stat4',
  () => {
    const majorText = text(
      'majorText',
      'Nulla vulputate nisi eget pulvinar dignissim'
    );
    const minorText = text('minorText', 'Donec laoreet mi iaculis');
    const description = text(
      'description',
      'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. Lorem Ipsum has been the industry standard dummy text ever since the 1500s and used by everywhere.'
    );
    const stats = object('stats', [
      {
        id: 1,
        majorWords: '98%',
        hightLightWords: 'Praesent',
        text: 'sed placerat erat id consequat scelerisque.'
      },
      {
        id: 2,
        majorWords: '8K+',
        hightLightWords: 'Fusce vitae convallis',
        text: 'tristique accumsan lectus. Morbi laoreet sapien diam.'
      },
      {
        id: 3,
        majorWords: '100K+',
        hightLightWords: 'Duis sed',
        text: 'aliquet ut enim ullamcorper a iaculis nisl porta ut.'
      },
      {
        id: 4,
        majorWords: '12M+',
        hightLightWords: 'Nam ut dolor luctus',
        text: 'orci orci laoreet ipsum, ac lacinia est lectus eu lacus.'
      }
    ]);
    const backgroundImage = text(
      'backgroundImage',
      'https://picsum.photos/1280/720'
    );
    const shift = boolean('shift', false);
    return (
      <Stat4
        majorText={majorText}
        minorText={minorText}
        description={description}
        stats={stats}
        backgroundImage={backgroundImage}
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
