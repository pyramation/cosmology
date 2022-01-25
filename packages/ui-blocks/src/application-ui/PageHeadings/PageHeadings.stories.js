import React from 'react';
import { storiesOf } from '@storybook/react';
import { array, object, text } from '@storybook/addon-knobs';
import { PageHeading1 } from './PageHeading1';
import { PageHeading2 } from './PageHeading2';
import { PageHeading3 } from './PageHeading3';
import { PageHeading4 } from './PageHeading4';
import { PageHeading5 } from './PageHeading5';
import { PageHeading6 } from './PageHeading6';
import { PageHeading7 } from './PageHeading7';
import { PageHeading8 } from './PageHeading8';
import { PageHeading9 } from './PageHeading9';
import { PageHeading10 } from './PageHeading10';
import { PageHeading11 } from './PageHeading11';

storiesOf('Examples/ApplicationUi/PageHeadings', module).add(
  'PageHeading1',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const stats = object('stats', [
      { id: 1, icon: 'activity', text: 'tincidunt porttitor' },
      { id: 2, icon: 'home', text: 'consectetur' },
      { id: 3, icon: 'dollar-sign', text: '$120k - $140k' },
      { id: 4, icon: 'calendar', text: 'Closing on February 28, 2020' }
    ]);
    const buttons = object('buttons', [
      { id: 'edit', icon: 'edit', text: 'Edit', variant: 'secondary' },
      { id: 'view', icon: 'eye', text: 'View', variant: 'secondary' },
      { id: 'submit', icon: 'checked', text: 'Submit', variant: 'primary' }
    ]);

    return <PageHeading1 title={title} stats={stats} buttons={buttons} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/PageHeadings', module).add(
  'PageHeading2',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const buttons = object('buttons', [
      { id: 1, text: 'Edit', variant: 'secondary' },
      { id: 2, text: 'Submit', variant: 'primary' }
    ]);

    return <PageHeading2 title={title} buttons={buttons} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/PageHeadings', module).add(
  'PageHeading3',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const background = text('background', 'blackAlpha.800');
    const buttons = object('buttons', [
      { id: 1, text: 'Edit', bg: '#4A5568' },
      { id: 2, text: 'Submit', variant: 'primary' }
    ]);

    return (
      <PageHeading3 title={title} background={background} buttons={buttons} />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/PageHeadings', module).add(
  'PageHeading4',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const breadcrumbs = object('breadcrumbs', [
      { id: 1, text: 'Aliquam', href: '/' },
      { id: 2, text: 'Bytes', href: '/' },
      { id: 3, text: 'Curabitur', href: '/' }
    ]);
    const buttons = object('buttons', [
      { id: 1, text: 'Edit', variant: 'secondary' },
      { id: 2, text: 'Submit', variant: 'primary' }
    ]);

    return (
      <PageHeading4 title={title} breadcrumbs={breadcrumbs} buttons={buttons} />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/PageHeadings', module).add(
  'PageHeading5',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const breadcrumbs = object('breadcrumbs', [
      { id: 1, text: 'Aliquam', href: '/' },
      { id: 2, text: 'Bytes', href: '/' },
      { id: 3, text: 'Curabitur', href: '/' }
    ]);
    const background = text('background', 'blackAlpha.800');
    const buttons = object('buttons', [
      { id: 1, text: 'Edit', bg: '#4A5568' },
      { id: 2, text: 'Submit', variant: 'primary' }
    ]);

    return (
      <PageHeading5
        title={title}
        background={background}
        breadcrumbs={breadcrumbs}
        buttons={buttons}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/PageHeadings', module).add(
  'PageHeading6',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const background = text('background', 'blackAlpha.800');
    const stats = object('stats', [
      { id: 1, icon: 'activity', text: 'tincidunt porttitor' },
      { id: 2, icon: 'home', text: 'consectetur' },
      { id: 3, icon: 'dollar-sign', text: '$120k - $140k' },
      { id: 4, icon: 'calendar', text: 'Closing on February 28, 2020' }
    ]);
    const buttons = object('buttons', [
      {
        id: 'edit',
        icon: 'edit',
        text: 'Edit',
        bg: '#4A5568'
      },
      {
        id: 'view',
        icon: 'eye',
        text: 'View',
        bg: '#4A5568'
      },
      { id: 'submit', icon: 'checked', text: 'Submit', variant: 'primary' }
    ]);

    return (
      <PageHeading6
        title={title}
        stats={stats}
        background={background}
        buttons={buttons}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/PageHeadings', module).add(
  'PageHeading7',
  () => {
    const name = text('name', 'MAXWELL ROWE');
    const avatar = text('avatar', 'https://thispersondoesnotexist.com/image');
    const backgroundImage = text(
      'backgroundImage',
      'https://picsum.photos/1280/720'
    );
    const buttons = object('buttons', [
      { id: 1, icon: 'mail', text: 'Message', variant: 'secondary' },
      { id: 2, icon: 'phone', text: 'Call', variant: 'secondary' }
    ]);

    return (
      <PageHeading7
        name={name}
        avatar={avatar}
        backgroundImage={backgroundImage}
        buttons={buttons}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/PageHeadings', module).add(
  'PageHeading8',
  () => {
    const name = text('name', 'JAMISON SHAW');
    const avatar = text('avatar', 'https://thispersondoesnotexist.com/image');
    const desc = object('text', {
      text1: 'Duis at',
      text2: 'amet consectetur lorem',
      text3: 'on February 28, 2020'
    });
    const buttons = object('buttons', [
      { id: 1, text: 'Quisque', variant: 'secondary' },
      { id: 2, text: 'Nullam a ante', variant: 'primary' }
    ]);

    return (
      <PageHeading8 name={name} avatar={avatar} desc={desc} buttons={buttons} />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/PageHeadings', module).add(
  'PageHeading9',
  () => {
    const name = text('name', 'CHLOE MACIAS');
    const avatar = text('avatar', 'https://thispersondoesnotexist.com/image');
    const desc = object('text', {
      text1: 'Duis at',
      text2: 'sed viverra erat consequat'
    });
    const button = object('buttons', {
      text: 'Quisque elit',
      variant: 'secondary'
    });
    const lists = object('lists', [
      { id: 1, number: 12, text: 'Proin id diam eu tortor' },
      { id: 2, number: 5, text: 'Fusce molestie ligula' },
      { id: 3, number: 20, text: 'Nunc rhoncus nisl' }
    ]);

    return (
      <PageHeading9
        name={name}
        avatar={avatar}
        desc={desc}
        button={button}
        lists={lists}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/PageHeadings', module).add(
  'PageHeading10',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const breadcrumbs = array('breadcrumbs', [
      { id: 1, text: 'Duis', href: '/' },
      { id: 2, text: 'Etiam', href: '/' }
    ]);
    const stats = object('stats', [
      { id: 1, icon: 'activity', text: 'tincidunt porttitor' },
      { id: 2, icon: 'home', text: 'consectetur' },
      { id: 3, icon: 'dollar-sign', text: '$120k - $140k' },
      { id: 4, icon: 'calendar', text: 'Closing on February 28, 2020' }
    ]);
    const buttons = object('buttons', [
      { id: 'edit', icon: 'edit', text: 'Edit', variant: 'secondary' },
      { id: 'view', icon: 'eye', text: 'View', variant: 'secondary' },
      { id: 'submit', icon: 'checked', text: 'Submit', variant: 'primary' }
    ]);

    return (
      <PageHeading10
        title={title}
        breadcrumbs={breadcrumbs}
        stats={stats}
        buttons={buttons}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/PageHeadings', module).add(
  'PageHeading11',
  () => {
    const title = text('title', 'Proin ligula eu leo');
    const breadcrumbs = array('breadcrumbs', [
      { id: 1, text: 'Duis', href: '/' },
      { id: 2, text: 'Etiam', href: '/' }
    ]);
    const background = text('background', 'blackAlpha.800');
    const stats = object('stats', [
      { id: 1, icon: 'activity', text: 'tincidunt porttitor' },
      { id: 2, icon: 'home', text: 'consectetur' },
      { id: 3, icon: 'dollar-sign', text: '$120k - $140k' },
      { id: 4, icon: 'calendar', text: 'Closing on February 28, 2020' }
    ]);
    const buttons = object('buttons', [
      {
        id: 'edit',
        icon: 'edit',
        text: 'Edit',
        bg: '#4A5568'
      },
      {
        id: 'view',
        icon: 'eye',
        text: 'View',
        bg: '#4A5568'
      },
      { id: 'submit', icon: 'checked', text: 'Submit', variant: 'primary' }
    ]);

    return (
      <PageHeading11
        title={title}
        background={background}
        breadcrumbs={breadcrumbs}
        stats={stats}
        buttons={buttons}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
