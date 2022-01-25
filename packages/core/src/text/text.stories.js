import React from 'react';
import { storiesOf } from '@storybook/react';

import Divider from '../divider';
import Box from '../box';
import Stack from '../stack';
import Text from './';

storiesOf('Text', module)
  .add('Text', () => (
    <Stack space={3}>
      <Text fontSize="6xl">In love with React(6xl)</Text>
      <Text fontSize="5xl">In love with React(5xl)</Text>
      <Text fontSize="4xl">In love with React(4xl)</Text>
      <Text fontSize="3xl">In love with React(3xl)</Text>
      <Text fontSize="2xl">In love with React(2xl)</Text>
      <Text fontSize="xl">In love with React(xl)</Text>
      <Text fontSize="lg">In love with React(lg)</Text>
      <Text fontSize="md">In love with React(md)</Text>
      <Text fontSize="sm">In love with React(sm)</Text>
      <Text fontSize="xs">In love with React(xs)</Text>
    </Stack>
  ))
  .add('Text truncation', () => (
    <Box maxWidth="md" p={4}>
      <Text fontSize="sm" mb={2}>
        Normal:
      </Text>
      <Text color="gray.500" lineHeight="shorter" px={2}>
        Maecenas at urna dapibus, convallis nunc sed, sollicitudin tortor.
        Suspendisse potenti. Integer tristique arcu at nibh ultricies, ut
        iaculis magna pharetra.
      </Text>
      <Divider mx={-4} />
      <Box>
        <Text fontSize="sm">Normal text truncate:</Text>
        <Text fontSize="md" color="gray.500" truncate p={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </Text>
        <Divider mx={-4} />
        <Text fontSize="sm" mb={2}>
          Overflow enabled and dotdotdot after line number 3:
        </Text>
        <Text
          fontSize="md"
          color="gray.500"
          lineHeight="shorter"
          truncate
          truncateLines={3}
          px={2}
        >
          ## What class aptent taciti sociosqu ad litora torquent per conubia
          nostra. Nearly a third of all food produced around the globe is
          wasted. It may be discarded in the growing, harvesting or preservation
          phases, as happens in poorer countries, or it may be thrown out, as
          especially happens in richer countries, by inattentive consumers and
          shop owners who don’t keep the still-edible surplus. This enormous
          quantity of food (nearly 1.3 billion tonnes per year according to WWF
          estimates) is four times that needed to feed the 800 million people
          currently living in a state of malnutrition. Wasted food has an impact
          on the environment in all phases of its lifecycle, each of which
          leaves a deep environmental “footprint” in terms of water, soil and
          greenhouse gas emissions. ReFED, an American coalition working to stop
          food waste, estimates that cutting discarded food in the United States
          by 20% could reduce greenhouse gas emissions by 18 million tonnes in
          ten years. [Hints and tips
          here.](https://www.greenamerica.org/tackling-food-waste/expiration-dates-dont-mean-what-you-think)
        </Text>
      </Box>
    </Box>
  ));
