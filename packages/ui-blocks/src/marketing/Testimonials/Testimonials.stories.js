import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import { Testimonial1 } from './Testimonial1';
import { Testimonial2 } from './Testimonial2';
import { Testimonial3 } from './Testimonial3';
import { Testimonial4 } from './Testimonial4';
import { Testimonial5 } from './Testimonial5';

storiesOf('Examples/Marketing/Testimonials', module).add(
  'Testimonial1',
  () => {
    const brand = object('brand', {
      logo: '',
      text: 'Bloomstation'
    });
    const quote = text(
      'quote',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'
    );
    const author = text('author', 'Alexandra Suda');
    const authorImage = text('authorImage', 'https://i.imgur.com/F80hD1h.jpg');
    const designation = text('designation', 'CEO');
    const company = text('company', 'Bloomstation');

    return (
      <Testimonial1
        brand={brand}
        quote={quote}
        author={author}
        authorImage={authorImage}
        designation={designation}
        company={company}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Testimonials', module).add(
  'Testimonial2',
  () => {
    const quote =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.';

    const testimonials = object('testimonials', [
      {
        id: 1,
        brand: { logo: '', text: 'Bloomstation' },
        quote: quote,
        author: 'Alexandra Suda',
        authorImage: 'https://i.imgur.com/F80hD1h.jpg',
        designation: 'CEO',
        company: 'Bloomstation'
      },
      {
        id: 2,
        brand: { logo: '', text: 'BlocksBoot' },
        quote: quote,
        author: 'Aleksandr Solzhenitsyn',
        authorImage: 'https://i.imgur.com/ILmHmHq.jpg',
        designation: 'CEO',
        company: 'BlocksBoot'
      }
    ]);

    return <Testimonial2 testimonials={testimonials} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Testimonials', module).add(
  'Testimonial3',
  () => {
    const desc =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Duis vel sem ut nisl ultrices consectetur.';

    const author = object('author', {
      name: 'HARLEY GUERRERO',
      authorImage: 'https://thispersondoesnotexist.com/image',
      designation: 'CEO',
      company: 'Bloomstation'
    });

    return <Testimonial3 desc={desc} author={author} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Testimonials', module).add(
  'Testimonial4',
  () => {
    const desc =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Duis vel sem ut nisl ultrices consectetur.';

    const author = object('author', {
      name: 'HARLEY GUERRERO',
      authorImage: 'https://picsum.photos/600',
      designation: 'CEO at Bloomstation'
    });

    const background = text('background', 'palette.primary.base');

    return <Testimonial4 desc={desc} author={author} background={background} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Testimonials', module).add(
  'Testimonial5',
  () => {
    const brand = object('brand', {
      logo: '',
      text: 'Bloomstation'
    });
    const desc =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Duis vel sem ut nisl ultrices consectetur.';
    const author = text('author', 'Alexandra Suda');
    const designation = text('designation', 'CEO');
    const company = text('company', 'Bloomstation');
    const backgroundImage = text(
      'background image',
      'https://picsum.photos/2000'
    );

    return (
      <Testimonial5
        brand={brand}
        desc={desc}
        author={author}
        designation={designation}
        company={company}
        backgroundImage={backgroundImage}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
