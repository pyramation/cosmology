import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import {
  DropdownContainerOne,
  DropdownImgbox,
  DropdownImg,
  DropdownTitle,
  DropdownContainerTwo,
  DropdownTitleBox
} from './styled';

const Dropdown = ({ type, text, img, height, width }) => {
  if (type === 'dropdown-1') {
    return (
      <DropdownContainerOne
        width={width !== null ? width : null}
        height={height !== null ? height : null}
      >
        <DropdownImgbox>
          <DropdownImg src={img} />
        </DropdownImgbox>
        <DropdownTitle>{text}</DropdownTitle>
        <Icon size={3} name="down" color="#808080" />
      </DropdownContainerOne>
    );
  } else if (type === 'dropdown-2') {
    return (
      <DropdownContainerTwo
        width={width !== null ? width : null}
        height={height !== null ? height : null}
      >
        <DropdownTitleBox>
          <DropdownTitle>{text}</DropdownTitle>
        </DropdownTitleBox>
        <Icon size={3} name="down" color="#808080" />
      </DropdownContainerTwo>
    );
  }
};

export default Dropdown;

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.any
};

Dropdown.defaultProps = {
  type: 'dropdown-1',
  text: 'Blue Shark Studio',
  img:
    'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  height: '40px',
  width: '186px'
};
