import React from 'react';
import { Box, Flex, Text, Button, Icon, Grid, Link } from '@webql/core';

export const PricingPlan8 = ({
  header,
  priceTitle,
  priceContent,
  feature,
  report,
  support
}) => {
  return (
    <Grid
      templateColumns={{ _: '1fr', md: 'minmax(100px, 1fr) repeat(3, 1fr)' }}
      px={{ md: 4 }}
    >
      {/* Row1 */}
      {header.map((header, i) => {
        return (
          <Box
            display={{ _: 'none', md: 'block' }}
            borderBottom="1px solid #e9e9e9"
            p={4}
          >
            <Text
              fontSize={i === 0 ? 'md' : 'lg'}
              fontWeight={i === 0 ? 'light' : 'medium'}
              color="blackAlpha.800"
            >
              {header}
            </Text>
          </Box>
        );
      })}
      {/* Row2 */}
      <Box px={4} py={6}>
        <Text fontWeight="medium" color="blackAlpha.800">
          {priceTitle}
        </Text>
      </Box>
      {priceContent.map(({ id, price, per, desc, btn }) => {
        return (
          <Grid
            templateRows={{ _: 'auto auto 1fr auto', md: 'auto 1fr auto' }}
            border={{ _: '1px solid #e9e9e9', md: 'none' }}
            borderRadius="md"
            mb={{ _: 6, md: 0 }}
            px={4}
            py={6}
          >
            <Box display={{ _: 'block', md: 'none' }} mb={6}>
              <Text fontSize="lg" fontWeight="medium" color="blackAlpha.800">
                {id}
              </Text>
            </Box>
            <Flex alignItems="end">
              <Text fontSize="5xl" fontWeight="extrabold" mr={2}>
                {price}
              </Text>
              <Text color="blackAlpha.600" mb={2}>
                {per}
              </Text>
            </Flex>
            <Text lineHeight="short" color="blackAlpha.700" py={6}>
              {desc}
            </Text>
            <Box>
              <Link href={btn.href}>
                <Button bg={btn.bg} color={btn.color} style={{ width: '100%' }}>
                  {btn.text}
                </Button>
              </Link>
            </Box>
          </Grid>
        );
      })}
      {/* Row3 */}
      {feature.title.map(title => {
        return (
          <Box
            display={{ _: title.length > 0 ? 'block' : 'none', md: 'block' }}
            borderTop="2px solid #e9e9e9"
            borderBottom="2px solid #e9e9e9"
            backgroundColor="blackAlpha.50"
            p={4}
            mt={{ _: 3, md: 0 }}
          >
            <Text fontWeight="medium" color="blackAlpha.800">
              {title}
            </Text>
          </Box>
        );
      })}
      {/* Row4 */}
      {feature.line1.map(({ title, icon, color, text }) => {
        return (
          <Flex alignItems="center" borderBottom={{ md: '1px solid #e9e9e9' }}>
            {title && (
              <Box
                borderBottom={{ _: '1px dashed #e9e9e9', md: 'none' }}
                backgroundColor={{ _: 'gray.50', md: 'transparent' }}
                width="full"
                p={4}
              >
                <Text fontSize="sm" color="blackAlpha.600" pr={4}>
                  {title}
                </Text>
              </Box>
            )}
            {icon && (
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width="full"
                p={4}
              >
                {text && (
                  <Box display={{ _: 'block', md: 'none' }}>
                    <Text fontSize="sm">{text}</Text>
                  </Box>
                )}
                <Icon name={icon} color={color} pr={4} />
              </Flex>
            )}
          </Flex>
        );
      })}
      {/* Row5 */}
      {feature.line2.map(({ title, icon, color, text }) => {
        return (
          <Flex alignItems="center" borderBottom={{ md: '1px solid #e9e9e9' }}>
            {title && (
              <Box
                borderTop={{ _: '1px dashed #e9e9e9', md: 'none' }}
                borderBottom={{ _: '1px dashed #e9e9e9', md: 'none' }}
                backgroundColor={{ _: 'gray.50', md: 'transparent' }}
                width="full"
                p={4}
              >
                <Text fontSize="sm" color="blackAlpha.600" pr={4}>
                  {title}
                </Text>
              </Box>
            )}
            {icon && (
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width="full"
                p={4}
              >
                {text && (
                  <Box display={{ _: 'block', md: 'none' }}>
                    <Text fontSize="sm">{text}</Text>
                  </Box>
                )}
                <Icon name={icon} color={color} pr={4} />
              </Flex>
            )}
          </Flex>
        );
      })}
      {/* Row6 */}
      {feature.line3.map(({ title, icon, color, text }) => {
        return (
          <Flex alignItems="center" borderBottom={{ md: '1px solid #e9e9e9' }}>
            {title && (
              <Box
                borderTop={{ _: '1px dashed #e9e9e9', md: 'none' }}
                borderBottom={{ _: '1px dashed #e9e9e9', md: 'none' }}
                backgroundColor={{ _: 'gray.50', md: 'transparent' }}
                width="full"
                p={4}
              >
                <Text fontSize="sm" color="blackAlpha.600" pr={4}>
                  {title}
                </Text>
              </Box>
            )}
            {icon && (
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width="full"
                p={4}
              >
                {text && (
                  <Box display={{ _: 'block', md: 'none' }}>
                    <Text fontSize="sm">{text}</Text>
                  </Box>
                )}
                <Icon name={icon} color={color} pr={4} />
              </Flex>
            )}
          </Flex>
        );
      })}
      {/* Row7 */}
      {feature.line4.map(
        ({ title, icon, color, text, content, permission }) => {
          return (
            <Flex alignItems="center">
              {permission ? (
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  width="full"
                  p={4}
                >
                  {text && (
                    <Box display={{ _: 'block', md: 'none' }} pr={4}>
                      <Text fontSize="sm">{text}</Text>
                    </Box>
                  )}
                  {icon && <Icon name={icon} color={color} pr={4} />}
                  {content && (
                    <Box maxWidth={{ _: 32, md: 'full' }}>
                      <Text fontSize="sm" color="blackAlpha.700">
                        {content}
                      </Text>
                    </Box>
                  )}
                </Flex>
              ) : (
                <Box
                  borderTop={{ _: '1px dashed #e9e9e9', md: 'none' }}
                  borderBottom={{ _: '1px dashed #e9e9e9', md: 'none' }}
                  backgroundColor={{ _: 'gray.50', md: 'transparent' }}
                  width="full"
                  p={4}
                >
                  <Text fontSize="sm" color="blackAlpha.600" pr={4}>
                    {title}
                  </Text>
                </Box>
              )}
            </Flex>
          );
        }
      )}
      {/* Row8 */}
      {report.title.map(title => {
        return (
          <Box
            display={{ _: title.length > 0 ? 'block' : 'none', md: 'block' }}
            borderTop="2px solid #e9e9e9"
            borderBottom="2px solid #e9e9e9"
            backgroundColor="blackAlpha.50"
            p={4}
            mt={{ _: 3, md: 0 }}
          >
            <Text fontWeight="medium" color="blackAlpha.800">
              {title}
            </Text>
          </Box>
        );
      })}
      {/* Row9 */}
      {report.line1.map(({ title, icon, color, text }) => {
        return (
          <Flex alignItems="center" borderBottom={{ md: '1px solid #e9e9e9' }}>
            {title && (
              <Box
                borderBottom={{ _: '1px dashed #e9e9e9', md: 'none' }}
                backgroundColor={{ _: 'gray.50', md: 'transparent' }}
                width="full"
                p={4}
              >
                <Text fontSize="sm" color="blackAlpha.600" pr={4}>
                  {title}
                </Text>
              </Box>
            )}
            {icon && (
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width="full"
                p={4}
              >
                {text && (
                  <Box display={{ _: 'block', md: 'none' }}>
                    <Text fontSize="sm">{text}</Text>
                  </Box>
                )}
                <Icon name={icon} color={color} pr={4} />
              </Flex>
            )}
          </Flex>
        );
      })}
      {/* Row10 */}
      {report.line2.map(({ title, icon, color, text }) => {
        return (
          <Flex alignItems="center" borderBottom={{ md: '1px solid #e9e9e9' }}>
            {title && (
              <Box
                borderTop={{ _: '1px dashed #e9e9e9', md: 'none' }}
                borderBottom={{ _: '1px dashed #e9e9e9', md: 'none' }}
                backgroundColor={{ _: 'gray.50', md: 'transparent' }}
                width="full"
                p={4}
              >
                <Text fontSize="sm" color="blackAlpha.600" pr={4}>
                  {title}
                </Text>
              </Box>
            )}
            {icon && (
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width="full"
                p={4}
              >
                {text && (
                  <Box display={{ _: 'block', md: 'none' }}>
                    <Text fontSize="sm">{text}</Text>
                  </Box>
                )}
                <Icon name={icon} color={color} pr={4} />
              </Flex>
            )}
          </Flex>
        );
      })}
      {/* Row11 */}
      {report.line3.map(({ title, icon, color, text }) => {
        return (
          <Flex alignItems="center" borderBottom={{ md: '1px solid #e9e9e9' }}>
            {title && (
              <Box
                borderTop={{ _: '1px dashed #e9e9e9', md: 'none' }}
                borderBottom={{ _: '1px dashed #e9e9e9', md: 'none' }}
                backgroundColor={{ _: 'gray.50', md: 'transparent' }}
                width="full"
                p={4}
              >
                <Text fontSize="sm" color="blackAlpha.600" pr={4}>
                  {title}
                </Text>
              </Box>
            )}
            {icon && (
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width="full"
                p={4}
              >
                {text && (
                  <Box display={{ _: 'block', md: 'none' }}>
                    <Text fontSize="sm">{text}</Text>
                  </Box>
                )}
                <Icon name={icon} color={color} pr={4} />
              </Flex>
            )}
          </Flex>
        );
      })}
      {/* Row12 */}
      {report.line4.map(({ title, icon, color, text }) => {
        return (
          <Flex alignItems="center">
            {title && (
              <Box
                borderTop={{ _: '1px dashed #e9e9e9', md: 'none' }}
                borderBottom={{ _: '1px dashed #e9e9e9', md: 'none' }}
                backgroundColor={{ _: 'gray.50', md: 'transparent' }}
                width="full"
                p={4}
              >
                <Text fontSize="sm" color="blackAlpha.600" pr={4}>
                  {title}
                </Text>
              </Box>
            )}
            {icon && (
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width="full"
                p={4}
              >
                {text && (
                  <Box display={{ _: 'block', md: 'none' }}>
                    <Text fontSize="sm">{text}</Text>
                  </Box>
                )}
                <Icon name={icon} color={color} pr={4} />
              </Flex>
            )}
          </Flex>
        );
      })}
      {/* Row13 */}
      {support.title.map(title => {
        return (
          <Box
            display={{ _: title.length > 0 ? 'block' : 'none', md: 'block' }}
            borderTop="2px solid #e9e9e9"
            borderBottom="2px solid #e9e9e9"
            backgroundColor="blackAlpha.50"
            p={4}
            mt={{ _: 3, md: 0 }}
          >
            <Text fontWeight="medium" color="blackAlpha.800">
              {title}
            </Text>
          </Box>
        );
      })}
      {/* Row14 */}
      {support.line1.map(({ title, icon, color, text }) => {
        return (
          <Flex alignItems="center" borderBottom={{ md: '1px solid #e9e9e9' }}>
            {title && (
              <Box
                borderBottom={{ _: '1px dashed #e9e9e9', md: 'none' }}
                backgroundColor={{ _: 'gray.50', md: 'transparent' }}
                width="full"
                p={4}
              >
                <Text fontSize="sm" color="blackAlpha.600" pr={4}>
                  {title}
                </Text>
              </Box>
            )}
            {icon && (
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width="full"
                p={4}
              >
                {text && (
                  <Box display={{ _: 'block', md: 'none' }}>
                    <Text fontSize="sm">{text}</Text>
                  </Box>
                )}
                <Icon name={icon} color={color} pr={4} />
              </Flex>
            )}
          </Flex>
        );
      })}
      {/* Row15 */}
      {support.line2.map(({ title, icon, color, text }) => {
        return (
          <Flex alignItems="center" borderBottom={{ md: '1px solid #e9e9e9' }}>
            {title && (
              <Box
                borderTop={{ _: '1px dashed #e9e9e9', md: 'none' }}
                borderBottom={{ _: '1px dashed #e9e9e9', md: 'none' }}
                backgroundColor={{ _: 'gray.50', md: 'transparent' }}
                width="full"
                p={4}
              >
                <Text fontSize="sm" color="blackAlpha.600" pr={4}>
                  {title}
                </Text>
              </Box>
            )}
            {icon && (
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width="full"
                p={4}
              >
                {text && (
                  <Box display={{ _: 'block', md: 'none' }}>
                    <Text fontSize="sm">{text}</Text>
                  </Box>
                )}
                <Icon name={icon} color={color} pr={4} />
              </Flex>
            )}
          </Flex>
        );
      })}
      {/* Row16 */}
      {support.line3.map(({ title, icon, color, text }) => {
        return (
          <Flex alignItems="center" borderBottom={{ md: '1px solid #e9e9e9' }}>
            {title && (
              <Box
                borderTop={{ _: '1px dashed #e9e9e9', md: 'none' }}
                borderBottom={{ _: '1px dashed #e9e9e9', md: 'none' }}
                backgroundColor={{ _: 'gray.50', md: 'transparent' }}
                width="full"
                p={4}
              >
                <Text fontSize="sm" color="blackAlpha.600" pr={4}>
                  {title}
                </Text>
              </Box>
            )}
            {icon && (
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width="full"
                p={4}
              >
                {text && (
                  <Box display={{ _: 'block', md: 'none' }}>
                    <Text fontSize="sm">{text}</Text>
                  </Box>
                )}
                <Icon name={icon} color={color} pr={4} />
              </Flex>
            )}
          </Flex>
        );
      })}
      {/* Row17 */}
      {support.line4.map(({ title, icon, color, text }) => {
        return (
          <Flex alignItems="center" borderBottom={{ md: '1px solid #e9e9e9' }}>
            {title && (
              <Box
                borderTop={{ _: '1px dashed #e9e9e9', md: 'none' }}
                borderBottom={{ _: '1px dashed #e9e9e9', md: 'none' }}
                backgroundColor={{ _: 'gray.50', md: 'transparent' }}
                width="full"
                p={4}
              >
                <Text fontSize="sm" color="blackAlpha.600" pr={4}>
                  {title}
                </Text>
              </Box>
            )}
            {icon && (
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width="full"
                p={4}
              >
                {text && (
                  <Box display={{ _: 'block', md: 'none' }}>
                    <Text fontSize="sm">{text}</Text>
                  </Box>
                )}
                <Icon name={icon} color={color} pr={4} />
              </Flex>
            )}
          </Flex>
        );
      })}
      {/* Row18 */}
      <Flex alignItems="center" px={4} py={6}>
        <Text color="blackAlpha.700" fontSize="lg" fontWeight="semibold">
          Get Start Now
        </Text>
      </Flex>
      {priceContent.map(({ id, price, per, desc, btn }) => {
        return (
          <Box
            border={{ _: '1px solid #e9e9e9', md: 'none' }}
            borderRadius="md"
            mb={{ _: 6, md: 0 }}
            px={4}
            py={6}
          >
            <Box display={{ _: 'block', md: 'none' }} mb={6}>
              <Text>{id}</Text>
            </Box>
            <Flex alignItems="end" mb={6}>
              <Text fontSize="5xl" fontWeight="extrabold" mr={2}>
                {price}
              </Text>
              <Text color="blackAlpha.600" mb={2}>
                {per}
              </Text>
            </Flex>
            <Box>
              <Link href={btn.href}>
                <Button bg={btn.bg} color={btn.color} style={{ width: '100%' }}>
                  {btn.text}
                </Button>
              </Link>
            </Box>
          </Box>
        );
      })}
    </Grid>
  );
};
