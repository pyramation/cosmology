import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { FlyoutMenu1 } from './FlyoutMenu1';
import { FlyoutMenu2 } from './FlyoutMenu2';
import { FlyoutMenu3 } from './FlyoutMenu3';
import { FlyoutMenu4 } from './FlyoutMenu4';
import { FlyoutMenu5 } from './FlyoutMenu5';
import { FlyoutMenu6 } from './FlyoutMenu6';

storiesOf('Examples/Marketing/FlyoutMenus', module).add(
  'FlyoutMenu1',
  () => {
    const selectOptions = object('selectOptions', [
      { id: 'Suspendisse' },
      { id: 'Bibendum' },
      { id: 'Mauris' }
    ]);

    const company = object('company', {
      title: 'COMPANY',
      lists: [
        {
          id: 1,
          icon: 'facebook',
          name: 'facebook',
          href: '/'
        },
        {
          id: 2,
          icon: 'twitter',
          name: 'twitter',
          href: '/'
        },
        {
          id: 3,
          icon: 'instagram',
          name: 'instagram',
          href: '/'
        },
        {
          id: 4,
          icon: 'youtube',
          name: 'youtube',
          href: '/'
        },
        {
          id: 5,
          icon: 'twitch',
          name: 'twitch',
          href: '/'
        }
      ]
    });

    const resources = object('resources', {
      title: 'RESOURCES',
      lists: [
        {
          id: 1,
          icon: 'css',
          name: 'css',
          href: '/'
        },
        {
          id: 2,
          icon: 'js',
          name: 'js',
          href: '/'
        },
        {
          id: 3,
          icon: 'scss',
          name: 'scss',
          href: '/'
        },
        {
          id: 4,
          icon: 'body',
          name: 'body',
          href: '/'
        }
      ]
    });

    const blogs = object('blogs', {
      title: 'From the blog',
      list: [
        {
          id: 1,
          image: 'https://picsum.photos/1280/720',
          title: 'Mauris vitae justo massa.',
          desc:
            'Nullam venenatis congue eros sit amet malesuada. Ut sit amet mauris sit amet massa cursus vestibulum in eget diam. Vestibulum scelerisque posuere congue. Integer eu tempor arcu. Vivamus et sollicitudin ipsum. Praesent sed sapien quis turpis ultrices molestie nec sollicitudin mauris. In pretium quis mauris eget lacinia.',
          href: '/'
        },
        {
          id: 2,
          image: 'https://picsum.photos/1270/720',
          title: 'Lectus eros laoreet sapien',
          desc:
            'Sed ex mi, lacinia eget ultricies at, sagittis sit amet ligula. Sed in lorem sed dui maximus scelerisque quis nec sapien. Praesent cursus et felis in finibus. Maecenas non ipsum vel tellus vehicula accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          href: '/'
        }
      ],
      link: {
        text: 'View all posts',
        href: '/'
      }
    });

    return (
      <FlyoutMenu1
        selectOptions={selectOptions}
        company={company}
        resources={resources}
        blogs={blogs}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/FlyoutMenus', module).add(
  'FlyoutMenu2',
  () => {
    const selectOptions = object('selectOptions', [
      { id: 'Suspendisse' },
      { id: 'Bibendum' },
      { id: 'Mauris' }
    ]);

    const resources = object('resources', [
      {
        id: 1,
        icon: 'pie-chart',
        name: 'Praesent',
        desc:
          'Nullam eu turpis ac lorem fringilla hendrerit ut ac nunc. Ut tellus velit, cursus pulvinar placerat a, aliquam id risus.',
        link: {
          icon: 'arrow-right',
          text: 'Learn more',
          href: '/'
        }
      },
      {
        id: 2,
        icon: 'single-select',
        name: 'Facilisis',
        desc:
          'Donec scelerisque, eros ac elementum molestie, mauris nulla sodales mauris, a accumsan nunc lorem a arcu.',
        link: {
          icon: 'arrow-right',
          text: 'Learn more',
          href: '/'
        }
      },
      {
        id: 3,
        icon: 'security',
        name: 'Aliquet',
        desc:
          'Ut eleifend consequat tortor, at sodales est hendrerit eget. Nunc eleifend erat efficitur, lacinia mi quis, blandit mauris.',
        link: {
          icon: 'arrow-right',
          text: 'Learn more',
          href: '/'
        }
      },
      {
        id: 4,
        icon: 'grid',
        name: 'Vulputate',
        desc:
          'Sed ac mi ipsum. Integer elit sapien, vehicula ut pulvinar nec, egestas id ligula. Suspendisse potenti.',
        link: {
          icon: 'arrow-right',
          text: 'Learn more',
          href: '/'
        }
      }
    ]);

    const contacts = object('contacts', [
      {
        id: 1,
        icon: 'play-circle',
        title: 'Mauris vitae justo massa.',
        href: '/'
      },
      {
        id: 2,
        icon: 'check-circle',
        title: 'Lectus eros laoreet sapien',
        href: '/'
      },
      {
        id: 3,
        icon: 'phone',
        title: 'Lectus eros laoreet sapien',
        href: '/'
      }
    ]);

    return (
      <FlyoutMenu2
        selectOptions={selectOptions}
        resources={resources}
        contacts={contacts}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/FlyoutMenus', module).add(
  'FlyoutMenu3',
  () => {
    const selectOptions = object('selectOptions', [
      { id: 'Suspendisse' },
      { id: 'Bibendum' },
      { id: 'Mauris' }
    ]);

    const resources = object('resources', [
      {
        id: 1,
        name: 'Praesent',
        desc:
          'Nullam eu turpis ac lorem fringilla hendrerit ut ac nunc. Ut tellus velit, cursus pulvinar placerat a, aliquam id risus.',
        href: '/'
      },
      {
        id: 2,
        name: 'Facilisis',
        desc:
          'Donec scelerisque, eros ac elementum molestie, mauris nulla sodales mauris, a accumsan nunc lorem a arcu.',
        href: '/'
      },
      {
        id: 3,
        name: 'Aliquet',
        desc:
          'Ut eleifend consequat tortor, at sodales est hendrerit eget. Nunc eleifend erat efficitur, lacinia mi quis, blandit mauris.',
        href: '/'
      },
      {
        id: 4,
        name: 'Vulputate',
        desc:
          'Sed ac mi ipsum. Integer elit sapien, vehicula ut pulvinar nec, egestas id ligula. Suspendisse potenti.',
        href: '/'
      },
      {
        id: 5,
        name: 'Eleifend',
        desc: 'Curabitur mattis libero nisl, eu tincidunt odio laoreet in. ',
        href: '/'
      }
    ]);

    return <FlyoutMenu3 selectOptions={selectOptions} resources={resources} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/FlyoutMenus', module).add(
  'FlyoutMenu4',
  () => {
    const selectOptions = object('selectOptions', [
      { id: 'Suspendisse' },
      { id: 'Bibendum' },
      { id: 'Mauris' }
    ]);

    const resources = object('resources', [
      {
        id: 1,
        name: 'Praesent',
        icon: 'pie-chart',
        desc:
          'Nullam eu turpis ac lorem fringilla hendrerit ut ac nunc. Ut tellus velit, cursus pulvinar placerat a, aliquam id risus.',
        href: '/'
      },
      {
        id: 2,
        name: 'Facilisis',
        icon: 'single-select',
        desc:
          'Donec scelerisque, eros ac elementum molestie, mauris nulla sodales mauris, a accumsan nunc lorem a arcu.',
        href: '/'
      },
      {
        id: 3,
        name: 'Aliquet',
        icon: 'security',
        desc:
          'Ut eleifend consequat tortor, at sodales est hendrerit eget. Nunc eleifend erat efficitur, lacinia mi quis, blandit mauris.',
        href: '/'
      },
      {
        id: 4,
        name: 'Vulputate',
        icon: 'grid',
        desc:
          'Sed ac mi ipsum. Integer elit sapien, vehicula ut pulvinar nec, egestas id ligula. Suspendisse potenti.',
        href: '/'
      },
      {
        id: 5,
        name: 'Eleifend',
        icon: 'refresh-ccw',
        desc: 'Curabitur mattis libero nisl, eu tincidunt odio laoreet in. ',
        href: '/'
      }
    ]);

    const contacts = object('contacts', [
      {
        id: 1,
        icon: 'play-circle',
        title: 'Mauris vitae massa.',
        href: '/'
      },
      {
        id: 2,
        icon: 'phone',
        title: 'Lectus laoreet sapien.',
        href: '/'
      }
    ]);

    return (
      <FlyoutMenu4
        selectOptions={selectOptions}
        resources={resources}
        contacts={contacts}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/FlyoutMenus', module).add(
  'FlyoutMenu5',
  () => {
    const selectOptions = object('selectOptions', [
      { id: 'Suspendisse' },
      { id: 'Bibendum' },
      { id: 'Mauris' }
    ]);

    const resources = object('resources', [
      {
        id: 1,
        name: 'Praesent',
        icon: 'pie-chart',
        desc:
          'Nullam eu turpis ac lorem fringilla hendrerit ut ac nunc. Ut tellus velit, cursus pulvinar placerat a, aliquam id risus.',
        href: '/'
      },
      {
        id: 2,
        name: 'Facilisis',
        icon: 'single-select',
        desc:
          'Donec scelerisque, eros ac elementum molestie, mauris nulla sodales mauris, a accumsan nunc lorem a arcu.',
        href: '/'
      },
      {
        id: 3,
        name: 'Aliquet',
        icon: 'security',
        desc:
          'Ut eleifend consequat tortor, at sodales est hendrerit eget. Nunc eleifend erat efficitur, lacinia mi quis, blandit mauris.',
        href: '/'
      },
      {
        id: 4,
        name: 'Vulputate',
        icon: 'grid',
        desc:
          'Sed ac mi ipsum. Integer elit sapien, vehicula ut pulvinar nec, egestas id ligula. Suspendisse potenti.',
        href: '/'
      }
    ]);

    const links = object('links', {
      title: 'Recent Posts',
      posts: [
        {
          id: 1,
          title: 'Mauris vitae justo massa.',
          href: '/'
        },
        {
          id: 2,
          title: 'Lectus eros laoreet sapien',
          href: '/'
        },
        {
          id: 3,
          title: 'Praesent pulvinar eleifend.',
          href: '/'
        }
      ],
      link: {
        icon: 'arrow-right',
        text: 'View all posts',
        href: '/'
      }
    });

    return (
      <FlyoutMenu5
        selectOptions={selectOptions}
        resources={resources}
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

storiesOf('Examples/Marketing/FlyoutMenus', module).add(
  'FlyoutMenu6',
  () => {
    const selectOptions = object('selectOptions', [
      { id: 'Suspendisse' },
      { id: 'Bibendum' },
      { id: 'Mauris' }
    ]);

    const resources = object('resources', [
      {
        id: 1,
        name: 'Praesent',
        icon: 'pie-chart',
        desc:
          'Nullam eu turpis ac lorem fringilla hendrerit ut ac nunc. Ut tellus velit, cursus pulvinar placerat a, aliquam id risus.',
        href: '/'
      },
      {
        id: 2,
        name: 'Facilisis',
        icon: 'single-select',
        desc:
          'Donec scelerisque, eros ac elementum molestie, mauris nulla sodales mauris, a accumsan nunc lorem a arcu.',
        href: '/'
      },
      {
        id: 3,
        name: 'Aliquet',
        icon: 'security',
        desc:
          'Ut eleifend consequat tortor, at sodales est hendrerit eget. Nunc eleifend erat efficitur, lacinia mi quis, blandit mauris.',
        href: '/'
      },
      {
        id: 4,
        name: 'Vulputate',
        icon: 'grid',
        desc:
          'Sed ac mi ipsum. Integer elit sapien, vehicula ut pulvinar nec, egestas id ligula. Suspendisse potenti.',
        href: '/'
      },
      {
        id: 5,
        name: 'Eleifend',
        icon: 'refresh-ccw',
        desc: 'Curabitur mattis libero nisl, eu tincidunt odio laoreet in.',
        href: '/'
      },
      {
        id: 6,
        name: 'Lacus',
        icon: 'workspace',
        desc:
          'Aenean volutpat auctor turpis at dignissim. Curabitur mattis libero nisl, eu tincidunt odio laoreet in.',
        href: '/'
      }
    ]);

    const news = object('news', {
      title: 'Pharetra',
      desc:
        'Aliquam eget augue condimentum, posuere mauris quis, euismod purus.',
      tag: {
        status: 'primary',
        text: 'New'
      }
    });

    return (
      <FlyoutMenu6
        selectOptions={selectOptions}
        resources={resources}
        news={news}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
