import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { DATA } from './components/sample';
import SwipeItem from './components/SwipeItem';

const onPressIn = (index, arrayRef, prevOpenedRow, setprevOpenedRow) => {
    if (prevOpenedRow != undefined && arrayRef[prevOpenedRow] != null) {
        arrayRef[prevOpenedRow].close()
    }
    setprevOpenedRow(index)
};

// Default Component
// Default Component
const SwipeList = ({ 
        data, 
        renderItem: RenderItem,
        arrButton,
        actionPosition
    }) => {
    
    //////////////////////
    //////////////////////
    let arrayRef = useRef()
    let [prevOpenedRow, setprevOpenedRow] = useState(undefined)

    const useData = data.map((obj, index) => ({...obj, id: index}))
    const useArrButton = arrButton
    const useRenderItem = RenderItem ? ({ item, index }) => {

        return (
            <TouchableWithoutFeedback 
              onPressIn={() => onPressIn(index, arrayRef, prevOpenedRow, setprevOpenedRow)}
            >
              <SwipeItem 
                ref={(ref) => arrayRef[index] = ref} 
                index={index} 
                item={item} 
                arrButton={useArrButton}
                actionPosition={actionPosition}
              >
                  <RenderItem index={index} item={item}></RenderItem>
              </SwipeItem>
            </TouchableWithoutFeedback>
        )
    } : ({ item, index }) => {

        return (
          <TouchableWithoutFeedback 
            onPressIn={() => onPressIn(index, arrayRef, prevOpenedRow, setprevOpenedRow)}
          >
            <SwipeItem
              ref={(ref) => arrayRef[index] = ref} 
              index={index} 
              item={item}
              arrButton={useArrButton}
              actionPosition={actionPosition}
            >
                <Text>My name is {item.name}</Text>
            </SwipeItem>
          </TouchableWithoutFeedback>
        )
    };
    //////////////////////
    //////////////////////

    return (
        <GestureHandlerRootView>
            <FlatList
                data={useData} 
                renderItem={useRenderItem}
                keyExtractor={item => item.id}
                removeClippedSubviews
            />
        </GestureHandlerRootView>
    )
}

export default SwipeList

SwipeList.defaultProps = {
    data: DATA
}

const styles = StyleSheet.create({})