import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Text } from '@webql/core';
import { TabNav, TabNavBox } from './styled';

export const TabNavigation = ({ page }) => {
  const links = [
    {
      id: 1,
      icon: 'folder',
      href: '/',
      text: 'Project Info',
      pagename: 'project'
    },
    { id: 2, icon: 'zap', href: '/', text: 'Master', pagename: 'master' },
    {
      id: 3,
      icon: 'code-fork',
      href: '/',
      text: 'Branches',
      pagename: 'branches'
    },
    {
      id: 4,
      icon: 'collaborator',
      href: '/',
      text: 'Collaborators',
      pagename: 'teams'
    },
    {
      id: 5,
      icon: 'activity',
      href: '/',
      text: 'Activities',
      pagename: 'activity'
    },
    {
      id: 6,
      icon: 'billings',
      href: '/',
      text: 'Invoice',
      pagename: 'invoice'
    },
    {
      id: 7,
      icon: 'publish',
      href: '/',
      text: 'Website Configuration',
      pagename: 'configuration'
    }
  ];
  return (
    <TabNav>
      {links.map(link => {
        const { text, icon, pagename } = link;

        return (
          <TabNavBox active={page === pagename}>
            <Icon
              color={page === pagename ? '#05A2FF' : '#888888'}
              size={6}
              name={icon}
            />
            <Text
              mt={2}
              fontSize="sm"
              color={page === pagename ? '#05A2FF' : '#888888'}
            >
              {text}
            </Text>
          </TabNavBox>
        );
      })}
    </TabNav>
  );
};

TabNavigation.propTypes = {
  page: PropTypes.string
};

TabNavigation.defaultProps = {
  page: 'project'
};
