import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icons from './Icons';

const swipe = (itemSwipe, indexSwipe, arrButton) => {

    return (
        <View style={{flexDirection: 'row'}}>
            {
                arrButton ? arrButton.map((item, index) => {

                    return (
                        <TouchableOpacity key={index} onPress={() => item.onPress(itemSwipe, indexSwipe)}>
                            <View style={[styles.iconContainer, item.style]}>
                                <Icons
                                    icon={item.icon.name}
                                    color={item.icon.color}
                                    size={item.icon.size}
                                />
                                <Text style={item.labelStyle}>
                                    {item.label}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }) : (
                    <TouchableOpacity onPress={() => console.log('No Button pass, this is default message')}>
                        <View style={[styles.rectButtonStyle,{backgroundColor: 'pink'}]}>
                            <Text style={{color: 'white'}}>
                                Xóa
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            }
        </View>
    );
};

// Default Component
// Default Component
const SwipeItem = React.forwardRef((props, ref) => {
    const { item, index, arrButton, children, actionPosition } = props
    
    let renderActions = () => swipe(item, index, arrButton)

    if (actionPosition === 'left') {
        return (
            <Swipeable
                ref={ref}
                renderLeftActions={renderActions}
                rightThreshold={0}
            >
                {children}
            </Swipeable>
        )
    }
    else {
        return (
            <Swipeable
                ref={ref}
                renderRightActions={renderActions}
                rightThreshold={0}
            >
                {children}
            </Swipeable>
        )
    }
})

export default SwipeItem

const styles = StyleSheet.create({
    iconContainer: { 
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
})