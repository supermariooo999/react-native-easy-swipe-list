import * as Icon from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const getIcon = (icon) => {
    return Object.keys(Icon)
                    .filter(name => Icon[name].iconName === icon)
                    .map(name => Icon[name])[0];
    
}

const Icons = ({icon, color, size}) => {
    const faIcon = getIcon(icon)

    return (
        <FontAwesomeIcon icon={faIcon} color={'white'} />
    )
}

export default Icons

const styles = StyleSheet.create({})