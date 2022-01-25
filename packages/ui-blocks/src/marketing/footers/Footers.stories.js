import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import { Footer1 } from './Footer1';
import { Footer2 } from './Footer2';
import { Footer3 } from './Footer3';
import { Footer4 } from './Footer4';
import { Footer5 } from './Footer5';

storiesOf('Examples/Marketing/Footers', module).add(
  'Footer1',
  () => {
    const colCopyright = object('colCopyright', {
      logo: '',
      text: '© 2020 Web, Inc. All rights reserved'
    });
    const cols = object('cols', [
      {
        title: 'Company',
        links: [
          { id: 1, href: '/about', text: 'About' },
          { id: 2, href: '/blog', text: 'Blog' },
          { id: 3, href: '/jobs', text: 'Jobs' },
          { id: 4, href: '/press', text: 'Press' }
        ]
      },
      {
        title: 'Support',
        links: [
          { id: 5, href: '/pricing', text: 'Pricing' },
          { id: 6, href: '/documentation', text: 'Documentation' },
          { id: 7, href: '/guides', text: 'Guides' },
          { id: 8, href: '/api-status', text: 'API Status' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { id: 9, href: '/claim', text: 'Claim' },
          { id: 10, href: '/privacy', text: 'Privacy' },
          { id: 11, href: '/terms', text: 'Terms' }
        ]
      }
    ]);
    return <Footer1 colCopyright={colCopyright} cols={cols} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Footers', module).add(
  'Footer2',
  () => {
    const colCopyright = object('colCopyright', {
      logo: '',
      text: '© 2020 Web, Inc. All rights reserved'
    });
    const cols = object('cols', [
      {
        title: 'Company',
        links: [
          { id: 1, href: '/about', text: 'About' },
          { id: 2, href: '/blog', text: 'Blog' },
          { id: 3, href: '/jobs', text: 'Jobs' },
          { id: 4, href: '/press', text: 'Press' }
        ]
      },
      {
        title: 'Support',
        links: [
          { id: 5, href: '/pricing', text: 'Pricing' },
          { id: 6, href: '/documentation', text: 'Documentation' },
          { id: 7, href: '/guides', text: 'Guides' },
          { id: 8, href: '/api-status', text: 'API Status' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { id: 9, href: '/claim', text: 'Claim' },
          { id: 10, href: '/privacy', text: 'Privacy' },
          { id: 11, href: '/terms', text: 'Terms' }
        ]
      }
    ]);

    return <Footer2 colCopyright={colCopyright} cols={cols} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Footers', module).add(
  'Footer3',
  () => {
    const colCopyright = object('colCopyright', {
      logo: '',
      text: '© 2020 Web, Inc. All rights reserved'
    });
    const cols = object('cols', [
      {
        title: 'Company',
        links: [
          { id: 1, href: '/about', text: 'About' },
          { id: 2, href: '/blog', text: 'Blog' },
          { id: 3, href: '/jobs', text: 'Jobs' },
          { id: 4, href: '/press', text: 'Press' }
        ]
      },
      {
        title: 'Support',
        links: [
          { id: 5, href: '/pricing', text: 'Pricing' },
          { id: 6, href: '/documentation', text: 'Documentation' },
          { id: 7, href: '/guides', text: 'Guides' },
          { id: 8, href: '/api-status', text: 'API Status' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { id: 9, href: '/claim', text: 'Claim' },
          { id: 10, href: '/privacy', text: 'Privacy' },
          { id: 11, href: '/terms', text: 'Terms' }
        ]
      }
    ]);

    return <Footer3 colCopyright={colCopyright} cols={cols} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Footers', module).add(
  'Footer4',
  () => {
    const copyrightText = text(
      'copyrightText',
      `© 2020 Web, Inc. All rights reserved.`
    );

    const links = object('links', [
      { id: 1, href: '/about', text: 'About' },
      { id: 2, href: '/blog', text: 'Blog' },
      { id: 3, href: '/jobs', text: 'Jobs' },
      { id: 4, href: '/press', text: 'Press' },
      { id: 5, href: '/accessibility', text: 'Accessibility' },
      { id: 6, href: '/partners', text: 'Partners' }
    ]);
    const socialLinks = object('socialLinks', [
      { id: 7, href: '/', icon: 'facebook' },
      { id: 8, href: '/', icon: 'instagram' },
      { id: 9, href: '/', icon: 'twitter' },
      { id: 10, href: '/', icon: 'github' },
      { id: 11, href: '/', icon: 'linkedin' }
    ]);
    return (
      <Footer4
        copyrightText={copyrightText}
        links={links}
        socialLinks={socialLinks}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Footers', module).add(
  'Footer5',
  () => {
    const copyrightText = text(
      'copyrightText',
      `© 2020 Web, Inc. All rights reserved.`
    );
    const socialLinks = object('socialLinks', [
      { id: 1, href: '/', icon: 'facebook' },
      { id: 2, href: '/', icon: 'instagram' },
      { id: 3, href: '/', icon: 'twitter' },
      { id: 4, href: '/', icon: 'github' },
      { id: 5, href: '/', icon: 'linkedin' }
    ]);
    return <Footer5 copyrightText={copyrightText} socialLinks={socialLinks} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
