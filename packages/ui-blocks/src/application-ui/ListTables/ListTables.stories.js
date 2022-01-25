import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, array } from '@storybook/addon-knobs';
import { ListTable1 } from './ListTable1';
import { ListTable2 } from './ListTable2';
import { ListTable3 } from './ListTable3';

storiesOf('Examples/ApplicationUi/ListTables', module).add(
  'ListTable1',
  () => {
    const tableHeader = array('tableHeader', [
      'NAME',
      'TITLE',
      'STATUS',
      'ROLE'
    ]);
    const link = object('link', {
      href: '/',
      text: 'Edit'
    });
    const avatars = object('avatars', [
      {
        id: 1,
        author: 'DANICA MELTON',
        authorImage: 'https://thispersondoesnotexist.com/image',
        email: '5satya@ettatct.com',
        mainTitle: 'Pellentesque rutrum ligula vitae pharetra ornare',
        subTitle: 'Vehicula',
        tag: {
          color: 'success',
          text: 'Success'
        },
        role: 'Admin'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        authorImage: 'https://thiscatdoesnotexist.com/',
        email: '5satya@plussmail.com',
        mainTitle: 'Morbi ac lacus tempus semper metus vitae',
        subTitle: 'Interdum',
        tag: {
          color: 'warning',
          text: 'Checking'
        },
        role: 'Owner'
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        authorImage: 'https://i.pravatar.cc/300',
        email: '5satya@imos.site',
        mainTitle: 'Proin ac mi non nisi tempus iaculis',
        subTitle: 'Consectetur',
        tag: {
          color: 'primary',
          text: 'Done'
        },
        role: 'Member'
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        authorImage: 'https://i.pravatar.cc/301',
        email: '5satya@nakiuha.com',
        mainTitle: 'Etiam sit amet erat molestie convallis turpis',
        subTitle: 'Habitasse',
        tag: {
          color: 'danger',
          text: 'cancel'
        },
        role: 'Admin'
      },
      {
        id: 5,
        author: 'TATE MCGOWAN',
        authorImage: 'https://i.pravatar.cc/302',
        email: '5satya@mexcool.com',
        mainTitle: 'Integer ac turpis nisi arcu auctor',
        subTitle: 'Auctor',
        tag: {
          color: 'success',
          text: 'Success'
        },
        role: 'Member'
      },
      {
        id: 6,
        author: 'MAE CHAVEZ',
        authorImage: 'https://i.pravatar.cc/303',
        email: '5satya@tirtalayana.com',
        mainTitle: 'In hac habitasse platea dictumst',
        subTitle: 'Laoreet',
        tag: {
          color: 'primary',
          text: 'Done'
        },
        role: 'Member'
      }
    ]);

    return (
      <ListTable1 tableHeader={tableHeader} link={link} avatars={avatars} />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/ListTables', module).add(
  'ListTable2',
  () => {
    const tableHeader = array('tableHeader', [
      'NAME',
      'TITLE',
      'EMAIL',
      'ROLE'
    ]);
    const link = object('link', {
      href: '/',
      text: 'Edit'
    });
    const avatars = object('avatars', [
      {
        id: 1,
        author: 'DANICA MELTON',
        email: '5satya@tirtalayana.com',
        title: 'Morbi ac lacus tempus semper metus vitae',
        role: 'Admin'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        email: '5satya@ettatct.com',
        title: 'Proin ac mi non nisi tempus iaculis',
        role: 'Member',
        background: true
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        email: '5satya@readt.site',
        title: 'Pellentesque rutrum ligula vitae pharetra ornare',
        role: 'Owner'
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        email: '5satya@goldinbox.net',
        title: 'Etiam sit amet erat molestie convallis turpis',
        role: 'Member',
        background: true
      },
      {
        id: 5,
        author: 'TATE MCGOWAN',
        email: '5satya@cuedigy.com',
        title: 'Integer ac turpis nisi arcu auctor',
        role: 'Member'
      },
      {
        id: 6,
        author: 'MAE CHAVEZ',
        email: '5satya@cudimex.com',
        title: 'In hac habitasse platea dictumst',
        role: 'Admin',
        background: true
      }
    ]);

    return (
      <ListTable2 tableHeader={tableHeader} link={link} avatars={avatars} />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('Examples/ApplicationUi/ListTables', module).add(
  'ListTable3',
  () => {
    const tableHeader = array('tableHeader', [
      'NAME',
      'TITLE',
      'EMAIL',
      'ROLE'
    ]);
    const link = object('link', {
      href: '/',
      text: 'Edit'
    });
    const avatars = object('avatars', [
      {
        id: 1,
        author: 'DANICA MELTON',
        email: '5satya@tirtalayana.com',
        title: 'Morbi ac lacus tempus semper metus vitae',
        role: 'Admin'
      },
      {
        id: 2,
        author: 'JACE WYATT',
        email: '5satya@ettatct.com',
        title: 'Proin ac mi non nisi tempus iaculis',
        role: 'Member'
      },
      {
        id: 3,
        author: 'HAROLD BROCK',
        email: '5satya@readt.site',
        title: 'Pellentesque rutrum ligula vitae pharetra ornare',
        role: 'Owner'
      },
      {
        id: 4,
        author: 'THADDEUS BROWN',
        email: '5satya@goldinbox.net',
        title: 'Etiam sit amet erat molestie convallis turpis',
        role: 'Member'
      },
      {
        id: 5,
        author: 'TATE MCGOWAN',
        email: '5satya@cuedigy.com',
        title: 'Integer ac turpis nisi arcu auctor',
        role: 'Member'
      },
      {
        id: 6,
        author: 'MAE CHAVEZ',
        email: '5satya@cudimex.com',
        title: 'In hac habitasse platea dictumst',
        role: 'Admin'
      }
    ]);

    return (
      <ListTable3 tableHeader={tableHeader} link={link} avatars={avatars} />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
