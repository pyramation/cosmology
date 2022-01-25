import React from 'react';
import { storiesOf } from '@storybook/react';
import { MetaForm } from '.';
import { Icon } from '@webql/core';
import { CenteredLayout } from '../layouts';
import { boolean } from '@storybook/addon-knobs';

const logo = <Icon size={12} name="github" />;

const exampleData = {
  name: 'UserProfile',
  fields: [
    {
      name: 'id',
      type: {
        pgAlias: 'uuid',
        pgType: 'uuid',
        gqlType: 'UUID',
        isArray: false
      }
    },
    {
      name: 'profilePicture',
      type: {
        pgAlias: 'image',
        pgType: 'image',
        gqlType: 'JSON',
        isArray: false
      }
    },
    {
      name: 'bio',
      type: {
        pgAlias: 'text',
        pgType: 'text',
        gqlType: 'String',
        isArray: false
      }
    },
    {
      name: 'reputation',
      type: {
        pgAlias: 'numeric',
        pgType: 'numeric',
        gqlType: 'BigFloat',
        isArray: false
      }
    },
    {
      name: 'displayName',
      type: {
        pgAlias: 'text',
        pgType: 'text',
        gqlType: 'String',
        isArray: false
      }
    },
    {
      name: 'tags',
      type: {
        pgAlias: 'citext',
        pgType: 'citext',
        gqlType: '[String]',
        isArray: true
      }
    },
    {
      name: 'desired',
      type: {
        pgAlias: 'citext',
        pgType: 'citext',
        gqlType: '[String]',
        isArray: true
      }
    },
    {
      name: 'createdBy',
      type: {
        pgAlias: 'uuid',
        pgType: 'uuid',
        gqlType: 'UUID',
        isArray: false
      }
    },
    {
      name: 'updatedBy',
      type: {
        pgAlias: 'uuid',
        pgType: 'uuid',
        gqlType: 'UUID',
        isArray: false
      }
    },
    {
      name: 'createdAt',
      type: {
        pgAlias: 'timestamptz',
        pgType: 'timestamptz',
        gqlType: 'Datetime',
        isArray: false
      }
    },
    {
      name: 'updatedAt',
      type: {
        pgAlias: 'timestamptz',
        pgType: 'timestamptz',
        gqlType: 'Datetime',
        isArray: false
      }
    },
    {
      name: 'userId',
      type: {
        pgAlias: 'uuid',
        pgType: 'uuid',
        gqlType: 'UUID',
        isArray: false
      }
    }
  ],
  foreignKeyConstraints: [
    {
      fields: [
        {
          name: 'userId'
        }
      ]
    }
  ]
};

storiesOf('Meta/Forms', module).add('UserProfile', () => {
  return (
    <>
      <CenteredLayout logo={logo} header="Dan L" subhead="">
        <MetaForm
          meta={exampleData}
          data={{
            displayName: 'Dan L',
            profilePicture: { url: 'https://logoipsum.com/logo/logo-10.svg' },
            reputation: 60,
            hidden: ['createdAt', 'updatedAt']
          }}
        />
      </CenteredLayout>
    </>
  );
});
