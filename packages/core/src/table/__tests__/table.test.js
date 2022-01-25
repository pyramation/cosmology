import React from 'react';
import { testA11y } from '../../test-utils';
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '../index';

describe('<Table />', () => {
  it('should pass a11y test', async () => {
    const testTable = (
      <Table>
        <Thead>
          <Tr>
            <Th>Ayy</Th>
            <Th>yo</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    );

    await testA11y(testTable);
  });
});
