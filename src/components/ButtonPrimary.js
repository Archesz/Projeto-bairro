import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ButtonPrimary(props) {
    return (
        <>            
            <TouchableOpacity style={styles.btnLogar} onPress={props.onPress}>
                <Text style={styles.textBtn}>{props.text}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    btnLogar: {
        width: 190,
        height: 60,
        borderRadius: 20,
        marginTop: 40,
        backgroundColor: '#246EE9',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    textBtn: {
        color: 'white',
        fontSize: 22,
        textShadowColor: 'black'
    }
})