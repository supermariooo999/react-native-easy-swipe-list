import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipeList from 'react-native-easy-swipe-list';

const renderItem = () => (
  <View style={styles.itemContainer}>
    <Text>This is My Item</Text>
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