import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Heading from '../heading';
import Button from '../button';
import Fade from './fade';
import Collapse from './collapse';
import Slide from './slide';

const FadeDemo = () => {
  const [inProp, setIn] = useState(false);
  return (
    <div style={{ border: '1px dashed black', padding: 100 }}>
      <Button onClick={() => setIn(inProp => !inProp)}>
        Click to toggle fade
      </Button>
      <Fade in={inProp}>
        <div style={{ backgroundColor: 'blue', marginTop: 20, padding: 20 }}>
          <Heading as="h4" size="md">
            Contents lasd popqwe lklasd qwer asdasmdk
          </Heading>
        </div>
      </Fade>
    </div>
  );
};

const CollapseDemo = () => {
  const [inProp, setIn] = useState(false);
  return (
    <div style={{ border: '1px dashed black', padding: 100, height: 'auto' }}>
      <Button onClick={() => setIn(inProp => !inProp)}>
        Click to toggle collapse
      </Button>
      <Collapse in={inProp}>
        <div
          style={{
            backgroundColor: 'red',
            padding: 20,
            height: 400
          }}
        >
          <Heading as="h4" size="md">
            Contents lasd popqwe lklasd qwer asdasmdk
          </Heading>
        </div>
      </Collapse>
    </div>
  );
};

const SlideDemo = () => {
  const [inProp, setIn] = useState(false);
  return (
    <div style={{ border: '1px dashed black', padding: 100, height: 'auto' }}>
      <Button onClick={() => setIn(inProp => !inProp)}>
        Click to toggle slide
      </Button>
      <Slide in={inProp} anchor="right">
        <div
          style={{
            backgroundColor: 'red',
            marginTop: 20,
            padding: 20,
            height: 400
          }}
        >
          <Heading as="h4" size="md">
            Contents lasd popqwe lklasd qwer asdasmdk
          </Heading>
        </div>
      </Slide>
    </div>
  );
};

storiesOf('Transitions', module)
  .add('Fade', () => <FadeDemo />)
  .add('Collapse', () => <CollapseDemo />)
  .add('Slide', () => <SlideDemo />);
