import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, boolean } from '@storybook/addon-knobs';
import { Feature1 } from './Feature1';
import { Feature2 } from './Feature2';
import { Feature3 } from './Feature3';
import { Feature4 } from './Feature4';
import { Feature5 } from './Feature5';

storiesOf('Examples/Marketing/Features', module).add(
  'Feature1',
  () => {
    const majorWords = text('majorWords', 'Web Design Platform');
    const minorWords = text('minorWords', 'for All Creatives');
    const subText = text('subText', 'Learn more about Product unique features');

    const features = object('features', [
      {
        id: 1,
        icon: 'rss',
        title: 'Faster Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link: {
          icon: 'arrow-right',
          href: '/'
        }
      },
      {
        id: 2,
        icon: 'bar-chart',
        title: 'Linear Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link: {
          icon: 'arrow-right',
          href: '/'
        }
      },
      {
        id: 3,
        icon: 'activity',
        title: 'J-Curve Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link: {
          icon: 'arrow-right',
          href: '/',
          variation: 'fill'
        }
      }
    ]);

    // Rect element
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 126 70" width="146" height="90">
    <path fill="#01A1FF" d="M.5 34.17h37.7v1.05H.5zm65.02-9.95c2.39.78 5.37 0 7.19 1.71s1.65 4.64 2.17 7.11 1.33 4.9.89 7.38c-.46 2.68-1.23 5.67-3.44 7.24s-5.22 1-7.91.79a19.9 19.9 0 01-6.09-2c-1.83-.79-3.79-1.38-5.15-2.86a12.07 12.07 0 01-2.45-5.4 12.39 12.39 0 01-.38-6.09c.54-2.05 2.08-3.57 3.38-5.24 1.55-2 2.53-5 5-5.51s4.41 2.09 6.79 2.87zm22.28 9.95h37.7v1.05H87.8z" />
    </svg>`;
    const separator = text('separator', svg);

    const ctaText = text(
      'subText',
      'Some things just feel impossible to build in a performant way. Click Here!'
    );

    return (
      <Feature1
        majorWords={majorWords}
        minorWords={minorWords}
        subText={subText}
        features={features}
        separator={separator}
        ctaText={ctaText}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Features', module).add(
  'Feature2',
  () => {
    const title = text('title', 'Fasten your seat belts');
    const subTitle = text(
      'subTitle',
      'The unique features of the app are waiting for you'
    );

    const features = object('features', [
      {
        id: 1,
        icon: 'rss',
        title: 'Faster Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 2,
        icon: 'bar-chart',
        title: 'Linear Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        active: true
      },
      {
        id: 3,
        icon: 'activity',
        title: 'J-Curve Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 4,
        icon: 'git-merge',
        title: 'Excremental Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 5,
        icon: 'shuffle',
        title: 'Constant Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 6,
        icon: 'layers',
        title: 'Level field Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      }
    ]);

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 126 70" width="126" height="70">
        <path
          d="M119.37 44.09c-2.2 0-3.45-2.46-6.46-8.41-1.55-3.06-3-6-3.78-6.68-.77.71-2.24 3.62-3.79 6.68-3 6-4.26 8.41-6.46 8.41s-3.45-2.46-6.47-8.41c-1.55-3.06-3-6-3.79-6.67-.77.71-2.23 3.61-3.78 6.67-3 6-4.26 8.41-6.46 8.41s-3.46-2.46-6.47-8.41c-1.55-3.06-3-6-3.78-6.67-.77.71-2.24 3.61-3.79 6.67-3 6-4.27 8.41-6.47 8.41s-3.45-2.46-6.46-8.41c-1.55-3.06-3-6-3.78-6.68-.77.71-2.24 3.62-3.79 6.68-3 6-4.26 8.41-6.46 8.41s-3.45-2.46-6.47-8.41c-1.55-3.06-3-6-3.79-6.67-.77.71-2.23 3.61-3.78 6.67-3 6-4.26 8.41-6.46 8.41s-3.46-2.46-6.47-8.41c-1.55-3.06-3-6-3.78-6.67-.77.71-2.24 3.61-3.79 6.67L.16 34.32c3-5.95 4.27-8.41 6.47-8.41s3.45 2.46 6.46 8.41c1.55 3.06 3 6 3.79 6.68.76-.71 2.23-3.62 3.78-6.68 3-5.95 4.26-8.41 6.46-8.41s3.45 2.46 6.47 8.41c1.55 3.06 3 6 3.79 6.67.77-.71 2.23-3.61 3.78-6.67 3-5.95 4.26-8.41 6.47-8.41s3.45 2.46 6.46 8.41c1.55 3.06 3 6 3.78 6.67.77-.71 2.24-3.61 3.79-6.67 3-5.95 4.27-8.41 6.47-8.41s3.45 2.46 6.46 8.41c1.55 3.06 3 6 3.79 6.68.76-.71 2.23-3.62 3.78-6.68 3-5.95 4.26-8.41 6.46-8.41s3.45 2.46 6.47 8.41c1.55 3.06 3 6 3.79 6.67.77-.71 2.23-3.61 3.78-6.67 3-5.95 4.26-8.41 6.47-8.41s3.45 2.46 6.46 8.41c1.55 3.06 3 6 3.78 6.67.77-.71 2.24-3.61 3.79-6.67l2.68 1.36c-3.02 5.95-4.27 8.41-6.47 8.41z"
          fill="#01A1FF"
        />
      </svg>`;

    const separator = text('separator', svg);

    return (
      <Feature2
        title={title}
        subTitle={subTitle}
        features={features}
        separator={separator}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Features', module).add(
  'Feature3',
  () => {
    const title = text('title', 'Our Features');
    const subtitle = text('subtitle', 'Awesome features of our Tools');
    const separator = boolean('separator', true);

    const features = object('features', [
      {
        id: 1,
        icon: 'database',
        title: 'Supportive Faster Growth',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 2,
        icon: 'code',
        title: 'Blazing Fast',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 3,
        icon: 'clock',
        title: 'More Opportunities',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 4,
        icon: 'cast',
        title: 'Larger Profits',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 5,
        icon: 'filter',
        title: 'Better Customer Service',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 6,
        icon: 'film',
        title: 'Huge Revenues',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      }
    ]);

    return (
      <Feature3
        title={title}
        subtitle={subtitle}
        features={features}
        separator={separator}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Features', module).add(
  'Feature4',
  () => {
    const title = text('title', 'Our Features');
    const subtitle = text('subtitle', 'Awesome features of our Tools');
    const description = text(
      'description',
      'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.'
    );

    const features = object('features', [
      {
        id: 1,
        icon: 'database',
        title: 'Supportive Faster Growth',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 2,
        icon: 'code',
        title: 'Blazing Fast',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 3,
        icon: 'clock',
        title: 'More Opportunities',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 4,
        icon: 'cast',
        title: 'Larger Profits',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 5,
        icon: 'filter',
        title: 'Better Customer Service',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 6,
        icon: 'film',
        title: 'Huge Revenues',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      }
    ]);

    return (
      <Feature4
        title={title}
        subtitle={subtitle}
        description={description}
        features={features}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/Features', module).add(
  'Feature5',
  () => {
    const title = text('title', 'Creative features with optimal choices');
    const description = text(
      'description',
      'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.'
    );
    const typeA = object('typeA', {
      title: 'We takes away the hard process',
      description:
        "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s and used by everywhere.",
      features: [
        {
          id: 1,
          icon: 'database',
          title: 'Marketing Analysis rates',
          description:
            'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
        },
        {
          id: 2,
          icon: 'code',
          title: 'Website Optimization rates',
          description:
            'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
        },
        {
          id: 3,
          icon: 'clock',
          title: 'SEO Analysis rates',
          description:
            'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
        }
      ]
    });
    const typeB = object('typeB', {
      title: 'Always in the loop',
      description:
        "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s and used by everywhere.",
      features: [
        {
          id: 1,
          icon: 'database',
          title: 'Marketing Analysis rates',
          description:
            'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
        },
        {
          id: 2,
          icon: 'code',
          title: 'Website Optimization rates',
          description:
            'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
        },
        {
          id: 3,
          icon: 'clock',
          title: 'SEO Analysis rates',
          description:
            'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
        }
      ]
    });

    const form = object('form', {
      title: 'Request quote',
      description: 'Select a service and the amount you want to send',
      inputA: {
        label: 'Service',
        placeholder: 'Which Service Are You Interested In?',
        options: [
          {
            id: 'web',
            text: 'Web Development'
          },
          {
            id: 'progressive',
            text: 'Progressive Web application'
          },
          {
            id: 'progressive',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at ante ac turpis dictum pretium a vel arcu. Nam finibus pulvinar ligula et tempus. Vivamus rhoncus lectus non nisi molestie accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
          }
        ]
      },
      inputB: {
        label: 'How much do you want to spend',
        inputDefault: 1000
      },
      inputC: {
        label: 'Recipient gets',
        inputDefault: 744.95
      },
      currency: {
        placeholder: 'Currency',
        options: [
          { id: 'cad', text: 'CAD' },
          { id: 'usd', text: 'USD' }
        ]
      },
      detail: {
        label1: 'Total Fee',
        text1: '$12.17 CAD',
        label2: 'Exchange Rate',
        text2: '0.754129'
      }
    });

    const paymentList = object('paymentList', [
      {
        avatarImage: 'https://i.imgur.com/F80hD1h.jpg',
        paymentName: 'Payment to Alexandra Suda',
        paymentAmount: '$20000',
        currency: 'USD',
        status: 'primary',
        statusText: 'Finished'
      },
      {
        avatarImage: 'https://i.imgur.com/ILmHmHq.jpg',
        paymentName: 'Payment to Aleksandr Solzhenitsyn',
        paymentAmount: '$20000',
        currency: 'USD',
        status: 'success',
        statusText: 'Success'
      },
      {
        avatarImage: 'https://i.imgur.com/F80hD1h.jpg',
        paymentName: 'Payment to Alexandra Suda',
        paymentAmount: '$20000',
        currency: 'USD',
        status: 'warning',
        statusText: 'Checking'
      },
      {
        avatarImage: 'https://i.imgur.com/ILmHmHq.jpg',
        paymentName: 'Payment to Aleksandr Solzhenitsyn',
        paymentAmount: '$20000',
        currency: 'USD',
        status: 'info',
        statusText: 'Failed'
      },
      {
        avatarImage: 'https://i.imgur.com/F80hD1h.jpg',
        paymentName: 'Payment to Alexandra Suda',
        paymentAmount: '$20000',
        currency: 'USD',
        status: 'danger',
        statusText: 'Cancel'
      }
    ]);

    return (
      <Feature5
        title={title}
        description={description}
        typeA={typeA}
        typeB={typeB}
        form={form}
        paymentList={paymentList}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
