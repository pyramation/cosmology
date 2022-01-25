import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { ListFeed1 } from './ListFeed1';
import { ListFeed2 } from './ListFeed2';
import { ListFeed3 } from './ListFeed3';

storiesOf('Examples/ApplicationUi/ListFeeds', module).add(
  'ListFeed1',
  () => {
    const lists = object('lists', [
      {
        id: 1,
        status: {
          icon: 'user',
          color: 'secondary'
        },
        textA: 'Vestibulum a metus purus',
        textB: 'dui interdum elementum',
        date: 'Sep 15'
      },
      {
        id: 2,
        status: {
          icon: 'thumbs-up',
          color: 'primary'
        },
        textA: 'Donec nec ex vel nisl',
        textB: 'pulvinar eros augue vitae',
        date: 'Sep 20'
      },
      {
        id: 3,
        status: {
          icon: 'checked',
          color: 'success'
        },
        textA: 'Aenean vestibulum lobortis',
        textB: 'elementum nulla elit',
        date: 'Sep 24'
      },
      {
        id: 4,
        status: {
          icon: 'thumbs-up',
          color: 'primary'
        },
        textA: 'Etiam volutpat rutrum',
        textB: 'quis maximus elit',
        date: 'Sep 26'
      },
      {
        id: 5,
        status: {
          icon: 'checked',
          color: 'success'
        },
        textA: 'Phasellus ac egestas',
        textB: 'luctus felis bibendum',
        date: 'Oct 4'
      }
    ]);

    return <ListFeed1 lists={lists} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/ListFeeds', module).add(
  'ListFeed2',
  () => {
    const unShuffled = [...Array(70).keys()].splice(0, 8);

    const shuffled = unShuffled
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    const avatars = object('avatars', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[0]}`,
        desc: 'ullamcorper sapien et libero efficitur dignissim',
        time: '1h'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[1]}`,
        desc: 'placerat libero eu lorem consectetur auctor',
        time: '2h'
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[2]}`,
        desc: 'nulla ut turpis vulputate consequat',
        time: '5h'
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[3]}`,
        desc: 'at aliquam risus ligula et ligula',
        time: '1D'
      },
      {
        id: 5,
        author: 'TATE MCGOWAN',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[4]}`,
        desc: 'ac pretium sapien tempor quis',
        time: '5D'
      },
      {
        id: 6,
        author: 'MAE CHAVEZ',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[5]}`,
        desc: 'massa tellus vestibulum ipsum',
        time: '1W'
      },
      {
        id: 7,
        author: 'CLARK CRUZ',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[6]}`,
        desc: 'quis mauris id eros cursus lobortis',
        time: '2W'
      },
      {
        id: 8,
        author: 'MIKE BRYAN',
        authorImage: `https://i.pravatar.cc/300?img=${shuffled[7]}`,
        desc: 'lorem consectetur auctor',
        time: '3W'
      }
    ]);

    return <ListFeed2 avatars={avatars} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/ListFeeds', module).add(
  'ListFeed3',
  () => {
    const data1 = object('data1', {
      author: 'CLARK CRUZ',
      authorImage: 'https://thispersondoesnotexist.com/image',
      icon: 'comment',
      status: 'cursus arcu sit amet blandit facilisis',
      desc:
        'Pellentesque tincidunt, dolor id facilisis viverra, lacus lorem mattis nisi, non posuere nibh odio ut sapien.Cras feugiat, erat quis pulvinar condimentum, quam sem hendrerit velit, in convallis odio odio at lectus. Fusce placerat, ligula sed lobortis tincidunt, turpis urna tempus dolor, sit amet malesuada quam diam consectetur lorem.'
    });

    const data2 = object('data2', {
      author: 'MIKE BRYAN',
      authorImage: 'https://i.pravatar.cc/300',
      icon: 'comment',
      status: 'feugiat urna in fermentum commodo',
      desc:
        'Nunc condimentum elit eget lectus porta, feugiat fringilla felis pretium, vehicula tortor in, congue elit.'
    });

    const active1 = object('active1', {
      icon: 'username',
      name1: 'CLARK CRUZ',
      name2: 'THADDEUS BROWN',
      active: 'vehicula',
      time: '2d ago'
    });

    const active2 = object('active2', {
      icon: 'tag',
      name: 'JACE WYATT',
      active: 'elementum',
      tags: [
        { id: 1, color: 'danger', text: 'Bug' },
        { id: 2, color: 'primary', text: 'Proin' }
      ],
      time: '6h ago'
    });

    return (
      <ListFeed3
        data1={data1}
        data2={data2}
        active1={active1}
        active2={active2}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
