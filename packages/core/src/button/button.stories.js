import React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';
import Button from './index';
import Box from '../box';
import Stack from '../stack';

storiesOf('Button', module)
  .add('Button', () => {
    const customBgColor = color('customBackgroundColor', '#6b46c1');
    const customTextColor = color('customTextColor', '#ffffcc');
    return (
      <Box p={6}>
        <Box display="flex">
          <Stack inline space={8}>
            {/* Primary */}
            <Stack space={4}>
              <Box>
                <Button size="sm">Primary sm</Button>
              </Box>
              <Box>
                <Button size="md">Primary md</Button>
              </Box>
              <Box>
                <Button size="lg">Primary lg</Button>
              </Box>
              <Box>
                <Button size="lg" startIcon="archive">
                  Primary w start icon
                </Button>
              </Box>
              <Box>
                <Button size="lg" endIcon="archive">
                  Primary w end icon
                </Button>
              </Box>
              <Box>
                <Button size="lg" shape="pill">
                  Primary pill
                </Button>
              </Box>
              <Box>
                <Button size="lg" disabled>
                  Primary disabled
                </Button>
              </Box>
              <Box>
                <Button size="lg" selected>
                  Primary selected
                </Button>
              </Box>
            </Stack>
            {/* Primary loading */}
            <Stack space={4}>
              <Box>
                <Button size="sm" loading>
                  Primary sm
                </Button>
              </Box>
              <Box>
                <Button size="md" loading>
                  Primary md
                </Button>
              </Box>
              <Box>
                <Button size="lg" loading>
                  Primary lg
                </Button>
              </Box>
              <Box>
                <Button size="lg" shape="pill" loading>
                  Primary pill
                </Button>
              </Box>
              <Box>
                <Button size="lg" disabled loading>
                  Primary disabled
                </Button>
              </Box>
              <Box>
                <Button variant="primary" size="sm" midIcon="plus"></Button>
              </Box>
              <Box>
                <Button variant="primary" size="md" midIcon="plus"></Button>
              </Box>
              <Box>
                <Button variant="primary" size="lg" midIcon="plus"></Button>
              </Box>
            </Stack>
            {/* Secondary */}
            <Stack space={4}>
              <Box>
                <Button variant="secondary" size="sm">
                  Secondary sm
                </Button>
              </Box>
              <Box>
                <Button variant="secondary" size="md">
                  Secondary md
                </Button>
              </Box>
              <Box>
                <Button variant="secondary" size="lg">
                  Secondary lg
                </Button>
              </Box>
              <Box>
                <Button variant="secondary" size="lg" startIcon="archive">
                  Secondary w start icon
                </Button>
              </Box>
              <Box>
                <Button variant="secondary" size="lg" endIcon="archive">
                  Secondary w end icon
                </Button>
              </Box>
              <Box>
                <Button variant="secondary" size="lg" shape="pill">
                  Secondary pill
                </Button>
              </Box>
              <Box>
                <Button variant="secondary" size="lg" disabled>
                  Secondary disabled
                </Button>
              </Box>
              <Box>
                <Button variant="secondary" size="lg" selected>
                  Secondary selected
                </Button>
              </Box>
            </Stack>
            {/* Secondary Loading */}
            <Stack space={4}>
              <Box>
                <Button variant="secondary" loading size="sm">
                  Secondary sm
                </Button>
              </Box>
              <Box>
                <Button variant="secondary" loading size="md">
                  Secondary md
                </Button>
              </Box>
              <Box>
                <Button variant="secondary" loading size="lg">
                  Secondary lg
                </Button>
              </Box>
              <Box>
                <Button variant="secondary" loading size="lg" shape="pill">
                  Secondary pill
                </Button>
              </Box>
              <Box>
                <Button variant="secondary" loading size="lg" disabled>
                  Secondary disabled
                </Button>
              </Box>
              <Box>
                <Button variant="secondary" size="sm" midIcon="plus"></Button>
              </Box>
              <Box>
                <Button variant="secondary" size="md" midIcon="plus"></Button>
              </Box>
              <Box>
                <Button variant="secondary" size="lg" midIcon="plus"></Button>
              </Box>
            </Stack>
            {/* Tertiary */}
            <Stack space={4}>
              <Box>
                <Button variant="tertiary" size="sm">
                  Tertiary sm
                </Button>
              </Box>
              <Box>
                <Button variant="tertiary" size="md">
                  Tertiary md
                </Button>
              </Box>
              <Box>
                <Button variant="tertiary" size="lg">
                  Tertiary lg
                </Button>
              </Box>
              <Box>
                <Button variant="tertiary" size="lg" startIcon="archive">
                  Tertiary w start icon
                </Button>
              </Box>
              <Box>
                <Button variant="tertiary" size="lg" endIcon="archive">
                  Tertiary w end icon
                </Button>
              </Box>
              <Box>
                <Button variant="tertiary" size="lg" shape="pill">
                  Tertiary pill
                </Button>
              </Box>
              <Box>
                <Button variant="tertiary" size="lg" disabled>
                  Tertiary disabled
                </Button>
              </Box>
              <Box>
                <Button variant="tertiary" size="lg" selected>
                  Tertiary selected
                </Button>
              </Box>
            </Stack>
            {/* Custom */}
            <Stack space={4}>
              <Box>
                <Button bg="#FBD38D" color="purple.400">
                  custom color
                </Button>
              </Box>
              <Box>
                <p>knobs can select color</p>
                <Button bg={customBgColor} color={customTextColor}>
                  custom color selected
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    );
  })
  .add('Button with intent', () => (
    <Stack inline space={8} px={16} py={8}>
      <Stack space={4}>
        <Box>Primary</Box>
        <Box>
          <Button variant="primary" size="sm" intent="primary">
            Primary intent
          </Button>
        </Box>
        <Box>
          <Button variant="primary" size="sm" intent="success">
            Success intent
          </Button>
        </Box>
        <Box>
          <Button variant="primary" size="sm" intent="warning">
            Warning intent
          </Button>
        </Box>
        <Box>
          <Button variant="primary" size="sm" intent="danger">
            Danger intent
          </Button>
        </Box>
        <Box>
          <Button variant="primary" size="sm" intent="info">
            Info intent
          </Button>
        </Box>
        <Box>
          <Button variant="primary" size="sm" intent="primary" selected>
            Primary intent selected
          </Button>
        </Box>
        <Box>
          <Button variant="primary" size="sm" intent="success" selected>
            Success intent selected
          </Button>
        </Box>
        <Box>
          <Button variant="primary" size="sm" intent="warning" selected>
            Warning intent selected
          </Button>
        </Box>
        <Box>
          <Button variant="primary" size="sm" intent="danger" selected>
            Danger intent selected
          </Button>
        </Box>
        <Box>
          <Button variant="primary" size="sm" intent="info" selected>
            Info intent selected
          </Button>
        </Box>
      </Stack>
      <Stack space={4}>
        <Box>Secondary</Box>
        <Box>
          <Button variant="secondary" size="sm" intent="primary">
            Primary intent
          </Button>
        </Box>
        <Box>
          <Button variant="secondary" size="sm" intent="success">
            Success intent
          </Button>
        </Box>
        <Box>
          <Button variant="secondary" size="sm" intent="warning">
            Warning intent
          </Button>
        </Box>
        <Box>
          <Button variant="secondary" size="sm" intent="danger">
            Danger intent
          </Button>
        </Box>
        <Box>
          <Button variant="secondary" size="sm" intent="info">
            Info intent
          </Button>
        </Box>
        <Box>
          <Button variant="secondary" size="sm" intent="primary" selected>
            Primary intent selected
          </Button>
        </Box>
        <Box>
          <Button variant="secondary" size="sm" intent="success" selected>
            Success intent selected
          </Button>
        </Box>
        <Box>
          <Button variant="secondary" size="sm" intent="warning" selected>
            Warning intent selected
          </Button>
        </Box>
        <Box>
          <Button variant="secondary" size="sm" intent="danger" selected>
            Danger intent selected
          </Button>
        </Box>
        <Box>
          <Button variant="secondary" size="sm" intent="info" selected>
            Info intent selected
          </Button>
        </Box>
      </Stack>
      <Stack space={4}>
        <Box>Tertiary</Box>
        <Box>
          <Button variant="tertiary" size="sm" intent="primary">
            Primary intent
          </Button>
        </Box>
        <Box>
          <Button variant="tertiary" size="sm" intent="success">
            Success intent
          </Button>
        </Box>
        <Box>
          <Button variant="tertiary" size="sm" intent="warning">
            Warning intent
          </Button>
        </Box>
        <Box>
          <Button variant="tertiary" size="sm" intent="danger">
            Danger intent
          </Button>
        </Box>
        <Box>
          <Button variant="tertiary" size="sm" intent="info">
            Info intent
          </Button>
        </Box>
        <Box>
          <Button variant="tertiary" size="sm" intent="primary" selected>
            Primary intent selected
          </Button>
        </Box>
        <Box>
          <Button variant="tertiary" size="sm" intent="success" selected>
            Success intent selected
          </Button>
        </Box>
        <Box>
          <Button variant="tertiary" size="sm" intent="warning" selected>
            Warning intent selected
          </Button>
        </Box>
        <Box>
          <Button variant="tertiary" size="sm" intent="danger" selected>
            Danger intent selected
          </Button>
        </Box>
        <Box>
          <Button variant="tertiary" size="sm" intent="info" selected>
            Info intent selected
          </Button>
        </Box>
      </Stack>

      <Stack space={4}>
        <Box>
          <Button variant="primary">default primary</Button>
        </Box>
        <Box>
          <Button variant="secondary">default secondary</Button>
        </Box>
        <Box>
          <Button variant="tertiary">default tertiary</Button>
        </Box>
      </Stack>
    </Stack>
  ));
