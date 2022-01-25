import React, { useState, useEffect, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { select, color, boolean } from '@storybook/addon-knobs';
import Box from '../box';
import Stack from '../stack';
import Input from '../input';
import FormLabel from '../form-label';
import FormHelperText from '../form-helper-text';
import FormControl from '../form-control';
import Loader from '../loader';
import Select from './select';
import Suggest from './suggest';

const DELAY = 3000;
const ITEMS = [
  'Pizza',
  'BBQ',
  'Cheese',
  'Ribeyes',
  'Steaks',
  'Chocolate',
  'Cazzo',
  'Churri',
  'Bun bo',
  'Bun bo2',
  'Bun bo3',
  'Bun bo4',
  'Bun bo5',
  'Bun bo6',
  'Bun bo7'
];

const SuggestDemo = () => {
  const timeoutRef = useRef();
  const [loading, setLoading] = useState(true);
  const [focused, setFocused] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const timeout = timeoutRef.current;
    if (!focused) {
      return () => clearTimeout(timeout);
    }
    timeoutRef.current = setTimeout(() => {
      setLoading(false);
      setItems(ITEMS);
    }, DELAY);
    return () => clearTimeout(timeout);
  }, [focused]);

  return (
    <Box p={{ _: 4, md: 16 }}>
      <Stack space={5} maxWidth="md">
        <FormControl required>
          <FormLabel>Enter your address</FormLabel>
          <Input size="sm" type="text" placeholder="Your address" />
          <FormHelperText>We never send your data to CIA</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Choose your food</FormLabel>
          <Suggest
            fluidWidth
            size="sm"
            defaultInputValue={items[0]}
            placeholder="Select foood"
            itemRenderer={item => <Box width="800px">{item}</Box>}
            items={items}
            noItems={loading ? <Loader size={20} /> : <Suggest.NoItems />}
            onFocus={() => setFocused(true)}
            onFilteredItemsChange={opts => console.log('filtered', opts)}
            onSelectedItemChange={changes => {
              console.log('onSelectedItemChange', changes);
            }}
          />
          <FormHelperText>We never send your data to CIA</FormHelperText>
        </FormControl>
      </Stack>
    </Box>
  );
};

storiesOf('Select', module)
  .add('Default', () => {
    const selectedVariant = select(
      'Select Variant',
      ['primary', 'secondary', 'tertiary'],
      'tertiary'
    );
    const selectedIntent = select(
      'Select Intent',
      ['primary', 'success', 'info', 'warning', 'danger'],
      'success'
    );
    const customBgColor = color('Custom Background Color', '#F7FAFC');
    const customTextColor = color('Custom Text Color', 'rgba(0, 0, 0, 0.48)');
    const customListBgColor = color('Custom List Background Color', '#D5A5FF');
    const customListTextColor = color('Custom List Text Color', '#4E058F');
    const customBoxShadow = boolean('Custom Box Shadow', true);

    const [arr, setArr] = useState([]);

    useEffect(() => {
      (async function getRandom() {
        try {
          const res = await fetch(
            'https://jsonplaceholder.typicode.com/photos'
          );
          const data = await res.json();
          const dataResult = await data.map(
            ({ title }) =>
              `${title}. Ut enim ad minim veniam, quis nostrud exercitation enim ad minim veniam ullamco laboris nisi ut aliquip ex enim ad minim veniam ea commodo consequat. `
          );
          setArr(dataResult);
        } catch (err) {
          console.log('catch', err);
        }
      })();
    }, []);

    // console.log(arr);
    return (
      <Box
        display="flex"
        flexWrap={{ _: 'wrap', lg: 'nowrap' }}
        px={{ _: 4, md: 12 }}
        py={{ _: 4, md: 8 }}
      >
        <Stack
          space={5}
          width="full"
          maxWidth="2xl"
          mr={{ lg: 16 }}
          mb={{ _: 12, lg: 0 }}
        >
          <FormControl required>
            <FormLabel>Enter your address</FormLabel>
            <Input
              size="sm"
              type="text"
              placeholder="Your address"
              onFocus={() => {
                console.log('hello');
              }}
            />
            <FormHelperText>We never send your data to CIA</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Size: lg</FormLabel>
            <Select
              size="lg"
              placeholder="Select Post"
              items={arr}
              onSelectedItemChange={changes => {
                console.log('onSelectedItemChange', changes);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Size: md</FormLabel>
            <Select
              size="md"
              items={[
                'Afghanistan',
                'Burma',
                'Colombia',
                'Denmark',
                'Ethiopia',
                'France',
                'Georgia'
              ]}
              placeholder="Select Country"
              onSelectedItemChange={changes => {
                console.log('onSelectedItemChange', changes);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Size: sm</FormLabel>
            <Select
              size="sm"
              items={[
                'apple',
                'banana',
                'cherry',
                'date',
                'elderberry',
                'fig',
                'grape'
              ]}
              placeholder="Select Fruit"
              onSelectedItemChange={changes => {
                console.log('onSelectedItemChange', changes);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Fluid width</FormLabel>
            <Select
              fluidWidth
              items={[]}
              onSelectedItemChange={changes => {
                console.log('onSelectedItemChange', changes);
              }}
            />
          </FormControl>
          <Box maxWidth="2xs">
            <FormControl>
              <FormLabel>Placement: end</FormLabel>
              <Select
                items={['Option 1', 'Option 2']}
                fluidWidth
                placeholder="Options"
                placement="end"
                onSelectedItemChange={changes => {
                  console.log('onSelectedItemChange', changes);
                }}
              />
            </FormControl>
          </Box>
        </Stack>
        <Stack width="full" maxWidth="2xl" space={5}>
          <FormControl>
            <FormLabel>Variant: primary</FormLabel>
            <Select
              variant="primary"
              items={['Option 1', 'Option 2']}
              onSelectedItemChange={changes => {
                console.log('onSelectedItemChange', changes);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Variant: secondary (default)</FormLabel>
            <Select
              variant="secondary"
              items={['Option 1', 'Option 2']}
              onSelectedItemChange={changes => {
                console.log('onSelectedItemChange', changes);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Variant: tertiary</FormLabel>
            <Select
              variant="tertiary"
              items={['Option 1', 'Option 2']}
              onSelectedItemChange={changes => {
                console.log('onSelectedItemChange', changes);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>With Variant & Intent</FormLabel>
            <Select
              variant={selectedVariant}
              intent={selectedIntent}
              items={['Option 1', 'Option 2']}
              onSelectedItemChange={changes => {
                console.log('onSelectedItemChange', changes);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Custom color</FormLabel>
            <Select
              bg={customBgColor}
              color={customTextColor}
              listBg={customListBgColor}
              listColor={customListTextColor}
              boxShadow={customBoxShadow ? 'initial' : 'none'}
              items={['Option 1', 'Option 2']}
              onSelectedItemChange={changes => {
                console.log('onSelectedItemChange', changes);
              }}
            />
          </FormControl>
        </Stack>
      </Box>
    );
  })

  .add('Suggest', () => <SuggestDemo />);
