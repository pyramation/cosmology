import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { CardHeading1 } from './CardHeading1';
import { CardHeading2 } from './CardHeading2';
import { CardHeading3 } from './CardHeading3';
import { CardHeading4 } from './CardHeading4';
import { CardHeading5 } from './CardHeading5';
import { CardHeading6 } from './CardHeading6';

storiesOf('Examples/ApplicationUi/CardHeadings', module).add(
  'CardHeading1',
  () => {
    const title = text('title', 'Etiam eleifend');
    const lists = object('lists', [
      {
        id: 1,
        title: 'Aenean elementum erat',
        tag: { color: 'success', text: 'diam id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      },
      {
        id: 2,
        title: 'Morbi porta nibh odio',
        tag: { color: 'primary', text: 'cursus id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      },
      {
        id: 3,
        title: 'Curabitur vel ex et sapien',
        tag: { color: 'info', text: 'porttitor id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      }
    ]);

    return <CardHeading1 title={title} lists={lists} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/CardHeadings', module).add(
  'CardHeading2',
  () => {
    const title = text('title', 'Etiam eleifend');
    const button = text('button', 'Nunc eget volutpat');
    const lists = object('lists', [
      {
        id: 1,
        title: 'Aenean elementum erat',
        tag: { color: 'success', text: 'diam id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      },
      {
        id: 2,
        title: 'Morbi porta nibh odio',
        tag: { color: 'warning', text: 'cursus id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      },
      {
        id: 3,
        title: 'Curabitur vel ex et sapien',
        tag: { color: 'info', text: 'porttitor id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      }
    ]);

    return <CardHeading2 title={title} lists={lists} button={button} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/CardHeadings', module).add(
  'CardHeading3',
  () => {
    const name = text('name', 'FAITH PATE');
    const at = text('at', '@faith_pate');
    const avatar = text('avatar', 'https://thispersondoesnotexist.com/image');
    const buttons = object('button', [
      {
        id: 1,
        icon: 'phone',
        variant: 'secondary',
        text: 'malesuada'
      },
      {
        id: 2,
        icon: 'email',
        variant: 'secondary',
        text: 'placerat'
      }
    ]);
    const lists = object('lists', [
      {
        id: 1,
        title: 'Aenean elementum erat',
        tag: { color: 'success', text: 'diam id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      },
      {
        id: 2,
        title: 'Morbi porta nibh odio',
        tag: { color: 'warning', text: 'cursus id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      },
      {
        id: 3,
        title: 'Curabitur vel ex et sapien',
        tag: { color: 'info', text: 'porttitor id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      }
    ]);

    return (
      <CardHeading3
        name={name}
        at={at}
        avatar={avatar}
        lists={lists}
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

storiesOf('Examples/ApplicationUi/CardHeadings', module).add(
  'CardHeading4',
  () => {
    const title = text('title', 'In mattis libero sit amet felis tincidunt');
    const subTitle = text(
      'subTitle',
      'Maecenas et interdum tellus. Integer vel dignissim elit. Suspendisse at magna nisi. In risus nulla, aliquet a ullamcorper a, auctor eget dolor. '
    );
    const button = text('text', 'Nunc eget volutpat');
    const lists = object('lists', [
      {
        id: 1,
        title: 'Aenean elementum erat',
        tag: { color: 'success', text: 'diam id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      },
      {
        id: 2,
        title: 'Morbi porta nibh odio',
        tag: { color: 'warning', text: 'cursus id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      },
      {
        id: 3,
        title: 'Curabitur vel ex et sapien',
        tag: { color: 'info', text: 'porttitor id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      }
    ]);

    return (
      <CardHeading4
        title={title}
        subTitle={subTitle}
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

storiesOf('Examples/ApplicationUi/CardHeadings', module).add(
  'CardHeading5',
  () => {
    const title = text('title', 'In mattis libero sit amet felis tincidunt');
    const subTitle = text(
      'subTitle',
      'Maecenas et interdum tellus. Integer vel dignissim elit. Suspendisse at magna nisi. In risus nulla, aliquet a ullamcorper a, auctor eget dolor. '
    );
    const lists = object('lists', [
      {
        id: 1,
        title: 'Aenean elementum erat',
        tag: { color: 'success', text: 'diam id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      },
      {
        id: 2,
        title: 'Morbi porta nibh odio',
        tag: { color: 'warning', text: 'cursus id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      },
      {
        id: 3,
        title: 'Curabitur vel ex et sapien',
        tag: { color: 'info', text: 'porttitor id' },
        stats: [
          { id: 1, icon: 'users', name: 'Aliquam' },
          { id: 2, icon: 'geolocation', name: 'Vivamus' }
        ]
      }
    ]);

    return <CardHeading5 title={title} subTitle={subTitle} lists={lists} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/CardHeadings', module).add(
  'CardHeading6',
  () => {
    const avatar = object('avatar', {
      name: 'KADEN SANDERS',
      date: 'October 10 at 12:00 AM',
      image: 'https://thispersondoesnotexist.com/image',
      icon: 'more-vertical'
    });
    const desc = text(
      'desc',
      'Maecenas et interdum tellus. Integer vel dignissim elit. Suspendisse at magna nisi. In risus nulla, aliquet a ullamcorper a, auctor eget dolor. Nam nisl magna, cursus id feugiat eu, pretium id eros. Aenean odio purus, efficitur ut sollicitudin eu,Maecenas et interdum tellus. Integer vel dignissim elit. Suspendisse at magna nisi. In risus nulla, aliquet a ullamcorper a, auctor eget dolor. imperdiet id nisi. Pellentesque tempus lobortis nisl, sed scelerisque ligula pellentesque a.'
    );

    return <CardHeading6 avatar={avatar} desc={desc} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
