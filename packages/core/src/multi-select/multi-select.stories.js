import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '../box';
import MultiSelect from './';

const Controlled = () => {
  const items = [
    'Neptunium',
    'Plutonium',
    'Americium',
    'Curium',
    'Berkelium',
    'Californium',
    'Einsteinium',
    'Fermium',
    'Mendelevium',
    'Nobelium',
    'Lawrencium',
    'Rutherfordium',
    'Dubnium',
    'Seaborgium',
    'Bohrium',
    'Hassium',
    'Meitnerium',
    'Darmstadtium',
    'Roentgenium',
    'Copernicium',
    'Nihonium',
    'Flerovium',
    'Moscovium',
    'Livermorium',
    'Tennessine',
    'Oganesson'
  ];
  const [selected, setSelected] = React.useState([]);
  return (
    <MultiSelect
      onChange={changes => {
        console.log('changes', changes);
        setSelected(changes);
      }}
      selectedItems={selected}
      initialSelectedItems={[items[0]]}
      items={items}
    />
  );
};

const CreateableMultiSelect = () => {
  const inputRef = React.useRef();
  const [selected, setSelected] = React.useState([]);
  const [availableItems, setAvailItems] = React.useState([
    'potato',
    'tomato',
    'mango'
  ]);

  const handleCreateItem = item => {
    setSelected(curr => [...curr, item.value]);
    setAvailItems(curr => [...curr, item.value]);
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  console.log('State: ', {
    selected,
    availableItems
  });

  return (
    <MultiSelect
      placeholder="Enter..."
      onCreateItem={handleCreateItem}
      onChange={changes => {
        console.log('changes', changes);
        setSelected(changes);
      }}
      creatable
      selectedItems={selected}
      items={availableItems}
      InputProps={{
        ref: inputRef
      }}
    />
  );
};

storiesOf('MultiSelect', module)
  .add('Controlled usage', () => <Controlled />)
  .add('Array of objects items', () => {
    const items = [
      {
        name: 'Neptunium',
        id: 1
      },
      {
        name: 'Plutonium',
        id: 2
      },
      {
        name: 'Americium',
        id: 3
      },
      {
        name: 'Curium',
        id: 4
      }
    ];
    const [selected, setSelected] = React.useState([]);
    return (
      <Box px={300} py={100}>
        <MultiSelect
          onChange={changes => {
            console.log('changes', changes);
            setSelected(changes);
          }}
          itemToString={item => item.name}
          selectedItems={selected}
          initialSelectedItems={[items[2]]}
          items={items}
        />
      </Box>
    );
  })
  .add('ReadOnly', () => {
    const items = [
      {
        name: 'Neptunium',
        id: 1
      },
      {
        name: 'Plutonium',
        id: 2
      },
      {
        name: 'Americium',
        id: 3
      },
      {
        name: 'Curium',
        id: 4
      }
    ];
    return (
      <Box px={300} py={100}>
        <MultiSelect
          readOnly
          items={items}
          initialSelectedItems={[items[3]]}
          itemToString={item => item.name}
        />
      </Box>
    );
  })
  .add('Createable', () => <CreateableMultiSelect />);
