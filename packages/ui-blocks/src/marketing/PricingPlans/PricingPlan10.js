import React, { useState } from 'react';
import {
  Box,
  Link,
  Flex,
  Text,
  Button,
  Icon,
  Grid,
  ButtonGroup,
  Divider
} from '@webql/core';

export const PricingPlan10 = ({
  subtitle,
  minorText,
  toggle,
  topBackground,
  tiers,
  feature,
  report
}) => {
  const [selected, setSelected] = useState('month');
  return (
    <Box>
      <Box
        backgroundColor={topBackground}
        pt={{ _: 12, md: 24 }}
        pb={{ _: 12, md: 0 }}
        px={{ _: 4, md: 6, lg: 8 }}
      >
        <Text
          fontSize={{ _: '3xl', md: '5xl' }}
          fontWeight="extrabold"
          textAlign="center"
          color={subtitle.textColor}
          mb={5}
        >
          {subtitle.title}
        </Text>
        <Text
          fontSize={{ _: 'lg', md: '2xl' }}
          color="blackAlpha.600"
          fontWeight="medium"
          textAlign="center"
          letterSpacing="wide"
          color={minorText.textColor}
          mb={{ _: 8, md: 16 }}
        >
          {minorText.text}
        </Text>
        <Flex justifyContent="center" mb={{ _: 10, md: 24 }}>
          <Box
            maxWidth="md"
            width="full"
            borderRadius="sm"
            backgroundColor="blackAlpha.400"
            p="2px"
          >
            <ButtonGroup
              mode="radio"
              variant="tertiary"
              style={{ width: '100%' }}
              selected={selected}
            >
              {toggle.map(({ id, text }) => {
                return (
                  <Button
                    id={id}
                    size="md"
                    style={{
                      width: '50%',
                      backgroundColor: selected === id && 'white',
                      borderRadius: selected === id && '4px'
                    }}
                    boxShadow={selected === id && '0 0 5px #cccccc'}
                    onClick={() => setSelected(id)}
                  >
                    <Text
                      color={
                        selected === id
                          ? 'palette.primary.base'
                          : 'whiteAlpha.500'
                      }
                      fontSize={{ _: 'sm', md: 'md' }}
                    >
                      {text}
                    </Text>
                  </Button>
                );
              })}
            </ButtonGroup>
          </Box>
        </Flex>
        <Grid templateColumns={{ _: '1fr', md: 'repeat(3, 1fr)' }} rowGap={6}>
          {tiers.map(
            ({
              id,
              program,
              month,
              year,
              currency,
              link,
              included,
              cardStyle
            }) => {
              return (
                <Box
                  position="relative"
                  left={{ md: cardStyle.left }}
                  right={{ md: cardStyle.right }}
                  zIndex={cardStyle.zIndex}
                  backgroundColor={cardStyle.background}
                  borderRadius={{ _: 'md', md: cardStyle.borderRadius }}
                  border={cardStyle.border}
                  borderColor={cardStyle.borderColor}
                  boxShadow={{ md: cardStyle.boxShadow }}
                  pl={{ _: 6, md: cardStyle.right ? 10 + cardStyle.right : 10 }}
                  pr={{ _: 6, md: cardStyle.left ? 10 + cardStyle.left : 10 }}
                  pt={{
                    _: 6,
                    md: cardStyle.marginTop ? 12 + cardStyle.marginTop : 12
                  }}
                  pb={{
                    _: 6,
                    md: cardStyle.marginBottom ? 12 + cardStyle.marginTop : 12
                  }}
                  mt={{ md: -`${cardStyle.marginTop}` }}
                  mb={{ md: -`${cardStyle.marginBottom}` }}
                >
                  <Text color={program.color} fontWeight="semibold" mb={4}>
                    {program.text}
                  </Text>
                  <Flex
                    alignItems={{ md: 'start', lg: 'center' }}
                    flexWrap="wrap"
                    mb={6}
                  >
                    <Text
                      color={month.color || month.priceColor}
                      fontSize={{ _: '4xl', md: '5xl' }}
                      fontWeight="bold"
                      mr={{ _: 2, md: 4 }}
                      my={2}
                    >
                      {selected === 'month' ? month.price : year.price}
                    </Text>
                    <Box py={2}>
                      <Text
                        color={month.color || month.suggestPlanColor}
                        mb={1}
                      >
                        {currency} {selected === 'month' ? month.per : year.per}
                      </Text>
                      <Text color={month.otherPlanColor}>
                        {selected === 'month'
                          ? month.otherPlan
                          : year.otherPlan}
                      </Text>
                    </Box>
                  </Flex>
                  <Box mb={{ _: 4, md: 8 }}>
                    <Link href={link.href}>
                      <Button bg={link.bg} style={{ width: '100%' }}>
                        <Text color={link.color || 'inherit'}>{link.text}</Text>
                      </Button>
                    </Link>
                  </Box>
                  {included.map(({ id, icon, text, iconColor, color }, i) => {
                    const last = included.length;
                    return (
                      <Box>
                        <Flex alignItems="center" py={{ _: 4, md: 6 }}>
                          <Icon name={icon} color={iconColor || color} mr={3} />
                          <Text color={color}>{text}</Text>
                        </Flex>
                        {last !== i + 1 && <Divider my={0} />}
                      </Box>
                    );
                  })}
                </Box>
              );
            }
          )}
        </Grid>
      </Box>
      <Box
        backgroundColor="blackAlpha.50"
        py={{ _: 10, md: 32 }}
        px={{ _: 4, md: 6, lg: 12 }}
      >
        <Box display={{ _: 'none', md: 'block' }}>
          <Divider my={0} />
        </Box>

        <Grid
          templateColumns={{ _: '1fr', md: 'repeat(4, 1fr)' }}
          templateRows={{
            md: 'minmax(max-content, 1fr) repeat(auto-fit, 100px)'
          }}
          rowGap={{ _: 6, md: 0 }}
          px={2}
        >
          <Box
            display={{ _: 'none', md: 'block' }}
            alignSelf="end"
            pb={1}
            pr={{ md: 4, lg: 6 }}
            mb={6}
          >
            <Text fontWeight="semibold">{feature.title.header}</Text>
          </Box>
          {feature.title.plans.map(({ text, desc, suggest }) => {
            return (
              <Flex
                display={{ _: 'none', md: 'flex' }}
                justifyContent={{ md: 'end' }}
              >
                <Box
                  borderTop={{ md: suggest && '2px solid' }}
                  borderColor={{ md: 'palette.primary.base' }}
                  maxWidth={{ lg: 'xs' }}
                  pt={8}
                  px={{ md: 4 }}
                  mb={6}
                >
                  <Text
                    color={suggest && 'palette.primary.base'}
                    fontWeight="semibold"
                    mb={3}
                  >
                    {text}
                  </Text>
                  <Text
                    lineHeight="short"
                    color="blackAlpha.600"
                    mb={{ _: 8, md: 0 }}
                  >
                    {desc}
                  </Text>
                </Box>
              </Flex>
            );
          })}
          {feature.line1.map(
            ({ permission, suggest, title, icon, color, plan }, i) => {
              return (
                <Flex
                  borderBottom={{ md: '1px solid #cccccc' }}
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    borderRadius={{ md: '8px 8px 0 0' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Icon name={icon} color={color} />
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        fontSize={{ md: 'sm', lg: 'md' }}
                        lineHeight={{ md: 'none', lg: 'short' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
          {feature.line2.map(
            ({ permission, suggest, title, icon, color, plan }, i) => {
              return (
                <Flex
                  borderBottom={{ md: '1px solid #cccccc' }}
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Icon name={icon} color={color} />
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        lineHeight={{ md: 'none', lg: 'short' }}
                        fontSize={{ md: 'sm', lg: 'md' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
          {feature.line3.map(
            ({ permission, suggest, text, title, plan }, i) => {
              return (
                <Flex
                  borderBottom={{ md: '1px solid #cccccc' }}
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Text
                          color={
                            suggest ? 'palette.primary.base' : 'blackAlpha.800'
                          }
                          fontSize={{ _: 'sm', lg: 'md' }}
                        >
                          {text}
                        </Text>
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        fontSize={{ md: 'sm', lg: 'md' }}
                        lineHeight={{ md: 'none', lg: 'short' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
          {feature.line4.map(
            ({ permission, suggest, text, title, plan }, i) => {
              return (
                <Flex
                  borderBottom={{ md: '1px solid #cccccc' }}
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Text
                          color={
                            suggest ? 'palette.primary.base' : 'blackAlpha.800'
                          }
                          fontSize={{ _: 'sm', lg: 'md' }}
                        >
                          {text}
                        </Text>
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        fontSize={{ md: 'sm', lg: 'md' }}
                        lineHeight={{ md: 'none', lg: 'short' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
          {feature.line5.map(
            ({ permission, suggest, title, icon, color, plan }, i) => {
              return (
                <Flex
                  borderBottom={{ md: '1px solid #cccccc' }}
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Icon name={icon} color={color} />
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        fontSize={{ md: 'sm', lg: 'md' }}
                        lineHeight={{ md: 'none', lg: 'short' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
          {feature.line6.map(
            ({ permission, suggest, title, icon, color, plan }, i) => {
              return (
                <Flex
                  borderBottom={{ md: '1px solid #cccccc' }}
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Icon name={icon} color={color} />
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        fontSize={{ md: 'sm', lg: 'md' }}
                        lineHeight={{ md: 'none', lg: 'short' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
          {feature.line8.map(
            ({ permission, suggest, title, icon, color, plan }, i) => {
              return (
                <Flex
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    borderRadius={{ md: '0 0 8px 8px' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Icon name={icon} color={color} />
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        fontSize={{ md: 'sm', lg: 'md' }}
                        lineHeight={{ md: 'none', lg: 'short' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
          {report.title.map(title => {
            return (
              <Box display={{ _: 'none', md: 'block' }} pt={12} pb={6}>
                <Text fontWeight="semibold">{title}</Text>
              </Box>
            );
          })}
          {report.line1.map(
            ({ permission, suggest, title, icon, color, plan }, i) => {
              return (
                <Flex
                  borderBottom={{ md: '1px solid #cccccc' }}
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    borderRadius={{ md: '8px 8px 0 0' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Icon name={icon} color={color} />
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        fontSize={{ md: 'sm', lg: 'md' }}
                        lineHeight={{ md: 'none', lg: 'short' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
          {report.line2.map(
            ({ permission, suggest, title, icon, color, plan }, i) => {
              return (
                <Flex
                  borderBottom={{ md: '1px solid #cccccc' }}
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Icon name={icon} color={color} />
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        fontSize={{ md: 'sm', lg: 'md' }}
                        lineHeight={{ md: 'none', lg: 'short' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
          {report.line3.map(
            ({ permission, suggest, title, icon, color, plan }, i) => {
              return (
                <Flex
                  borderBottom={{ md: '1px solid #cccccc' }}
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Icon name={icon} color={color} />
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        fontSize={{ md: 'sm', lg: 'md' }}
                        lineHeight={{ md: 'none', lg: 'short' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
          {report.line4.map(
            ({ permission, suggest, title, icon, color, plan }, i) => {
              return (
                <Flex
                  borderBottom={{ md: '1px solid #cccccc' }}
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Icon name={icon} color={color} />
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        fontSize={{ md: 'sm', lg: 'md' }}
                        lineHeight={{ md: 'none', lg: 'short' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
          {report.line5.map(
            ({ permission, suggest, title, icon, color, plan }, i) => {
              return (
                <Flex
                  borderBottom={{ md: '1px solid #cccccc' }}
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Icon name={icon} color={color} />
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        fontSize={{ md: 'sm', lg: 'md' }}
                        lineHeight={{ md: 'none', lg: 'short' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
          {report.line6.map(
            ({ permission, suggest, title, icon, color, plan }, i) => {
              return (
                <Flex
                  borderBottom={{ md: '1px solid #cccccc' }}
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Icon name={icon} color={color} />
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        fontSize={{ md: 'sm', lg: 'md' }}
                        lineHeight={{ md: 'none', lg: 'short' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
          {report.line7.map(
            ({ permission, suggest, title, icon, color, plan }, i) => {
              return (
                <Flex
                  alignItems="center"
                  justifyContent={{ md: i === 0 ? 'start' : 'end' }}
                >
                  <Flex
                    justifyContent={{
                      _: 'center',
                      md: i === 0 ? 'start' : 'center'
                    }}
                    alignItems="center"
                    bg={{ md: i === 0 ? 'transparent' : 'white' }}
                    borderRadius={{ md: '0 0 8px 8px' }}
                    border={{
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    borderTop={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: 'none'
                    }}
                    borderBottom={{
                      _: i === 0 ? '1px dashed #cccccc' : 'none',
                      md: suggest
                        ? '2px solid #01A1FF'
                        : i === 0
                        ? 'none'
                        : '2px solid #cccccc'
                    }}
                    width="full"
                    maxWidth={{ lg: 'xs' }}
                    py={i === 0 ? 0 : 4}
                  >
                    {permission ? (
                      <Flex
                        justifyContent="space-between"
                        width={{ _: 'full', md: 'initial' }}
                      >
                        <Box display={{ _: 'block', md: 'none' }}>
                          <Text>{plan}</Text>
                        </Box>

                        <Icon name={icon} color={color} />
                      </Flex>
                    ) : (
                      <Text
                        color="blackAlpha.700"
                        fontSize={{ md: 'sm', lg: 'md' }}
                        lineHeight={{ md: 'none', lg: 'short' }}
                        my={{ _: 4, md: 0 }}
                        mr={4}
                      >
                        {title}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              );
            }
          )}
        </Grid>
      </Box>
    </Box>
  );
};
