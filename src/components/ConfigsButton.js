import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AiOutlineEdit } from 'react-icons/Ai'

export default function Button(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <AiOutlineEdit size={26} style={{marginLeft: 20}}/> 
            <Text style={styles.textBtn}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 86,
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textBtn: {
        color: 'black',
        fontSize: 20,
        marginLeft: 25,
        fontWeight: 'bold'
    },
    iconBtn: {

    }
})