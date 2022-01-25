import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { useLoadImage } from '@webql/hooks';

import Icon from '../icon';

import {
  StyledAvatarWrapper,
  StyledAvatar,
  StyledAvatarName,
  StyledDefaultAvatar,
  StyledLoadingAvatar
} from './styled';

const getShortName = name => {
  return `${name.charAt(0)}`.toUpperCase();
};

const Avatar = ({ src, name, loading, size, ...otherProps }) => {
  const loaded = useLoadImage({ src });

  const defaultAvatar = (
    <StyledDefaultAvatar size={size}>
      <Icon name="user" />
    </StyledDefaultAvatar>
  );

  const renderAvatar = () => {
    if (loading) return <StyledLoadingAvatar size={size} />;
    if (!src && !name) return defaultAvatar;
    if (loaded) {
      return <StyledAvatar src={src} alt={name} size={size} />;
    }
    if (!loaded) {
      if (name) {
        const shortName = getShortName(name);
        return (
          <StyledAvatarName alt={name} shortName={shortName} size={size}>
            {shortName}
          </StyledAvatarName>
        );
      } else {
        return defaultAvatar;
      }
    }
  };

  return (
    <StyledAvatarWrapper {...otherProps}>{renderAvatar()}</StyledAvatarWrapper>
  );
};

export default memo(Avatar);

Avatar.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string,
  src: PropTypes.string
};
