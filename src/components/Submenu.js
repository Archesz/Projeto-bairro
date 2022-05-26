import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { BsFillPersonFill } from 'react-icons/Bs'
import {AiOutlineSearch} from 'react-icons/ai'
import { useNavigation } from '@react-navigation/native';


export default class Submenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <AiOutlineSearch style={{color: 'white', fontSize: 28, margin: 'auto 25px'}}/>
                <TouchableOpacity>
                    <BsFillPersonFill style={{color: 'white', fontSize: 28,  margin: 'auto 25px'}}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: 'black',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icones: {
        color: 'red',
    }
})
