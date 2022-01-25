import React from 'react';
import { Text, Table, Tbody, Td, Th, Thead, Tr, Link } from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const ListTable2 = ({ tableHeader, link, avatars }) => {
  return (
    <NavBarWidthWrapper py={4}>
      <Table
        style={{
          borderCollapse: 'separate',
          borderSpacing: 0
        }}
        overflow="hidden"
        boxShadow="0 1px 3px 0px rgba(0, 0, 0, 0.35)"
        borderRadius="md"
      >
        <Thead>
          <Tr>
            {tableHeader.map(header => {
              return <Th style={{ border: 'none' }}>{header}</Th>;
            })}
            <Th style={{ border: 'none' }}></Th>
          </Tr>
        </Thead>
        <Tbody>
          {avatars.map(({ id, author, email, title, role, background }) => {
            return (
              <Tr>
                <Td
                  style={{
                    border: 'none',
                    backgroundColor: background ? '#ebf8ff' : '#ffffff'
                  }}
                >
                  <Text color="blue.900" lineHeight="base">
                    {author}
                  </Text>
                </Td>
                <Td
                  style={{
                    border: 'none',
                    backgroundColor: background ? '#ebf8ff' : '#ffffff'
                  }}
                >
                  <Text color="blue.600" lineHeight="base">
                    {title}
                  </Text>
                </Td>
                <Td
                  style={{
                    border: 'none',
                    backgroundColor: background ? '#ebf8ff' : '#ffffff'
                  }}
                >
                  <Text color="blue.600" lineHeight="base">
                    {email}
                  </Text>
                </Td>
                <Td
                  style={{
                    border: 'none',
                    backgroundColor: background ? '#ebf8ff' : '#ffffff'
                  }}
                >
                  <Text color="blue.900">{role}</Text>
                </Td>
                <Td
                  style={{
                    border: 'none',
                    backgroundColor: background ? '#ebf8ff' : '#ffffff'
                  }}
                >
                  <Link href={link.href} color>
                    {link.text}
                  </Link>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </NavBarWidthWrapper>
  );
};
