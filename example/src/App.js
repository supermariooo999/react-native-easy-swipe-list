import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SwipeList from 'react-native-easy-swipe-list';

const renderItem = ({ index, item }) => (
  <View style={styles.itemContainer}>
      <Text>This is My {item.name}</Text>
  </View>
);

const handleEdit = (item, index) => {
  console.log('Edit');
  console.log(item);
};

const handleDelete = (item, index) => {
  console.log('Delete');
  console.log(item);
};

const onPressItem = (item, index) => {
  console.log('onPressItem');
  console.log(item);
};

const onLongPressItem = (item, index) => {
  console.log('onLongPressItem');
  console.log(item);
};

// Declare button to render
// Declare button to render
const arrButton = [
  {
    name: 'edit',
    label: 'Sửa',
    labelStyle: {
      color: 'white',
    },
    icon: {
      name: 'pen-to-square',
      color: 'white',
      size: 15,
    },
    style: {
      backgroundColor: 'indigo',
    },
    onPress: handleEdit,
  },
  {
    name: 'delete',
    label: 'Xóa',
    labelStyle: {
      color: 'white',
    },
    icon: {
      name: 'trash',
      color: 'white',
      size: 15,
    },
    style: {
      backgroundColor: 'red',
    },
    onPress: handleDelete,
  },
];

// Default Component
// Default Component
export default function App(){

  return (
    <View>
      <SwipeList
        renderItem={renderItem}
        actionPosition="right"
        arrButton={arrButton}
        onPressItem={onPressItem}
        onLongPressItem={onLongPressItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer:{ 
    backgroundColor: 'yellow',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 50,
  },
}); 