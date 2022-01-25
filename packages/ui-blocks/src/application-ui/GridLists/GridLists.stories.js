import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import { GridList1 } from './GridList1';
import { GridList2 } from './GridList2';
import { GridList3 } from './GridList3';
import { GridList4 } from './GridList4';
import { GridList5 } from './GridList5';
import { GridList6 } from './GridList6';

storiesOf('Examples/ApplicationUi/GridLists', module).add(
  'GridList1',
  () => {
    const button = object('button', [
      { id: 'left', icon: 'mail', text: 'Email' },
      { id: 'right', icon: 'phone', text: 'Call' }
    ]);

    const avatars = object('avatars', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://thispersondoesnotexist.com/image',
        desc: 'ullamcorper sapien et libero efficitur dignissim',
        tag: {
          color: 'success',
          text: 'neque'
        },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://thiscatdoesnotexist.com/',
        desc: 'placerat libero eu lorem consectetur auctor',
        tag: {
          color: 'warning',
          text: 'neque'
        },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://i.pravatar.cc/300',
        desc: 'nulla ut turpis vulputate consequat',
        tag: {
          color: 'danger',
          text: 'neque'
        },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        authorImage: 'https://i.pravatar.cc/310',
        desc: 'at aliquam risus ligula et ligula',
        tag: { color: 'info', text: 'neque' },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      },
      {
        id: 5,
        author: 'TATE MCGOWAN',
        authorImage: 'https://i.pravatar.cc/320',
        desc: 'ac pretium sapien tempor quis',
        tag: {
          color: 'primary',
          text: 'neque'
        },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      },
      {
        id: 6,
        author: 'MAE CHAVEZ',
        authorImage: 'https://i.pravatar.cc/330',
        desc: 'massa tellus vestibulum ipsum',
        tag: {
          color: 'secondary',
          text: 'neque'
        },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      }
    ]);

    return <GridList1 avatars={avatars} button={button} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/GridLists', module).add(
  'GridList2',
  () => {
    const avatars = object('avatars', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://thispersondoesnotexist.com/image',
        desc: 'ullamcorper sapien et libero efficitur dignissim',
        tag: {
          color: 'success',
          text: 'neque'
        },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://thiscatdoesnotexist.com/',
        desc: 'placerat libero eu lorem consectetur auctor',
        tag: {
          color: 'primary',
          text: 'neque'
        },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://i.pravatar.cc/300',
        desc: 'nulla ut turpis vulputate consequat',
        tag: {
          color: 'warning',
          text: 'neque'
        },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        authorImage: 'https://i.pravatar.cc/305',
        desc: 'at aliquam risus ligula et ligula',
        tag: {
          color: 'danger',
          text: 'neque'
        },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      },
      {
        id: 5,
        author: 'TATE MCGOWAN',
        authorImage: 'https://i.pravatar.cc/310',
        desc: 'ac pretium sapien tempor quis',
        tag: {
          color: 'info',
          text: 'neque'
        },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      },
      {
        id: 6,
        author: 'MAE CHAVEZ',
        authorImage: 'https://i.pravatar.cc/315',
        desc: 'massa tellus vestibulum ipsum',
        tag: {
          color: 'secondary',
          text: 'neque'
        },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      },
      {
        id: 7,
        author: 'CLARK CRUZ',
        authorImage: 'https://i.pravatar.cc/320',
        desc: 'quis mauris id eros cursus lobortis',
        tag: {
          color: 'success',
          text: 'neque'
        },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      },
      {
        id: 8,
        author: 'MIKE BRYAN',
        authorImage: 'https://i.pravatar.cc/325',
        desc: 'lorem consectetur auctor',
        tag: {
          color: 'primary',
          text: 'neque'
        },
        button: [
          { btnId: 'left', icon: 'mail', text: 'Email' },
          { btnId: 'right', icon: 'phone', text: 'Call' }
        ]
      }
    ]);

    return <GridList2 avatars={avatars} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/GridLists', module).add(
  'GridList3',
  () => {
    const title = text('title', 'Tincidunt quis');
    const cards = object('cards', [
      {
        id: 1,
        abbreviation: 'CM',
        background: 'blue',
        title: 'Curabitur Maximus',
        desc: 'ullamcorper sapien',
        icon: 'more-vertical'
      },
      {
        id: 2,
        abbreviation: 'VD',
        background: 'orange',
        title: 'Vestibulum Donec',
        desc: 'quis arcu vel odio fermentum rhoncus id commodo',
        icon: 'more-vertical'
      },
      {
        id: 3,
        abbreviation: 'QA',
        background: 'teal',
        title: 'Quisque Aenean',
        desc: 'turpis vulputate',
        icon: 'more-vertical'
      },
      {
        id: 4,
        abbreviation: 'CM',
        background: 'pink',
        title: 'Duis Etiam',
        desc: 'luctus lectus',
        icon: 'more-vertical'
      }
    ]);

    return <GridList3 cards={cards} title={title} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/GridLists', module).add(
  'GridList4',
  () => {
    const avatars = object('avatars', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://thispersondoesnotexist.com/image',
        desc: 'rutrum ligula vitae pharetra ornare'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://thiscatdoesnotexist.com/',
        desc: 'pharetra ligula vitae rutrum'
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://i.pravatar.cc/310',
        desc: 'efficitur eget magna et'
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        authorImage: 'https://i.pravatar.cc/320',
        desc: 'quis nisi vitae dui interdum'
      }
    ]);

    return <GridList4 avatars={avatars} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/GridLists', module).add(
  'GridList5',
  () => {
    const items = object('items', [
      {
        id: 1,
        icon: 'activity',
        color: 'green',
        title: 'Etiam volutpat rutrum enim',
        desc:
          'Sed luctus tortor nec dolor ornare auctor proin a risus dictum, semper ipsum sed, aliquet orci'
      },
      {
        id: 2,
        icon: 'pocket',
        color: 'cyan',
        title: 'Vestibulum tincidunt dolor erat',
        desc:
          'Sed ex ligula, tincidunt quis est at, lacinia laoreet dolor. Phasellus ac egestas nibh.'
      },
      {
        id: 3,
        icon: 'users',
        color: 'purple',
        title: 'Phasellus nec ex nisl',
        desc:
          'Quisque ullamcorper sapien et libero efficitur dignissim. Proin a risus dictum, semper ipsum sed, aliquet orci.'
      },
      {
        id: 4,
        icon: 'circle-change',
        color: 'pink',
        title: 'Vivamus viverra congue sodales',
        desc:
          'Maecenas quis nisi vitae dui interdum elementum. In hac habitasse platea dictumst.'
      },
      {
        id: 5,
        icon: 'duplicate',
        color: 'yellow',
        title: 'Cras ultrices tincidunt neque',
        desc:
          'Pellentesque tincidunt, dolor id facilisis viverra, lacus lorem mattis nisi, non posuere nibh odio ut sapien.'
      },
      {
        id: 6,
        icon: 'flag',
        color: 'orange',
        title: 'Proin a risus dictum',
        desc:
          'Aliquam erat volutpat. Nam pulvinar, dolor vitae consectetur vulputate, augue lacus fringilla nunc, at aliquam risus ligula et ligula.'
      }
    ]);

    return <GridList5 items={items} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/GridLists', module).add(
  'GridList6',
  () => {
    const images = object('images', [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/1280/720',
        title: 'Etiam volutpat rutrum enim',
        size: '3.9 MB'
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/1279/720',
        title: 'Phasellus nec ex nislm',
        size: '5 MB'
      },
      {
        id: 3,
        imageUrl: 'https://picsum.photos/1278/720',
        title: 'Quisque ullamcorper sapien',
        size: '4 MB'
      },
      {
        id: 4,
        imageUrl: 'https://picsum.photos/1277/720',
        title: 'Aliquam erat volutpat',
        size: '4.9 MB'
      },
      {
        id: 5,
        imageUrl: 'https://picsum.photos/1276/720',
        title: 'Vivamus viverra congue sodales',
        size: '4.5 MB'
      },
      {
        id: 6,
        imageUrl: 'https://picsum.photos/1275/720',
        title: 'Donec nec ex vel nisl',
        size: '3.3 MB'
      },
      {
        id: 7,
        imageUrl: 'https://picsum.photos/1274/720',
        title: 'Praesent ultrices Praesent ultrices',
        size: '3 MB'
      },
      {
        id: 8,
        imageUrl: 'https://picsum.photos/1273/720',
        title: 'Maecenas quis nisi vitae',
        size: '3.8 MB'
      }
    ]);

    return <GridList6 images={images} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
