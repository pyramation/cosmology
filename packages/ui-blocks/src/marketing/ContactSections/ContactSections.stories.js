import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, boolean } from '@storybook/addon-knobs';
import { ContactSection1 } from './ContactSection1';
import { ContactSection2 } from './ContactSection2';
import { ContactSection3 } from './ContactSection3';
import { ContactSection4 } from './ContactSection4';
import { ContactSection5 } from './ContactSection5';
import { ContactSection6 } from './ContactSection6';
import { ContactSection7 } from './ContactSection7';

storiesOf('Examples/Marketing/ContactSections', module).add(
  'ContactSection1',
  () => {
    const majorText = text('majorText', 'Contact Section');
    const minorText = text(
      'minorText',
      'Mauris a ipsum in quam ullamcorper varius tristique nunc at augue venenatis, vel ultrices odio ornare.'
    );
    const input1 = text('input1', 'First Name');
    const input2 = text('input2', 'Last Name');
    const input3 = text('input3', 'Address');
    const input4 = text('input4', 'Email');
    const input5 = object('input5', {
      title: 'Phone Number',
      country: [
        { name: 'AE', number: '+971' },
        { name: 'AF', number: '+93' },
        { name: 'AG', number: '+1268' },
        { name: 'AI', number: '+1264' },
        { name: 'AR', number: '+54' },
        { name: 'AT', number: '+43' },
        { name: 'AU', number: '+61' },
        { name: 'AW', number: '+297' },
        { name: 'BD', number: '+880' },
        { name: 'BE', number: '+32' },
        { name: 'BH', number: '+973' },
        { name: 'BM', number: '+1441' },
        { name: 'BO', number: '+591' },
        { name: 'BR', number: '+55' },
        { name: 'BT', number: '+975' },
        { name: 'CA', number: '+1' },
        { name: 'CG', number: '+243' },
        { name: 'CH', number: '+41' },
        { name: 'CM', number: '+237' },
        { name: 'CN', number: '+86' },
        { name: 'CO', number: '+57' },
        { name: 'DE', number: '+49' },
        { name: 'DK', number: '+45' },
        { name: 'DO', number: '+1767' },
        { name: 'EG', number: '+20' },
        { name: 'ES', number: '+34' },
        { name: 'FR', number: '+33' },
        { name: 'FI', number: '+358' },
        { name: 'FJ', number: '+679' },
        { name: 'GD', number: '+1473' },
        { name: 'GE', number: '+995' },
        { name: 'GH', number: '+233' },
        { name: 'GR', number: '+30' },
        { name: 'GT', number: '+502' },
        { name: 'GY', number: '+967' },
        { name: 'HK', number: '+852' },
        { name: 'HN', number: '+504' },
        { name: 'HT', number: '+509' },
        { name: 'ID', number: '+62' },
        { name: 'IE', number: '+353' },
        { name: 'IN', number: '+91' },
        { name: 'IS', number: '+354' },
        { name: 'IT', number: '+39' },
        { name: 'IQ', number: '+964' },
        { name: 'JM', number: '+1876' },
        { name: 'JO', number: '+962' },
        { name: 'JP', number: '+81' },
        { name: 'KE', number: '+254' },
        { name: 'KH', number: '+975' },
        { name: 'KP', number: '+82' },
        { name: 'KW', number: '+965' },
        { name: 'KZ', number: '+7' },
        { name: 'LC', number: '+1758' },
        { name: 'LK', number: '+94' },
        { name: 'LU', number: '+352' },
        { name: 'MA', number: '+212' },
        { name: 'MG', number: '+261' },
        { name: 'MK', number: '+389' },
        { name: 'ML', number: '+60' },
        { name: 'MO', number: '+853' },
        { name: 'MV', number: '+960' },
        { name: 'MX', number: '+52' },
        { name: 'NG', number: '+234' },
        { name: 'NI', number: '+505' },
        { name: 'NO', number: '+47' },
        { name: 'NR', number: '+674' },
        { name: 'NZ', number: '+64' },
        { name: 'PA', number: '+507' },
        { name: 'PG', number: '+675' },
        { name: 'PK', number: '+92' },
        { name: 'PT', number: '+351' },
        { name: 'PY', number: '+595' },
        { name: 'RO', number: '+40' },
        { name: 'RU', number: '+7' },
        { name: 'RW', number: '+250' },
        { name: 'SA', number: '+966' },
        { name: 'SC', number: '+248' },
        { name: 'SD', number: '+249' },
        { name: 'SE', number: '+46' },
        { name: 'SG', number: '+65' },
        { name: 'SV', number: '+503' },
        { name: 'SY', number: '+381' },
        { name: 'TO', number: '+676' },
        { name: 'TR', number: '+90' },
        { name: 'TL', number: '+66' },
        { name: 'TW', number: '+886' },
        { name: 'UA', number: '+380' },
        { name: 'UG', number: '+256' },
        { name: 'UK', number: '+44' },
        { name: 'US', number: '+1' },
        { name: 'UY', number: '+598' },
        { name: 'UZ', number: '+998' },
        { name: 'VE', number: '+58' },
        { name: 'YE', number: '+967' }
      ],
      number: '202-555-0106'
    });
    const input6 = text('input6', 'Message');
    const policy = object('policy', {
      text: 'When you select this, you’re agree to the',
      link1: {
        href: '/',
        text: 'Privacy Policy'
      },
      link2: {
        href: '/',
        text: 'Terms'
      },
      link3: {
        href: '/',
        text: 'Cookie Policy'
      }
    });
    const button = text('button', 'Send');

    return (
      <ContactSection1
        majorText={majorText}
        minorText={minorText}
        input1={input1}
        input2={input2}
        input3={input3}
        input4={input4}
        input5={input5}
        input6={input6}
        policy={policy}
        button={button}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/ContactSections', module).add(
  'ContactSection2',
  () => {
    const contactHeader = text('contact header', 'Contact Us');
    const contact = object('contact', [
      {
        title: 'Praesent',
        email: 'Offlon1930@dayrep.com',
        phone: '+1-202-555-0178'
      },
      {
        title: 'Nulla',
        email: 'Adis1940@dayrep.com',
        phone: '+1-202-555-0181'
      },
      {
        title: 'Suspendisse',
        email: 'Watme1963@dayrep.com',
        phone: '+1-202-555-0173'
      },
      {
        title: 'Aenean',
        email: 'Coman1982@dayrep.com',
        phone: '+1-202-555-0170'
      }
    ]);
    const companyHeader = text('company header', 'Company');
    const company = object('company', [
      {
        city: 'Wynantskill',
        address: '2 Meadowlark Lane',
        stateShort: 'NY',
        stateLong: 'New York',
        zipCode: '12198'
      },
      {
        city: 'Carrollton',
        address: '4 Edgewood Circle NW Carrollton',
        stateShort: 'OH',
        stateLong: 'Ohio',
        zipCode: '44615'
      },
      {
        city: 'Indianapolis',
        address: '24 W New York Street Indianapolis',
        stateShort: 'IN',
        stateLong: 'Indiana',
        zipCode: '46224'
      },
      {
        city: 'Fort Gratiot',
        address: '7 Cheyenne Drive Fort Gratiot',
        stateShort: 'MI',
        stateLong: 'Michigan',
        zipCode: '48059'
      }
    ]);

    return (
      <ContactSection2
        contactHeader={contactHeader}
        contact={contact}
        companyHeader={companyHeader}
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

storiesOf('Examples/Marketing/ContactSections', module).add(
  'ContactSection3',
  () => {
    const contact = object('contact', [
      {
        title: 'Proin sed ante',
        desc:
          'Donec mattis elementum laoreet. Maecenas nec laoreet ipsum. Praesent consectetur elit nec mauris cursus imperdiet. Nam enim massa, pharetra non nunc sed, aliquet blandit erat.',
        phone: {
          icon: 'phone',
          number: '+1-202-555-0141'
        },
        businessHours: 'Mon-Fri 9am to 7pm PST',
        mail: {
          icon: 'mail',
          email: 'Farright50@armyspy.com'
        }
      },
      {
        title: 'Integer vestibulum',
        desc:
          'Aenean finibus nulla nec tortor auctor dapibus. Pellentesque non viverra nibh. Integer in leo nec justo euismod suscipit vel vel augue. Curabitur lobortis quam ex, nec eleifend orci laoreet euismod diam sed, molestie dolor.',
        phone: {
          icon: 'phone',
          number: '+1-202-555-0133'
        },
        businessHours: 'Mon-Fri 8am to 6pm EST',
        mail: {
          icon: 'mail',
          email: 'Warawaysold76@cuvox.de'
        }
      }
    ]);

    return <ContactSection3 contact={contact} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/ContactSections', module).add(
  'ContactSection4',
  () => {
    const contact = object('contact', {
      title: 'Proin sed ante',
      desc:
        'Donec eget mauris tortor. Nam rutrum consectetur aliquam. Sed tincidunt nisl mi. Quisque orci nunc, finibus consequat mauris ac, lacinia congue tellus. Donec vulputate odio in tempor sagittis. Phasellus vel eros pellentesque, feugiat lorem nec, egestas orci.',
      city: 'Fort Gratiot',
      address: '7 Cheyenne Drive Fort Gratiot',
      stateShort: 'MI',
      zipCode: '48059',
      phone: {
        icon: 'phone',
        number: '+1-202-555-0141'
      },
      mail: {
        icon: 'mail',
        email: 'Farright50@armyspy.com'
      },
      text: 'Sed ac ipsum ultricies?',
      link: {
        href: '/',
        text: 'Cras vel metus eget.'
      },
      backgroundColor: 'blackAlpha.50'
    });
    const form = object('form', {
      input1: 'Full name',
      input2: 'Email',
      input3: 'Phone',
      input4: 'Message'
    });

    return <ContactSection4 contact={contact} form={form} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/ContactSections', module).add(
  'ContactSection5',
  () => {
    const majorText = text('majorText', 'Contact Section');
    const minorText = text(
      'minorText',
      'Donec eget mauris tortor. Nam rutrum consectetur aliquam. Sed tincidunt nisl mi. Quisque orci nunc, finibus consequat mauris ac, lacinia congue tellus. Donec vulputate odio in tempor sagittis. Phasellus vel eros pellentesque, feugiat lorem nec, egestas orci.'
    );
    const input1 = text('input1', 'First Name');
    const input2 = text('input2', 'Last Name');
    const input3 = text('input3', 'Email');
    const input4 = object('input4', {
      title: 'Phone',
      tip: 'Optional',
      placeholder: 'ex: +1-202-555-0161'
    });
    const input5 = object('input5', {
      title: 'Address',
      tip: 'Optional'
    });
    const input6 = object('input6', {
      title: 'How can we help you?',
      tip: 'Max. 500 characters'
    });
    const input7 = text('input7', 'How did you hear about us?');
    const radios = object('radios', {
      title: 'Etiam quis magna',
      options: [
        'Nunc ut turpis ut turpis volutpat rutrum.',
        'Proin et enim id elit lobortis consectetur a a est.',
        'Curabitur in lorem vel purus feugiat dictum.',
        'Fusce lobortis nisl quis gravida faucibus.'
      ]
    });
    const button = text('button', 'Submit');
    const backgroundImage = text(
      'background image',
      'https://picsum.photos/2000'
    );
    const imageReverse = boolean('image reverse', false);

    return (
      <ContactSection5
        majorText={majorText}
        minorText={minorText}
        input1={input1}
        input2={input2}
        input3={input3}
        input4={input4}
        input5={input5}
        input6={input6}
        input7={input7}
        radios={radios}
        button={button}
        backgroundImage={backgroundImage}
        imageReverse={imageReverse}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/Marketing/ContactSections', module).add(
  'ContactSection6',
  () => {
    const majorText = text('majorText', 'Contact Section');
    const minorText = text(
      'minorText',
      'Donec eget mauris tortor. Nam rutrum consectetur aliquam. Sed tincidunt nisl mi. Quisque orci nunc, finibus consequat mauris ac, lacinia congue tellus. Donec vulputate odio in tempor sagittis. Phasellus vel eros pellentesque, feugiat lorem nec, egestas orci. In interdum non mauris pulvinar lacinia.'
    );
    const company = object('company', [
      {
        city: 'Wynantskill',
        address: '2 Meadowlark Lane Wynantskill',
        stateShort: 'NY',
        stateLong: 'New York',
        zipCode: '12198'
      },
      {
        city: 'Carrollton',
        address: '4 Edgewood Circle NW Carrollton',
        stateShort: 'OH',
        stateLong: 'Ohio',
        zipCode: '44615'
      },
      {
        city: 'Indianapolis',
        address: '24 W New York Street Indianapolis',
        stateShort: 'IN',
        stateLong: 'Indiana',
        zipCode: '46224'
      },
      {
        city: 'Fort Gratiot',
        address: '7 Cheyenne Drive Fort Gratiot',
        stateShort: 'MI',
        stateLong: 'Michigan',
        zipCode: '48059'
      }
    ]);

    return (
      <ContactSection6
        majorText={majorText}
        minorText={minorText}
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

storiesOf('Examples/Marketing/ContactSections', module).add(
  'ContactSection7',
  () => {
    const contact = object('contact', {
      title: 'Proin sed ante',
      desc:
        'Donec eget mauris tortor. Nam rutrum consectetur aliquam. Sed tincidunt nisl mi. Quisque orci nunc, finibus consequat mauris ac, lacinia congue tellus. Phasellus vel eros pellentesque, feugiat lorem nec, egestas orci.',
      phone: {
        icon: 'phone',
        number: '+1-202-555-0141'
      },
      mail: {
        icon: 'mail',
        email: 'Farright50@armyspy.com'
      },
      socialMedia: [
        { href: '/', icon: 'facebook' },
        { href: '/', icon: 'twitter' },
        { href: '/', icon: 'youtube' }
      ],
      backgroundColor: 'palette.primary.base'
    });
    const form = object('form', {
      title: 'Send message',
      input1: 'First name',
      input2: 'Last name',
      input3: 'Email',
      input4: {
        title: 'Phone',
        tip: 'Options',
        placeholder: 'ex: +1-202-555-0161'
      },
      input5: 'Subject',
      input6: {
        title: 'Message',
        tip: 'Max. 500 characters'
      },
      button: 'Submit'
    });
    const contactReverse = boolean('contact reverse', false);

    return (
      <ContactSection7
        contact={contact}
        form={form}
        contactReverse={contactReverse}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
