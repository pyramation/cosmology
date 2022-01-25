import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  ListItem,
  Icon,
  Divider,
  Heading,
  Drawer,
  Slide
} from '@webql/core';
import { useWindowSize } from '@webql/core';
import {
  ContainerBox,
  CustomBox,
  CustomBox2,
  BoxIcon,
  NavBarOverlay,
  CustomSlide
} from './styled';

export const SideNav = ({ width, heading, logo, links, children }) => {
  const [open, setOpen] = useState(false);
  // const { innerWidth } = useWindowSize();

  // useEffect(() => {
  //   if (innerWidth > 991) {
  //     setOpen(false);
  //   }
  // }, [innerWidth]);

  const renderList = () => {
    return (
      <>
        <ListItem heading>
          <Box display="flex" alignItems="center" mt={2} width="100%">
            {innerWidth > 768 ? (
              <>
                {renderLogo(logo)}
                {heading && <Heading fontSize="2xl">{heading}</Heading>}
              </>
            ) : (
              <Box
                display="flex"
                width="100%"
                alignItems="center"
                justifyContent="space-between"
              >
                {renderLogo(logo)}
                <BoxIcon>
                  <Icon
                    name="x"
                    style={{ cursor: 'pointer', marginRight: 5 }}
                    onClick={() => setOpen(false)}
                  />
                </BoxIcon>
              </Box>
            )}
          </Box>
        </ListItem>
        {links.map((link, i) => {
          const { text, icon, active, ...linkRest } = link;
          return (
            <Box color="blue.600" key={i}>
              <ListItem selected={!!active} {...linkRest}>
                {icon && <Icon mr={3} ml={3} size={6} name={icon} />}
                {text ? text : ''}
              </ListItem>
            </Box>
          );
        })}
      </>
    );
  };

  const renderLogo = logo => {
    if (React.isValidElement(logo)) {
      return logo;
    } else if (typeof logo === 'string' && logo.length > 0) {
      return (
        <img
          src={logo}
          style={{ height: '3rem', margin: '0 0.75rem' }}
          alt="Brand Logo"
        />
      );
    } else {
      return null;
    }
  };

  return (
    <ContainerBox>
      <CustomBox minHeight="100vh" width={width}>
        {renderList()}
      </CustomBox>
      <CustomBox2 p={4}>
        <Box color="blue.600" className="custom-box-2">
          <Icon name="justify" size={6} onClick={() => setOpen(true)} />
          {renderLogo(logo)}
        </Box>
      </CustomBox2>
      <NavBarOverlay open={open} onClick={() => setOpen(false)} />
      <CustomSlide in={open} open={open}>
        <Box bg="white" width={280} height="100vh">
          {renderList()}
        </Box>
      </CustomSlide>
      <Box p={4} className="container-box">
        {children}
      </Box>
    </ContainerBox>
  );
};

const LogoDefault = props => {
  const { fill, circleFill, ...attributes } = props;
  return (
    <svg
      viewBox="0 0 16 16"
      width="56px"
      height="50px"
      style={{ margin: '0 10px' }}
      {...attributes}
    >
      <path
        d="M13.14 4.18c2.07-.33 3.63 2 2.46 4.41-1 2.38-4.69 4.85-8.81 3.76a8.19 8.19 0 01-6.63-6 5.26 5.26 0 01.12-2.9 3.19 3.19 0 00.3 2.38 2.51 2.51 0 002.5 1A18.54 18.54 0 007 6c1.65-.5 4-1.64 6.14-1.82z"
        fill={fill ? fill : 'currentColor'}
      />
      <circle
        cx={12.26}
        cy={7.72}
        r={2.07}
        fill={circleFill ? circleFill : '#fff'}
      />
    </svg>
  );
};

export default SideNav;

SideNav.propTypes = {
  width: PropTypes.string,
  heading: PropTypes.string,
  logo: PropTypes.node,
  link: PropTypes.array,
  children: PropTypes.node
};

SideNav.defaultProps = {
  width: '300px',
  heading: '',
  logo: <LogoDefault fill="#01a1ff" />,
  link: [],
  children: ''
};
