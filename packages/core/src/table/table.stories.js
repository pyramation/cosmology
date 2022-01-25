import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '../box';
import Checkbox from '../checkbox';
import { Table, Tbody, Td, Th, Thead, Tr } from './';

const SimpleTable = props => (
  <Table {...props}>
    <Thead>
      <Tr>
        <Th>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Checkbox size="md" />
          </Box>
        </Th>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Checkbox size="md" />
          </Box>
        </Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Checkbox size="md" />
          </Box>
        </Td>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Checkbox size="md" />
          </Box>
        </Td>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
      <Tr>
        <Td>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Checkbox size="md" />
          </Box>
        </Td>
        <Td>miles</Td>
        <Td>kilometres (km)</Td>
        <Td isNumeric>1.61</Td>
      </Tr>
      <Tr>
        <Td>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Checkbox size="md" />
          </Box>
        </Td>
        <Td>square inches</Td>
        <Td>sq. millimetres (mm²)</Td>
        <Td isNumeric>645</Td>
      </Tr>
      <Tr>
        <Td>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Checkbox size="md" />
          </Box>
        </Td>
        <Td>square feet</Td>
        <Td>square metres (m²)</Td>
        <Td isNumeric>0.0929</Td>
      </Tr>
      <Tr>
        <Td>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Checkbox size="md" />
          </Box>
        </Td>
        <Td>square yards</Td>
        <Td>square metres (m²)</Td>
        <Td isNumeric>0.836</Td>
      </Tr>
      <Tr>
        <Td>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Checkbox size="md" />
          </Box>
        </Td>
        <Td>acres</Td>
        <Td>hectares</Td>
        <Td isNumeric>2.47</Td>
      </Tr>
      <Tr>
        <Td>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Checkbox size="md" />
          </Box>
        </Td>
        <Td>cubic inches</Td>
        <Td>millitres (ml)</Td>
        <Td isNumeric>16.4</Td>
      </Tr>
      <Tr>
        <Td>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Checkbox size="md" />
          </Box>
        </Td>
        <Td>cubic feet</Td>
        <Td>litres</Td>
        <Td isNumeric>28.3</Td>
      </Tr>
      <Tr>
        <Td>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Checkbox size="md" />
          </Box>
        </Td>
        <Td>imperial gallons</Td>
        <Td>litres</Td>
        <Td isNumeric>4.55</Td>
      </Tr>
      <Tr>
        <Td>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Checkbox size="md" />
          </Box>
        </Td>
        <Td>
          <abbr>US</abbr> barrels
        </Td>
        <Td>cubic metres (m³)</Td>
        <Td isNumeric>0.159</Td>
      </Tr>
    </Tbody>
  </Table>
);

const stories = storiesOf('Table', module);

stories.add('Simple table', () => <SimpleTable />);
