import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, object, array } from '@storybook/addon-knobs';
import { PricingPlan1 } from './PricingPlan1';
import { PricingPlan2 } from './PricingPlan2';
import { PricingPlan3 } from './PricingPlan3';
import { PricingPlan4 } from './PricingPlan4';
import { PricingPlan5 } from './PricingPlan5';
import { PricingPlan6 } from './PricingPlan6';
import { PricingPlan7 } from './PricingPlan7';
import { PricingPlan8 } from './PricingPlan8';
import { PricingPlan9 } from './PricingPlan9';
import { PricingPlan10 } from './PricingPlan10';

storiesOf('Examples/Marketing/PricingPlans', module).add(
  'PricingPlan1',
  () => {
    const majorWords = text('majorWords', 'Plans');
    const minorWords = text('minorWords', 'Extended');
    const subTitle = text('subTitle', 'Keep Track Of Plans Wherever You Are');
    const packages = object('packages', [
      {
        id: 1,
        name: 'STARTER',
        expiration: '7 DAYS',
        currency: '$',
        price: '0',
        button: {
          text: 'Get Started',
          variant: 'tertiary',
          intent: 'primary'
        },
        features: [
          {
            id: 1,
            text: 'Unlimited Access to the content'
          },
          {
            id: 2,
            text: 'Fully Secure Online Backup'
          },
          {
            id: 3,
            text: 'One Year Round the clock stop'
          },
          {
            id: 4,
            text: 'Free complimentary lanyard'
          }
        ],
        cardStyle: {
          background: 'white',
          border: '1px solid',
          borderColor: 'blackAlpha.100',
          expirationColor: 'blackAlpha.700',
          top: 12,
          left: 6
        }
      },
      {
        id: 2,
        name: 'MEDIATOR',
        expiration: 'PER MONTH',
        currency: '$',
        price: '250',
        button: {
          text: 'Get Started',
          variant: 'primary'
        },
        badgeText: 'Most Popular',
        features: [
          {
            id: 1,
            text: 'Unlimited Access to the content'
          },
          {
            id: 2,
            text: 'Fully Secure Online Backup'
          },
          {
            id: 3,
            text: 'One Year Round the clock stop'
          },
          {
            id: 4,
            text: 'Free complimentary lanyard'
          }
        ],
        cardStyle: {
          background: 'gray.100',
          expirationColor: 'blackAlpha.700',
          zIndex: 20
        }
      },
      {
        id: 3,
        name: 'PROFESSIONAL',
        expiration: 'PER MONTH',
        currency: '$',
        price: '350',
        button: {
          text: 'Get Started',
          bg: 'whiteAlpha.900',
          color: 'blackAlpha.800'
        },
        features: [
          {
            id: 1,
            text: 'Unlimited Access to the content'
          },
          {
            id: 2,
            text: 'Fully Secure Online Backup'
          },
          {
            id: 3,
            text: 'One Year Round the clock stop'
          },
          {
            id: 4,
            text: 'Free complimentary lanyard'
          }
        ],
        cardStyle: {
          background: 'accent',
          expirationColor: 'white',
          textColor: 'white',
          top: 12,
          left: -20
        }
      }
    ]);
    const barShow = boolean('barShow', true);
    const barAnimation = boolean('barAnimation', false);
    const cta = object('cta', {
      text: 'We are offering a 14-days trail Please check it.',
      link: {
        href: '/',
        text: 'Learn more',
        bg: 'whiteAlpha.900',
        color: 'blackAlpha.800'
      }
    });

    return (
      <PricingPlan1
        majorWords={majorWords}
        minorWords={minorWords}
        subTitle={subTitle}
        packages={packages}
        barShow={barShow}
        barAnimation={barAnimation}
        cta={cta}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/PricingPlans', module).add(
  'PricingPlan2',
  () => {
    const title = text('title', 'Keep your journey wherever');
    const subText = text('subText', 'PRICING PLANS');
    const description = text(
      'description',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    );
    const links = object('links', [
      {
        id: 1,
        href: '/',
        variant: 'secondary',
        text: 'How it works'
      },
      {
        id: 2,
        href: '/',
        variant: 'primary',
        text: ' Get Started'
      }
    ]);
    const packages = object('packages', [
      {
        id: 1,
        name: 'STARTER',
        expireCode: 'mo',
        currency: '$',
        price: '180',
        button: {
          text: 'Get Started',
          variant: 'primary'
        },
        modules: [
          {
            id: 1,
            title: 'Web Development',
            features: [
              {
                id: 1,
                text: 'Unlimited Access the content'
              },
              {
                id: 2,
                text: 'Fully Secure Online Backup'
              },
              {
                id: 3,
                text: 'One Year Round the clock stop'
              },
              {
                id: 4,
                text: 'Free complimentary lanyard'
              }
            ]
          },
          {
            id: 2,
            title: 'SEO / Search Engine',
            features: [
              {
                id: 1,
                text: 'Unlimited Access the content'
              },
              {
                id: 2,
                text: 'Fully Secure Online Backup'
              },
              {
                id: 3,
                text: 'One Year Round the clock stop'
              },
              {
                id: 4,
                text: 'Free complimentary lanyard'
              }
            ]
          },
          {
            id: 3,
            title: 'Mobile Development',
            features: [
              {
                id: 1,
                text: 'Unlimited Access the content'
              },
              {
                id: 2,
                text: 'Fully Secure Online Backup'
              },
              {
                id: 3,
                text: 'One Year Round the clock stop'
              },
              {
                id: 4,
                text: 'Free complimentary lanyard'
              }
            ]
          }
        ],
        cardBackground: 'gray.50'
      },
      {
        id: 2,
        name: 'PROFESSIONAL',
        expireCode: 'mo',
        currency: '$',
        price: '250',
        button: {
          text: 'Get Started',
          variant: 'secondary'
        },
        modules: [
          {
            id: 1,
            title: 'Web Development',
            features: [
              {
                id: 1,
                text: 'Unlimited Access the content'
              },
              {
                id: 2,
                text: 'Fully Secure Online Backup'
              },
              {
                id: 3,
                text: 'One Year Round the clock stop'
              },
              {
                id: 4,
                text: 'Free complimentary lanyard'
              }
            ]
          },
          {
            id: 2,
            title: 'SEO / Search Engine',
            features: [
              {
                id: 1,
                text: 'Unlimited Access the content'
              },
              {
                id: 2,
                text: 'Fully Secure Online Backup'
              },
              {
                id: 3,
                text: 'One Year Round the clock stop'
              },
              {
                id: 4,
                text: 'Free complimentary lanyard'
              }
            ]
          },
          {
            id: 3,
            title: 'Mobile Development',
            features: [
              {
                id: 1,
                text: 'Unlimited Access the content'
              },
              {
                id: 2,
                text: 'Fully Secure Online Backup'
              },
              {
                id: 3,
                text: 'One Year Round the clock stop'
              },
              {
                id: 4,
                text: 'Free complimentary lanyard'
              }
            ]
          }
        ]
      }
    ]);

    return (
      <PricingPlan2
        title={title}
        subText={subText}
        description={description}
        packages={packages}
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

storiesOf('Examples/Marketing/PricingPlans', module).add(
  'PricingPlan3',
  () => {
    const title = text('title', 'Simple plan for professionals');
    const subText = text(
      'subText',
      `If you’re not satisfied, contact us within the first 14 days and we’ll send you a full refund.`
    );
    const plan = object('plan', {
      id: 1,
      name: 'Lifetime Membership',
      description:
        'We have a wide range of plans to fit your goals and budget. Check out a free trial to see what works for you and then pay monthly. It totally depends upon you.',
      separatorText: `WHAT'S INCLUDED`,
      sets: [
        {
          id: 1,
          name: 'set-1',
          features: [
            {
              id: 1,
              text: 'Self-paced and flexible scheduling',
              icon: 'check-circle'
            },
            {
              id: 2,
              text: 'Access to new beta features',
              icon: 'check-circle'
            }
          ]
        },
        {
          id: 2,
          name: 'set-2',
          features: [
            {
              id: 1,
              text: 'Interactive practice sessions',
              icon: 'check-circle'
            },
            {
              id: 2,
              text: 'Dedicated customer success team',
              icon: 'check-circle'
            }
          ]
        }
      ],
      planTitle: 'Pay once, own it forever',
      currency: 'USD',
      currencySymbol: '$',
      price: '349',
      button: {
        text: 'Get Access',
        variant: 'primary',
        backgroundColor: 'rgba(0, 0, 0, 0.90)',
        textColor: '#ffffff'
      },
      policyLink: {
        href: '/',
        text: 'Learn about our membership policy.'
      },
      extra: 'Get a free sample (20MB)'
    });

    return <PricingPlan3 title={title} subText={subText} plan={plan} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/PricingPlans', module).add(
  'PricingPlan4',
  () => {
    const subtitle = text('subtitle', 'PRICING PLANS');
    const majorText = text(
      'majorText',
      `The right price for you, whoever you are`
    );
    const minorText = text(
      'minorText',
      `If you’re not satisfied, contact us within the first 14 days and we’ll email you.`
    );
    const packages = object('packages', [
      {
        id: 1,
        badgeText: 'STANDARD',
        badgeColor: 'info',
        currency: '$',
        price: '49',
        expireCode: '/ mo',
        description:
          'We have a wide range of plans to fit your goals and budget. Check out a free trial to see and contact us.',
        features: [
          {
            id: 1,
            text: 'Self-paced and flexible scheduling',
            icon: 'check'
          },
          {
            id: 2,
            text: 'Interactive practice sessions',
            icon: 'check'
          },
          {
            id: 3,
            text: 'Access to new beta features',
            icon: 'check'
          },
          {
            id: 4,
            text: 'Dedicated customer success team',
            icon: 'check'
          }
        ],
        button: {
          text: 'Get Started',
          variant: 'primary',
          backgroundColor: 'rgba(0, 0, 0, 0.90)',
          textColor: '#ffffff'
        }
      },
      {
        id: 2,
        badgeText: 'ENTERPRISE',
        badgeColor: 'warning',
        currency: '$',
        price: '79',
        expireCode: '/ mo',
        description:
          'We have a wide range of plans to fit your goals and budget. Check out a free trial to see and contact us.',
        features: [
          {
            id: 1,
            text: 'Self-paced and flexible scheduling',
            icon: 'check'
          },
          {
            id: 2,
            text: 'Interactive practice sessions',
            icon: 'check'
          },
          {
            id: 3,
            text: 'Access to new beta features',
            icon: 'check'
          },
          {
            id: 4,
            text: 'Dedicated customer success team',
            icon: 'check'
          }
        ],
        button: {
          text: 'Get Started',
          variant: 'primary',
          backgroundColor: 'rgba(0, 0, 0, 0.80)',
          textColor: '#ffffff'
        }
      }
    ]);
    const cta = object('cta', {
      text: `Get a full access to all of standard license features and much more for solo projects that make less than $20k gross revenue for $29. `,
      badgeText: 'DISCOUNTED',
      link: {
        href: '/',
        text: 'Buy Discounted License',
        variant: 'primary'
      }
    });

    return (
      <PricingPlan4
        subtitle={subtitle}
        majorText={majorText}
        minorText={minorText}
        packages={packages}
        cta={cta}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/PricingPlans', module).add(
  'PricingPlan5',
  () => {
    const subtitle = text('subtitle', 'PRICING PLANS');
    const minorText = text(
      'minorText',
      `Donec in lectus pellentesque nisl pellentesque condimentum in ac pharetra nulla.`
    );
    const toggle = object('toggle', [
      { id: 'month', text: 'Monthly billing' },
      { id: 'year', text: 'Yearly billing' }
    ]);
    const tiers = object('tiers', [
      {
        id: 1,
        program: 'FREE',
        desc:
          'Proin laoreet, quam vel eleifend feugiat, urna tortor hendrerit lacus, a volutpat purus ante sed turpis.',
        monthPrice: '$0',
        yearPrice: '$0',
        link: {
          href: '/',
          text: 'Get Free',
          bg: 'blackAlpha.800',
          color: 'white'
        },
        title: "WHAT'S INCLUDED",
        included: [
          {
            id: 'list1',
            icon: 'check-circle',
            text: 'Integer vel enim et odio volutpat viverra.'
          },
          {
            id: 'list2',
            icon: 'check-circle',
            text: 'Curabitur lobortis dui in enim vulputate mattis.'
          }
        ]
      },
      {
        id: 2,
        program: 'STARTER',
        desc:
          'Duis pharetra, ligula vel efficitur sagittis, lorem diam mattis justo, in vehicula augue velit eu odio.',
        monthPrice: '$12',
        yearPrice: '$120',
        link: {
          href: '/',
          text: 'Get Starter',
          bg: 'blackAlpha.800',
          color: 'white'
        },
        title: "WHAT'S INCLUDED",
        included: [
          {
            id: 'list1',
            icon: 'check-circle',
            text: 'Integer vel enim et odio volutpat viverra.'
          },
          {
            id: 'list2',
            icon: 'check-circle',
            text: 'Curabitur lobortis dui in enim vulputate mattis.'
          },
          {
            id: 'list3',
            icon: 'check-circle',
            text:
              'Morbi eu nisl rhoncus, dapibus velit sit amet, interdum dolor.'
          }
        ]
      },
      {
        id: 3,
        program: 'MEDIATOR',
        desc:
          'Nullam consectetur, mi vitae posuere semper, tellus lorem semper turpis, eu suscipit velit ante vel orci.',
        monthPrice: '$24',
        yearPrice: '$240',
        link: {
          href: '/',
          text: 'Get Mediator',
          bg: 'blackAlpha.800',
          color: 'white'
        },
        title: "WHAT'S INCLUDED",
        included: [
          {
            id: 'list1',
            icon: 'check-circle',
            text: 'Integer vel enim et odio volutpat viverra.'
          },
          {
            id: 'list2',
            icon: 'check-circle',
            text: 'Curabitur lobortis dui in enim vulputate mattis.'
          },
          {
            id: 'list3',
            icon: 'check-circle',
            text:
              'Morbi eu nisl rhoncus, dapibus velit sit amet, interdum dolor.'
          },
          {
            id: 'list4',
            icon: 'check-circle',
            text: 'Proin congue urna tincidunt odio iaculis fermentum.'
          }
        ]
      },
      {
        id: 4,
        program: 'PROFESSIONAL',
        desc:
          'Mauris elementum sem ante, id suscipit quam lacinia id. Curabitur congue augue ligula, at hendrerit ipsum convallis et.',
        monthPrice: '$32',
        yearPrice: '$320',
        link: {
          href: '/',
          text: 'Get Professional',
          bg: 'blackAlpha.800',
          color: 'white'
        },
        title: "WHAT'S INCLUDED",
        included: [
          {
            id: 'list1',
            icon: 'check-circle',
            text: 'Integer vel enim et odio volutpat viverra.'
          },
          {
            id: 'list2',
            icon: 'check-circle',
            text: 'Curabitur lobortis dui in enim vulputate mattis.'
          },
          {
            id: 'list3',
            icon: 'check-circle',
            text:
              'Morbi eu nisl rhoncus, dapibus velit sit amet, interdum dolor.'
          },
          {
            id: 'list4',
            icon: 'check-circle',
            text: 'Proin congue urna tincidunt odio iaculis fermentum.'
          },
          {
            id: 'list5',
            icon: 'check-circle',
            text: 'In id tortor vestibulum, cursus ligula nec, aliquam est.'
          },
          {
            id: 'list6',
            icon: 'check-circle',
            text: 'Sed et sapien maximus, auctor arcu sit amet, porta ante.'
          },
          {
            id: 'list7',
            icon: 'check-circle',
            text: 'Quisque tristique elit a velit pellentesque euismod.'
          }
        ]
      }
    ]);

    return (
      <PricingPlan5
        subtitle={subtitle}
        minorText={minorText}
        toggle={toggle}
        tiers={tiers}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/PricingPlans', module).add(
  'PricingPlan6',
  () => {
    const majorText = text('majorText', 'Duis et nulla et leo fermentum');
    const minorText = text('minorText', '$48 a month');
    const desc = text(
      'desc',
      'Quisque consequat mauris euismod, interdum velit quis, pellentesque nunc.'
    );
    const link = object('link', {
      href: '/',
      text: 'Get Started Now'
    });
    const subhead = text('subhead', 'Cras vitae elit vitae');
    const header = text('header', 'Donec in lectus pellentesque nisl');
    const headerSection = text(
      'header section',
      'Suspendisse vitae sapien posuere, rhoncus urna id, consectetur lectus. Cras ac tincidunt dolor. Donec et ante et nisi posuere tristique sit amet a nulla. Curabitur ultricies diam nec mauris ultrices auctor et ac lacus.'
    );
    const listLeft = object('listLeft', [
      {
        id: 'list1',
        icon: 'check-circle',
        text: 'Integer vel enim et odio volutpat viverra.'
      },
      {
        id: 'list2',
        icon: 'check-circle',
        text: 'Curabitur lobortis dui in enim vulputate mattis.'
      },
      {
        id: 'list3',
        icon: 'check-circle',
        text: 'Morbi eu nisl rhoncus, dapibus velit sit amet, interdum dolor.'
      },
      {
        id: 'list4',
        icon: 'check-circle',
        text: 'Proin congue urna tincidunt odio iaculis fermentum.'
      },
      {
        id: 'list5',
        icon: 'check-circle',
        text: 'In id tortor vestibulum, cursus ligula nec, aliquam est.'
      }
    ]);
    const listRight = object('listRight', [
      {
        id: 'list6',
        icon: 'check-circle',
        text: 'Ut eu sem a nibh dignissim blandit quis pharetra diam.'
      },
      {
        id: 'list7',
        icon: 'check-circle',
        text: 'Pellentesque dapibus nibh et ullamcorper luctus.'
      },
      {
        id: 'list8',
        icon: 'check-circle',
        text:
          'Vivamus viverra nulla nec nulla semper, et placerat odio imperdiet.'
      },
      {
        id: 'list9',
        icon: 'check-circle',
        text: 'Suspendisse blandit leo vitae tincidunt feugiat.'
      },
      {
        id: 'list10',
        icon: 'check-circle',
        text: 'Nam tempus sem et augue placerat consequat.'
      }
    ]);

    return (
      <PricingPlan6
        majorText={majorText}
        minorText={minorText}
        desc={desc}
        link={link}
        subhead={subhead}
        header={header}
        headerSection={headerSection}
        listLeft={listLeft}
        listRight={listRight}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/PricingPlans', module).add(
  'PricingPlan7',
  () => {
    const majorText = text('majorText', 'Nam tincidunt');
    const minorText = text(
      'minorText',
      'Aenean purus nibh, consectetur ut sagittis vitae, blandit venenatis nisl.'
    );
    const list1 = object('list1', [
      {
        id: 'list1',
        icon: 'a-to-z',
        title: 'Biam amet',
        text:
          'Nullam consectetur, mi vitae posuere semper, tellus lorem semper turpis, eu suscipit velit ante vel orci. Sed nec mauris eu justo posuere faucibus ut sed velit.  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
      },
      {
        id: 'list2',
        icon: 'align-justify',
        title: 'Cras',
        text:
          'Duis pharetra, ligula vel efficitur sagittis, lorem diam mattis justo, in vehicula augue velit eu odio. In hac habitasse platea dictumst. Sed diam sapien, lacinia auctor augue. Suspendisse ac placerat orci. Nam et consequat augue.'
      },
      {
        id: 'list3',
        icon: 'api-keys',
        title: 'Nisi',
        text:
          'Donec sit amet aliquet velit. Fusce ut ultrices libero. Sed at mollis dui. Mauris elementum sem ante, id suscipit quam lacinia id. Donec nec cursus lectus, vitae porta nisl. Quisque quam justo, porta hendrerit enim nec, ornare pharetra libero.'
      },
      {
        id: 'list4',
        icon: 'billings',
        title: 'Odio',
        text:
          'Curabitur congue augue ligula, at hendrerit ipsum convallis et. Nullam interdum ultricies velit at rutrum. Suspendisse id sagittis libero. Curabitur eu tristique nulla. Donec tincidunt, augue a commodo finibus, est elit varius nisl, eu pulvinar purus urna ac orci.'
      }
    ]);
    const list2 = object('list2', [
      {
        id: 'list6',
        icon: 'check-circle',
        text: 'Ut eu sem a nibh dignissim blandit quis pharetra diam.'
      },
      {
        id: 'list7',
        icon: 'check-circle',
        text: 'Pellentesque dapibus nibh et ullamcorper luctus.'
      },
      {
        id: 'list8',
        icon: 'check-circle',
        text:
          'Vivamus viverra nulla nec nulla semper, et placerat odio imperdiet.'
      },
      {
        id: 'list9',
        icon: 'check-circle',
        text: 'Suspendisse blandit leo vitae tincidunt feugiat.'
      },
      {
        id: 'list10',
        icon: 'check-circle',
        text: 'Nam tempus sem et augue placerat consequat.'
      },
      {
        id: 'list11',
        icon: 'check-circle',
        text: 'Morbi eu nisl rhoncus, dapibus velit sit amet, interdum dolor.'
      }
    ]);
    const price1 = object('price1', { price: '$48', text: 'Proin laoreet' });
    const price2 = object('price2', { price: '$4', text: 'Donec nec ' });
    const button = object('button', {
      text: 'Get started now',
      bg: 'whiteAlpha.800',
      color: 'palette.primary.base'
    });
    const link = object('link', {
      href: '/',
      text: 'Lorem ipsum dolor sit amet'
    });

    return (
      <PricingPlan7
        majorText={majorText}
        minorText={minorText}
        list1={list1}
        list2={list2}
        price1={price1}
        price2={price2}
        button={button}
        link={link}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/PricingPlans', module).add(
  'PricingPlan8',
  () => {
    const header = array('header', [
      'Program',
      'Starter',
      'Mediator',
      'Professional'
    ]);
    const priceTitle = text('price title', 'Pricing');
    const priceContent = object('price content', [
      {
        id: 'Starter',
        price: '$8',
        per: '/ mo',
        desc: 'Quisque sed eros quis nunc pellentesque euismod.',
        btn: {
          href: '/',
          bg: 'blackAlpha.800',
          color: 'white',
          text: 'Buy Starter'
        }
      },
      {
        id: 'Mediator',
        price: '$16',
        per: '/ mo',
        desc:
          'Sed fringilla nulla fringilla enim sagittis, in finibus lectus pulvinar.',
        btn: {
          href: '/',
          bg: 'blackAlpha.800',
          color: 'white',
          text: 'Buy Mediator'
        }
      },
      {
        id: 'Professional',
        price: '$24',
        per: '/ mo',
        desc: 'Ut ac ipsum in tortor tempus elementum eu vel velit.',
        btn: {
          href: '/',
          bg: 'blackAlpha.800',
          color: 'white',
          text: 'Buy Professional'
        }
      }
    ]);
    const feature = object('feature', {
      title: ['Feature', '', '', ''],
      line1: [
        { title: 'Sed id neque id lectus congue tincidunt.' },
        { icon: 'check', color: 'palette.success.base', text: 'Starter' },
        { icon: 'check', color: 'palette.success.base', text: 'Mediator' },
        { icon: 'check', color: 'palette.success.base', text: 'Professional' }
      ],
      line2: [
        { title: 'Donec in mauris ut tortor pharetra.' },
        { icon: 'check', color: 'palette.success.base', text: 'Starter' },
        { icon: 'check', color: 'palette.success.base', text: 'Mediator' },
        { icon: 'check', color: 'palette.success.base', text: 'Professional' }
      ],
      line3: [
        { title: 'Phasellus lobortis diam eu tellus placerat.' },
        { icon: 'minus', color: 'palette.danger.lightest', text: 'Starter' },
        { icon: 'check', color: 'palette.success.base', text: 'Mediator' },
        { icon: 'check', color: 'palette.success.base', text: 'Professional' }
      ],
      line4: [
        { permission: false, title: 'Ut ultrices leo sollicitudin.' },
        {
          permission: true,
          icon: 'minus',
          color: 'palette.danger.lightest',
          text: 'Starter'
        },
        {
          permission: true,
          content: 'Integer consequat turpis 30',
          text: 'Mediator'
        },
        {
          permission: true,
          content: 'Integer consequat turpis 50',
          text: 'Professional'
        }
      ]
    });
    const report = object('report', {
      title: ['Report', '', '', ''],
      line1: [
        { title: 'Aliquam ac ex ut quam viverra tristique.' },
        { icon: 'check', color: 'palette.success.base', text: 'Starter' },
        { icon: 'check', color: 'palette.success.base', text: 'Mediator' },
        { icon: 'check', color: 'palette.success.base', text: 'Professional' }
      ],
      line2: [
        { title: 'Curabitur sollicitudin augue a sollicitudin consequat.' },
        { icon: 'minus', color: 'palette.danger.lightest', text: 'Starter' },
        { icon: 'check', color: 'palette.success.base', text: 'Mediator' },
        { icon: 'check', color: 'palette.success.base', text: 'Professional' }
      ],
      line3: [
        { title: 'Quisque ut massa dictum, condimentum purus non.' },
        { icon: 'minus', color: 'palette.danger.lightest', text: 'Starter' },
        { icon: 'minus', color: 'palette.danger.lightest', text: 'Mediator' },
        { icon: 'check', color: 'palette.success.base', text: 'Professional' }
      ],
      line4: [
        { title: 'Vestibulum imperdiet augue a lacus placerat.' },
        { icon: 'minus', color: 'palette.danger.lightest', text: 'Starter' },
        { icon: 'minus', color: 'palette.danger.lightest', text: 'Mediator' },
        { icon: 'check', color: 'palette.success.base', text: 'Professional' }
      ]
    });
    const support = object('support', {
      title: ['Support', '', '', ''],
      line1: [
        { title: 'Etiam et nulla eu neque varius tristique.' },
        { icon: 'check', color: 'palette.success.base', text: 'Starter' },
        { icon: 'check', color: 'palette.success.base', text: 'Mediator' },
        { icon: 'check', color: 'palette.success.base', text: 'Professional' }
      ],
      line2: [
        { title: 'Nam posuere tellus id, eget auctor purus sagittis.' },
        { icon: 'minus', color: 'palette.danger.lightest', text: 'Starter' },
        { icon: 'check', color: 'palette.success.base', text: 'Mediator' },
        { icon: 'check', color: 'palette.success.base', text: 'Professional' }
      ],
      line3: [
        { title: 'Integer vel ipsum sit amet augue consequat.' },
        { icon: 'minus', color: 'palette.danger.lightest', text: 'Starter' },
        { icon: 'check', color: 'palette.success.base', text: 'Mediator' },
        { icon: 'check', color: 'palette.success.base', text: 'Professional' }
      ],
      line4: [
        { title: 'Morbi vulputate nibh gravida, semper eros sit amet.' },
        { icon: 'minus', color: 'palette.danger.lightest', text: 'Starter' },
        { icon: 'minus', color: 'palette.danger.lightest', text: 'Mediator' },
        { icon: 'check', color: 'palette.success.base', text: 'Professional' }
      ]
    });

    return (
      <PricingPlan8
        header={header}
        priceTitle={priceTitle}
        priceContent={priceContent}
        feature={feature}
        report={report}
        support={support}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/PricingPlans', module).add(
  'PricingPlan9',
  () => {
    const majorWords = text(
      'majorWords',
      'Pellentesque ac eros quam hendrerit'
    );
    const subTitle = text(
      'subTitle',
      'Cras sed commodo quam, vitae posuere tellus. In non ante rutrum, laoreet nisi eu, posuere est. In convallis nibh in sagittis consectetur.'
    );
    const packages = object('packages', [
      {
        id: 1,
        name: 'STARTER',
        price: '$8',
        per: '/ month',
        desc:
          'Duis viverra lorem eu tortor commodo, non consectetur dui viverra.',
        button: {
          text: 'Get Started',
          variant: 'tertiary',
          intent: 'primary'
        },
        features: [
          {
            id: 1,
            icon: 'check-circle',
            text:
              'Pellentesque aliquam nunc nec odio lobortis, vitae vehicula diam dictum'
          },
          {
            id: 2,
            icon: 'check-circle',
            text:
              'Quisque pretium libero non mauris aliquet, sed vestibulum nibh imperdiet'
          },
          {
            id: 3,
            icon: 'check-circle',
            text: 'Mauris efficitur enim in magna imperdiet bibendum'
          },
          {
            id: 4,
            icon: 'check-circle',
            text: 'Nullam in ex id arcu pellentesque ultrices'
          }
        ]
      },
      {
        id: 2,
        name: 'MEDIATOR',
        price: '$16',
        per: '/ month',
        desc: 'Cras vitae odio sit amet ipsum cursus ornare quis ac odio.',
        button: {
          text: 'Get Started',
          variant: 'primary'
        },
        badge: { color: 'primary', text: 'Most Popular' },
        features: [
          {
            id: 1,
            icon: 'check-circle',
            text:
              'Pellentesque aliquam nunc nec odio lobortis, vitae vehicula diam dictum'
          },
          {
            id: 2,
            icon: 'check-circle',
            text:
              'Quisque pretium libero non mauris aliquet, sed vestibulum nibh imperdiet'
          },
          {
            id: 3,
            icon: 'check-circle',
            text: 'Mauris efficitur enim in magna imperdiet bibendum'
          },
          {
            id: 4,
            icon: 'check-circle',
            text: 'Nullam in ex id arcu pellentesque ultrices'
          },
          {
            id: 5,
            icon: 'check-circle',
            text: 'Pellentesque porta tortor ut dapibus porta'
          }
        ]
      },
      {
        id: 3,
        name: 'PROFESSIONAL',
        price: '$32',
        per: '/ month',
        desc:
          'Sed mollis, nisl at placerat finibus, urna odio feugiat sapien, quis consectetur purus turpis viverra ex.',
        button: {
          text: 'Get Started',
          variant: 'tertiary',
          intent: 'primary'
        },
        features: [
          {
            id: 1,
            icon: 'check-circle',
            text:
              'Pellentesque aliquam nunc nec odio lobortis, vitae vehicula diam dictum'
          },
          {
            id: 2,
            icon: 'check-circle',
            text:
              'Quisque pretium libero non mauris aliquet, sed vestibulum nibh imperdiet'
          },
          {
            id: 3,
            icon: 'check-circle',
            text: 'Mauris efficitur enim in magna imperdiet bibendum'
          },
          {
            id: 4,
            icon: 'check-circle',
            text: 'Nullam in ex id arcu pellentesque ultrices'
          },
          {
            id: 5,
            icon: 'check-circle',
            text: 'Pellentesque porta tortor ut dapibus porta'
          },
          {
            id: 6,
            icon: 'check-circle',
            text: 'In iaculis dui non libero vulputate elementum'
          }
        ]
      }
    ]);

    return (
      <PricingPlan9
        majorWords={majorWords}
        subTitle={subTitle}
        packages={packages}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/PricingPlans', module).add(
  'PricingPlan10',
  () => {
    const subtitle = object('subtitle', {
      title: 'Nullam in ex id arcu pellentesque ultrices',
      textColor: 'whiteAlpha.900'
    });
    const minorText = object('minorText', {
      text:
        'Donec in lectus pellentesque nisl pellentesque condimentum in ac pharetra nulla.',
      textColor: 'whiteAlpha.700'
    });
    const toggle = object('toggle', [
      { id: 'month', text: 'Monthly billing' },
      { id: 'year', text: 'Yearly billing' }
    ]);
    const topBackground = text('top background', 'palette.primary.base');
    const tiers = object('tiers', [
      {
        id: 1,
        program: { text: 'STARTER', color: 'white' },
        month: {
          price: '$8',
          per: '/ mo',
          otherPlan: 'Billed Yearly ($80)',
          color: 'white',
          otherPlanColor: 'whiteAlpha.700'
        },
        year: {
          price: '$80',
          per: '/ yr',
          otherPlan: 'Billed Monthly ($8)'
        },
        currency: 'USD',
        link: {
          href: '/',
          text: 'Get Starter',
          bg: 'whiteAlpha.800',
          color: 'palette.primary.base'
        },
        included: [
          {
            id: 'list1',
            icon: 'check-circle',
            text: 'Integer vel enim et odio volutpat viverra.',
            color: 'white'
          },
          {
            id: 'list2',
            icon: 'check-circle',
            text: 'Curabitur lobortis dui in enim vulputate mattis.',
            color: 'white'
          },
          {
            id: 'list3',
            icon: 'check-circle',
            text:
              'Morbi eu nisl rhoncus, dapibus velit sit amet, interdum dolor.',
            color: 'white'
          }
        ],
        cardStyle: {
          background: 'blackAlpha.400',
          borderRadius: '8px 0 0 0',
          top: 12,
          left: 6
        }
      },
      {
        id: 2,
        program: { text: 'PROFESSIONAL', color: 'palette.primary.base' },
        month: {
          price: '$24',
          per: '/ mo',
          otherPlan: 'Billed Yearly ($240)',
          priceColor: 'palette.primary.base',
          suggestPlanColor: 'blackAlpha.700',
          otherPlanColor: 'blackAlpha.600'
        },
        year: {
          price: '$240',
          per: '/ yr',
          otherPlan: 'Billed Monthly ($24)'
        },
        currency: 'USD',
        link: {
          href: '/',
          text: 'Get Professional'
        },
        included: [
          {
            id: 'list1',
            icon: 'check-circle',
            text: 'Integer vel enim et odio volutpat viverra.',
            iconColor: 'palette.primary.base',
            color: 'blackAlpha.800'
          },
          {
            id: 'list2',
            icon: 'check-circle',
            text: 'Curabitur lobortis dui in enim vulputate mattis.',
            iconColor: 'palette.primary.base',
            color: 'blackAlpha.800'
          },
          {
            id: 'list3',
            icon: 'check-circle',
            text:
              'Morbi eu nisl rhoncus, dapibus velit sit amet, interdum dolor.',
            iconColor: 'palette.primary.base',
            color: 'blackAlpha.800'
          },
          {
            id: 'list4',
            icon: 'check-circle',
            text: 'Proin congue urna tincidunt odio iaculis fermentum.',
            iconColor: 'palette.primary.base',
            color: 'blackAlpha.800'
          },
          {
            id: 'list5',
            icon: 'check-circle',
            text: 'In id tortor vestibulum, cursus ligula nec, aliquam est.',
            iconColor: 'palette.primary.base',
            color: 'blackAlpha.800'
          },
          {
            id: 'list6',
            icon: 'check-circle',
            text: 'Sed et sapien maximus, auctor arcu sit amet, porta ante.',
            iconColor: 'palette.primary.base',
            color: 'blackAlpha.800'
          },
          {
            id: 'list7',
            icon: 'check-circle',
            text: 'Quisque tristique elit a velit pellentesque euismod.',
            iconColor: 'palette.primary.base',
            color: 'blackAlpha.800'
          }
        ],
        cardStyle: {
          background: 'white',
          border: '2px solid',
          borderColor: 'palette.primary.base',
          borderRadius: 'md',
          boxShadow: '0 5px 10px -6px #606060',
          marginTop: 8,
          marginBottom: 8,
          zIndex: 100
        }
      },
      {
        id: 3,
        program: { text: 'MEDIATOR', color: 'white' },
        month: {
          price: '$16',
          per: '/ mo',
          otherPlan: 'Billed Yearly ($160)',
          color: 'white',
          otherPlanColor: 'whiteAlpha.700'
        },
        year: {
          price: '$160',
          per: '/ yr',
          otherPlan: 'Billed Monthly ($16)'
        },
        currency: 'USD',
        link: {
          href: '/',
          text: 'Get Mediator',
          bg: 'whiteAlpha.800',
          color: 'palette.primary.base'
        },
        included: [
          {
            id: 'list1',
            icon: 'check-circle',
            text: 'Integer vel enim et odio volutpat viverra.',
            color: 'white'
          },
          {
            id: 'list2',
            icon: 'check-circle',
            text: 'Curabitur lobortis dui in enim vulputate mattis.',
            color: 'white'
          },
          {
            id: 'list3',
            icon: 'check-circle',
            text:
              'Morbi eu nisl rhoncus, dapibus velit sit amet, interdum dolor.',
            color: 'white'
          },
          {
            id: 'list4',
            icon: 'check-circle',
            text: 'Proin congue urna tincidunt odio iaculis fermentum.',
            color: 'white'
          }
        ],
        cardStyle: {
          background: 'blackAlpha.400',
          borderRadius: '0 8px 0 0',
          top: 12,
          right: 6
        }
      }
    ]);
    const feature = object('feature', {
      title: {
        header: 'Program',
        plans: [
          {
            text: 'Starter',
            desc: 'Nullam in ex id arcu pellentesque ultrices'
          },
          {
            text: 'Professional',
            desc: 'Aliquam placerat lorem vel convallis dapibus',
            suggest: true
          },
          {
            text: 'Mediator',
            desc: 'Mauris efficitur enim in magna imperdiet bibendum'
          }
        ]
      },
      line1: [
        {
          permission: false,
          title: 'Sed id neque id lectus congue tincidunt.'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Starter'
        },
        {
          suggest: true,
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Professional'
        }
      ],
      line2: [
        { permission: false, title: 'Donec in mauris ut tortor pharetra.' },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Starter'
        },
        {
          permission: true,
          suggest: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Professional'
        }
      ],
      line3: [
        {
          permission: false,
          title: 'Phasellus lobortis diam eu tellus placerat.'
        },
        {
          permission: true,
          text: '3 accents',
          color: 'palette.danger.lightest',
          plan: 'Starter'
        },
        {
          permission: true,
          suggest: true,
          text: 'Unlimited accents',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          text: '30 accents',
          color: 'palette.success.base',
          plan: 'Professional'
        }
      ],
      line4: [
        { permission: false, title: 'Ut ultrices leo sollicitudin.' },
        {
          permission: true,
          text: '3 invoices',
          color: 'palette.danger.lightest',
          plan: 'Starter'
        },
        {
          permission: true,
          suggest: true,
          text: 'Unlimited invoices',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          text: '30 invoices',
          color: 'palette.success.base',
          plan: 'Professional'
        }
      ],
      line5: [
        {
          permission: false,
          title: 'Aenean interdum augue in nisi pellentesque auctor.'
        },
        {
          permission: true,
          icon: 'x',
          color: 'palette.danger.lightest',
          plan: 'Starter'
        },
        {
          suggest: true,
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Professional'
        }
      ],
      line6: [
        {
          permission: false,
          title: 'Nulla elementum velit eget varius rhoncus.'
        },
        {
          permission: true,
          icon: 'x',
          color: 'palette.danger.lightest',
          plan: 'Starter'
        },
        {
          suggest: true,
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Professional'
        }
      ],
      line7: [
        {
          permission: false,
          title: 'Sed sit amet ex bibendum, venenatis leo eget, laoreet augue.'
        },
        {
          permission: true,
          icon: 'x',
          color: 'palette.danger.lightest',
          plan: 'Starter'
        },
        {
          suggest: true,
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Professional'
        }
      ],
      line8: [
        {
          permission: false,
          title: 'Sed sit amet ex bibendum, venenatis leo, laoreet augue.'
        },
        {
          permission: true,
          icon: 'x',
          color: 'palette.danger.lightest',
          plan: 'Starter'
        },
        {
          suggest: true,
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          icon: 'x',
          color: 'palette.danger.lightest',
          plan: 'Professional'
        }
      ]
    });
    const report = object('report', {
      title: ['Report', '', '', ''],
      line1: [
        {
          permission: false,
          title: 'Aliquam ac ex ut quam viverra tristique.'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Starter'
        },
        {
          suggest: true,
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Professional'
        }
      ],
      line2: [
        {
          permission: false,
          title: 'Curabitur sollicitudin augue a sollicitudin consequat.'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Starter'
        },
        {
          suggest: true,
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Professional'
        }
      ],
      line3: [
        {
          permission: false,
          title: 'Quisque ut massa dictum, condimentum purus non.'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Starter'
        },
        {
          suggest: true,
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Professional'
        }
      ],
      line4: [
        {
          permission: false,
          title: 'Vestibulum imperdiet augue a lacus placerat.'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Starter'
        },
        {
          suggest: true,
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Professional'
        }
      ],
      line5: [
        {
          permission: false,
          title: 'Mauris tempus metus dapibus mi tempor euismod.'
        },
        {
          permission: true,
          icon: 'x',
          color: 'palette.danger.lightest',
          plan: 'Starter'
        },
        {
          suggest: true,
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Professional'
        }
      ],
      line6: [
        {
          permission: false,
          title: 'Sed finibus enim non convallis feugiat.'
        },
        {
          permission: true,
          icon: 'x',
          color: 'palette.danger.lightest',
          plan: 'Starter'
        },
        {
          suggest: true,
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          icon: 'x',
          color: 'palette.danger.lightest',
          plan: 'Professional'
        }
      ],
      line7: [
        {
          permission: false,
          title: 'Ut a elit sit amet libero auctor interdum a non elit.'
        },
        {
          permission: true,
          icon: 'x',
          color: 'palette.danger.lightest',
          plan: 'Starter'
        },
        {
          suggest: true,
          permission: true,
          icon: 'check',
          color: 'palette.success.base',
          plan: 'Mediator'
        },
        {
          permission: true,
          icon: 'x',
          color: 'palette.danger.lightest',
          plan: 'Professional'
        }
      ]
    });

    return (
      <PricingPlan10
        subtitle={subtitle}
        minorText={minorText}
        toggle={toggle}
        topBackground={topBackground}
        tiers={tiers}
        feature={feature}
        report={report}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
