import React from 'react';
import {
  Flex,
  Text,
  Box,
  Tag,
  Avatar,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link
} from '@webql/core';
import { NavBarWidthWrapper } from '../../max-width-wrapper';

export const ListTable1 = ({ tableHeader, link, avatars }) => {
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
          {avatars.map(
            ({
              id,
              author,
              authorImage,
              email,
              mainTitle,
              subTitle,
              tag,
              role
            }) => {
              return (
                <Tr>
                  <Td style={{ border: 'none' }}>
                    <Flex alignItems="center">
                      <Box pt={6}>
                        <Avatar src={authorImage} size={12} minWidth={12} />
                      </Box>
                      <Box pl={4}>
                        <Text color="blue.900" lineHeight="base">
                          {author}
                        </Text>
                        <Text color="blue.600" lineHeight="base">
                          {email}
                        </Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td style={{ border: 'none' }}>
                    <Box>
                      <Text color="blue.900" lineHeight="base">
                        {mainTitle}
                      </Text>
                      <Text color="blue.600" lineHeight="base">
                        {subTitle}
                      </Text>
                    </Box>
                  </Td>
                  <Td style={{ border: 'none' }}>
                    <Tag color={`palette.${tag.color}.base`} borderRadius="lg">
                      {tag.text}
                    </Tag>
                  </Td>
                  <Td style={{ border: 'none' }}>
                    <Text color="blue.900">{role}</Text>
                  </Td>
                  <Td style={{ border: 'none' }}>
                    <Link href={link.href} color>
                      {link.text}
                    </Link>
                  </Td>
                </Tr>
              );
            }
          )}
        </Tbody>
      </Table>
    </NavBarWidthWrapper>
  );
};
