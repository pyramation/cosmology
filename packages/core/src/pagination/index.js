import React from 'react';
import Icon from '../icon';

import { PaginationContainer, PaginationNum, BlueBox } from './styled';

const Pagination = () => {
  return (
    <PaginationContainer>
      <Icon color="#888888" size={6} name="chevron-left" />
      <PaginationNum>
        <BlueBox>1</BlueBox>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <Icon mt={1} color="#888888" size={4} name="more-horizontal" />
        <p>5</p>
      </PaginationNum>
      <Icon color="#888888" size={6} name="chevron-right" />
    </PaginationContainer>
  );
};

export default Pagination;
