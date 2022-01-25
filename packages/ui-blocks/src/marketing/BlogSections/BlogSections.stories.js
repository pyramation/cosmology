import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import { BlogSection1 } from './BlogSection1';
import { BlogSection2 } from './BlogSection2';
import { BlogSection3 } from './BlogSection3';

storiesOf('Examples/Marketing/BlogSections', module).add(
  'BlogSection1',
  () => {
    const majorText = text('majorText', 'Maecenas');
    const minorText = text(
      'minorText',
      'Mauris a ipsum in quam ullamcorper varius tristique nunc at augue venenatis, vel ultrices odio ornare.'
    );
    const placeholder = text('input', 'enter your email');
    const button = text('button', 'Notify me');
    const blogs = object('blogs', [
      {
        id: 1,
        data: 'November 17, 2021',
        title: 'Phasellus accumsan lectus vitae metus venenatis bibendum',
        desc:
          'Curabitur sit amet vulputate diam. Vestibulum vulputate mattis mi, ultrices fermentum nisi maximus non. Vestibulum id iaculis augue. Sed libero erat, vestibulum a luctus vel, facilisis at lorem. Mauris euismod tellus sagittis est imperdiet fermentum.',
        link: {
          href: '/',
          text: 'Read More'
        }
      },
      {
        id: 2,
        data: 'November 15, 2021',
        title: 'Fusce accumsan mi vitae neque faucibus luctus',
        desc:
          'Pellentesque pretium, nunc sit amet blandit vestibulum, diam augue porta quam, varius ultricies diam leo ac diam. Phasellus scelerisque facilisis scelerisque.',
        link: {
          href: '/',
          text: 'Read More'
        }
      },
      {
        id: 3,
        data: 'July 23 2021',
        title:
          'Nullam eu nisl vestibulum tortor finibus placerat sollicitudin eget eros',
        desc:
          'Integer sed ultricies ex. Fusce purus lectus, placerat eu lacinia in, facilisis non ex. Phasellus in velit ultrices, volutpat ante a, porta sapien.',
        link: {
          href: '/',
          text: 'Read More'
        }
      },
      {
        id: 4,
        data: 'February 13, 2021',
        title:
          'Morbi pharetra est vel dolor aliquet, non auctor felis vulputate',
        desc:
          'Mauris quis finibus sem. Suspendisse ante dui, interdum eu sem et, pretium ullamcorper eros. Nullam quis massa ligula. Duis facilisis sodales tristique. Aliquam bibendum ultricies quam.',
        link: {
          href: '/',
          text: 'Read More'
        }
      }
    ]);

    return (
      <BlogSection1
        majorText={majorText}
        minorText={minorText}
        placeholder={placeholder}
        button={button}
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

storiesOf('Examples/Marketing/BlogSections', module).add(
  'BlogSection2',
  () => {
    const majorText = text(
      'majorText',
      'Duis porta dui quis ullamcorper porta'
    );
    const minorText = text(
      'minorText',
      'Mauris a ipsum in quam ullamcorper varius tristique nunc at augue venenatis, vel ultrices odio ornare.'
    );
    const blogs = object('blogs', [
      {
        id: 1,
        type: 'Business',
        title: 'Phasellus accumsan lectus vitae metus venenatis bibendum',
        desc:
          'Curabitur sit amet vulputate diam. Vestibulum vulputate mattis mi, ultrices fermentum nisi maximus non. Vestibulum id iaculis augue. Sed libero erat, vestibulum a luctus vel, facilisis at lorem. Mauris euismod tellus sagittis est imperdiet fermentum.',
        blogImage: 'https://picsum.photos/700',
        user: {
          name: 'Devin Asher',
          data: 'November 17, 2021',
          edit: '4 mins ago',
          userImage: 'https://i.pravatar.cc/300'
        }
      },
      {
        id: 2,
        type: 'News',
        title: 'Fusce accumsan mi vitae neque faucibus luctus',
        desc:
          'Pellentesque pretium, nunc sit amet blandit vestibulum, diam augue porta quam, varius ultricies diam leo ac diam. Phasellus scelerisque facilisis scelerisque.',
        blogImage: 'https://picsum.photos/701',
        user: {
          name: 'Jeremiah Walton',
          data: 'November 15, 2021',
          edit: '20 hours ago',
          userImage: 'https://i.pravatar.cc/301'
        }
      },
      {
        id: 3,
        type: 'Video',
        title:
          'Nullam eu nisl vestibulum tortor finibus placerat sollicitudin eget eros',
        desc:
          'Integer sed ultricies ex. Fusce purus lectus, placerat eu lacinia in, facilisis non ex. Phasellus in velit ultrices, volutpat ante a, porta sapien id lorem tempus proin pellentesque lorem sed facilisis feugiat.',
        blogImage: 'https://picsum.photos/702',
        user: {
          name: 'Rowan Banks',
          data: 'July 23, 2021',
          edit: '2 days ago',
          userImage: 'https://i.pravatar.cc/302'
        }
      }
    ]);

    return (
      <BlogSection2 majorText={majorText} minorText={minorText} blogs={blogs} />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/BlogSections', module).add(
  'BlogSection3',
  () => {
    const majorText = text('majorText', 'Maecenas quis lacus');
    const minorText = text(
      'minorText',
      'Mauris a ipsum in quam ullamcorper varius tristique nunc at augue venenatis, vel ultrices odio ornare.'
    );
    const blogs = object('blogs', [
      {
        id: 1,
        tag: { text: 'Business', color: 'palette.primary.base' },
        title: 'Phasellus accumsan lectus vitae metus venenatis bibendum',
        desc:
          'Curabitur sit amet vulputate diam. Vestibulum vulputate mattis mi, ultrices fermentum nisi maximus non. Vestibulum id iaculis augue. Sed libero erat, vestibulum a luctus vel, facilisis at lorem. Mauris euismod tellus sagittis est imperdiet fermentum.',
        user: {
          name: 'Devin Asher',
          data: 'November 17, 2021',
          edit: '4 mins ago',
          userImage: 'https://i.pravatar.cc/300'
        }
      },
      {
        id: 2,
        tag: { text: 'News', color: 'palette.warning.base' },
        title: 'Fusce accumsan mi vitae neque faucibus luctus',
        desc:
          'Pellentesque pretium, nunc sit amet blandit vestibulum, diam augue porta quam, varius ultricies diam leo ac diam. Phasellus scelerisque facilisis scelerisque.',
        user: {
          name: 'Jeremiah Walton',
          data: 'November 15, 2021',
          edit: '20 hours ago',
          userImage: 'https://i.pravatar.cc/301'
        }
      },
      {
        id: 3,
        tag: { text: 'Video', color: 'palette.success.base' },
        title:
          'Nullam eu nisl vestibulum tortor finibus placerat sollicitudin eget eros',
        desc:
          'Integer sed ultricies ex. Fusce purus lectus, placerat eu lacinia in, facilisis non ex. Phasellus in velit ultrices, volutpat ante a, porta sapien id lorem tempus proin pellentesque lorem sed facilisis feugiat.',
        user: {
          name: 'Rowan Banks',
          data: 'July 23, 2021',
          edit: '2 days ago',
          userImage: 'https://i.pravatar.cc/302'
        }
      }
    ]);

    return (
      <BlogSection3 majorText={majorText} minorText={minorText} blogs={blogs} />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
