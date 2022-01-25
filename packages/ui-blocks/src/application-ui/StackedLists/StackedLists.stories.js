import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { StackedList1 } from './StackedList1';
import { StackedList2 } from './StackedList2';
import { StackedList3 } from './StackedList3';
import { StackedList4 } from './StackedList4';
import { StackedList5 } from './StackedList5';
import { StackedList6 } from './StackedList6';
import { StackedList7 } from './StackedList7';
import { StackedList8 } from './StackedList8';

storiesOf('Examples/ApplicationUi/StackedLists', module).add(
  'StackedList1',
  () => {
    const avatars = object('avatars', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://thispersondoesnotexist.com/image',
        email: '5satya@ettatct.com'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://thiscatdoesnotexist.com/',
        email: '5satya@plussmail.com'
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://i.pravatar.cc/300',
        email: '5satya@imos.site'
      }
    ]);

    return <StackedList1 avatars={avatars} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLists', module).add(
  'StackedList2',
  () => {
    const avatars = object('avatars', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://thispersondoesnotexist.com/image',
        email: {
          icon: 'mail',
          text: '5saty5satya5satya5satyaa@ettatct.com'
        },
        date: 'Applied on January 7, 2020',
        status: {
          icon: 'circle-check',
          iconColor: 'green.300',
          color: 'green.700',
          text: 'Aenean cursus arcu facilisis'
        },
        listIcon: 'chevron-right'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://thiscatdoesnotexist.com/',
        email: {
          icon: 'mail',
          text: '5satya@plussmail.com'
        },
        date: 'Applied on January 7, 2020',
        status: {
          icon: 'circle-check',
          iconColor: 'green.300',
          color: 'green.700',
          text: 'Aenean cursus arcu facilisis'
        },
        listIcon: 'chevron-right'
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://i.pravatar.cc/300',
        email: {
          icon: 'mail',
          text: '5satya@imos.site'
        },
        date: 'Applied on January 7, 2020',
        status: {
          icon: 'circle-check',
          iconColor: 'green.300',
          color: 'green.700',
          text: 'Aenean cursus arcu facilisis'
        },
        listIcon: 'chevron-right'
      }
    ]);

    return <StackedList2 avatars={avatars} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLists', module).add(
  'StackedList3',
  () => {
    const avatarGroups = object('avatarGroups', [
      {
        id: 1,
        occupation: 'Occupation',
        desc: 'facilisis magna id aliquam',
        date: {
          icon: 'calendar',
          text: 'Closing on January 7, 2020'
        },
        avatars: [
          { id: 1, authorImage: 'https://thiscatdoesnotexist.com/' },
          { id: 2, authorImage: 'https://thispersondoesnotexist.com/image' },
          { id: 3, authorImage: 'https://thishorsedoesnotexist.com/' },
          { id: 4, authorImage: 'https://thisartworkdoesnotexist.com/' }
        ],
        listIcon: 'chevron-right'
      },
      {
        id: 2,
        occupation: 'Tempor',
        desc: 'sem eget ex efficitur maximus quis',
        date: {
          icon: 'calendar',
          text: 'Closing on January 7, 2020'
        },
        avatars: [
          { id: 1, authorImage: 'https://i.pravatar.cc/300' },
          { id: 2, authorImage: 'https://i.pravatar.cc/310' },
          { id: 3, authorImage: 'https://i.pravatar.cc/320' }
        ],
        listIcon: 'chevron-right'
      },
      {
        id: 3,
        occupation: 'Tempor',
        desc: 'a velit pharetra',
        date: {
          icon: 'calendar',
          text: 'Closing on January 7, 2020'
        },
        avatars: [
          { id: 1, authorImage: 'https://i.pravatar.cc/330' },
          { id: 2, authorImage: 'https://i.pravatar.cc/340' },
          { id: 3, authorImage: 'https://i.pravatar.cc/350' },
          { id: 4, authorImage: 'https://i.pravatar.cc/360' },
          { id: 5, authorImage: 'https://i.pravatar.cc/370' }
        ],
        listIcon: 'chevron-right'
      }
    ]);

    return <StackedList3 avatarGroups={avatarGroups} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLists', module).add(
  'StackedList4',
  () => {
    const avatarGroups = object('avatarGroups', [
      {
        id: 1,
        title: 'Occupation',
        status: [
          {
            id: 1,
            icon: 'users',
            text: 'aliquam'
          },
          {
            id: 2,
            icon: 'geolocation',
            text: 'blandit'
          }
        ],
        date: {
          icon: 'calendar',
          text: 'Closing on January 7, 2020'
        },
        tag: {
          color: 'palette.success.base',
          text: 'Nulla'
        }
      },
      {
        id: 2,
        title: 'Tempor',
        status: [
          {
            id: 1,
            icon: 'users',
            text: 'aliquam'
          },
          {
            id: 2,
            icon: 'geolocation',
            text: 'blandit'
          }
        ],
        date: {
          icon: 'calendar',
          text: 'Closing on January 7, 2020'
        },
        tag: {
          color: 'purple.500',
          text: 'Quisque'
        }
      },
      {
        id: 3,
        title: 'Tempor',
        status: [
          {
            id: 1,
            icon: 'users',
            text: 'aliquam'
          },
          {
            id: 2,
            icon: 'geolocation',
            text: 'blandit'
          }
        ],
        date: {
          icon: 'calendar',
          text: 'Closing on January 7, 2020'
        },
        tag: {
          color: 'palette.info.base',
          text: 'Suspendisse'
        }
      }
    ]);

    return <StackedList4 avatarGroups={avatarGroups} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLists', module).add(
  'StackedList5',
  () => {
    const avatarA = object('avatarA', [
      {
        id: 1,
        author: 'ARIANA HUGHES',
        authorImage: 'https://i.pravatar.cc/301',
        email: 'Rephy1959@armyspy.com'
      },
      {
        id: 2,
        author: 'ABRAM CALLAHAN',
        authorImage: 'https://i.pravatar.cc/302',
        email: 'Livelyins1984@dayrep.com'
      },
      {
        id: 3,
        author: 'ADELAIDE WAGNER',
        authorImage: 'https://i.pravatar.cc/303',
        email: 'Lade1972@einrot.com'
      }
    ]);
    const avatarB = object('avatarB', [
      {
        id: 1,
        author: 'BENJAMIN MENDEZ',
        authorImage: 'https://i.pravatar.cc/304',
        email: '5satya@ettatct.com'
      },
      {
        id: 2,
        author: 'BROOKLYN SAWYER',
        authorImage: 'https://i.pravatar.cc/305',
        email: 'Frompal43@einrot.com'
      },
      {
        id: 3,
        author: 'BAYLEE GARRISON',
        authorImage: 'https://i.pravatar.cc/306',
        email: 'Hons1979@fleckens.hu'
      },
      {
        id: 4,
        author: 'BLAKE GARDNER',
        authorImage: 'https://i.pravatar.cc/307',
        email: 'Womenthe1953@gustr.com'
      }
    ]);

    return <StackedList5 avatarA={avatarA} avatarB={avatarB} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLists', module).add(
  'StackedList6',
  () => {
    const link = object('link', {
      href: '/',
      text: 'View all'
    });

    const avatars = object('avatars', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://i.pravatar.cc/300',
        at: '@ettatct',
        button: {
          href: '/',
          text: 'View'
        }
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://thiscatdoesnotexist.com/',
        at: '@plussmail',
        button: {
          href: '/',
          text: 'View'
        }
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://i.pravatar.cc/310',
        at: '@imos',
        button: {
          href: '/',
          text: 'View'
        }
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        authorImage: 'https://i.pravatar.cc/320',
        at: '@hasellus',
        button: {
          href: '/',
          text: 'View'
        }
      }
    ]);

    return <StackedList6 avatars={avatars} link={link} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLists', module).add(
  'StackedList7',
  () => {
    const button = object('button', {
      href: '/',
      text: 'View'
    });

    const lists = object('lists', [
      {
        id: 1,
        title: 'Sed sit amet orci in augue dapibus',
        desc:
          'Quisque sit amet dolor suscipit, pretium sem vel, elementum elit. Suspendisse elit elit, egestas vel neque nec, tincidunt consequat diam. In fermentum quis massa a ultricies. Aliquam tempor non diam ac rutrum. Maecenas eget lectus mattis, molestie massa aliquet, pulvinar nisl. Duis consectetur, eros sodales blandit volutpat, ipsum dolor mattis metus, ut molestie enim est ut arcu. Nam gravida rhoncus vestibulum. Cras tempus vel odio ut porttitor. Integer fringilla purus ut quam varius iaculis at ac enim. Suspendisse et magna a mi consequat sollicitudin.'
      },
      {
        id: 2,
        title: 'Pellentesque feugiat urna in fermentum',
        desc:
          'Curabitur ac tellus tincidunt, vehicula tortor in, congue elit, facilisis magna id aliquam condimentum, rhoncus ligula ac, facilisis nisi Suspendisse elit elit, egestas vel neque nec, tincidunt consequat diam. In fermentum quis massa a ultricies. Aliquam tempor non diam ac rutrum. Maecenas eget lectus mattis, molestie massa aliquet, pulvinar nisl. Duis consectetur, eros sodales blandit volutpat, ipsum dolor mattis metus, ut molestie enim est ut arcu. Nam gravida rhoncus vestibulum. Cras tempus vel odio ut porttitor. Integer fringilla purus ut quam varius iaculis at ac enim. Suspendisse et magna a mi consequat sollicitudin.'
      },
      {
        id: 3,
        title: 'Nunc non nunc elementum',
        desc:
          'Sed sit amet orci in augue dapibus lobortis eu eu risus, donec a velit pharetra, rhoncus ligula ac, facilisis nisi In fermentum quis massa a ultricies. Aliquam tempor non diam ac rutrum. Maecenas eget lectus mattis, molestie massa aliquet, pulvinar nisl. Duis consectetur, eros sodales blandit volutpat, ipsum dolor mattis metus, ut molestie enim est ut arcu. Nam gravida rhoncus vestibulum. Cras tempus vel odio ut porttitor. Integer fringilla purus ut quam varius iaculis at ac enim. Suspendisse et magna a mi consequat sollicitudin.'
      }
    ]);

    return <StackedList7 button={button} lists={lists} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/StackedLists', module).add(
  'StackedList8',
  () => {
    const lists = object('lists', [
      {
        id: 1,
        title: 'Sed sit amet orci in augue dapibus',
        subTitle:
          'Nullam porttitor metus pulvinar orci congue, in ullamcorper nulla accumsan.',
        desc:
          'Etiam congue tristique dignissim. Sed id dapibus dolor. Phasellus ullamcorper a lorem a sodales. Vestibulum molestie nunc vitae quam scelerisque, et interdum metus efficitur. Aliquam erat volutpat. Maecenas finibus lectus efficitur dictum tempor. Donec ac consectetur nulla. Sed turpis metus, bibendum in aliquet sit amet, ultrices et felis.',
        date: '1d age'
      },
      {
        id: 2,
        title: 'Pellentesque feugiat urna in fermentum',
        subTitle:
          'Duis varius neque sollicitudin nulla tempus, nec hendrerit nulla convallis',
        desc:
          'Ut non erat magna. Vestibulum accumsan, erat in elementum faucibus, ligula ligula molestie velit, vitae mattis ligula sem eleifend orci. Fusce ipsum quam, congue sit amet pulvinar at, rhoncus ut nulla. Morbi feugiat nec odio sed ornare. Morbi vel mi auctor, gravida velit sit amet, elementum est. Aliquam erat volutpat.',
        date: '1d age'
      },
      {
        id: 3,
        title: 'Nunc non nunc elementum',
        subTitle:
          'Sed laoreet est id cursus egestas. Maecenas venenatis orci eget nisl scelerisque malesuada',
        desc:
          'Nullam et dapibus ligula, ut gravida erat. Phasellus condimentum sapien urna, ut aliquam turpis consequat vitae. Sed porta erat vitae urna faucibus, id porttitor leo imperdiet. Mauris auctor eleifend neque in imperdiet. Sed imperdiet feugiat felis id pulvinar. Aliquam elementum felis dapibus felis tempus dapibus. Etiam malesuada erat maximus, mattis tortor at, lacinia purus.',
        date: '1d age'
      },
      {
        id: 4,
        title: 'Etiam placerat libero eu lorem',
        subTitle:
          'Curabitur eget maximus tortor. Mauris varius tristique mauris nec tempor',
        desc:
          'Vestibulum tellus elit, ultricies eu diam vel, convallis iaculis odio. Cras ut nisl ut est sagittis maximus. Aliquam blandit elementum nisi a ultrices. Vestibulum rutrum libero nisl, ut auctor sapien aliquam nec. Mauris auctor aliquam consectetur. Nunc sed nulla libero. Proin quis nibh molestie, volutpat velit nec, dignissim risus. Quisque ante elit, laoreet eget luctus a, rutrum id sem.',
        date: '1d age'
      }
    ]);

    return <StackedList8 lists={lists} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
