import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { SectionHeading1 } from './SectionHeading1';
import { SectionHeading2 } from './SectionHeading2';
import { SectionHeading3 } from './SectionHeading3';
import { SectionHeading4 } from './SectionHeading4';
import { SectionHeading5 } from './SectionHeading5';
import { SectionHeading6 } from './SectionHeading6';
import { SectionHeading7 } from './SectionHeading7';
import { SectionHeading8 } from './SectionHeading8';
import { SectionHeading9 } from './SectionHeading9';
import { SectionHeading10 } from './SectionHeading10';

storiesOf('Examples/ApplicationUi/SectionHeadings', module).add(
  'SectionHeading1',
  () => {
    const title = text('title', 'Proin ligula eu leo');

    return <SectionHeading1 title={title} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/SectionHeadings', module).add(
  'SectionHeading2',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const desc = text(
      'text',
      'Donec aliquet nulla dolor, id tincidunt ex sagittis in. Nam ac felis libero. Aenean auctor vulputate diam molestie rutrum. Maecenas viverra elit id elit luctus sodales.'
    );

    return <SectionHeading2 title={title} desc={desc} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/SectionHeadings', module).add(
  'SectionHeading3',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const buttons = object('buttons', [
      { id: 1, text: 'Share', variant: 'secondary' },
      { id: 2, text: 'Create', variant: 'primary' }
    ]);

    return <SectionHeading3 title={title} buttons={buttons} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/SectionHeadings', module).add(
  'SectionHeading4',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const button = text('text', 'Donec aliquet nulla');

    return <SectionHeading4 title={title} button={button} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/SectionHeadings', module).add(
  'SectionHeading5',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const search = object('search', {
      iconLeft: 'search',
      text: 'Sit amet condimentum',
      list: [
        {
          id: 1,
          icon: 'sunrise',
          text: 'Duis sit amet condimentum ligula eu leo'
        },
        { id: 2, icon: 'sunset', text: 'Vivamus' }
      ]
    });

    return <SectionHeading5 title={title} search={search} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/SectionHeadings', module).add(
  'SectionHeading6',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const links = object('search', [
      { id: 1, text: 'Aliquam' },
      { id: 2, text: 'Bibendum' },
      { id: 3, text: 'Cras', active: true },
      { id: 4, text: 'Duis' },
      { id: 5, text: 'Etiam' }
    ]);

    return <SectionHeading6 title={title} links={links} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/SectionHeadings', module).add(
  'SectionHeading7',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const links = object('search', [
      { id: 1, text: 'Aliquam' },
      { id: 2, text: 'Bibendum' },
      { id: 3, text: 'Cras', active: true },
      { id: 4, text: 'Duis' },
      { id: 5, text: 'Etiam' }
    ]);
    const buttons = object('buttons', [
      { id: 1, text: 'Share', variant: 'secondary' },
      { id: 2, text: 'Create', variant: 'primary' }
    ]);

    return <SectionHeading7 title={title} links={links} buttons={buttons} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/SectionHeadings', module).add(
  'SectionHeading8',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const links = object('search', [
      { id: 1, text: 'Aliquam', active: true },
      { id: 2, text: 'Bibendum' }
    ]);

    return <SectionHeading8 title={title} links={links} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/SectionHeadings', module).add(
  'SectionHeading9',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const subtitle = text('search', 'at felis libero');

    return <SectionHeading9 title={title} subtitle={subtitle} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/SectionHeadings', module).add(
  'SectionHeading10',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const desc = text('desc', 'Sed lacinia enim ac tincidunt porttitor');
    const icon = text('icon', 'more-vertical');
    const tag = object('tags', {
      text: 'Fusce',
      color: 'palette.success.base'
    });

    return <SectionHeading10 title={title} desc={desc} icon={icon} tag={tag} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
