# react-native-easy-swipe-list
Flatlist with Swipeable Items
## Installation

```sh
npm install react-native-easy-swipe-list
```

## Usage

```js
import SwipeList from 'react-native-easy-swipe-list';

const renderItem = () => (
  <View style={styles.itemContainer}>
    <Text>This is My Item</Text>
  </View>
);

const handleEdit = (item: object, index: number) => {
  console.log('Edit');
  console.log(item);
};

const handleDelete = (item: object, index: number) => {
  console.log('Delete');
  console.log(item);
};

// Declare button to render
// Declare button to render
const arrButton = [
  {
    name: 'edit',
    label: 'Sửa',
    labelStyle: {
      color: 'white'
    },
    icon: {
      name: 'pen-to-square',
      color: 'white',
      size: 15
    },
    style: {
      backgroundColor: 'indigo'
    },
    onPress: handleEdit
  },
  {
    name: 'delete',
    label: 'Xóa',
    labelStyle: {
      color: 'white'
    },
    icon: {
      name: 'trash',
      color: 'white',
      size: 15
    },
    style: {
      backgroundColor: 'red'
    },
    onPress: handleDelete
  }
]

// Default Component
// Default Component
export default function App() {

  return (
    <View>
      <SwipeList 
        renderItem={renderItem}
        actionPosition='right'
        arrButton={arrButton}
      />
    </View>
  );
}

// ...

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
