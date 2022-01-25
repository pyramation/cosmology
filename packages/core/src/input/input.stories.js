import React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';
import Box from '../box';
import Icon from '../icon';
import Stack from '../stack';
import Grid from '../grid';
import Text from '../text';
import Input from './';

storiesOf('Input', module).add('Default', () => {
  const customBgColor = color('customBackgroundColor', '#d9ffdb');
  const customTextColor = color('customTextColor', '#005a07');
  const customIconColor = color('customIconColor', '#005a07');

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(400px, 1fr))" gap={4}>
      <Box p={5}>
        <Text>Size sm</Text>
        <Stack space={4} mt={5}>
          <Input
            autoFocus
            width="200px"
            size="sm"
            type="text"
            placeholder="Custom width input"
          />
          <Input size="sm" type="text" placeholder="Your address" />
          <Input readOnly size="sm" type="text" placeholder="ReadOnly input" />
          <Input size="sm" type="text" placeholder="I am disabled" disabled />
          <Input size="sm" type="text" placeholder="I am invalid" invalid />
          <Box width="300px">
            <Input
              size="sm"
              type="text"
              placeholder="Your address"
              startElement={<Icon name="code" />}
            />
          </Box>

          <Box width="300px">
            <Input
              size="sm"
              type="text"
              placeholder="Your address"
              disabled
              startElement={<Icon name="code" />}
            />
          </Box>

          <Box width="300px">
            <Input
              size="sm"
              type="text"
              placeholder="Your address"
              invalid
              startElement={<Icon name="code" />}
            />
          </Box>

          <Box width="300px">
            <Input
              size="sm"
              type="text"
              placeholder="Your address"
              endElement={<Icon name="code" />}
            />
          </Box>
        </Stack>
      </Box>
      <Box p={5}>
        <Text>Size md</Text>
        <Stack space={4} mt={5}>
          <Input width="200px" type="text" placeholder="Custom width input" />
          <Input type="text" placeholder="Your address" />
          <Input type="text" placeholder="I am disabled" disabled />
          <Input type="text" placeholder="I am invalid" invalid />
          <Box width="300px">
            <Input
              type="text"
              placeholder="Your address"
              startElement={<Icon name="code" />}
            />
          </Box>

          <Box width="300px">
            <Input
              type="text"
              placeholder="Your address"
              disabled
              startElement={<Icon name="code" />}
            />
          </Box>

          <Box width="300px">
            <Input
              type="text"
              placeholder="Your address"
              invalid
              startElement={<Icon name="code" />}
            />
          </Box>

          <Box width="300px">
            <Input
              type="text"
              placeholder="Your address"
              endElement={<Icon name="code" />}
            />
          </Box>
        </Stack>
      </Box>
      <Box p={5}>
        <Text>Size lg</Text>
        <Stack space={4} mt={5}>
          <Input
            size="lg"
            width="200px"
            type="text"
            placeholder="Custom width input"
          />
          <Input size="lg" type="text" placeholder="Your address" />
          <Input size="lg" type="text" placeholder="I am disabled" disabled />
          <Input size="lg" type="text" placeholder="I am invalid" invalid />
          <Box width="300px">
            <Input
              size="lg"
              type="text"
              placeholder="Your address"
              startElement={<Icon name="code" />}
            />
          </Box>

          <Box width="300px">
            <Input
              size="lg"
              type="text"
              placeholder="Your address"
              disabled
              startElement={<Icon name="code" />}
            />
          </Box>

          <Box width="300px">
            <Input
              size="lg"
              type="text"
              placeholder="Your address"
              invalid
              startElement={<Icon name="code" />}
            />
          </Box>

          <Box width="300px">
            <Input
              size="lg"
              type="text"
              placeholder="Your address"
              endElement={<Icon name="code" />}
            />
          </Box>
        </Stack>
      </Box>
      <Stack space={5}>
        <Text mb={5}>Custom</Text>
        <Box>
          <Input
            placeholder="Theme Read Only"
            bg="blue.100"
            color="accent"
            iconBorder
            startElement={<Icon name="code" color="accent" />}
            readOnly
          />
        </Box>
        <Box>
          <Input
            placeholder="Theme Disabled"
            bg="purple.100"
            color="purple.600"
            startElement={<Icon name="code" color="purple.600" />}
            disabled
          />
        </Box>
        <Box>
          <Input
            placeholder="RGBA / HEX"
            bg="#fff7ad"
            color="#ffa000"
            startElement={<Icon name="code" color="#ffa000" />}
          />
        </Box>
        <Box>
          <Input
            iconBorder
            placeholder="Icon with border"
            startElement={<Icon name="code" />}
          />
        </Box>
        <Box>
          <Input
            iconBorder
            placeholder="Icon with border"
            bg={customBgColor}
            color={customTextColor}
            endElement={<Icon name="code" color={customIconColor} />}
          />
        </Box>
      </Stack>
    </Grid>
  );
});
