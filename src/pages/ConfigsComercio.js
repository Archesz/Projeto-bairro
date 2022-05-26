import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

import ConfigsButton from '../components/ConfigsButton'

export default class ConfigsComercio extends Component {
    render() {
        return (
            <View style={styles.container}>

                <ConfigsButton texto='Editar minha Página'/>
                <ConfigsButton texto='Insights'/>

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