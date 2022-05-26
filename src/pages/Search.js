import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

import ConfigsButton from '../components/ConfigsButton'
import SearchBar from '../components/SearchBar'

export default class ConfigsComercio extends Component {
    render() {
        return (
            <View style={styles.container}>

                <SearchBar />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
})