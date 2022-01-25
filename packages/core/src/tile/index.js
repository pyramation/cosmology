import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Box from '../box';
import Text from '../text';
import {
  TileContainer,
  TileImgContainer,
  TileImg,
  TileContainerDesbox,
  TileTime,
  TileTitle,
  MediaTileImg,
  MediaTile,
  MediaTileVideo,
  MediaTileTextbox,
  MediaTileImgbox
} from './styled.js';

const Tile = ({ title, time, image, active, type, video }) => {
  if (type === 'lgi') {
    return (
      <TileContainer>
        <TileImgContainer>
          <TileImg src={image} />
        </TileImgContainer>
        <TileContainerDesbox
          bgcolor={active === 'active' ? '#EBF7FF' : null}
          color={active === 'active' ? '#01A1FF' : null}
        >
          <Box>
            <TileTitle>{title}</TileTitle>
            <TileTime>{time}</TileTime>
          </Box>
          <Box>
            <Icon size={4} name="more" />
          </Box>
        </TileContainerDesbox>
      </TileContainer>
    );
  } else if (type === 'smi') {
    return (
      <MediaTile>
        <MediaTileImgbox>
          <MediaTileImg className="media-tile-img" src={image} />
        </MediaTileImgbox>
        <MediaTileTextbox bgcolor={active === 'active' ? '#EBF7FF' : null}>
          <Box>
            <Text
              fontSize="md"
              color={active === 'active' ? '#01A1FF' : '#888888'}
            >
              {title}
            </Text>
            <Text
              pt={2}
              fontSize="xs"
              color={active === 'active' ? '#01A1FF' : '#888888'}
            >
              {time}
            </Text>
          </Box>
          <Box className="media-tile-textbox-r">
            <Icon
              color={active === 'active' ? '#01A1FF' : '#888888'}
              size={4}
              name="more-horizontal"
            />
          </Box>
        </MediaTileTextbox>
      </MediaTile>
    );
  } else if (type === 'smv') {
    return (
      <MediaTile>
        <MediaTileImgbox>
          <MediaTileVideo
            className="media-tile-video"
            src={video}
            controls
          ></MediaTileVideo>
        </MediaTileImgbox>
        <MediaTileTextbox bgcolor={active === 'active' ? '#EBF7FF' : null}>
          <Box>
            <Text
              fontSize="md"
              color={active === 'active' ? '#01A1FF' : '#888888'}
            >
              {title}
            </Text>
            <Text
              pt={2}
              fontSize="xs"
              color={active === 'active' ? '#01A1FF' : '#888888'}
            >
              {time}
            </Text>
          </Box>
          <Box>
            <Icon
              mb={2}
              color={active === 'active' ? '#01A1FF' : '#888888'}
              size={4}
              name="more-horizontal"
            />
          </Box>
        </MediaTileTextbox>
      </MediaTile>
    );
  }
};

export default Tile;

Tile.displayName = 'Tile';

Tile.propTypes = {
  title: PropTypes.string,
  time: PropTypes.any,
  image: PropTypes.any,
  video: PropTypes.any,
  type: PropTypes.string
};

Tile.defaultProps = {
  title: 'The New Era',
  time: 'Updated 3 hours ago',
  image:
    'https://images.pexels.com/photos/3022417/pexels-photo-3022417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  type: 'lgi'
};
