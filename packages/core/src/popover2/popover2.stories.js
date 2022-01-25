import React, { createContext, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../box';
import Button from '../button';
import Center from '../center';
import Text from '../text';
import Popup, { usePopup } from '../popup';
import Popover2 from './';

const Popover2Default = ({ id, trigger }) => {
  const { bindTrigger, bindPopover, bindHover } = usePopup({ id });

  return (
    <Center width="500px" p={5}>
      <Button
        variant="secondary"
        {...(trigger === 'click' ? bindTrigger() : bindHover())}
      >
        {trigger === 'click' ? 'Click me' : 'Hover me'}
      </Button>

      <Popover2 placement="bottom" {...bindPopover()}>
        <Text color="inherit" fontSize="sm">
          hello this is a very long text
        </Text>
      </Popover2>
    </Center>
  );
};

const PopoverToggle = () => {
  const { bindToggle, bindPopover, isOpen } = usePopup();

  return (
    <Center width="500px" p={5}>
      <Button variant="secondary" {...bindToggle()}>
        {isOpen ? 'close' : 'open'}
      </Button>

      <Popover2
        placement="bottom"
        fallbackPlacements={['right', 'left']}
        {...bindPopover()}
      >
        <Text color="inherit" fontSize="sm">
          hello this is a very long text
        </Text>
      </Popover2>
    </Center>
  );
};

const ParentPopupState = createContext(null);

const PopoverCascade = () => {
  const parentRef = useRef(null);
  return (
    <Popup>
      {popupState => (
        <ParentPopupState.Provider value={popupState}>
          <Box p={5}>
            <Button
              variant="secondary"
              {...popupState.bindToggle()}
              ref={popupState.setTargetEl}
            >
              Click me
            </Button>

            <Popover2
              placement="bottom"
              {...popupState.bindPopover()}
              ref={parentRef}
            >
              <Text color="inherit" fontSize="sm">
                hello this is a very long text
              </Text>

              {/* <SubPopover /> */}
              <ParentPopupState.Consumer>
                {parentPopupState => {
                  return (
                    <Popup parentState={parentPopupState}>
                      {childState => (
                        <Box p={5}>
                          <Button
                            variant="secondary"
                            intent="warning"
                            {...childState.bindTrigger()}
                          >
                            Click inside
                          </Button>

                          <Popover2
                            {...childState.bindPopover()}
                            targetEl={parentRef.current}
                            placement="right"
                          >
                            <Text color="inherit" fontSize="sm">
                              hello this is a very long text
                            </Text>
                          </Popover2>
                        </Box>
                      )}
                    </Popup>
                  );
                }}
              </ParentPopupState.Consumer>
            </Popover2>
          </Box>
        </ParentPopupState.Provider>
      )}
    </Popup>
  );
};

const ControlledOpenState = () => {
  const [buttonEl, setButtonEl] = React.useState();
  return (
    <Center width="500px" p={5}>
      <Button variant="secondary" ref={setButtonEl}>
        referenced by the popover
      </Button>

      <Popover2 placement="right" isOpen={true} triggerEl={buttonEl} bg="bg.50">
        <Text color="inherit" fontSize="sm">
          hello this is a very long text
        </Text>
      </Popover2>
    </Center>
  );
};

const ContextMenu = () => {
  const { bindContextMenu, bindPopover, isOpen } = usePopup();

  return (
    <Center width="500px" p={5}>
      <Box bg="blue.400" p={4} {...bindContextMenu()}>
        Right-click on me
      </Box>

      <Popover2 placement="bottom" {...bindPopover()}>
        <Text color="inherit" fontSize="sm">
          hello this is a very long text
        </Text>
      </Popover2>
    </Center>
  );
};

storiesOf('Popover2', module)
  .add('Default click', () => <Popover2Default trigger="click" />)
  .add('Default hover', () => <Popover2Default trigger="hover" />)
  .add('Default toggle', () => <PopoverToggle />)
  .add('Cascade click', () => <PopoverCascade />)
  .add('Controlled open state', () => <ControlledOpenState />)
  .add('Context menu', () => <ContextMenu />);
